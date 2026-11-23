'use strict';
// Public listing and business photos, indexed by the existing catalog IDs.
const places = {
  "indian-hills": {
    "address": "3046 Comanche Ln",
    "photos": [
      [
        "County exterior photo (room not shown)",
        "https://www.utahcounty.gov/houseimages/201053/042601.jpg"
      ]
    ],
    "source": "https://www.utahcounty.gov/LandRecords/property.asp?av_serial=200580016007"
  },
  "orem-room": {
    "address": "1104 W 400 S",
    "source": "https://homes.ksl.com/rent/detail/1104-West-400-South-Orem-UT-84058/1004602321",
    "photos": [
      [
        "Room interior",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m4369466-l1004602321-1032110453.jpg"
      ],
      [
        "Home exterior",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m4369466-l1004602321-1032110446.jpg"
      ]
    ]
  },
  "silver-springs": {
    "address": "262 W Silver Springs Dr",
    "source": "https://www.craigslist.org/view/d/vineyard-single-small-bedroom/pq6wyuvX8RGvxZ7VPxqIjw",
    "photos": [
      [
        "Room interior",
        "https://images.craigslist.org/00t0t_3hFHCmBkkOc_0oM0x2_600x450.jpg"
      ]
    ]
  },
  "foxwood": {
    "address": "830 N 100 W",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/50721",
    "photos": [
      [
        "Room interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=ce49dccae65d463398639316b41496c6_90x106.png"
      ],
      [
        "Exterior shown in listing",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=d976b0e443ee4eb4a697998a36cf3b0e_406x539.png"
      ]
    ]
  },
  "sixty-three": {
    "address": "63 E Center St",
    "source": "https://www.63center.com/provo/sixty-three-center/photos/",
    "photos": [
      [
        "Sample apartment interior",
        "https://medialibrarycfo.entrata.com/fit-in/700x700/18147/MLv3/3/27/2025/01/14/020800/6786d23010efc6.02299878938.jpg"
      ],
      [
        "Building exterior",
        "https://medialibrarycfo.entrata.com/fit-in/700x700/18147/MLv3/3/27/2025/01/14/020801/6786d231366596.01422779344.jpg"
      ]
    ]
  },
  "orem-811": {
    "address": "811 S 75 E",
    "photos": []
  },
  "reynolds-301": {
    "address": "466 N 400 E",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/18665",
    "photos": [
      [
        "Bedroom interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=d15f3e94c8704d83b102168b039c05e3_90x106.jpg"
      ],
      [
        "Exterior shown in listing",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=e19e1be87188492d9367469b5f41363a_406x539.png"
      ]
    ]
  },
  "riverside-33": {
    "address": "1533 N Riverside Ave",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/58994",
    "photos": [
      [
        "Kitchen interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=5f2362db021c41e698e00c55fa2a2bef_90x106.png"
      ],
      [
        "Exterior shown in listing",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=0e9be2cfe2f64908966b26bf4dc88acb_406x539.png"
      ]
    ]
  },
  "silver-1985": {
    "address": "1985 N 650 W",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/89664",
    "photos": [
      [
        "Living room interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=d768f5bf115f414385d14c6cde003ef8_90x106.png"
      ],
      [
        "Exterior shown in listing",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=09bcfe5acb4042229e9a1ff26be83c53_406x539.png"
      ]
    ]
  },
  "silver-1987": {
    "address": "1987 N 650 W",
    "photos": []
  },
  "monson": {
    "address": "345 E 500 N",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/76804",
    "photos": [
      [
        "Kitchen interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=9e48d34c0851466988d018a87de48faa_90x106.png"
      ],
      [
        "Exterior shown in listing",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=ae9772014d3740aeab75525413341cce_406x539.png"
      ]
    ]
  },
  "presidio": {
    "address": "515 N 200 E",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/71452",
    "photos": [
      [
        "Living area interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=277f0dcf001f40a8b0dd97f3d2688641_90x106.png"
      ],
      [
        "Exterior shown in listing",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=1e1d85cb4cfa48438693b3d6ef44ae1c_406x539.png"
      ]
    ]
  },
  "old-mill-302": {
    "address": "724 W 1720 N",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/90245",
    "photos": [
      [
        "Living room interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=af309b4f61b34160b5ee9511eff0757e_90x106.png"
      ],
      [
        "Exterior shown in listing",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=8408dc5e9e5241b5949d2fdf65d82698_406x539.png"
      ]
    ]
  },
  "old-mill-116": {
    "address": "728 W 1720 N",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/81815",
    "photos": [
      [
        "Living room interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=3708456174e04222820253f142259909_90x106.png"
      ],
      [
        "Exterior shown in listing",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=69212b9b096449d4bb1078446868129c_406x539.png"
      ]
    ]
  },
  "old-mill-205": {
    "address": "724 W 1720 N",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/89149",
    "photos": [
      [
        "Living room interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=f189bb2ce6ee4d3a9b3a24c848272726_90x106.png"
      ],
      [
        "Exterior shown in listing",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=e553f6a3f3d24df7b64e98f582e87f4e_406x539.png"
      ]
    ]
  },
  "sierra-6": {
    "address": "243 E 400 N",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/76835",
    "photos": [
      [
        "Living area interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=c0af87f3c43f4abab75d1ec1dd0ca8a6_90x106.png"
      ],
      [
        "Kitchen interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=011f42c6da5148cebcb7f0df9596e12d_90x106.png"
      ]
    ]
  },
  "melville-a": {
    "address": "652 E 700 N",
    "photos": []
  },
  "village-south": {
    "address": "602 E 600 N",
    "note": "The map opens the leasing office address.",
    "photos": [
      [
        "Clubhouse exterior",
        "https://medialibrarycfo.entrata.com/9348/MLv3/9/36/2023/01/03/020429/63b4985dd36695.77841320195.png"
      ],
      [
        "Clubhouse interior",
        "https://medialibrarycfo.entrata.com/9348/MLv3/9/36/2026/07/14/034407/6a56ada6dda7b9.47491527397.jpg"
      ]
    ],
    "source": "https://www.thevillageatsouthcampus.com/"
  },
  "avenues-231": {
    "address": "851 N 50 E",
    "source": "https://homes.ksl.com/rent/detail/851-North-50-East-231-Provo-UT-84604-Provo-UT-84604/1004672929",
    "photos": [
      [
        "Exterior shown in listing",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m780719-l1004672929-1033509252.jpg"
      ]
    ]
  },
  "avenues-302": {
    "address": "850 N University Ave",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/69502",
    "photos": [
      [
        "Building and pool exterior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=9e4c0960b6584a2299a549d82a5549eb_406x539.png"
      ],
      [
        "Kitchen interior",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=878cbc1c7e5f4c11b56f757b28e2c8b2_90x106.png"
      ]
    ]
  },
  "lehi-bighorn": {
    "address": "3737 W Big Horn Dr",
    "note": "The advertiser describes these as photos of a similar townhouse. Confirm the exact unit and address.",
    "source": "https://homes.ksl.com/rent/detail/3737-W-Big-Horn-Drive-Lehi-UT-84043/1004633421",
    "photos": [
      [
        "Living area interior",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m2299529-l1004633421-1032628015.jpg"
      ],
      [
        "Kitchen interior",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m2299529-l1004633421-1032628016.jpg"
      ]
    ]
  },
  "saratoga-hatch": {
    "address": "1138 E Hatch Row",
    "source": "https://www.craigslist.org/view/d/saratoga-springs-private-rooms-550-all/RPXK8yXL8RGmIaeX_uwITQ",
    "photos": [
      [
        "Landlord listing photo",
        "https://cdn.turbotenant.com/uploads/photo/picture/19611757/midsize_20220629_140554.jpg"
      ],
      [
        "Landlord listing photo",
        "https://cdn.turbotenant.com/uploads/photo/picture/19613393/midsize_20220708_123124.jpg"
      ]
    ]
  },
  "transcend": {
    "address": "1200 Towne Centre Blvd",
    "photos": [
      [
        "Shop entrance and reception from the former studio gallery",
        "https://img1.wsimg.com/isteam/ip/c763340f-0c19-4282-96b5-b5db463c9115/66BE84EE-943E-4CEA-8F2B-6862F98B99A8.jpeg"
      ]
    ],
    "source": "https://www.provotownecentre.com/stores/transcend-tattoo-piercings/"
  },
  "bitter-blue": {
    "address": "17 N Merchant St"
  },
  "skies": {
    "address": "1526 N State St"
  },
  "hollow-oak": {
    "address": "622 N 900 E Unit 102",
    "source": "https://www.hellosugar.salon/locations/ut/spanish-fork-central-details",
    "photos": [
      [
        "VARA building exterior; Hollow Oak is in Unit 102",
        "https://cdn.sanity.io/images/ik8ezx77/production/5fe2420608b58c1b29f6063fe7931976748e72ec-1500x1125.webp?auto=format&w=900"
      ]
    ]
  },
  "west-studios": {
    "address": "140 N Main St",
    "source": "https://www.vagaro.com/wildcoyoteco",
    "photos": [
      [
        "Workstation from the owner's profile",
        "https://assets.vagaro.com/business/4qun3truqcbtwnpot8nbmw/340x340/130475942_252555$2026_03_30_00_07_44_9239.png"
      ]
    ]
  },
  "arcane": {
    "address": "290 N State St",
    "source": "https://getinked.net/tattoo-shops/arcane-art-tattoo/",
    "photos": [
      [
        "Studio interior",
        "https://getinked.net/wp-content/uploads/2025/09/gi_photo_11723_0.jpg"
      ]
    ]
  },
  "beautiful-sin": {
    "address": "231 N Main St",
    "source": "https://tattoorate.com/place/utah/spanish-fork/beautiful-sin-tattoo",
    "photos": [
      [
        "Studio interior from business listing",
        "https://tattoorate.com/image/photos/beautiful-sin-tattoo_spanish-fork-7f38ca8941c11a1b.jpeg?w=400&h=300&crop=1"
      ]
    ]
  },
  "empire-af": {
    "address": "33 N Center St",
    "source": "https://www.loc8nearme.com/utah/american-fork/empire-tattoo-studio/5915348/",
    "photos": [
      [
        "Empire Tattoo Studio storefront on Center Street",
        "https://cdn9.localdatacdn.com/ut/american-fork/5915348/original/lObhSEfP2B.jpg"
      ]
    ]
  },
  "infinite-ink": {
    "address": "32 E 300 N",
    "source": "https://www.fresha.com/lvp/infinite-ink-tattoo-north-main-street-spanish-fork-7rj5ao",
    "photos": [
      [
        "Infinite Ink storefront and workstations",
        "https://images.fresha.com/lead-images/overrides/6779357-d134b1cb.jpeg"
      ]
    ]
  },
  "silk": {
    "address": "1675 N Freedom Blvd Building 11E",
    "source": "https://www.silkstudiosuites.com/",
    "photos": [
      [
        "Waiting area",
        "https://images.squarespace-cdn.com/content/v1/61b0efed7dc2eb74601b5708/40ede369-cb02-4837-894c-744016c6c8d2/IMG_9384.JPG?format=750w"
      ],
      [
        "Building exterior",
        "https://images.squarespace-cdn.com/content/v1/61b0efed7dc2eb74601b5708/096643a4-c14d-47dd-8698-338aed32ef70/IMG_9408.JPG?format=750w"
      ]
    ]
  },
  "curl-corner": {
    "address": "561 S Orem Blvd Unit K1",
    "source": "https://curlcorner.com/affordable-salon-suite-rental",
    "photos": [
      [
        "Example private studio",
        "https://curlcorner.com/wp-content/uploads/2021/04/Curl-Corner-Studio-Suites-Studio-8.jpg"
      ],
      [
        "Main entrance area",
        "https://curlcorner.com/wp-content/uploads/2021/04/Curl-Corner-Studio-Suites-Main-Entrance-scaled.jpg"
      ]
    ]
  },
  "serenity": {
    "address": "61 W 3200 N Ste C",
    "photos": [
      [
        "Studio 19 listing photo",
        "https://static.wixstatic.com/media/be1ede_9f4fbb87db2948a9bfd0aa2791b5e3ca~mv2.jpg/v1/fit/w_900,h_900,al_c/IMG_7706.jpg"
      ]
    ],
    "source": "https://www.serenitystudiosut.com/studio-directory-lehi-utah"
  },
  "heaven-sent": {
    "address": "52 E Main St Suite 4",
    "photos": [
      [
        "Salon interior, not the piercing room",
        "https://www.heavensentsalons.com/img/salon/tall/washing-station.jpg"
      ]
    ],
    "source": "https://www.heavensentsalons.com/rent/piercing-booth"
  },
  "af-legend-suite": {
    "address": "531 S 850 E",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/89296",
    "photos": [
      [
        "Suite listing photo",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=e4a74a5fd60b44c8b3ea3ff35ff6ea16_406x539.png"
      ],
      [
        "Suite listing photo",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=adc845b163ed45c4948ea61dc07fd151_90x106.jpeg"
      ]
    ]
  },
  "solitude-orem": {
    "address": "175 N State St",
    "photos": [
      [
        "Example Solitude suite, location unspecified",
        "https://images.squarespace-cdn.com/content/v1/60ad2db14a2c73622faf33c7/3fbebcd7-cde4-4c46-8214-5970a2db57c2/Jenna+Barber+Room.jpg?format=750w"
      ]
    ],
    "source": "https://www.solitudesalonstudios.com/take-a-look-inside"
  },
  "sola": {
    "address": "570 E University Pkwy",
    "source": "https://www.solasalonstudios.com/locations/orem",
    "photos": [
      [
        "Orem building exterior",
        "https://images.ctfassets.net/ww2k3s0wlwlc/iOp4fLZeyT9UA3pijZMBP/dd94e1746d8309274aa5f6119a10ef32/IMG_4407.JPG?w=900"
      ]
    ]
  },
  "indie": {
    "address": "560 W 800 N",
    "photos": [
      [
        "Orem property photo",
        "https://myindiestudio.com/wp-content/uploads/2025/02/560-W-800-N-Orem-1-1024x683.jpg"
      ]
    ],
    "source": "https://myindiestudio.com/"
  },
  "cove": {
    "address": "777 N 500 W Suite A-202",
    "source": "https://www.covecollectivestudios.com/",
    "photos": [
      [
        "Studio interior",
        "https://images.squarespace-cdn.com/content/v1/65fc69d6aefd8f2205e36f07/15b9a466-91c1-40d0-866f-24d2dacfdf5c/IMG_8545.jpeg?format=750w"
      ]
    ]
  },
  "studios-orem": {
    "address": "295 E 950 S",
    "source": "https://www.thestudiosuitesorem.com/",
    "photos": [
      [
        "Example suite interior",
        "https://static.wixstatic.com/media/701f9c_8ae131eca44e4da8b69b0a4388931ac1~mv2.jpg/v1/fit/w_900,h_900,al_c/IMG_6912.jpg"
      ]
    ]
  },
  "amity": {
    "areaOnly": true
  },
  "gwen": {
    "areaOnly": true
  },
  "rae-tattoos": {
    "areaOnly": true
  },
  "kai": {
    "areaOnly": true
  },
  "inksbylex": {
    "areaOnly": true
  },
  "cougar-stonebridge": {
    "mapName": "Stonebridge II Apartments",
    "photos": [
      [
        "Stonebridge II property photo",
        "https://cougarrentals.com/wp-content/uploads/2022/01/IMG_1240.jpg"
      ],
      [
        "Unit 2 listing photo",
        "https://cougarrentals.com/wp-content/uploads/2019/06/IMG_1848.jpg"
      ]
    ],
    "source": "https://cougarrentals.com/stonebridge-ii-condos/"
  },
  "af-master": {
    "source": "https://www.spareroom.com/rooms-for-rent/ut/utah_county/american_fork/101894332",
    "photos": [
      [
        "House exterior",
        "https://photos.spareroom.com/images/flatshare/listings/large/20/54/205472785.jpg"
      ],
      [
        "Room interior",
        "https://photos.spareroom.com/images/flatshare/listings/square/20/54/205472773.jpg"
      ]
    ]
  },
  "city-view": {
    "source": "https://www.200cityview.com/gallery",
    "photos": [
      [
        "Apartment interior",
        "https://assets.marketapts.com/assets/converted/1371200C/images/apartments/photos/jdu00csqvhgttdjlynvvxs40s44nhb1o.jpg.jpg.800x600.jpg"
      ],
      [
        "Building exterior",
        "https://assets.marketapts.com/assets/converted/1371200C/images/apartments/photos/dtrktbxto4y0cqga884tjkh3g2pp4scf.jpg.jpg.800x600.jpg"
      ]
    ]
  },
  "near-byu": {
    "source": "https://www.spareroom.com/rooms-for-rent/ut/utah_county/provo/103152077",
    "photos": [
      [
        "Bedroom interior",
        "https://photos.spareroom.com/images/flatshare/listings/square/21/11/211104994.jpg"
      ],
      [
        "House exterior",
        "https://photos.spareroom.com/images/flatshare/listings/square/21/11/211104955.jpg"
      ]
    ]
  },
  "spanish-fork-room": {
    "source": "https://www.spareroom.com/rooms-for-rent/ut/utah_county/spanish_fork/103226932",
    "photos": [
      [
        "Room interior",
        "https://photos.spareroom.com/images/flatshare/listings/large/21/16/211600361.jpg"
      ],
      [
        "Bathroom interior",
        "https://photos.spareroom.com/images/flatshare/listings/square/21/16/211600604.jpg"
      ]
    ]
  },
  "studio-nine": {
    "source": "https://studioninebodyart.com/",
    "photos": [
      [
        "Interior studio entrance",
        "https://studioninebodyart.com/assets/studio-hallway-door.png"
      ],
      [
        "Street entrance via The Brier Barbershop",
        "https://studioninebodyart.com/assets/brier-street-entrance.png"
      ]
    ]
  },
  "the-green": {
    "source": "https://thegreenoncampusdrive.com/photo-gallery/",
    "photos": [
      [
        "Apartment living room",
        "https://thegreenoncampusdrive.com/wp-content/uploads/2021/03/The-Green-Interior-New-2-600x400.jpg"
      ],
      [
        "Outdoor community area",
        "https://thegreenoncampusdrive.com/wp-content/uploads/2023/08/DSC00355-Edit-scaled-600x400.jpg"
      ]
    ]
  },
  "lehi-townhome": {
    "source": "https://www.spareroom.com/rooms-for-rent/ut/utah_county/lehi/103016007",
    "photos": [
      [
        "Room interior",
        "https://photos.spareroom.com/images/flatshare/listings/large/21/03/210384778.jpg"
      ],
      [
        "Common area interior",
        "https://photos.spareroom.com/images/flatshare/listings/square/21/03/210385436.jpg"
      ]
    ]
  },
  "promenade": {
    "source": "https://choosepromenade.com/photo-gallery/",
    "photos": [
      [
        "Sample furnished bedroom",
        "https://choosepromenade.com/wp-content/uploads/2025/05/Promenade-Place-05-500x500.jpg"
      ],
      [
        "Building exterior",
        "https://choosepromenade.com/wp-content/uploads/2021/04/prom19-500x500.jpg"
      ]
    ]
  },
  "hearts-hands": {
    "source": "https://www.heartsandhandstattoo.com/",
    "photos": [
      [
        "Official shop photo",
        "https://www.heartsandhandstattoo.com/wp-content/uploads/2024/08/hearts-hands-tattoo-shop-2022-1870x770.jpg"
      ]
    ]
  },
  "uvu-master": {
    "photos": []
  },
  "mapleton-suite": {
    "photos": []
  },
  "meraki": {
    "photos": [
      [
        "Tattoo studio room",
        "https://tattoorate.com/image/photos/meraki-ink_orem-de5e2f4c587c7c7c.jpeg?w=400&h=300&crop=1"
      ],
      [
        "Studio entry and reception",
        "https://api.steps.me/v1/imagedashboard/GOOGLE_ChIJabVY6QCFTYcRVvHnJ7U7WKI_M6Ni8WSqjdX?width=239&height=296&reason=location_main_image&app_platform=top_ten&app_version=1.0.0.0P&q=80"
      ]
    ],
    "source": "https://tattoorate.com/place/utah/orem/meraki-ink"
  },
  "tattoo-shop": {
    "photos": [
      [
        "Shop storefront",
        "https://tattoorate.com/image/photos/the-tattoo-shop_orem-19b3b393b3eddfcc.jpeg?w=400&h=300&crop=1"
      ],
      [
        "Shop interior seating",
        "https://tattoorate.com/image/photos/the-tattoo-shop_orem-c6e8ececfc7cc8c6.jpeg?w=400&h=300&crop=1"
      ]
    ],
    "source": "https://tattoorate.com/place/utah/orem/the-tattoo-shop"
  },
  "grimm": {
    "photos": [
      [
        "Studio waiting area",
        "https://api.steps.me/v1/imagedashboard/GOOGLE_ChIJcf4uJdaXTYcROhpjl2u_Fc0_Te_GT-P6eCQ?app_platform=top_ten&app_version=1.0.0.0P&height=296&q=80&reason=location_main_image&width=239"
      ],
      [
        "Studio entrance",
        "https://api.steps.me/v1/imagedashboard/GOOGLE_ChIJcf4uJdaXTYcROhpjl2u_Fc0_CJu_V4xUMDg?app_platform=top_ten&app_version=1.0.0.0P&height=296&q=80&reason=location_main_image&width=239"
      ]
    ],
    "source": "https://www.atly.com/location/TheGrimmTattooStudio"
  },
  "legacy": {
    "photos": [
      [
        "Studio rooms and workstation from the shop website",
        "https://static.wixstatic.com/media/a1e915_b4cea6a4a069449a8650710746422834~mv2.jpg/v1/fill/w_943,h_707,al_c,q_80/a1e915_b4cea6a4a069449a8650710746422834~mv2.jpg"
      ]
    ],
    "source": "https://www.legacyinkllc.com/"
  },
  "underground": {
    "photos": [
      [
        "Workstation in the studio",
        "https://media.tattooed.co/shops/34004/photos/underground-ink-tattoo-studio-shop-6a7383b76c88b.webp"
      ]
    ],
    "source": "https://www.tattooed.co/shop/34004/underground-ink-tattoo-studio/"
  },
  "solitude-pg": {
    "photos": [
      [
        "Example Solitude suite, location unspecified",
        "https://images.squarespace-cdn.com/content/v1/60ad2db14a2c73622faf33c7/75ffcb51-9c26-4ba7-97cd-0f770fb1417d/Shanel+Room.jpg?format=750w"
      ]
    ],
    "source": "https://www.solitudesalonstudios.com/take-a-look-inside"
  },
  "blue-island": {
    "photos": [
      [
        "Example Blue Island suite, location unspecified",
        "https://images.squarespace-cdn.com/content/v1/65b3d380be431a687aa3fd97/d9e962d4-2ebb-429c-8b5b-1734a6037af1/Blue+Island+Suite+Photo+3+(1).png?format=750w"
      ],
      [
        "Provo floor plan",
        "https://images.squarespace-cdn.com/content/v1/65b3d380be431a687aa3fd97/2fbeacbd-25c6-4f2e-98fa-638368f31cf5/Blue_Island_Provo.png?format=750w"
      ]
    ],
    "source": "https://www.blueislandsuites.com/"
  },
  "locket": {
    "photos": [
      [
        "Example vintage suite",
        "https://thelocketloft.com/img/suites/vintage-salon-suite.png"
      ]
    ],
    "source": "https://thelocketloft.com/suites/tattooists"
  },
  "brattycakes": {
    "source": "https://commons.wikimedia.org/wiki/File:296_S._Main_Street,_Springville.JPG",
    "photos": [
      [
        "Building exterior, 2012 · Dan Convery, CC BY-SA 3.0",
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/296_S._Main_Street%2C_Springville.JPG"
      ]
    ]
  },
  "my-pride": {
    "source": "https://getinked.net/tattoo-shops/my-pride-tattoo/",
    "photos": [
      [
        "Tattoo workstations",
        "https://getinked.net/wp-content/uploads/2025/09/my-pride-tattoo-768x1024.jpg"
      ],
      [
        "Studio interior",
        "https://getinked.net/wp-content/uploads/2025/09/gi_photo_15964_1.jpg"
      ]
    ]
  },
  "ksl-columbia-1816": {
    "address": "1816 Columbia Ln",
    "source": "https://homes.ksl.com/rent/detail/1816-Columbia-Lane-Orem-UT-84097/1004678098",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m211767-l1004678098-1033480073.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m211767-l1004678098-1033480070.jpg"
      ]
    ]
  },
  "ksl-center-430": {
    "address": "430 Center St",
    "source": "https://homes.ksl.com/rent/detail/430-Center-Street-Orem-UT-84097/1004629962",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m3242793-l1004629962-1032604019.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m3242793-l1004629962-1032604020.jpg"
      ]
    ]
  },
  "ksl-995w-906": {
    "address": "1030 N 995 W #906",
    "source": "https://homes.ksl.com/rent/detail/1030-North-995-West-Apt-906-Orem-UT-84057/1004677134",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m2751524-l1004677134-1033483196.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m2751524-l1004677134-1033483197.jpg"
      ]
    ]
  },
  "ksl-vineyard-348": {
    "address": "348 W 410 N",
    "source": "https://homes.ksl.com/rent/detail/348-West-410-North-Vineyard-UT-84059/1004646258",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m3242793-l1004646258-1032846225.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m3242793-l1004646258-1032846226.jpg"
      ]
    ]
  },
  "ksl-380w-1451": {
    "address": "1451 N 380 W",
    "source": "https://homes.ksl.com/rent/detail/1451-N-380-W.-Provo-UT-84064/1004674199",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m3939590-l1004674199-1033396654.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m3939590-l1004674199-1033396655.jpg"
      ]
    ]
  },
  "ksl-autumn-blaze": {
    "address": "113 Autumn Blaze Dr",
    "source": "https://homes.ksl.com/rent/detail/113-Autumn-Blaze-Drive-Vineyard-UT-84059/1004679915",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m1489363-l1004679915-1033517429.jpg"
      ]
    ]
  },
  "ksl-pg-1135": {
    "address": "1135 N 100 E",
    "source": "https://homes.ksl.com/rent/detail/1135-North-100-East-Pleasant-Grove-UT-84062/1004617921",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m4484617-l1004617921-1033370956.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m4484617-l1004617921-1033480627.jpg"
      ]
    ]
  },
  "ksl-af-379": {
    "address": "379 S 960 W",
    "source": "https://homes.ksl.com/rent/detail/379-S-960-W-American-Fork-UT-84003/1004679351",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m7908326-l1004679351-1033505629.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m7908326-l1004679351-1033505630.jpg"
      ]
    ]
  },
  "ksl-af-368": {
    "address": "368 S 900 W",
    "source": "https://homes.ksl.com/rent/detail/368-900-West-American-Fork-UT-84003/1004678878",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m2584909-l1004678878-1033495871.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m2584909-l1004678878-1033495872.jpg"
      ]
    ]
  },
  "ksl-af-449": {
    "address": "449 Willow Leaf Rd",
    "source": "https://homes.ksl.com/rent/detail/449-Willow-Leaf-Road-American-Fork-UT-84003/1004677871",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m1855952-l1004677871-1033476105.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m1855952-l1004677871-1033476106.jpg"
      ]
    ]
  },
  "ksl-af-577": {
    "address": "577 S 900 W",
    "source": "https://homes.ksl.com/rent/detail/577-900-West-American-Fork-UT-84003/1004665175",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m3714721-l1004665175-1033204879.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m3714721-l1004665175-1033204881.jpg"
      ]
    ]
  },
  "ksl-af-868": {
    "address": "868 W 560 S",
    "source": "https://homes.ksl.com/rent/detail/868-W-560-S-American-Fork-UT-84003/1004605488",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m4961169-l1004605488-1032160100.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m4961169-l1004605488-1032160101.jpg"
      ]
    ]
  },
  "legend-windsor-120": {
    "address": "108 W 1230 N #120",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/80871",
    "photos": [
      [
        "Listing photo",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=e5bb6f6f8ca14e0ca5ec085338350134_406x539.png"
      ]
    ]
  },
  "legend-riverside-11": {
    "address": "1559 N Riverside Ave #11",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/53208",
    "photos": [
      [
        "Listing photo",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=68ff2e27af434cc999028cfad470b24b_406x539.png"
      ]
    ]
  },
  "legend-township-6": {
    "address": "747 N 200 E #6",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/24572",
    "photos": [
      [
        "Listing photo",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=c8e81b362f0f4675b4b7e3fae67f3ebd_406x539.png"
      ]
    ]
  },
  "legend-promenade-8": {
    "address": "886 E 820 N #8",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/47830",
    "photos": [
      [
        "Listing photo",
        "https://legendrealestate.managebuilding.com/Resident/api/public/files/download?fileName=f697c17671c34cb5a528ee4cc1706a34_406x539.png"
      ]
    ]
  },
  "rentler-state-1675": {
    "address": "1675 S State St",
    "source": "https://www.rentler.com/places-for-rent/ut/orem/1675-s-state-st/13659984",
    "photos": [
      [
        "Studio interior",
        "https://media.rentler.com/user-1090678/70181993-daf7-4ddc-ad5c-dbb054841b26.jpg"
      ],
      [
        "Studio interior",
        "https://media.rentler.com/user-1090678/9b2c10cd-4023-429d-be03-df353f075efb.jpg"
      ]
    ]
  },
  "roomies-1048408": {
    "address": "",
    "source": "https://www.roomies.com/rooms/1048408",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/o1tewddvyn7xejasc4e5"
      ]
    ],
    "areaOnly": true
  },
  "roomies-686248": {
    "address": "",
    "source": "https://www.roomies.com/rooms/686248",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/zmhizugwuik7wlmi6isl"
      ]
    ],
    "areaOnly": true
  },
  "roomies-1088987": {
    "address": "",
    "source": "https://www.roomies.com/rooms/1088987",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/jiore8osifywyyypjt5i"
      ]
    ],
    "areaOnly": true
  },
  "roomies-1082099": {
    "address": "",
    "source": "https://www.roomies.com/rooms/1082099",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/qthhzkfrt68qqo7ose0j"
      ]
    ],
    "areaOnly": true
  },
  "roomies-1001487": {
    "address": "",
    "source": "https://www.roomies.com/rooms/1001487",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/jxghkoqpgg481vgzqdfy"
      ]
    ],
    "areaOnly": true
  },
  "roomies-569985": {
    "address": "",
    "source": "https://www.roomies.com/rooms/569985",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_thumb,dpr_1.0,f_jpg,fl_lossy,g_faces,h_160,q_auto:good,w_160/d5qod40riswylgja4w8t"
      ]
    ],
    "areaOnly": true
  },
  "roomies-1067567": {
    "address": "",
    "source": "https://www.roomies.com/rooms/1067567",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/h1u4jt6din1ixrtjvjlj"
      ]
    ],
    "areaOnly": true
  },
  "roomies-730762": {
    "address": "",
    "source": "https://www.roomies.com/rooms/730762",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/gb07ditkv3plt2rmejzp"
      ]
    ],
    "areaOnly": true
  },
  "roomies-989809": {
    "address": "",
    "source": "https://www.roomies.com/rooms/989809",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/shvhhulxezgjtxbjffsp"
      ]
    ],
    "areaOnly": true
  },
  "fb-vineyard-360w": {
    "address": "422 N 360 W",
    "source": "https://www.facebook.com/marketplace/item/1383110371549672/",
    "photos": []
  },
  "fb-axis-629": {
    "address": "",
    "source": "https://www.facebook.com/marketplace/item/1276698260966533/",
    "photos": [],
    "areaOnly": true
  },
  "fb-orem-600n": {
    "address": "216 E 600 N",
    "source": "https://www.facebook.com/marketplace/item/2325037144913307/",
    "photos": []
  },
  "fb-promenade-650": {
    "address": "875 S Geneva Rd",
    "source": "https://www.facebook.com/marketplace/item/1002521186143545/",
    "photos": []
  },
  "fb-promenade-men-600": {
    "address": "875 S Geneva Rd",
    "source": "https://www.facebook.com/marketplace/item/2092376778335480/",
    "photos": []
  },
  "fb-freedom-1378": {
    "address": "1378 N Freedom Blvd",
    "source": "https://www.facebook.com/marketplace/item/1590096378977081/",
    "photos": []
  },
  "fb-orem-hombre-650": {
    "address": "",
    "source": "https://www.facebook.com/marketplace/item/1312081331102362/",
    "photos": [],
    "areaOnly": true
  },
  "fb-provo-700n-56": {
    "address": "56 W 700 N",
    "source": "https://www.facebook.com/marketplace/item/2822623974789528/",
    "photos": []
  },
  "fb-af-rockwell": {
    "address": "",
    "source": "https://www.facebook.com/marketplace/item/1304960348152266/",
    "photos": [],
    "areaOnly": true
  },
  "cl-axis-hub-549": {
    "address": "1435 W 800 S",
    "source": "https://www.craigslist.org/view/d/vineyard-lease-takeover-private-room/uggUoXnVQm62ifFqS2eUnB",
    "photos": []
  },
  "cl-provo-1160w": {
    "address": "1321 N 1160 W",
    "source": "https://www.craigslist.org/view/d/provo-private-room-in-basement-apartment/FhvNKkXk8RGUaeGtN3ynxg",
    "photos": [
      [
        "Room photo",
        "https://images.craigslist.org/00i0i_dA3GuEs9wwz_0x20oM_600x450.jpg"
      ],
      [
        "Room photo",
        "https://images.craigslist.org/00q0q_bYNgSkNI0xA_0x20oM_600x450.jpg"
      ]
    ]
  },
  "cl-vineyard-springwater": {
    "address": "1637 W Springwater Dr",
    "source": "https://www.craigslist.org/view/d/orem-furnished-private-room-shared/wCeB2cLj8RG-TrnedBqzlQ",
    "photos": [
      [
        "Room photo",
        "https://images.craigslist.org/00202_dC8tK99kBeb_0oM0x2_600x450.jpg"
      ],
      [
        "Room photo",
        "https://images.craigslist.org/01313_32aMT5EU2Iu_0oM0x2_600x450.jpg"
      ]
    ]
  },
  "roomies-967731": {
    "address": "",
    "source": "https://www.roomies.com/rooms/967731",
    "photos": [],
    "areaOnly": true
  },
  "roomies-1005586": {
    "address": "",
    "source": "https://www.roomies.com/rooms/1005586",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/cogjyewstj6lqry0xdgw"
      ]
    ],
    "areaOnly": true
  },
  "roomies-1008518": {
    "address": "",
    "source": "https://www.roomies.com/rooms/1008518",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/pqq4odcq20hil8cxnqrc"
      ]
    ],
    "areaOnly": true
  },
  "roomies-923856": {
    "address": "",
    "source": "https://www.roomies.com/rooms/923856",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/tvrfidz4srmpzra7u5ry"
      ]
    ],
    "areaOnly": true
  },
  "ksl-1004598531": {
    "address": "1986 N 3930 W",
    "source": "https://homes.ksl.com/rent/detail/1986-North-3930-West-Lehi-UT-84043/1004598531",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m3242793-l1004598531-1032039611.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m3242793-l1004598531-1032039610.jpg"
      ]
    ]
  },
  "roomies-613054": {
    "address": "",
    "source": "https://www.roomies.com/rooms/613054",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/tb0bttuqsfwk73fojbk4"
      ]
    ],
    "areaOnly": true
  },
  "roomies-1105206": {
    "address": "",
    "source": "https://www.roomies.com/rooms/1105206",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/bmw1miocddmdlr365nym"
      ]
    ],
    "areaOnly": true
  },
  "roomies-1100249": {
    "address": "",
    "source": "https://www.roomies.com/rooms/1100249",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/q9ymrigy8rei4os5xatn"
      ]
    ],
    "areaOnly": true
  },
  "roomies-1075791": {
    "address": "",
    "source": "https://www.roomies.com/rooms/1075791",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/zdgcifnsimyhzgkroeal"
      ]
    ],
    "areaOnly": true
  },
  "ksl-1004679038": {
    "address": "1167 N 500 W",
    "source": "https://homes.ksl.com/rent/detail/1167-North-500-West-Lehi-UT-84043/1004679038",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m2508024-l1004679038-1033499126.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m2508024-l1004679038-1033499127.jpg"
      ]
    ]
  },
  "ksl-1004662689": {
    "address": "570 W 2375 N",
    "source": "https://homes.ksl.com/rent/detail/570-West-2375-North-Lehi-UT-84043/1004662689",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m1950145-l1004662689-1033155267.jpg"
      ],
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m1950145-l1004662689-1033155268.jpg"
      ]
    ]
  },
  "roomies-368047": {
    "address": "",
    "source": "https://www.roomies.com/rooms/368047",
    "photos": [
      [
        "Listing photo",
        "https://cloudinary.roomies.pics/image/upload/c_fill,dpr_1.0,f_jpg,fl_lossy,g_auto,h_512,q_auto:good,w_896/dukgyxd4rvkpykpcgogn"
      ]
    ],
    "areaOnly": true
  },
  "roomies-754982": {
    "address": "",
    "source": "https://www.roomies.com/rooms/754982",
    "photos": [
      [
        "Listing photo",
        "https://www.roomies.com/og-image/67e8b981139988f0e96b91a322faa0d1.jpeg"
      ]
    ],
    "areaOnly": true
  },
  "ksl-1004680255": {
    "address": "1763 Willowbrook Dr",
    "source": "https://homes.ksl.com/rent/detail/1763-willowbrook-dr-Provo-UT-84604/1004680255",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m2253060-l1004680255-1033525471.jpg"
      ]
    ]
  },
  "ksl-1004680107": {
    "address": "1983 N 700 W",
    "source": "https://homes.ksl.com/rent/detail/1983-700-West-Provo-UT-84604/1004680107",
    "photos": [
      [
        "Listing photo",
        "https://img.ksl.com/mx/mplace-rent.ksl.com/m5207244-l1004680107-1033522305.jpg"
      ]
    ]
  }
};
