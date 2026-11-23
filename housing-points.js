'use strict';
// Matched addresses and Census city centers for the housing map.
const housingPoints = {
  "indian-hills": {
    "lat": 40.2746185,
    "lon": -111.6403823,
    "approximate": false,
    "source": "https://gis.utah.gov/products/sgid/location/address-points/",
    "address": "3046 Comanche Ln"
  },
  "orem-room": {
    "lat": 40.2901151,
    "lon": -111.7221165,
    "approximate": false,
    "source": "https://gis.utah.gov/products/sgid/location/address-points/",
    "address": "1104 W 400 S"
  },
  "silver-springs": {
    "lat": 40.3099323,
    "lon": -111.7598729,
    "approximate": false,
    "source": "https://gis.utah.gov/products/sgid/location/address-points/",
    "address": "262 W Silver Springs Dr"
  },
  "foxwood": {
    "lat": 40.2449219,
    "lon": -111.660017,
    "approximate": false,
    "source": "https://gis.utah.gov/products/sgid/location/address-points/",
    "address": "830 N 100 W"
  },
  "near-byu": {
    "lat": 40.245312,
    "lon": -111.645057,
    "approximate": true,
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.2025.html"
  },
  "uvu-master": {
    "lat": 40.298067,
    "lon": -111.699463,
    "approximate": true,
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.2025.html"
  },
  "city-view": {
    "lat": 40.2308623,
    "lon": -111.6584109,
    "approximate": false,
    "source": "https://gis.utah.gov/products/sgid/location/address-points/",
    "address": "255 S University Ave"
  },
  "the-green": {
    "lat": 40.2793108,
    "lon": -111.7064205,
    "approximate": false,
    "source": "https://gis.utah.gov/products/sgid/location/address-points/",
    "address": "499 W 960 S"
  },
  "sixty-three": {
    "lat": 40.2338177,
    "lon": -111.6569896,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "63 E Center St"
  },
  "promenade": {
    "lat": 40.2808611,
    "lon": -111.7311452,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "875 S Geneva Rd"
  },
  "orem-811": {
    "lat": 40.2822433,
    "lon": -111.6932708,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "811 S 75 E"
  },
  "reynolds-301": {
    "lat": 40.2399041,
    "lon": -111.6515997,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "466 N 400 E"
  },
  "riverside-33": {
    "lat": 40.2561559,
    "lon": -111.6680933,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "1533 N Riverside Ave"
  },
  "silver-1985": {
    "lat": 40.260829,
    "lon": -111.6701201,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "1985 N 650 W"
  },
  "silver-1987": {
    "lat": 40.2608449,
    "lon": -111.6701133,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "1987 N 650 W"
  },
  "monson": {
    "lat": 40.2404163,
    "lon": -111.6526082,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "345 E 500 N"
  },
  "presidio": {
    "lat": 40.2405917,
    "lon": -111.6551932,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "515 N 200 E"
  },
  "old-mill-302": {
    "lat": 40.2569636,
    "lon": -111.6707727,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "724 W 1720 N"
  },
  "old-mill-116": {
    "lat": 40.2569622,
    "lon": -111.6708231,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "728 W 1720 N"
  },
  "sierra-6": {
    "lat": 40.2391065,
    "lon": -111.6543685,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "243 E 400 N"
  },
  "melville-a": {
    "lat": 40.2429416,
    "lon": -111.64733,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "652 E 700 N"
  },
  "village-south": {
    "lat": 40.2416305,
    "lon": -111.6482878,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "602 E 600 N"
  },
  "cougar-stonebridge": {
    "lat": 40.245312,
    "lon": -111.645057,
    "approximate": true,
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.2025.html"
  },
  "avenues-231": {
    "lat": 40.2450543,
    "lon": -111.657399,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "851 N 50 E"
  },
  "old-mill-205": {
    "lat": 40.2569636,
    "lon": -111.6707727,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "724 W 1720 N"
  },
  "avenues-302": {
    "lat": 40.2450043,
    "lon": -111.6585545,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "850 N University Ave"
  },
  "spanish-fork-room": {
    "lat": 40.113143,
    "lon": -111.642906,
    "approximate": true,
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.2025.html"
  },
  "mapleton-suite": {
    "lat": 40.118757,
    "lon": -111.574246,
    "approximate": true,
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.2025.html"
  },
  "af-master": {
    "lat": 40.377877,
    "lon": -111.795074,
    "approximate": true,
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.2025.html"
  },
  "lehi-bighorn": {
    "lat": 40.40252,
    "lon": -111.90958,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/3737-W-Big-Horn-Drive-Lehi-UT-84043/1004633421",
    "address": "3737 W Big Horn Dr"
  },
  "lehi-townhome": {
    "lat": 40.41708,
    "lon": -111.871147,
    "approximate": true,
    "source": "https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.2025.html"
  },
  "saratoga-hatch": {
    "lat": 40.36270700546292,
    "lon": -111.8887009666209,
    "approximate": false,
    "source": "https://gis.utah.gov/products/sgid/cadastre/parcels/",
    "address": "1138 E Hatch Row"
  },
  "ksl-columbia-1816": {
    "lat": 40.263822,
    "lon": -111.680908,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/1816-Columbia-Lane-Orem-UT-84097/1004678098",
    "address": "1816 Columbia Ln"
  },
  "ksl-center-430": {
    "lat": 40.29678,
    "lon": -111.68522,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/430-Center-Street-Orem-UT-84097/1004629962",
    "address": "430 Center St"
  },
  "ksl-995w-906": {
    "lat": 40.314712484213885,
    "lon": -111.72022056879683,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/1030-North-995-West-Apt-906-Orem-UT-84057/1004677134",
    "address": "1030 N 995 W #906"
  },
  "ksl-vineyard-348": {
    "lat": 40.304385,
    "lon": -111.76129,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/348-West-410-North-Vineyard-UT-84059/1004646258",
    "address": "348 W 410 N"
  },
  "ksl-380w-1451": {
    "lat": 40.253415,
    "lon": -111.665212,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/1451-N-380-W.-Provo-UT-84064/1004674199",
    "address": "1451 N 380 W"
  },
  "ksl-autumn-blaze": {
    "lat": 40.297296,
    "lon": -111.755808,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/113-Autumn-Blaze-Drive-Vineyard-UT-84059/1004679915",
    "address": "113 Autumn Blaze Dr"
  },
  "ksl-pg-1135": {
    "lat": 40.376380105539624,
    "lon": -111.74000344047323,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/1135-North-100-East-Pleasant-Grove-UT-84062/1004617921",
    "address": "1135 N 100 E"
  },
  "ksl-af-379": {
    "lat": 40.368781,
    "lon": -111.822848,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/379-S-960-W-American-Fork-UT-84003/1004679351",
    "address": "379 S 960 W"
  },
  "ksl-af-368": {
    "lat": 40.369057,
    "lon": -111.821892,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/368-900-West-American-Fork-UT-84003/1004678878",
    "address": "368 S 900 W"
  },
  "ksl-af-449": {
    "lat": 40.367949,
    "lon": -111.820008,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/449-Willow-Leaf-Road-American-Fork-UT-84003/1004677871",
    "address": "449 Willow Leaf Rd"
  },
  "ksl-af-577": {
    "lat": 40.365025,
    "lon": -111.822932,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/577-900-West-American-Fork-UT-84003/1004665175",
    "address": "577 S 900 W"
  },
  "ksl-af-868": {
    "lat": 40.36527,
    "lon": -111.82109,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/868-W-560-S-American-Fork-UT-84003/1004605488",
    "address": "868 W 560 S"
  },
  "legend-windsor-120": {
    "lat": 40.250640228009,
    "lon": -111.661202347707,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/",
    "address": "108 W 1230 N #120"
  },
  "legend-riverside-11": {
    "lat": 40.2564,
    "lon": -111.6681,
    "approximate": true,
    "areaCheck": true,
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/53208"
  },
  "legend-township-6": {
    "lat": 40.243585139604,
    "lon": -111.655178215561,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/",
    "address": "747 N 200 E #6"
  },
  "legend-promenade-8": {
    "lat": 40.244753723019,
    "lon": -111.643324121465,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/",
    "address": "886 E 820 N #8"
  },
  "rentler-state-1675": {
    "lat": 40.266370754562,
    "lon": -111.68134363715,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/",
    "address": "1675 S State St"
  },
  "roomies-1048408": {
    "lat": 40.3054359184847,
    "lon": -111.6917473788124,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/1048408"
  },
  "roomies-686248": {
    "lat": 40.3133998703824,
    "lon": -111.68297031997,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/686248"
  },
  "roomies-1088987": {
    "lat": 40.2800015173923,
    "lon": -111.7294930350542,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/1088987"
  },
  "roomies-1082099": {
    "lat": 40.2864017806041,
    "lon": -111.7165196945529,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/1082099"
  },
  "roomies-1001487": {
    "lat": 40.2899885572889,
    "lon": -111.7078380793196,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/1001487"
  },
  "roomies-569985": {
    "lat": 40.3071010595853,
    "lon": -111.6725374639121,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/569985"
  },
  "roomies-1067567": {
    "lat": 40.2719918809123,
    "lon": -111.7240940660718,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/1067567"
  },
  "roomies-730762": {
    "lat": 40.3014724393896,
    "lon": -111.7436947786372,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/730762"
  },
  "roomies-989809": {
    "lat": 40.2425667680545,
    "lon": -111.6727139386627,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/989809"
  },
  "fb-vineyard-360w": {
    "lat": 40.3049,
    "lon": -111.7613,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.facebook.com/marketplace/item/1383110371549672/"
  },
  "fb-axis-629": {
    "lat": 40.2824,
    "lon": -111.7297,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.facebook.com/marketplace/item/1276698260966533/"
  },
  "fb-orem-600n": {
    "lat": 40.308093244604,
    "lon": -111.690797928605,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/",
    "address": "216 E 600 N"
  },
  "fb-promenade-650": {
    "lat": 40.2808611,
    "lon": -111.7311452,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "875 S Geneva Rd"
  },
  "fb-promenade-men-600": {
    "lat": 40.2808611,
    "lon": -111.7311452,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html",
    "address": "875 S Geneva Rd"
  },
  "fb-freedom-1378": {
    "lat": 40.252609055661,
    "lon": -111.661899166948,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/",
    "address": "1378 N Freedom Blvd"
  },
  "fb-provo-700n-56": {
    "lat": 40.243081409359,
    "lon": -111.659641902235,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/",
    "address": "56 W 700 N"
  },
  "cl-axis-hub-549": {
    "lat": 40.282426605393,
    "lon": -111.729729096677,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/",
    "address": "1435 W 800 S"
  },
  "cl-provo-1160w": {
    "lat": 40.25177471996,
    "lon": -111.678974372412,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/",
    "address": "1321 N 1160 W"
  },
  "cl-vineyard-springwater": {
    "lat": 40.282091495176,
    "lon": -111.734509897888,
    "approximate": false,
    "source": "https://geocoding.geo.census.gov/",
    "address": "1637 W Springwater Dr"
  },
  "roomies-967731": {
    "lat": 40.2793,
    "lon": -111.7064,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/967731"
  },
  "roomies-1005586": {
    "lat": 40.2838,
    "lon": -111.7259,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/1005586"
  },
  "roomies-1008518": {
    "lat": 40.371936,
    "lon": -111.78753,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/1008518"
  },
  "roomies-923856": {
    "lat": 40.366712,
    "lon": -111.77999,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/923856"
  },
  "ksl-1004598531": {
    "lat": 40.41141,
    "lon": -111.91237,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/1986-North-3930-West-Lehi-UT-84043/1004598531",
    "address": "1986 N 3930 W"
  },
  "roomies-613054": {
    "lat": 40.295875,
    "lon": -111.88402,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/613054"
  },
  "roomies-1105206": {
    "lat": 40.295389,
    "lon": -111.88409,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/1105206"
  },
  "roomies-1100249": {
    "lat": 40.405254,
    "lon": -111.90917,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/1100249"
  },
  "roomies-1075791": {
    "lat": 40.39559,
    "lon": -111.92113,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/1075791"
  },
  "ksl-1004679038": {
    "lat": 40.40147,
    "lon": -111.857184,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/1167-North-500-West-Lehi-UT-84043/1004679038",
    "address": "1167 N 500 W"
  },
  "ksl-1004662689": {
    "lat": 40.418491,
    "lon": -111.858628,
    "approximate": false,
    "source": "https://homes.ksl.com/rent/detail/570-West-2375-North-Lehi-UT-84043/1004662689",
    "address": "570 W 2375 N"
  },
  "roomies-368047": {
    "lat": 40.400739,
    "lon": -111.90545,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/368047"
  },
  "roomies-754982": {
    "lat": 40.3026579660378,
    "lon": -111.7606406509135,
    "approximate": true,
    "areaCheck": true,
    "source": "https://www.roomies.com/rooms/754982"
  },
  "ksl-1004680255": {
    "lat": 40.257344270327,
    "lon": -111.674474815755,
    "source": "https://homes.ksl.com/rent/detail/1763-willowbrook-dr-Provo-UT-84604/1004680255"
  },
  "ksl-1004680107": {
    "lat": 40.260724199133,
    "lon": -111.67110883066,
    "approximate": true,
    "areaCheck": true,
    "source": "https://homes.ksl.com/rent/detail/1983-700-West-Provo-UT-84604/1004680107"
  }
};
const housingCityPoints = {
  "American Fork": [
    40.377877,
    -111.795074
  ],
  "Lehi": [
    40.41708,
    -111.871147
  ],
  "Lindon": [
    40.341998,
    -111.717267
  ],
  "Mapleton": [
    40.118757,
    -111.574246
  ],
  "Orem": [
    40.298067,
    -111.699463
  ],
  "Pleasant Grove": [
    40.371497,
    -111.741281
  ],
  "Provo": [
    40.245312,
    -111.645057
  ],
  "Saratoga Springs": [
    40.344608,
    -111.915893
  ],
  "Spanish Fork": [
    40.113143,
    -111.642906
  ],
  "Springville": [
    40.164273,
    -111.619525
  ],
  "Vineyard": [
    40.305056,
    -111.754784
  ]
};
