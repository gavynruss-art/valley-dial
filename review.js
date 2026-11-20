'use strict';
// Public listings and operator sources reviewed Nov 20, 2026.
const leadReview = {
  "indian-hills": {
    "status": "listed",
    "note": "Craigslist ad posted Oct 31 and still reachable. Ask about Nov 25.",
    "source": "https://www.craigslist.org/view/d/provo-large-bedroom-in-indian-hills/nvibjwxGEaZKXdxXW8WAMf",
    "tier": "check"
  },
  "orem-room": {
    "status": "listed",
    "note": "KSL ad is live and lists $500 with utilities. Ask Mike whether a room is open.",
    "source": "https://homes.ksl.com/rent/detail/1104-West-400-South-Orem-UT-84058/1004602321",
    "price": "$500 listed, utilities included",
    "tier": "fixed"
  },
  "silver-springs": {
    "status": "listed",
    "note": "Craigslist ad still reachable. Advertises the small bedroom with shared bath. Confirm the room and lease.",
    "source": "https://www.craigslist.org/view/d/vineyard-single-small-bedroom/pq6wyuvX8RGvxZ7VPxqIjw",
    "tier": "check"
  },
  "foxwood": {
    "status": "listed",
    "note": "Legend lists one private room and Nov 24 availability. Confirm the private spot. Contract text reads \"Now - Aug 13, 2027\". Checked Nov 20, 2026.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/50721",
    "price": "$531 with listed fees",
    "tier": "fixed"
  },
  "near-byu": {
    "status": "listed",
    "note": "SpareRoom ad is live and advertises immediate availability. Utilities are extra.",
    "source": "https://www.spareroom.com/rooms-for-rent/ut/utah_county/provo/103152077"
  },
  "uvu-master": {
    "status": "unavailable",
    "note": "The original listing redirects to a general rental page.",
    "source": "https://www.collegerentals.com/property/private-mens-master-bedroom-close-to-uvu-chambery-orem-utah/222979082-326574/"
  },
  "city-view": {
    "status": "listed",
    "note": "The new floor-plan page shows one Timpanogos studio. Studio C has no rate or opening shown.",
    "source": "https://www.200cityview.com/floor-plans",
    "price": "$1,240 advertised for Timpanogos",
    "url": "https://www.200cityview.com/floor-plans"
  },
  "the-green": {
    "status": "mismatch",
    "note": "Studios start around $1,180, far above your $500 target. Hidden by default.",
    "source": "https://thegreenoncampusdrive.com/apartment-floorplans-orem-utah/",
    "price": "Studios advertised from $1,180"
  },
  "sixty-three": {
    "status": "listed",
    "note": "The Madison studio shows Jan 8 availability at $1,195. Brooklyn is priced with no opening shown.",
    "source": "https://www.63center.com/provo/sixty-three-center/studio-apartments/",
    "price": "Studios advertised from $1,015"
  },
  "promenade": {
    "status": "mismatch",
    "note": "Studio lead with no confirmed rate; student housing. Room leases at Promenade are listed separately. Hidden by default.",
    "source": "https://choosepromenade.com/orem-apartment-floor-plans/"
  },
  "orem-811": {
    "status": "unavailable",
    "note": "The original KSL listing returns a not-found page.",
    "source": "https://homes.ksl.com/rent/detail/811-75-East-Orem-UT-84058/1004673596"
  },
  "reynolds-301": {
    "status": "listed",
    "note": "Legend advertises a $425 private room, with availability listed Nov 24.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/18665",
    "price": "$473 in fixed monthly charges + gas, electricity and internet"
  },
  "riverside-33": {
    "status": "listed",
    "note": "Legend advertises a $475 private room, with availability listed Nov 24. Contract text reads \"Now - Aug 13, 2027\". Checked Nov 20, 2026.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/58994",
    "price": "$543 in fixed monthly charges + gas and electricity",
    "tier": "fixed"
  },
  "silver-1985": {
    "status": "unavailable",
    "note": "The listing now redirects to Legend’s general rental inventory.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/89664"
  },
  "silver-1987": {
    "status": "listed",
    "note": "Legend now lists this room with Nov 24 availability. Contract text reads \"Now - Aug 13, 2027\". Checked Nov 20, 2026.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/89663",
    "url": "https://legendrealestate.managebuilding.com/Resident/public/rentals/89663",
    "phone": "801-434-8840",
    "price": "$445 base + fees and utilities",
    "tier": "fixed"
  },
  "monson": {
    "status": "listed",
    "note": "Legend advertises $400 private rooms, with availability listed Nov 24.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/76804",
    "price": "$483 in fixed monthly charges + electricity"
  },
  "presidio": {
    "status": "listed",
    "note": "Legend advertises a private room at $490, with availability listed Nov 24.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/71452",
    "price": "$538 in fixed monthly charges + gas and electricity"
  },
  "old-mill-302": {
    "status": "listed",
    "note": "Legend advertises a $480 private room, with availability listed Nov 24. Contract text reads \"Now - Aug 13, 2027\". Checked Nov 20, 2026.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/90245",
    "price": "$528 in fixed monthly charges + gas, electricity and internet",
    "tier": "fixed"
  },
  "old-mill-116": {
    "status": "listed",
    "note": "Legend advertises a $480 private room, with availability listed Nov 24. Contract text reads \"Now - Aug 13, 2027\". Checked Nov 20, 2026.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/81815",
    "price": "$528 in fixed monthly charges + gas, electricity and internet",
    "tier": "fixed"
  },
  "sierra-6": {
    "status": "listed",
    "note": "Legend advertises a $500 private room, with availability listed Nov 24.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/76835",
    "price": "$563 in fixed monthly charges + gas and electricity"
  },
  "melville-a": {
    "status": "unavailable",
    "note": "The listing now redirects to Legend’s general rental inventory.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/65431"
  },
  "village-south": {
    "status": "mismatch",
    "note": "Only a fall 2027 waitlist is advertised. Hidden by default.",
    "source": "https://www.thevillageatsouthcampus.com/",
    "price": "Ask for current price"
  },
  "cougar-stonebridge": {
    "status": "unavailable",
    "note": "The $449 shared spot is advertised for women. Private rooms are sold out.",
    "source": "https://cougarrentals.com/stonebridge-ii-condos/",
    "url": "https://cougarrentals.com/stonebridge-ii-condos/"
  },
  "avenues-231": {
    "status": "mismatch",
    "note": "Student-only contract (The Avenues student housing). Hidden by default.",
    "source": "https://homes.ksl.com/rent/detail/851-North-50-East-231-Provo-UT-84604-Provo-UT-84604/1004672929",
    "phone": "801-368-9727"
  },
  "old-mill-205": {
    "status": "listed",
    "note": "Legend advertises a $590 private room, with availability listed Nov 24. Contract text reads \"Now - Aug 13, 2027\". Checked Nov 20, 2026.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/89149",
    "price": "$638 in fixed monthly charges + gas, electricity and internet",
    "tier": "fixed"
  },
  "avenues-302": {
    "status": "mismatch",
    "note": "Contract starts Dec 30, after your Nov 25 move-in. Hidden by default.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/69502",
    "price": "$548 in fixed monthly charges + gas and electricity"
  },
  "spanish-fork-room": {
    "status": "unavailable",
    "note": "SpareRoom says the advertiser is not accepting applications.",
    "source": "https://www.spareroom.com/rooms-for-rent/ut/utah_county/spanish_fork/103226932"
  },
  "mapleton-suite": {
    "status": "unavailable",
    "note": "SpareRoom says the advertiser is not accepting applications.",
    "source": "https://www.spareroom.com/rooms-for-rent/ut/utah_county/mapleton/103224590"
  },
  "af-master": {
    "status": "unavailable",
    "note": "SpareRoom says the advertiser is not accepting applications.",
    "source": "https://www.spareroom.com/rooms-for-rent/ut/utah_county/american_fork/101894332"
  },
  "lehi-bighorn": {
    "status": "unavailable",
    "note": "KSL now advertises a women-only room. Listing photos show a similar townhouse.",
    "source": "https://homes.ksl.com/rent/detail/3737-W-Big-Horn-Drive-Lehi-UT-84043/1004633421",
    "price": "$575 + about $65 utilities listed"
  },
  "lehi-townhome": {
    "status": "unavailable",
    "note": "SpareRoom says the advertiser is not accepting applications.",
    "source": "https://www.spareroom.com/rooms-for-rent/ut/utah_county/lehi/103016007"
  },
  "saratoga-hatch": {
    "status": "listed",
    "note": "The landlord’s TurboTenant page is accepting applications at $550. Ask if the room is still open.",
    "source": "https://rental.turbotenant.com/p/1138-e-hatch-row-saratoga-springs-ut/98037581-8541-47f5-a676-9e72c5d8a5d2",
    "price": "$550 listed with utilities",
    "url": "https://rental.turbotenant.com/p/1138-e-hatch-row-saratoga-springs-ut/98037581-8541-47f5-a676-9e72c5d8a5d2",
    "tier": "check"
  },
  "hearts-hands": {
    "status": "listed",
    "note": "Shop site confirms its Orem address, main phone, and guest artist roster. Ask about openings.",
    "source": "https://www.heartsandhandstattoo.com/",
    "phone": "801-691-1883"
  },
  "meraki": {
    "status": "listed",
    "note": "Artist’s booking profile lists Meraki Ink at this address. Shop phone is corroborated by local listings. Ask about a guest spot.",
    "source": "https://booking.page/en/company/page/artbyjakup",
    "phone": "385-505-5760"
  },
  "studio-nine": {
    "status": "listed",
    "note": "An artist’s current profile names Studio Nine in Provo. The city license lists 46 W Center St. Ask about an open chair.",
    "source": "https://www.cocreate.ink/@m.angeltattoos",
    "address": "46 W Center St"
  },
  "painted-temple": {
    "status": "listed",
    "note": "Current shop website confirms 608 N State St and the booking phone. Guest dates are unconfirmed.",
    "source": "https://paintedtemple.com/",
    "phone": "801-607-1015"
  },
  "tattoo-shop": {
    "status": "listed",
    "note": "The shop site confirms its Orem address and 801-224-0778. Ask about guest and booth terms.",
    "source": "https://www.utahtattoo.com/",
    "phone": "801-224-0778"
  },
  "transcend": {
    "status": "listed",
    "note": "Provo Towne Centre still lists the studio on the upper level by the southeast entrance. Third-party phone listings conflict.",
    "source": "https://www.provotownecentre.com/stores/transcend-tattoo-piercings/"
  },
  "amity": {
    "status": "verify",
    "note": "Liv was listed for a September Provo flash event. The old booking profile and the Lehi booth listing could not be verified.",
    "source": "https://www.eventbrite.com/e/tats-tunes-b-side-hifi-open-house-tickets-1999295637070",
    "url": "https://www.instagram.com/littleinkliv/",
    "context": "Artist contact only. Ask whether the Lehi booth is still available."
  },
  "bitter-blue": {
    "status": "listed",
    "note": "The studio’s site is active and lists email and Instagram for booking. Guest-artist openings are unconfirmed.",
    "source": "https://bitterbluetattoo.com/"
  },
  "skies": {
    "status": "verify",
    "note": "Directory lists 1526 N State St in Lehi. Current operator contact and guest policy could not be confirmed.",
    "source": "https://www.bestprosintown.com/ut/lehi/skies-ink-and-beauty-/"
  },
  "grimm": {
    "status": "listed",
    "note": "Operator and artist sources list the Springville shop. The Join page discusses apprenticeships. Ask about guest or booth openings separately.",
    "source": "https://www.thegrimmtattoostudio.com/join-the-grimm",
    "address": "2322 W 500 N, Suite E",
    "context": "Studio has public recruitment material. Ask which guest or resident options are open."
  },
  "hollow-oak": {
    "status": "listed",
    "note": "Owner confirms the private, appointment-only studio in Vara Salon Suites. Ask about referrals or guest work.",
    "source": "https://hollowoaktattoo.com/about",
    "address": "622 N 900 E, Unit 102"
  },
  "gwen": {
    "status": "listed",
    "note": "Artist website lists a private Orem studio. Ask about collaboration or referrals.",
    "source": "https://inkbygwen.com/"
  },
  "brattycakes": {
    "status": "listed",
    "note": "Artist’s booking page lists 296 S Main St, #7, and a contact number. Guest space is unconfirmed.",
    "source": "https://square.site/book/LJ3VP4XSX6SXV/brattycakes_ink-springville-ut",
    "phone": "801-900-7203",
    "address": "296 S Main St, #7"
  },
  "inksbylex": {
    "status": "verify",
    "note": "Could not verify the old booking page or current Lehi venue. Confirm the artist and location first.",
    "source": "https://www.vagaro.com/inksbylex"
  },
  "west-studios": {
    "status": "listed",
    "note": "Owner’s current booking profile describes WEST as a tattoo and beauty collective. A tenant’s profile corroborates 140 N Main St.",
    "source": "https://www.vagaro.com/wildcoyoteco",
    "address": "140 N Main St"
  },
  "living-ink": {
    "status": "listed",
    "note": "Direct booking page lists a Pleasant Grove address and 385-450-0261. Ask about referrals.",
    "source": "https://livingink7j1h.setmore.com/",
    "phone": "385-450-0261"
  },
  "kai": {
    "status": "listed",
    "note": "Artist’s page lists an appointment-based private studio in Lehi. Collaboration and guest options are unconfirmed.",
    "source": "https://jim.com/a/jim_kai-tattoo"
  },
  "arcane": {
    "status": "verify",
    "note": "Multiple directory listings agree on 290 N State St. Confirm the shop is operating and accepts guests.",
    "source": "https://getinked.net/tattoo-shops/arcane-art-tattoo/"
  },
  "beautiful-sin": {
    "status": "verify",
    "note": "TattooRate and Fresha agree on the address. Fresha says the shop is not affiliated with its booking platform. Contact directly.",
    "source": "https://tattoorate.com/place/utah/spanish-fork/beautiful-sin-tattoo",
    "phone": "801-504-6089"
  },
  "moustachery": {
    "status": "listed",
    "note": "The operator site and booking page agree on 1155 N Industrial Park Rd and 801-226-8522.",
    "source": "https://minimoustachery.com/pages/tattoo",
    "phone": "801-226-8522",
    "address": "1155 N Industrial Park Rd"
  },
  "my-pride": {
    "status": "listed",
    "note": "Operator sites list 135 S State St and 801-701-0626. The studio’s current guest policy is unconfirmed.",
    "source": "https://my-pride-tattoo-llc.ueniweb.com/",
    "phone": "801-701-0626",
    "address": "135 S State St",
    "url": "https://my-pride-tattoo-llc.ueniweb.com/"
  },
  "dichotomy": {
    "status": "listed",
    "note": "Artist’s CO:CREATE profile confirms an Orem studio. Ask about collaboration or referrals.",
    "source": "https://www.cocreate.ink/@dichotomy_tattoo",
    "url": "https://www.cocreate.ink/@dichotomy_tattoo"
  },
  "legacy": {
    "status": "listed",
    "note": "Studio website is active. Independent listings agree on 1429 S State St. Ask about guest opportunities.",
    "source": "https://www.legacyinkllc.com/",
    "address": "1429 S State St",
    "url": "https://www.legacyinkllc.com/"
  },
  "king-of-kings": {
    "status": "verify",
    "note": "Current directory entries exist, but an operator listing confirming the shop and its availability was not found.",
    "source": "https://www.tattooed.co/shop/33963/king-of-kings-tattoo-art-collective/"
  },
  "empire-af": {
    "status": "listed",
    "note": "The shop has a booking profile. Multiple business listings agree on the address and 801-756-5738.",
    "source": "https://booksy.com/en-us/1061956_empire-tattoo_tattoo-shop_37859_american-fork",
    "phone": "801-756-5738",
    "address": "33 N Center St",
    "url": "https://booksy.com/en-us/1061956_empire-tattoo_tattoo-shop_37859_american-fork"
  },
  "infinite-ink": {
    "status": "verify",
    "note": "Public listings still show 32 E 300 N. A business-record index shows a different principal address. Confirm the customer-facing location first.",
    "source": "https://maps.roadtrippers.com/us/spanish-fork-ut/shopping/infinite-ink-tattoo-and-piercing-spanish-fork",
    "phone": "801-602-5799"
  },
  "kayla-rae": {
    "status": "listed",
    "note": "Artist booking page lists single-needle tattoos in Pleasant Grove. Booth availability has not been advertised.",
    "source": "https://square.site/book/XTMBF4B9XSDX2/kayla-rae-aesthetics-pleasant-grove-ut",
    "phone": "801-699-6433"
  },
  "rae-tattoos": {
    "status": "listed",
    "note": "Artist-maintained link profile says Springville and links a booking request. Confirm exact venue and referral options.",
    "source": "https://linktr.ee/raetattoos"
  },
  "sic": {
    "status": "verify",
    "note": "Directory lists 162 N Main St and 801-427-7703. Confirm the shop is operating before relying on those details.",
    "source": "https://www.yellowpages.com/spanish-fork-ut/mip/sic-tattooing-piercing-482159986",
    "address": "162 N Main St"
  },
  "underground": {
    "status": "verify",
    "note": "Business listings agree on 55 N University Ave and 801-860-6708. The Instagram page could not be verified directly.",
    "source": "https://www.tattooed.co/shop/34004/underground-ink-tattoo-studio/",
    "phone": "801-860-6708",
    "address": "55 N University Ave"
  },
  "silk": {
    "status": "verify",
    "note": "Operator advertises suites at $80–$200/week and lists tattooing. Ask which suitable suite is open.",
    "source": "https://www.silkstudiosuites.com/",
    "price": "$80–$200/week advertised"
  },
  "curl-corner": {
    "status": "verify",
    "note": "Operator advertises part-time suites from $150/month and mentions body art. Ask about openings and your setup.",
    "source": "https://curlcorner.com/affordable-salon-suite-rental/",
    "url": "https://curlcorner.com/affordable-salon-suite-rental/",
    "price": "From $150/mo part-time advertised"
  },
  "serenity": {
    "status": "listed",
    "note": "Lehi directory advertises Studio 19. Confirm it is still open and can be used for tattooing.",
    "source": "https://www.serenitystudiosut.com/studio-directory-lehi-utah",
    "url": "https://www.serenitystudiosut.com/studio-directory-lehi-utah"
  },
  "heaven-sent": {
    "status": "verify",
    "note": "Piercing space is advertised from $30/week. Specific openings and tattoo use are unconfirmed.",
    "source": "https://www.heavensentsalons.com/rent/piercing-booth",
    "url": "https://www.heavensentsalons.com/rent/piercing-booth",
    "price": "Piercing space from $30/week advertised"
  },
  "af-legend-suite": {
    "status": "listed",
    "note": "Legend advertises $600/mo, available Nov 17. The address differs between the title and description. Confirm the unit and tattoo use.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/89296",
    "price": "$600/mo advertised"
  },
  "solitude-orem": {
    "status": "verify",
    "note": "Operator publishes a $220–$450/week range. Orem vacancy and tattoo use are unconfirmed.",
    "source": "https://www.solitudesalonstudios.com/leasing-info",
    "price": "$220–$450/week advertised range"
  },
  "solitude-pg": {
    "status": "verify",
    "note": "Operator lists 2086 W Grove Parkway and a $220–$450/week range. Pleasant Grove vacancy and tattoo use are unconfirmed.",
    "source": "https://www.solitudesalonstudios.com/leasing-info",
    "price": "$220–$450/week advertised range",
    "address": "2086 W Grove Pkwy"
  },
  "blue-island": {
    "status": "verify",
    "note": "Provo floor plan lists $225–$325/week on a one-year lease. Ask about vacancies and tattooing.",
    "source": "https://www.blueislandsuites.com/leasing-info",
    "phone": "801-712-6905",
    "price": "$225–$325/week on published Provo floor plan",
    "address": "2035 N 550 W Suite 103"
  },
  "sola": {
    "status": "verify",
    "note": "Sola lists Orem leasing with a local contact. Confirm suitable vacancies and tattoo use at this location.",
    "source": "https://www.solasalonstudios.com/locations/orem",
    "phone": "801-901-3576"
  },
  "indie": {
    "status": "verify",
    "note": "Operator lists 43 Orem suites and a leasing number. Ask about vacancies and approval for tattooing.",
    "source": "https://myindiestudio.com/salon-suites-in-orem/",
    "phone": "801-318-0446"
  },
  "cove": {
    "status": "unavailable",
    "note": "Operator lists all nine suites as unavailable and offers a waitlist.",
    "source": "https://www.covecollectivestudios.com/floor-plan-pricing",
    "url": "https://www.covecollectivestudios.com/floor-plan-pricing"
  },
  "studios-orem": {
    "status": "verify",
    "note": "Operator lists suite features and a leasing number. Confirm vacancies and tattoo use.",
    "source": "https://www.thestudiosuitesorem.com/portfolio",
    "url": "https://www.thestudiosuitesorem.com/portfolio",
    "phone": "801-602-9416"
  },
  "locket": {
    "status": "verify",
    "note": "Operator advertises tattoo suites and links to a waitlist. No immediate opening is posted.",
    "source": "https://thelocketloft.com/suites/tattooists",
    "url": "https://thelocketloft.com/suites/tattooists",
    "address": "296 S Main St Suite 2"
  },
  "ksl-columbia-1816": {
    "status": "listed",
    "note": "KSL lists it available now with a 6-12 month lease. Men's room. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/1816-Columbia-Lane-Orem-UT-84097/1004678098",
    "tier": "fixed"
  },
  "ksl-center-430": {
    "status": "listed",
    "note": "KSL and Roomies both list it. The owner offers month-to-month. Only the shared men's room is open; private rooms are taken. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/430-Center-Street-Orem-UT-84097/1004629962",
    "tier": "start"
  },
  "ksl-995w-906": {
    "status": "listed",
    "note": "KSL lists it available now with a 6-12 month lease. Gender not stated. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/1030-North-995-West-Apt-906-Orem-UT-84057/1004677134",
    "tier": "fixed"
  },
  "ksl-vineyard-348": {
    "status": "listed",
    "note": "KSL lists a men's private room available now with 4-36 month terms. Same owner also lists it on Roomies and Facebook. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/348-West-410-North-Vineyard-UT-84059/1004646258",
    "tier": "fixed"
  },
  "ksl-380w-1451": {
    "status": "listed",
    "note": "KSL lists two men's rooms available now on a 12-month lease. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/1451-N-380-W.-Provo-UT-84064/1004674199",
    "tier": "fixed"
  },
  "ksl-autumn-blaze": {
    "status": "mismatch",
    "note": "Listed for Nov 27, after your Nov 25 move-in. Hidden by default. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/113-Autumn-Blaze-Drive-Vineyard-UT-84059/1004679915"
  },
  "ksl-pg-1135": {
    "status": "listed",
    "note": "KSL lists it available now, month-to-month. Gender not stated. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/1135-North-100-East-Pleasant-Grove-UT-84062/1004617921",
    "tier": "start"
  },
  "ksl-af-379": {
    "status": "listed",
    "note": "KSL lists rooms available now on a 12-36 month lease. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/379-S-960-W-American-Fork-UT-84003/1004679351",
    "tier": "fixed"
  },
  "ksl-af-368": {
    "status": "listed",
    "note": "KSL lists it available now, month-to-month. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/368-900-West-American-Fork-UT-84003/1004678878",
    "tier": "start"
  },
  "ksl-af-449": {
    "status": "listed",
    "note": "KSL lists it available now on a 6-month contract. Gender not stated. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/449-Willow-Leaf-Road-American-Fork-UT-84003/1004677871",
    "tier": "fixed"
  },
  "ksl-af-577": {
    "status": "listed",
    "note": "KSL lists rooms available now. Current roommates are men. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/577-900-West-American-Fork-UT-84003/1004665175",
    "tier": "fixed"
  },
  "ksl-af-868": {
    "status": "listed",
    "note": "KSL lists men's rooms available now and says month-to-month contracts are available. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/868-W-560-S-American-Fork-UT-84003/1004605488",
    "tier": "start"
  },
  "legend-windsor-120": {
    "status": "listed",
    "note": "Legend lists the private room available Nov 24. Contract text reads \"Now - Aug 13, 2027\". Checked Nov 20, 2026.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/80871",
    "tier": "fixed"
  },
  "legend-riverside-11": {
    "status": "listed",
    "note": "Legend lists the private room available Nov 24. Contract text reads \"Now - Aug 13, 2027\". Checked Nov 20, 2026.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/53208",
    "tier": "fixed"
  },
  "legend-township-6": {
    "status": "mismatch",
    "note": "One block from BYU in the BYU contract area; Legend does not say non-students can sign. Hidden by default. Checked Nov 20, 2026.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/24572"
  },
  "legend-promenade-8": {
    "status": "mismatch",
    "note": "Condo Row by BYU in the BYU contract area; Legend does not say non-students can sign. Hidden by default. Checked Nov 20, 2026.",
    "source": "https://legendrealestate.managebuilding.com/Resident/public/rentals/47830"
  },
  "rentler-state-1675": {
    "status": "listed",
    "note": "Rentler lists the furnished studio available now. Checked Nov 20, 2026.",
    "source": "https://www.rentler.com/places-for-rent/ut/orem/1675-s-state-st/13659984",
    "tier": "check"
  },
  "roomies-1048408": {
    "status": "listed",
    "note": "Roomies lists it available now. Gender not stated. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/1048408",
    "tier": "fixed"
  },
  "roomies-686248": {
    "status": "listed",
    "note": "Roomies lists it available now. Gender not stated. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/686248",
    "tier": "fixed"
  },
  "roomies-1088987": {
    "status": "mismatch",
    "note": "Marketed as student housing and no source says non-students can sign, so it is outside your criteria. CoStar lists Axis with student residency requirements (apartmentfinder.com). Hidden by default. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/1088987"
  },
  "roomies-1082099": {
    "status": "listed",
    "note": "Roomies lists it available now for men. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/1082099",
    "tier": "fixed"
  },
  "roomies-1001487": {
    "status": "listed",
    "note": "Roomies lists it available now, month-to-month, for men. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/1001487",
    "tier": "start"
  },
  "roomies-569985": {
    "status": "listed",
    "note": "Roomies lists it available now. Few photos so far. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/569985",
    "tier": "check"
  },
  "roomies-1067567": {
    "status": "listed",
    "note": "Roomies lists the room but no move-in date. Ask about Nov 25. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/1067567",
    "tier": "fixed"
  },
  "roomies-730762": {
    "status": "listed",
    "note": "Roomies lists it for men with no move-in date. Price differs between the card and the ad text. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/730762",
    "tier": "check"
  },
  "roomies-989809": {
    "status": "listed",
    "note": "Roomies says move-in ASAP. Gender not stated. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/989809",
    "tier": "check"
  },
  "fb-vineyard-360w": {
    "status": "listed",
    "note": "Facebook Marketplace lists it available now. Checked Nov 20, 2026.",
    "source": "https://www.facebook.com/marketplace/item/1383110371549672/",
    "tier": "check"
  },
  "fb-axis-629": {
    "status": "mismatch",
    "note": "Marketed as student housing and no source says non-students can sign, so it is outside your criteria. CoStar lists Axis with student residency requirements (apartmentfinder.com). Hidden by default. Checked Nov 20, 2026.",
    "source": "https://www.facebook.com/marketplace/item/1276698260966533/"
  },
  "fb-orem-600n": {
    "status": "listed",
    "note": "Facebook Marketplace lists it available now for men. Checked Nov 20, 2026.",
    "source": "https://www.facebook.com/marketplace/item/2325037144913307/",
    "tier": "check"
  },
  "fb-promenade-650": {
    "status": "mismatch",
    "note": "Marketed as student housing and no source says non-students can sign, so it is outside your criteria. Promenade brands itself as student housing near UVU (choosepromenade.com). Hidden by default. Checked Nov 20, 2026.",
    "source": "https://www.facebook.com/marketplace/item/1002521186143545/"
  },
  "fb-promenade-men-600": {
    "status": "mismatch",
    "note": "Marketed as student housing and no source says non-students can sign, so it is outside your criteria. Promenade brands itself as student housing near UVU (choosepromenade.com). Hidden by default. Checked Nov 20, 2026.",
    "source": "https://www.facebook.com/marketplace/item/2092376778335480/"
  },
  "fb-freedom-1378": {
    "status": "listed",
    "note": "Facebook Marketplace lists it available now. Checked Nov 20, 2026.",
    "source": "https://www.facebook.com/marketplace/item/1590096378977081/",
    "tier": "check"
  },
  "fb-orem-hombre-650": {
    "status": "listed",
    "note": "Facebook Marketplace lists it available now for men. Exact address not posted. Checked Nov 20, 2026.",
    "source": "https://www.facebook.com/marketplace/item/1312081331102362/",
    "tier": "check"
  },
  "fb-provo-700n-56": {
    "status": "listed",
    "note": "Facebook Marketplace lease sale. Confirm the move-in date. Checked Nov 20, 2026.",
    "source": "https://www.facebook.com/marketplace/item/2822623974789528/",
    "tier": "fixed"
  },
  "fb-af-rockwell": {
    "status": "listed",
    "note": "Facebook Marketplace listing. Move-in date not shown. Checked Nov 20, 2026.",
    "source": "https://www.facebook.com/marketplace/item/1304960348152266/",
    "tier": "check"
  },
  "cl-axis-hub-549": {
    "status": "mismatch",
    "note": "The ad itself calls it a student apartment. CoStar lists Axis with student residency requirements (apartmentfinder.com). Hidden by default. Checked Nov 20, 2026.",
    "source": "https://www.craigslist.org/view/d/vineyard-lease-takeover-private-room/uggUoXnVQm62ifFqS2eUnB"
  },
  "cl-provo-1160w": {
    "status": "listed",
    "note": "Craigslist lists it available now. Checked Nov 20, 2026.",
    "source": "https://www.craigslist.org/view/d/provo-private-room-in-basement-apartment/FhvNKkXk8RGUaeGtN3ynxg",
    "tier": "check"
  },
  "cl-vineyard-springwater": {
    "status": "listed",
    "note": "Craigslist lists it available now. Checked Nov 20, 2026.",
    "source": "https://www.craigslist.org/view/d/orem-furnished-private-room-shared/wCeB2cLj8RG-TrnedBqzlQ",
    "tier": "check"
  },
  "roomies-967731": {
    "status": "mismatch",
    "note": "Marketed as student housing and no source says non-students can sign, so it is outside your criteria. The Green on Campus Drive is student housing. Hidden by default. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/967731"
  },
  "roomies-1005586": {
    "status": "mismatch",
    "note": "Marketed as student housing and no source says non-students can sign, so it is outside your criteria. Listed as Summerwood Student Living (forrentuniversity.com). Hidden by default. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/1005586"
  },
  "roomies-1008518": {
    "status": "listed",
    "note": "Roomies lists it available now for men. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/1008518",
    "tier": "check"
  },
  "roomies-923856": {
    "status": "listed",
    "note": "Roomies lists it available now for men, 4-month minimum. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/923856",
    "tier": "fixed"
  },
  "ksl-1004598531": {
    "status": "listed",
    "note": "KSL lists a men's room available now with 1-36 month terms (also on Roomies). Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/1986-North-3930-West-Lehi-UT-84043/1004598531",
    "tier": "start"
  },
  "roomies-613054": {
    "status": "listed",
    "note": "Roomies lists it available now with a 6-month lease. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/613054",
    "tier": "fixed"
  },
  "roomies-1105206": {
    "status": "listed",
    "note": "Roomies lists it available now. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/1105206",
    "tier": "check"
  },
  "roomies-1100249": {
    "status": "listed",
    "note": "Roomies lists it available now. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/1100249",
    "tier": "check"
  },
  "roomies-1075791": {
    "status": "listed",
    "note": "Roomies lists it available now, 6-48 month terms. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/1075791",
    "tier": "fixed"
  },
  "ksl-1004679038": {
    "status": "listed",
    "note": "KSL lists it available now with a 6-12 month lease. Gender not stated. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/1167-North-500-West-Lehi-UT-84043/1004679038",
    "tier": "fixed"
  },
  "ksl-1004662689": {
    "status": "listed",
    "note": "KSL ad title says available immediately; 6-12 month lease. Checked Nov 20, 2026.",
    "source": "https://homes.ksl.com/rent/detail/570-West-2375-North-Lehi-UT-84043/1004662689",
    "tier": "fixed"
  },
  "roomies-368047": {
    "status": "listed",
    "note": "Roomies lists it for men with no move-in date. Ask about Nov 25. Checked Nov 20, 2026.",
    "source": "https://www.roomies.com/rooms/368047",
    "tier": "fixed"
  }
};
