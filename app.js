'use strict';
const $ = (s) => document.querySelector(s);
const icons = {
 moon:'<path d="M20 15.4A8.3 8.3 0 0 1 8.6 4 8.4 8.4 0 1 0 20 15.4Z"/>',
 pin:'<path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
 photo:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.2"/><path d="m4 17 5-4 3 2 4-5 4 5"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', star:'<path d="m12 3 2.8 5.7 6.3.9-4.6 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2-4.6-4.4 6.3-.9z"/>',
 download:'<path d="M12 3v12m-4-4 4 4 4-4M4 16v4h16v-4"/>', phone:'<path d="M21 16.5v3a2 2 0 0 1-2.2 2 18 18 0 0 1-16.3-16.3A2 2 0 0 1 4.5 3h3l2 5-2.4 2.4a14 14 0 0 0 6.5 6.5L16 14.5z"/>',
 plus:'<path d="M12 5v14m-7-7h14"/>', close:'<path d="m6 6 12 12M18 6 6 18"/>', copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M5 16H4V4h12v1"/>',
 search:'<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/>', home:'<path d="m3 11 9-8 9 8m-16-2v11h14V9m-9 11v-6h4v6"/>'
};
const icon = k => '<svg class="ui" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">'+ icons[k] +'</svg>';
document.querySelectorAll('[data-icon],[data-symbol]').forEach(el => el.insertAdjacentHTML('afterbegin',icon(el.dataset.icon || el.dataset.symbol)));
const original = [
 {id:'indian-hills',name:'Indian Hills private room',city:'Provo',type:'Room',price:'$512 listed all-in',url:'https://www.craigslist.org/view/d/provo-large-bedroom-in-indian-hills/nvibjwxGEaZKXdxXW8WAMf',context:'Furnished · private bath · $300 listed deposit'},
 {id:'orem-room',name:'1104 W 400 S',city:'Orem',type:'Room',phone:'[number removed]',method:'text',price:'$500 listed',url:'https://homes.ksl.com/rent/detail/1104-West-400-South-Orem-UT-84058/1004602321',context:'Text Mike · ask about Wi-Fi and Nov 25'},
 {id:'silver-springs',name:'Silver Springs private room',city:'Vineyard',type:'Room',price:'$600 listed with utilities',url:'https://www.craigslist.org/view/d/vineyard-single-small-bedroom/pq6wyuvX8RGvxZ7VPxqIjw',context:'Shared bath · check lease end and deposit'},
 {id:'foxwood',name:'Foxwood Apartments private room',city:'Provo',type:'Room',price:'About $531 with listed fees',phone:'801-434-8840',url:'https://legendrealestate.managebuilding.com/Resident/public/rentals/50721',context:'Furnished · ask about non-student eligibility'},
 {id:'near-byu',name:'Furnished room near BYU',city:'Provo',type:'Room',price:'$550 listed before utility fee',url:'https://www.spareroom.com/rooms-for-rent/ut/utah_county/provo/103152077',context:'One-month minimum advertised · ask about Nov 25'},
 {id:'uvu-master',name:'Chambery master bedroom',city:'Orem',type:'Room',price:'$550 listed',url:'https://www.collegerentals.com/property/private-mens-master-bedroom-close-to-uvu-chambery-orem-utah/222979082-326574/',context:'Private bathroom · confirm utilities and lease term'},
 {id:'hearts-hands',name:'Hearts & Hands Tattoo',city:'Orem',type:'Tattoo shop',address:'546 S State St',phone:'801-691-1883',url:'https://www.heartsandhandstattoo.com/',context:'Ask about guest spots, piercing, and booth terms'},
 {id:'meraki',name:'Meraki Ink',city:'Orem',type:'Tattoo shop',address:'1015 S State St, Unit C',phone:'385-505-5760',url:'https://booking.page/en/company/page/artbyjakup',context:'Ask if they have space for a guest artist'},
 {id:'studio-nine',name:'Studio Nine',city:'Provo',type:'Tattoo shop',address:'46 W Center St',url:'https://studioninebodyart.com/',context:'Independent artists · ask about an open chair'},
 {id:'painted-temple',name:'Painted Temple',city:'Orem',type:'Tattoo shop',address:'608 N State St',phone:'801-607-1015',url:'https://paintedtemple.com/',context:'Ask about guest dates and what to bring'},
 {id:'tattoo-shop',name:'The Tattoo Shop',city:'Orem',type:'Tattoo shop',address:'1403 N State St',phone:'801-224-0778',url:'https://www.utahtattoo.com/',context:'Tattoo and piercing · ask about openings'},
 {id:'city-view',name:'200 City View',city:'Provo',address:'255 S University Ave',phone:'833-861-7193',url:'https://www.200cityview.com/floorplans/studio-c'},
 {id:'the-green',name:'The Green on Campus Drive',city:'Orem',address:'499 W 960 S',phone:'435-292-6401',url:'https://thegreenoncampusdrive.com/apartment-floorplans-orem-utah/',context:'Student housing · ask about eligibility'},
 {id:'sixty-three',name:'Sixty Three Center',city:'Provo',phone:'385-560-3924',url:'https://www.63center.com/provo/sixty-three-center/studio-apartments/'},
 {id:'promenade',name:'Promenade Place',city:'Orem',address:'875 S Geneva Rd',phone:'385-300-0910',url:'https://choosepromenade.com/orem-apartment-floor-plans/',context:'Student housing · ask about eligibility'}
] ;
const priorityLabels={start:'Start here',check:'Worth checking',fixed:'Fixed-term / takeover',backup:'Backup'};
const housingTierLabels={start:'Month-to-month',check:'Lease term unclear',fixed:'Fixed-term / takeover',backup:'Backup'};
const originalsFirst=new Set(['indian-hills','orem-room','silver-springs','hearts-hands','meraki','studio-nine','painted-temple']);
const defaults=l=>({type:'Studio',status:'To call',notes:'',date:'',rent:'',saved:false,...l});
const seed=[...original.map(l=>defaults({...l,tier:originalsFirst.has(l.id)?'start':l.type?'check':'backup'})),...catalog.map(defaults)];
const seedById=new Map(seed.map(l=>[l.id,l]));
const catalogRevision=4;
const cityOrder=['Orem','Provo','Vineyard','Lindon','Pleasant Grove','Springville','American Fork','Lehi','Mapleton','Spanish Fork','Saratoga Springs','Other'];
const tierOf=l=>reviewFor(l)?.tier||l.tier||seedById.get(l.id)?.tier||'check';
const statuses=['To call','Follow up','Tour booked','Passed'], cities=cityOrder, types=['Studio','1 bedroom','Room','Tattoo shop','Booth / suite','Other'];
const key='valley-dial.leads.v1', editor=$('#editor'), form=$('#lead-form');
const esc = x => String(x ?? '').replace(/[&<>"']/g, s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
const safeURL = value => {try {const u=new URL(value);return ['http:','https:'].includes(u.protocol)?u.href:'';}catch{return '';}};
const placeFor = lead => Object.hasOwn(places, lead.id) ? places[lead.id] : {};
const reviewFor = lead => Object.hasOwn(leadReview, lead.id) ? leadReview[lead.id] : null;
const reviewLabels = {listed:'Source verified', verify:'Needs confirmation', unavailable:'Listing unavailable', mismatch:'Outside your criteria'};
let leads=seed.map(applyReview), view='all', category='housing', current=null, timer, installEvent;
function applyReview(lead) {
 const base = seedById.get(lead.id);
 const review = reviewFor(lead);
 if (!base || !review) return lead;
 const updated = {...lead};
 for (const field of ['name','address','phone','url','price','context']) {
  if (!Object.hasOwn(review,field)) continue;
  const unchanged = field === 'url' ? safeURL(lead.url) === safeURL(base.url) : (lead[field] ?? '') === (base[field] ?? '');
  if (unchanged) updated[field] = review[field];
 }
 return updated;
}
function currentReview(lead) {
 const review = reviewFor(lead);
 if (!review) return null;
 const reviewedURL = safeURL(review.url ?? seedById.get(lead.id)?.url);
 if (reviewedURL !== safeURL(lead.url)) return {status:'verify', note:'This lead has a different link. Confirm its details with the current source.'};
 return review;
}
function mapFor(lead) {
 const address = lead.address?.trim() || placeFor(lead).address;
 const knownCity = lead.city !== 'Other';
 const areaOnly = !address && knownCity && (placeFor(lead).areaOnly || (!isStudio(lead) && lead.type === 'Room' && !placeFor(lead).mapName));
 const location = [address || (areaOnly ? '' : placeFor(lead).mapName || lead.name), knownCity ? lead.city : '', 'Utah'].filter(Boolean).join(', ');
 return {url: 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(location), areaOnly};
}
function placeLink(url, label, symbol) {
 return '<a class="place-link" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+icon(symbol)+esc(label)+'</a>';
}
function photoList(lead) {
 const photos = (placeFor(lead).photos || []).filter(([,url])=>safeURL(url));
 const ownPhoto = safeURL(lead.photo);
 return ownPhoto ? [['Your photo',ownPhoto],...photos.filter(([,url])=>safeURL(url)!==ownPhoto)] : photos;
}
function photoPreview(lead) {
 const photos = photoList(lead).slice(0,3);
 const figures = photos.map(([label, url], index)=>`<figure class="card-photo">
  <button type="button" data-action="photos" data-photo="${index}" aria-label="Enlarge ${esc(label)} at ${esc(lead.name)}">
   <img src="${esc(url)}" alt="${esc(label)} at ${esc(lead.name)}" loading="lazy" decoding="async" referrerpolicy="no-referrer">
  </button>
  <figcaption>${esc(label)}</figcaption>
 </figure>`).join('');
 return `<div class="card-photos">
  ${figures}
  <p class="photo-empty"${photos.length?' hidden':''}>${photos.length?'Photos couldn’t load':'No verified photo available'}</p>
 </div>`;
}
function placeActions(lead) {
 const {url, areaOnly} = mapFor(lead);
 return '<div class="place-actions">'+placeLink(url, areaOnly?'Area map':'Google Maps', 'pin')+'</div>';
}
function reviewDetails(lead, url) {
 const review = currentReview(lead);
 if (!review) return '';
 const source = safeURL(review.source);
 return `<p class="review-detail ${review.status}">
  <strong>${reviewLabels[review.status]}</strong>${review.note?' · '+esc(review.note):''}
  ${source && source !== url ? ' · <a href="'+esc(source)+'" target="_blank" rel="noopener noreferrer">Source</a>' : ''}
 </p>`;
}
function showGallery(lead, first) {
 const place = placeFor(lead);
 const map = mapFor(lead);
 const gallery = $('#place-gallery');
 const photos = $('#gallery-photos');
 const listing = safeURL(lead.url);
 const source = safeURL(place.source) || listing;
 $('#gallery-title').textContent = lead.name;
 $('#gallery-location').textContent = [lead.address || place.address, lead.city !== 'Other' ? lead.city : ''].filter(Boolean).join(' · ');
 photos.replaceChildren();
 const galleryPhotos = photoList(lead);
 for (const [label, url] of [...galleryPhotos.slice(first),...galleryPhotos.slice(0,first)]) {
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  const caption = document.createElement('figcaption');
  image.alt = label+' at '+lead.name;
  image.referrerPolicy = 'no-referrer';
  image.decoding = 'async';
  image.addEventListener('error', () => {
   figure.remove();
   if (!photos.childElementCount) $('#gallery-note').textContent = 'Photos could not load. Try the source or Google Maps.';
  }, {once:true});
  caption.textContent = label;
  figure.append(image, caption);
  photos.append(figure);
  image.src = url;
 }
 $('#gallery-note').textContent = photos.childElementCount
  ? (place.note || (isStudio(lead) ? 'Photos from the linked source.' : 'Listing photos may show a model unit or shared areas.'))
  : 'Check the listing or Google Maps for photos.';
 if (map.areaOnly) $('#gallery-note').textContent += ' The map shows the area. Ask for the street address.';
 $('#gallery-links').innerHTML = placeLink(map.url, map.areaOnly?'Show area in Google Maps':'Open in Google Maps', 'pin')
  +(source ? placeLink(source, place.source && source !== listing?'Photo source':'Open listing', 'photo') : '');
 gallery.showModal();
}
$('#close-gallery').onclick=()=>$('#place-gallery').close();
const isStudio = l => ['Tattoo shop','Booth / suite'].includes(l.type);
const inCategory = l => category==='all' || isStudio(l)===(category==='studios');
const isFollow = l => l.status==='Follow up' || l.status==='Tour booked' || (!!l.date && l.status!=='Passed');
const dateText = value => new Date(value+'T12:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'});
const money = v => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:Number(v)%1?2:0}).format(Number(v));
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(timer);timer=setTimeout(()=>el.classList.remove('visible'),3200);}
function validate(list){
 if(!Array.isArray(list)||list.length>2000) throw Error('Invalid lead list');
 const seen=new Set();
 return list.map(l=>{
  if(!l || typeof l.id!=='string'||!l.id||seen.has(l.id)||typeof l.name!=='string'||!l.name.trim()||!statuses.includes(l.status)||!cities.includes(l.city)||!types.includes(l.type))throw Error('Invalid lead');
  seen.add(l.id);
  const str=(k,n)=>String(l[k]??'').slice(0,n);
  return {id:l.id,name:str('name',120),city:l.city,type:l.type,status:l.status,phone:str('phone',32),method:l.method==='text'?'text':'call',price:str('price',100),address:str('address',140),context:str('context',120),notes:str('notes',3000),date:/^\d{4}-\d{2}-\d{2}$/.test(l.date)?l.date:'',rent:l.rent!=='' && l.rent!=null && Number.isFinite(Number(l.rent)) && Number(l.rent)>=0 && Number(l.rent)<=99999 ? String(l.rent):'',url:safeURL(str('url',500)),photo:safeURL(str('photo',1000)),saved:l.saved===true,tier:Object.hasOwn(priorityLabels,l.tier)?l.tier:''};
 });
}
try{
 const raw=localStorage.getItem(key);
 if(raw!==null){
  const data=JSON.parse(raw);
  leads=validate(Array.isArray(data)?data:data.leads);
  const revision = Array.isArray(data) ? 0 : (data.catalogRevision ?? 0);
  if(revision<catalogRevision){
   // Add catalog leads introduced after the saved revision; leads deleted earlier stay deleted.
   const ids=new Set(leads.map(l=>l.id));
   leads=[...leads,...catalog.filter(l=>!ids.has(l.id)&&(revision<2||(l.rev||0)>revision)).map(defaults)];
  }
  if(revision<catalogRevision){
   leads=leads.map(applyReview);
   localStorage.setItem(key,JSON.stringify({catalogRevision,leads}));
  }
 }
}catch{toast('Could not read saved leads. Check your browser storage.');}
function commit(next){try{localStorage.setItem(key,JSON.stringify({catalogRevision,leads:next}));}catch{toast('Could not save. Check your browser storage.');return false;}leads=next;render();return true;}
function renderCard(lead, mapNumber) {
 const tier=tierOf(lead), tel=(lead.phone||'').replace(/[^\d+]/g,''), url=safeURL(lead.url), name=esc(lead.name);
 const byText=lead.method==='text', action=byText?'Text':'Call';
 const price=lead.rent!==''?money(lead.rent)+'/mo quoted':lead.price?esc(lead.price):isStudio(lead)?'Ask about terms':'Ask for price';
 const contact=tel?'<a class="call" aria-label="'+action+' '+name+' at '+esc(lead.phone)+'" href="'+(byText?'sms:':'tel:')+esc(tel)+'">'+icon('phone')+' '+action+'</a>'
  :url?'<a class="call" target="_blank" rel="noopener noreferrer" href="'+esc(url)+'">Open</a>':'';
 return `<article class="card" data-id="${esc(lead.id)}"${mapNumber?' id="housing-lead-'+esc(lead.id)+'" tabindex="-1"':''}>
  ${photoPreview(lead)}
  <div class="card-info">
   <h3>${mapNumber?`<button type="button" class="housing-map-number" data-map-number="${mapNumber}" aria-label="Show ${name} on the map">${mapNumber}</button>`:''}${name}</h3>
   <p class="meta">${esc(lead.city)} · ${esc(lead.type)}${lead.address?' · '+esc(lead.address):''}
    <span class="pill ${isFollow(lead)?'follow':''}">${esc(lead.status)}</span>
    <span class="pill tier ${tier}">${(isStudio(lead)?priorityLabels:housingTierLabels)[tier]}</span>
   </p>
   <p class="detail">${price}${lead.date?' · '+esc(dateText(lead.date)):''}
    ${url?' · <a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">Listing ↗</a>':''}
   </p>
   ${reviewDetails(lead,url)}
   ${lead.context?'<p class="detail">'+esc(lead.context)+'</p>':''}
   ${lead.notes?'<p class="detail notes">'+esc(lead.notes)+'</p>':''}
   ${placeActions(lead)}
  </div>
  <div class="card-actions">${contact}
   ${isStudio(lead)?'':'<button class="log" data-action="message" aria-label="Write a message to '+name+'">Message</button>'}
   <button class="log" data-action="log" aria-label="Log or edit ${name}">Log</button>
   <button class="icon-button" data-action="star" aria-pressed="${lead.saved}" aria-label="Shortlist ${name}">${icon('star')}</button>
  </div>
 </article>`;
}
function render(){
 const categoryLeads=leads.filter(inCategory), studios=category==='studios';
 const focusedHousing=view==='all' && !studios && $('#focus-housing-area').checked;
 $('#housing-area-filter').hidden=view!=='all' || studios;
 const areaLeads=focusedHousing ? categoryLeads.filter(lead=>isStudio(lead)||housingMap.inPreferredArea(lead)) : categoryLeads;
 const available = lead => !['unavailable','mismatch'].includes(currentReview(lead)?.status);
 const unavailableCount = areaLeads.filter(lead=>!available(lead)).length;
 $('#unavailable-filter').hidden = view !== 'all' || unavailableCount === 0;
 $('#unavailable-label').textContent = 'Show hidden ('+unavailableCount+')';
 const pool = view === 'all' && !$('#show-unavailable').checked ? areaLeads.filter(available) : areaLeads;
 $('#script').textContent=studios?'“Hi! I’m Gavyn, a fine-line and realism artist moving to Utah County. Are you open to guest artists or booth renters around November 25?”':'“Hi! Is the room available around November 25? I’m looking for $600 or less all-in. What’s included, and what lease terms are you offering?”';
 $('#tip1').textContent=studios?'Ask about guest dates or an open chair.':'Ask for the earliest move-in date.';
 $('#tip2').textContent=studios?'Ask about day rates, booth rent, or splits.':'Get rent, utilities, and fees.';
 $('#tip3').textContent=studios?'Confirm what the shop needs from guest artists.':'Ask about deposits and lease terms.';
 $('#stats').innerHTML=[['home',pool.length,studios?'Studio leads':'Leads'],['phone',pool.filter(l=>l.status==='To call').length,'To contact'],['clock',pool.filter(isFollow).length,'Follow-ups']].map(([i,n,s])=>'<div class="stat"><div class="stat-icon">'+icon(i)+'</div><div><strong>'+n+'</strong><small>'+s+'</small></div></div>').join('');
 const q=$('#search').value.trim().toLowerCase(), c=$('#city').value, t=$('#type').value, priority=$('#priority').value;
 const shown=pool.filter(l=>(view==='all'||(view==='saved'?l.saved:isFollow(l)))&&(!c||c===l.city)&&(!t||t===l.type)&&(!priority||priority===tierOf(l))&&(!q||[l.name,l.city,l.address,l.notes,l.phone,l.context,l.price].some(v=>(v??'').toLowerCase().includes(q))));
 const ranks=['start','check','fixed','backup'];
 const coreHousing=lead=>!isStudio(lead) && ['Orem','Vineyard'].includes(lead.city);
 shown.sort((a,b)=>(view==='follow'?(a.date||'9999').localeCompare(b.date||'9999'):0)
  ||ranks.indexOf(tierOf(a))-ranks.indexOf(tierOf(b))
  ||(focusedHousing ? Number(coreHousing(b))-Number(coreHousing(a)) : 0)||cityOrder.indexOf(a.city)-cityOrder.indexOf(b.city));
 $('#results').textContent=shown.length+' '+(shown.length===1?'lead':'leads');
 const mapNumbers=housingMap.update(shown,studios);
 $('#cards').innerHTML=shown.map(lead=>renderCard(lead,mapNumbers.get(lead.id))).join('') || '<div class="empty"><strong>No leads here yet.</strong><p>'+ (q||c||t||priority?'Try changing your filters.':view==='saved'?'Tap the star on a lead to save it here.':view==='follow'?'Log a follow-up or tour to find it here.':'Add a property to start your list.') +'</p></div>';
}
document.querySelectorAll('[data-view]').forEach(el=>el.onclick=()=>{
 view=el.dataset.view;
 document.querySelectorAll('[data-view]').forEach(b=>b.removeAttribute('aria-current'));
 el.setAttribute('aria-current','page');$('#section-title').textContent=el.textContent.trim();
 $('#search').value=$('#city').value=$('#type').value=$('#priority').value='';render();
 if(matchMedia('(max-width: 760px)').matches)$('#section-title').scrollIntoView({block:'nearest'});
});
document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{
 category=b.dataset.category;
 document.querySelectorAll('[data-category]').forEach(el=>el.setAttribute('aria-pressed', String(el===b)));
 $('#type').value=$('#priority').value='';render();
});
['#search','#city','#type','#priority','#show-unavailable','#focus-housing-area'].forEach(s=>$(s).addEventListener(s==='#search'?'input':'change',render));
$('#cards').addEventListener('error',event=>{
 const figure=event.target.closest('.card-photo');
 if (!figure) return;
 figure.hidden=true;
 const photos=figure.parentElement;
 if (!photos.querySelector('figure:not([hidden])')) photos.querySelector('.photo-empty').hidden=false;
},true);
function openEditor(l){
 current=l?.id??null;form.reset();$('#form-title').textContent=l?'Log or edit lead':'Add a lead';$('#remove').hidden=!l;
 if(!l&&category==='studios')form.elements.type.value='Tattoo shop';
 if(!l&&category==='housing')form.elements.type.value='Room';
 if(l)for(const el of form.elements)if(el.name && el.name in l)el.value=l[el.name]??(el.name==='method'?'call':'');
 editor.showModal();
}
$('#add').onclick=()=>openEditor();
$('#close').onclick=()=>editor.close();
$('#cards').onclick=e=>{
 const b=e.target.closest('[data-action]');if(!b)return;
 const l=leads.find(x=>x.id===b.closest('[data-id]').dataset.id);if(!l)return;
 if(b.dataset.action==='photos')showGallery(l,Number(b.dataset.photo));
 else if(b.dataset.action==='log')openEditor(l);
 else if(b.dataset.action==='message')openMessage(l);
 else if(commit(leads.map(x=>x===l?{...x,saved:!x.saved}:x))){
  const row=[...document.querySelectorAll('[data-id]')].find(el=>el.dataset.id===l.id);
  (row?.querySelector('[data-action="star"]')||document.querySelector('[data-view][aria-current]')).focus();
  toast(l.saved?'Removed from shortlist.':'Added to shortlist.');
 }
};
form.onsubmit=e=>{
 e.preventDefault();
 const values=Object.fromEntries(new FormData(form));
 values.name=values.name.trim();
 if(!values.name){form.elements.name.focus();toast('Enter a property name.');return;}
 const previous=leads.find(l=>l.id===current), item={saved:false,...previous,...values,id:current||crypto.randomUUID()};
 form.elements.name.setCustomValidity('');
 if(commit(previous?leads.map(l=>l===previous?item:l):[item,...leads])){editor.close();toast(previous?'Lead updated.':'Lead added.');}
};
$('#remove').onclick=()=>{if(current&&window.confirm('Delete this lead and its notes?')&&commit(leads.filter(l=>l.id!==current))){editor.close();toast('Lead deleted.');}};
$('#copy').onclick=async()=>{const phrase=$('#script').textContent.trim().slice(1,-1);try{await navigator.clipboard.writeText(phrase);toast('Opening line copied.');}catch{const range=document.createRange();range.selectNodeContents($('#script'));const selection=getSelection();selection.removeAllRanges();selection.addRange(range);toast('Opening line selected for copying.');}};
$('#export').onclick=()=>{
 const href=URL.createObjectURL(new Blob([JSON.stringify({version:1,catalogRevision,leads},null,2)],{type:'application/json'}));
 const a=document.createElement('a');a.href=href;a.download='valley-dial-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(href),1000);
};
$('#import').addEventListener('change',async e=>{
 const file=e.target.files[0];e.target.value='';if(!file)return;
 try{
  if(file.size>8_000_000)throw Error('Backup too large');
  const data=JSON.parse(await file.text());if(data.version!==1)throw Error('Unsupported backup');
  // Backups made before this catalog revision keep the leads added since then.
  const restored=validate(data.leads), backupRevision=Number.isInteger(data.catalogRevision)?data.catalogRevision:3, restoredIds=new Set(restored.map(l=>l.id));
  const next=[...restored,...catalog.filter(l=>!restoredIds.has(l.id)&&(l.rev||0)>backupRevision).map(defaults)].map(applyReview);
  if(window.confirm('Replace the current '+leads.length+' leads with '+next.length+' from this backup?')&&commit(next))toast('Backup restored.');
 }catch{toast('That file is not a valid Valley Dial backup.');}
});
addEventListener('beforeinstallprompt',e=>{e.preventDefault();installEvent=e;});
addEventListener('appinstalled',()=>{installEvent=null;toast('Valley Dial installed.');});
// Message drafts: tailored to Gavyn's search (men's room, not a student, ~$500, month-to-month, Nov 25 move-in).
const sourceName=url=>{const h=(()=>{try{return new URL(url).hostname}catch{return ''}})();return h.includes('ksl')?'KSL':h.includes('roomies')?'Roomies':h.includes('facebook')?'Facebook Marketplace':h.includes('craigslist')?'Craigslist':h.includes('managebuilding')?'your website':h.includes('rentler')?'Rentler':h.includes('spareroom')?'SpareRoom':h.includes('turbotenant')?'TurboTenant':'';};
// Voice: casual text, like Gavyn writes (opens with "Hey", short, no exclamation points).
const womenOnly=lead=>{const t=[lead.name,lead.context,reviewFor(lead)?.note].join(' ').toLowerCase();return /\b(women|women's|female|females|girls?|ladies)\b/.test(t)&&!/\b(men|men's|male|males|guys?)\b/.test(t.replace(/\bfe?males?\b|\bwomen'?s?\b/g,''));};
function messageFor(lead){
 const review=reviewFor(lead)||{}, tier=tierOf(lead), text=[lead.name,lead.context,review.note].join(' ').toLowerCase();
 const address=(lead.address||placeFor(lead).address||'').trim();
 const lines=['Hey, is '+(address?'your room at '+address:'the room you posted')+" still available? I'm looking to move in around the 25th."];
 lines.push('Would you be down to do a quick FaceTime so I can see the room and the rest of the place? Also curious what the roommates are like.');
 const asks=[];
 if(!womenOnly(lead)&&!/\b(men|men's|male|males|guys?)\b/.test(text))asks.push('Is it open to guys?');
 if(/student|byu|contract|eligib/.test(text)||/managebuilding/.test(lead.url||''))asks.push("I'm not a student, is that ok?");
 if(/takeover|lease sale|selling|transfer/.test(text))asks.push('When does the lease end?');
 else if(tier!=='start')asks.push("How long is the lease? I'm just not trying to get locked into anything too long.");
 const cost=lead.price?'what do utilities usually run?':"what's rent with utilities?";
 asks.push(asks.length?'And '+cost:cost[0].toUpperCase()+cost.slice(1));
 lines.push(asks.join(' '));
 lines.push('Thanks, Gavyn');
 return lines.join('\n\n');
}
const messageSheet=$('#message-sheet'); let messageLead=null;
function openMessage(lead){
 messageLead=lead;
 const tel=(lead.phone||'').replace(/[^\d+]/g,''), url=safeURL(lead.url);
 $('#message-title').textContent='Message · '+lead.name;
 $('#message-text').value=messageFor(lead);
 $('#message-text-it').hidden=!tel;
 $('#message-open').hidden=!url;
 $('#message-open').textContent=tel?'Copy & open listing':'Copy & open listing to send';
 const warn=[];
 if(womenOnly(lead))warn.push('Heads up: this listing looks women-only.');
 $('#message-hint').textContent=[...warn, tel?'Edit anything, then text it.':'No phone number here. Copy the message, then paste it into the listing chat on '+(sourceName(lead.url)||'their site')+'.'].join(' ');
 $('#message-hint').classList.toggle('warn',warn.length>0);
 messageSheet.showModal();
}
async function copyMessage(){const v=$('#message-text').value;try{await navigator.clipboard.writeText(v);return true;}catch{$('#message-text').select();return false;}}
$('#message-close').onclick=()=>messageSheet.close();
$('#message-copy').onclick=async()=>toast(await copyMessage()?'Message copied.':'Message selected. Copy it from the box.');
$('#message-open').onclick=async()=>{const ok=await copyMessage();const url=safeURL(messageLead?.url);if(url)window.open(url,'_blank','noopener');toast(ok?'Message copied. Paste it into the listing chat.':'Copy the message from the box, then paste it in the listing chat.');};
$('#message-text-it').onclick=()=>{const tel=(messageLead?.phone||'').replace(/[^\d+]/g,'');if(!tel)return;const sep=/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent)?'&':'?';location.href='sms:'+tel+sep+'body='+encodeURIComponent($('#message-text').value);};
$('#install').onclick=async()=>{if(installEvent){const prompt=installEvent;installEvent=null;await prompt.prompt();}else $('#install-help').showModal();};
$('#close-help').onclick=()=>$('#install-help').close();
if(matchMedia('(display-mode: standalone)').matches || navigator.standalone)$('#install').hidden=true;
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
render();
