'use strict';

const housingMap = (() => {
 const panel = document.querySelector('#housing-map-panel');
 const mapElement = document.querySelector('#housing-map');
 const message = document.querySelector('#housing-map-message');
 const count = document.querySelector('#housing-map-count');
 let map, markers, entries = [], signature = '';
 let pinByNumber = new Map();

 function pointFor(lead) {
  const original = seedById.get(lead.id);
  const reviewedAddress = reviewFor(lead)?.address ?? original?.address ?? placeFor(lead).address;
  const addressChanged = lead.address && lead.address.trim() !== reviewedAddress?.trim();
  const point = Object.hasOwn(housingPoints, lead.id) && !addressChanged && original?.city === lead.city
   ? housingPoints[lead.id] : null;
  if (point) return point;
  const city = Object.hasOwn(housingCityPoints, lead.city) ? housingCityPoints[lead.city] : null;
  return city ? {lat:city[0], lon:city[1], approximate:true} : null;
 }

 function popupFor(group) {
  const content = document.createElement('div');
  content.className = 'housing-map-popup';
  if (group.approximate) {
   const title = document.createElement('strong');
   title.textContent = group.items[0].lead.city + ' area · approximate';
   content.append(title);
  }
  for (const {lead, number} of group.items) {
   const link = document.createElement('a');
   link.href = '#housing-lead-' + encodeURIComponent(lead.id);
   link.textContent = number + '. ' + lead.name;
   content.append(link);
  }
  return content;
 }

 function draw() {
  if (!panel.open || panel.hidden) return;
  if (!window.L) {
   message.textContent = 'The map could not load. Use the map links on the lead cards.';
   return;
  }
  if (!map) {
   map = L.map(mapElement, {scrollWheelZoom:false}).setView([40.29,-111.72], 11);
   const streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19, attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);
   streets.on('tileerror', () => {
    message.textContent = 'Street tiles may need an internet connection. Pins remain available.';
   });
   markers = L.layerGroup().addTo(map);
  }
  map.invalidateSize({pan:false});
  const groups = new Map();
  for (const entry of entries) {
   const {point} = entry;
   const key = point.lat.toFixed(5) + ',' + point.lon.toFixed(5) + ',' + point.approximate;
   if (!groups.has(key)) groups.set(key, {point, approximate:point.approximate, items:[]});
   groups.get(key).items.push(entry);
  }
  const nextSignature = JSON.stringify(entries.map(({lead, number, point}) => [lead.id, lead.name, number, point.lat, point.lon, point.approximate]));
  if (nextSignature === signature) return;
  signature = nextSignature;
  markers.clearLayers();
  pinByNumber = new Map();
  const bounds = [];
  for (const group of groups.values()) {
   const at = [group.point.lat, group.point.lon];
   bounds.push(at);
   const {number} = group.items[0];
   const label = group.items.length === 1 ? String(number) : number + ' +' + (group.items.length - 1);
   const title = group.items.map(({number,lead}) => number + '. ' + lead.name).join('; ') +
    (group.approximate ? ' (approximate location)' : '');
   const pin = L.marker(at, {title, alt:title, icon:L.divIcon({
    className:'housing-map-marker' + (group.approximate ? ' approximate' : ''),
    html:'<span>' + label + '</span>', iconSize:[38,30], iconAnchor:[19,15]
   })}).bindPopup(popupFor(group)).addTo(markers);
   for (const item of group.items) pinByNumber.set(item.number, pin);
  }
  if (bounds.length) map.fitBounds(bounds, {padding:[32,32],maxZoom:15,animate:false});
  else map.setView([40.29,-111.72], 11);
 }

 panel.addEventListener('toggle', draw);
 document.querySelector('#cards').addEventListener('click', event => {
  const button = event.target.closest('[data-map-number]');
  if (!button) return;
  panel.open = true;
  draw();
  const pin = pinByNumber.get(Number(button.dataset.mapNumber));
  if (pin) {
   panel.scrollIntoView({block:'start'});
   map.setView(pin.getLatLng(), Math.max(map.getZoom(), 14), {animate:false});
   pin.openPopup();
  }
 });

 return {
  inPreferredArea(lead) {
   if (['Orem','Vineyard','Lindon','Pleasant Grove','American Fork','Lehi','Saratoga Springs'].includes(lead.city)) return true;
   if (lead.city !== 'Provo') return false;
   // Approximate east–west cutoff near Lakeview South, not a neighborhood boundary.
   const point = pointFor(lead);
   // areaCheck: listing-level pin (fuzzed a block or two by the site), close enough for this cutoff.
   return !!point && (!point.approximate || point.areaCheck) && point.lat >= 40.2415;
  },
  update(shown, hide) {
   panel.hidden = hide;
   entries = [];
   const numbers = new Map();
   for (const lead of shown) {
    if (isStudio(lead)) continue;
    const point = pointFor(lead);
    if (!point) continue;
    const number = entries.length + 1;
    entries.push({lead, number, point});
    numbers.set(lead.id, number);
   }
   count.textContent = entries.length ? ' (' + entries.length + ')' : '';
   message.textContent = entries.length
    ? 'Numbers match the lead cards. Dashed pins show an approximate area.'
    : 'No housing locations match these filters.';
   draw();
   return numbers;
  }
 };
})();
