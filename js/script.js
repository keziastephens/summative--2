console.log('linked');


// ===================================================================
// start of query selectors
// ===================================================================

const submitByn = document.querySelector('#submitBtn');
// const searchFilter = document.querySelector('#searchFilter');


// ===================================================================
// end of query selectors
// ===================================================================





// ===================================================================
// start of arrays
// ===================================================================

let objectArray = [
    // ===================================================================
    // start of hanmer springs arrays
    // ===================================================================

    {
        id: 101,
        type: 'Hotel',
        location: 'Hanmer Springs, NZ',
        name: 'Hanmer Springs Hotel',
        people: '1-2',
        minPeople: 1,
        maxPeople: 2,
        nights: 'Min 1 - Max 5',
        minNight: 1,
        maxNight: 5,
        price: 157,
        wifi: 'yes', 
        image: '../img/hotels/hanmer-01.jpg',
        imageTwo: '../img/hotels/hanmer-02.jpg',
        imageThree: '../img/hotels/hanmer-03.jpg',
        imageFour: '../img/hotels/hanmer-04.jpg',
        imageFive: '../img/hotels/hanmer-05.jpg',
        imageSix: '../img/hotels/hanmer-06.jpeg',
        longitude: -42.520532551319555,
        latitude: 172.83025672678912,
        address: '1 Conical Hill, Hanmer Springs 7334',
        info: `Set among mature trees and surrounded by the Southern Alps, this beautifully restored local landmark has been transformed into a resort with outdoor swimming pool, tennis and petanque courts. Guests enjoy free WiFi.

        Guests at Hanmer Springs Hotel can choose from a range of accommodations options from hotel rooms to self-contained villas. Free car parking is available.
        
        Hanmer Springs Hotel has an elegant restaurant and bar with high ceilings in the dining room, plus local wines and cuisine. The restaurant features a roaring fire in winter, or al fresco dining in summer.
        
        The Hanmer Springs Thermal Reserve is a 5-minute walk from the hotel. The property is a 90-minute drive from Christchurch.
        
        Guides can be organized for hunting and fishing trips. Other activities within the area include golf, white water rafting, mountain biking, snow skiing, and jet boating. `
    },
    {
        id: 102,
        type: 'Hostel',
        location: 'Hanmer Springs, NZ',
        name: 'Kakapo Lodge Backpackers',
        people: '1',
        minPeople: 1,
        maxPeople: 1,
        nights: 'Min 1 - Max 10',
        minNight: 1,
        maxNight: 10,
        price: 30,
        wifi: 'no',
        image: '../img/hostels/kakapo-01.jpg',
        imageTwo: '../img/hostels/kakapo-02.jpg',
        imageThree: '../img/hostels/kakapo-03.jpg',
        imageFour: '../img/hostels/kakapo-04.jpg',
        imageFive: '../img/hostels/kakapo-05.jpg',
        imageSix: '../img/hostels/kakapo-06.jpg',
        longitude: -42.525790748940395,
        latitude: 172.82850799795324,
        address: '14 Amuri Avenue, Hanmer Springs 7334',
        info: `This two-story purpose-built backpacker hostel features modern rooms, an open lounge with warm fireplace, and a relaxed, friendly atmosphere. Enjoy our spacious, well-appointed backpacker accommodation, movie hire, 1GB free WiFi daily, large kitchen, outdoor courtyard with views of the Southern Alps, and friendly hostel dog.

        Just three minutes' walk from the town's main attraction, Hanmer Springs Thermal Pools and Spa, and a pleasant stroll to numerous restaurants and stores, this hostel is great base to enjoy your relaxing Hanmer getaway.
        
        All ensuite accommodation has free towels as well as free soap and shampoo.`
    },
    {
        id: 103,
        type: 'Motel',
        location: 'Hanmer Springs, NZ',
        name: 'The Chalets Motel',
        people: '2-4',
        minPeople: 2,
        maxPeople: 4,
        nights: 'Min 3 - Max 10',
        minNight: 3,
        maxNight: 10,
        price: 90,
        wifi: 'yes',
        image: '../img/motels/chalets-01.jpg',
        imageTwo: '../img/motels/chalets-02.jpg',
        imageThree: '../img/motels/chalets-03.jpg',
        imageFour: '../img/motels/chalets-04.jpg',
        imageFive: '../img/motels/chalets-05.jpg',
        imageSix: '../img/motels/chalets-06.jpg',
        longitude: -42.51871342418204,
        latitude: 172.824080697953,
        address: '56 Jacks Pass Road, Hanmer Springs 7334',
        tags: ['motel', 'queenstown', 'colonial', 'colonial village', 'colonial village motel', 'village'],
        info: `The Chalets Motel offers charming self-contained cottages with scenic mountain views. Featuring a DVD library, it is just 601 m from hot pools and Hanmer Springs’ village center.

        Heated chalets feature wood paneling and come with full kitchen. They offer parking space, a DVD player and comfortable lounge areas.
        
        For leisure, mountain biking and rafting trips can be arranged at the tour desk. Other facilities include a garden, barbecue areas and a children’s playground.`
    },
    {
        id: 104,
        type: 'House',
        location: 'Hanmer Springs, NZ',
        name: 'Riverview Cottage',
        people: '1-4',
        minPeople: 1,
        maxPeople: 4,
        nights: 'Min 2 - Max 15',
        minNight: 2,
        maxNight: 15,
        price: 240,
        wifi: 'yes',
        image: '../img/houses/riverview-01.jpeg',
        imageTwo: '../img/houses/riverview-02.jpeg',
        imageThree: '../img/houses/riverview-03.jpeg',
        imageFour: '../img/houses/riverview-04.jpeg',
        imageFive: '../img/houses/riverview-05.jpeg',
        imageSix: '../img/houses/riverview-06.jpeg',
        longitude: -42.58037366550216,
        latitude: 172.78424810322687,
        address: '750 Hanmer Springs Road, Highway, Hanmer Springs 7334',
        info: `A cosy and spacious 1 Bedroom Cottage with lovely garden & mountain views. Free Continental self service breakfast. Kitchen has cooking elements, microwave, fridge/freezer-open plan with lounge area. Sky TV, free Wifi, a deck with great views. Bedroom is roomy-Queen bed, large bathroom with
        shower & spa bath. Located on main route to Hanmer Springs, just over the Waiau Ferry Bridge. The Cottage is ideal for couples, solo adventurers, and the business traveler.`
    },


    // ===================================================================
    // end of hanmer springs arrays
    // ===================================================================



    // ===================================================================
    // start of mt hutt arrays
    // ===================================================================
    
    {
        id: 105,
        type: 'Hotel',
        location: 'Mt Hutt, NZ',
        name: 'Terrace Downs Resort',
        people: '1-2',
        minPeople: 1,
        maxPeople: 2,
        nights: 'Min 1 - Max 5',
        minNight: 1,
        maxNight: 5,
        price: 157,
        wifi: 'yes', 
        image: '../img/hotels/terrace-01.jpg',
        imageTwo: '../img/hotels/terrace-02.jpg',
        imageThree: '../img/hotels/terrace-03.jpg',
        imageFour: '../img/hotels/terrace-04.jpg',
        imageFive: '../img/hotels/terrace-05.jpg',
        imageSix: '../img/hotels/terrace-06.jpg',
        longitude: -43.49897589664995,
        latitude: 171.6491313044863,
        address: '623 Coleridge Road, Windwhistle 7572',
        info: `Situated in the picturesque Canterbury high country, Terrace Downs Resort features all day dining, an 18 hole golf course and a range of outdoor activities. The villas have open-plan living spaces with gas fires. Guests can enjoy free on-site parking.

        The cafe serves a menu of local produce and offers panoramic views of the mountains from breakfast to evening meals.
        
        Terrace Downs Resort also has tennis courts and a fitness centre onsite.
        
        Local activities near Terrace Downs include jet boating, clay-bird shooting, archery, mountain biking, golfing, quad biking, four-wheel-driving and fishing.`
    },
    {
        id: 106,
        type: 'Hostel',
        location: 'Mt Hutt, NZ',
        name: 'Big Tree Lodge Methven',
        people: '1',
        minPeople: 1,
        maxPeople: 1,
        nights: 'Min 1 - Max 10',
        minNight: 1,
        maxNight: 10,
        price: 30,
        wifi: 'no',
        image: '../img/hostels/tree-01.jpg',
        imageTwo: '../img/hostels/kakapo-02.jpeg',
        imageThree: '../img/hostels/kakapo-03.jpeg',
        imageFour: '../img/hostels/kakapo-04.jpeg',
        imageFive: '../img/hostels/kakapo-05.jpeg',
        imageSix: '../img/hostels/kakapo-06.jpeg',
        longitude: -43.63581876794095,
        latitude: 171.64346558928645,
        address: '25 South Belt, Methven 7730',
        info: `Located in Methven, Big Tree Lodge Methven is a colonial villa and former vicarage, offering free Wi-Fi and free bicycle hire. Guests can prepare a meal in the shared kitchen or socialise in the shared lounge.
        
        Big Tree Lodge is a 3-minute drive from Methven Golf Course. It is a 40-minute drive from Mt Hutt Ski Resort and a 70-minute drive from Christchurch Airport.
        
        This budget-style accommodation offers rooms with free towels, linen and access to shared bathroom facilities. Some rooms feature heating, a kitchenette or a flat-screen TV with a DVD player.
        
        Guests can relax by the log fire in the shared lounge, offering a selection of books, games and DVDs. Other facilities include free secure ski storage, BBQ facilities and a guest laundry. Mountain and airport transfers can be arranged in advance.`
    },
    {
        id: 107,
        type: 'Motel',
        location: 'Mt Hutt, NZ',
        name: 'Mount Hutt Motel',
        people: '2-4',
        minPeople: 2,
        maxPeople: 4,
        nights: 'Min 3 - Max 10',
        minNight: 3,
        maxNight: 10,
        price: 90,
        wifi: 'yes',
        image: '../img/motels/mthutt-01.jpg',
        imageTwo: '../img/motels/mthutt-02.jpg',
        imageThree: '../img/motels/mthutt-03.jpg',
        imageFour: '../img/motels/mthutt-04.jpg',
        imageFive: '../img/motels/mthutt-05.jpg',
        imageSix: '../img/motels/mthutt-06.jpg',
        longitude: -43.62738085963577,
        latitude: 171.64752576915285,
        address: '205 Main Street, 7730 Methven, New Zealand',
        tags: ['motel', 'queenstown', 'colonial', 'colonial village', 'colonial village motel', 'village'],
        info: `Mount Hutt Motels is located in Methven and features a grass tennis court. The motel features free WiFi, parking and barbecue facilities.

        All units feature a well equipped kitchen, bathroom, dining and lounge area, flat-screen TV and DVDs. Each unit has parking at their door and a patio setting looking onto manicured lawns and award winning gardens.
        
        There is a children play area with a trampoline.
        
        The property is a 1-minute drive from supermarkets, shops and restaurants. Mount Hutt Motel is 10 minutes' drive from the base of Mt Hutt and a 1 hour drive to Christchurch International Airport. `
    },
    {
        id: 108,
        type: 'House',
        location: 'Mt Hutt, NZ',
        name: 'Montrose Estate',
        people: '1-4',
        minPeople: 1,
        maxPeople: 4,
        nights: 'Min 2 - Max 15',
        minNight: 2,
        maxNight: 15,
        price: 240,
        wifi: 'yes',
        image: '../img/houses/montrose-01.jpg',
        imageTwo: '../img/houses/montrose-02.jpg',
        imageThree: '../img/houses/montrose-03.jpg',
        imageFour: '../img/houses/montrose-04.jpg',
        imageFive: '../img/houses/montrose-05.jpg',
        imageSix: '../img/houses/montrose-06.jpg',
        longitude: -43.47687674722087,
        latitude: 171.5891827539711,
        address: '592 Blackford Road, Rakaia Gorge RD12, 7782',
        info: `Set on the base of Mount Hutt ski area, on 750 acres of prime riverfront land, Montrose Estate provides 3 chalets offering self-contained, luxury accommodations overlooking the Rakaia River, mountain ranges and a 5-acre lake.

        All chalets feature a separate kitchen, dining and living area with a balcony overlooking the stunning scenery. Free WiFi and cable channels are provided. There is a private bath in each and all linen is included. Some chalets have a hot tub.`
    },


    // ===================================================================
    // end of mt hutt arrays
    // ===================================================================



    // ===================================================================
    // start of queenstown arrays
    // ===================================================================

    {
        id: 109,
        type: 'Hotel',
        location: 'Queenstown, NZ',
        name: 'Heritage Hotel',
        people: '1-2',
        minPeople: 1,
        maxPeople: 2,
        nights: 'Min 1 - Max 5',
        minNight: 1,
        maxNight: 5,
        price: 157,
        wifi: 'yes', 
        image: '../img/hotels/heritage-01.jpg',
        imageTwo: '../img/hotels/heritage-02.jpg',
        imageThree: '../img/hotels/heritage-03.jpg',
        imageFour: '../img/hotels/heritage-04.jpg',
        imageFive: '../img/hotels/heritage-05.jpg',
        imageSix: '../img/hotels/heritage-06.jpg',
        longitude: -45.03705503488247, 
        latitude: 168.64221621662745,
        address: '91 Fernhill Road, Queenstown 9300',
        info: `You can enjoy soaking in the view of the Remarkables mountain range, rising from the waters of Lake Wakatipu, from the comfort of Heritage Queenstown. Crafted from centuries-old stone and cedar, this sophisticated hotel is suitable for business and leisure stays and boasts stunning views over Lake Wakatipu and Queenstown. It is located within a 5-minute drive from the town centre.

        It features an outdoor swimming pool, spa pool, fitness centre and sauna, and an elegant restaurant. Guests enjoy unlimited complimentary WiFi.
        
        Heritage Queenstown offers modern, alpine-style accommodation in peaceful, scenic surroundings. Accommodation choices include Deluxe hotel rooms with options for families, 2-bedroom apartments and large open-plan studio suites.
        
        The property is a 10-minute drive from Shotover River. It is 13 minutes' drive from Queenstown International Airport.`
    },
    {
        id: 110,
        type: 'Hostel',
        location: 'Queenstown, NZ',
        name: 'Adventure Hostel',
        people: '1',
        minPeople: 1,
        maxPeople: 1,
        nights: 'Min 1 - Max 10',
        minNight: 1,
        maxNight: 10,
        price: 30,
        wifi: 'no',
        image: '../img/hostels/adventure-01.jpeg',
        imageTwo: '../img/hostels/adventure-02.jpeg',
        imageThree: '../img/hostels/adventure-03.jpeg',
        imageFour: '../img/hostels/adventure-04.jpeg',
        imageFive: '../img/hostels/adventure-05.jpeg',
        imageSix: '../img/hostels/adventure-06.jpeg',
        longitude: -45.03109706843424, 
        latitude: 168.6607642700365,
        address: '36 Camp Street, Queenstown 9300',
        info: `Situated in Queenstown and with Skyline Gondola and Luge reachable within less than 1 km, Adventure Queenstown Hostel features a tour desk, non-smoking rooms, free bikes, free WiFi throughout the property and a shared lounge. Boasting barbecue facilities, the hostel is close to several noted attractions, around 500 m from Fear Factory Queenstown, 800 m from Queenstown Chamber Of Commerce and less than 1 km from Queenstown Lakes District Library. The accommodation provides evening entertainment and a shared kitchen.

        The hostel offers a sun terrace.
        
        Queenstown Event Centre is 7 km from Adventure Queenstown Hostel, while Lake Wakatipu is 250 m from the property. The nearest airport is Queenstown Airport, 8 km from the accommodation.`
    },
    {
        id: 111,
        type: 'Motel',
        location: 'Queenstown, NZ',
        name: 'Colonial Village Motel',
        people: '2-4',
        minPeople: 2,
        maxPeople: 4,
        nights: 'Min 3 - Max 10',
        minNight: 3,
        maxNight: 10,
        price: 90,
        wifi: 'yes',
        image: '../img/motels/colonial-01.jpg',
        imageTwo: '../img/motels/colonial-02.jpg',
        imageThree: '../img/motels/colonial-03.jpg',
        imageFour: '../img/motels/colonial-04.jpg',
        imageFive: '../img/motels/colonial-05.jpg',
        imageSix: '../img/motels/colonial-06.jpg',
        longitude: -45.033658410996054,
        latitude: 168.67620516931336,
        address: '136 Frankton Road, Queenstown 9300',
        tags: ['motel', 'queenstown', 'colonial', 'colonial village', 'colonial village motel', 'village'],
        info: `Boasting rooms with stunning mountain and lake views, Colonial Village Motel is just a 5-minute walk from Lake Wakatipu. Free parking is available.

        A fully equipped kitchenette with a stove, microwave and fridge is standard in all rooms apart from the Two Bedroom which includes a full kitchen and oven. After a day out you can relax on the terrace or watch TV.
        
        Central Queenstown is just a 10-minute walk and Skycity Casino is a 20-minute walk away. Bring your bicycle and enjoy a ride around Lake Wakatipu where you can stop for a coffee at the Frankston Marina.
        
        The tour desk can help organise activities such as skydiving, bungee jumping and jet boating. Colonial Village Motel has a bus stop right outside.`
    },
    {
        id: 112,
        type: 'House',
        location: 'Queenstown, NZ',
        name: 'Modbox Rua',
        people: '1-4',
        minPeople: 1,
        maxPeople: 4,
        nights: 'Min 2 - Max 15',
        minNight: 2,
        maxNight: 15,
        price: 240,
        wifi: 'yes',
        image: '../img/houses/modbox-01.jpg',
        imageTwo: '../img/houses/modbox-02.jpg',
        imageThree: '../img/houses/modbox-03.jpg',
        imageFour: '../img/houses/modbox-04.jpg',
        imageFive: '../img/houses/modbox-05.jpg',
        imageSix: '../img/houses/modbox-06.jpg',
        longitude: -45.01925336056335, 
        latitude: 168.70922560639272,
        address: '21 Perkins Road, Frankton, Queenstown 9300',
        info: `This brand new, 2 bedroom property is perfectly nestled on Queenstown Hill. Enjoy uninterrupted views of Lake Wakatipu and The Remarkables mountain range. Located on a quiet street, with floor to ceiling windows this property is ultra private and comfortable.
        
        This property is located conveniently close to Queenstown CBD and the airport. Perfect for couples or small groups who want to enjoy Queenstown in luxury and style - but with the comforts of a well thought out holiday home.        
        
        FEATURES
        • 2 bedrooms
        • 1 bathroom
        • Fully functional modern kitchen
        • Open plan living area
        • Breakfast bench with 4 seats
        • Freeview TV in the living area and master bedroom
        • Apple TV with Netflix account
        • Ultra fast, unlimited Fibre internet
        • Heat pump and bedroom heaters
        • Off street parking (plenty)
        • Washing machine and dryer
        • Ski/snowboard drying room`
    },

    // ===================================================================
    // end of queenstown arrays
    // ===================================================================




    // ===================================================================
    // start of wanaka arrays
    // ===================================================================
    {
        id: 113,
        type: 'Hotel',
        location: 'Wanaka, NZ',
        name: 'Edgewater Hotel',
        people: '1-2',
        minPeople: 1,
        maxPeople: 2,
        nights: 'Min 1 - Max 5',
        minNight: 1,
        maxNight: 5,
        price: 157,
        wifi: 'yes',
        image: '../img/hotels/edgewater-01.jpg',
        imageTwo: '../img/hotels/edgewater-02.jpg',
        imageThree: '../img/hotels/edgewater-03.jpg',
        imageFour: '../img/hotels/edgewater-04.jpg',
        imageFive: '../img/hotels/edgewater-05.jpg',
        imageSix: '../img/hotels/edgewater-06.jpg',
        longitude: -44.69409967568055, 
        latitude: 169.11240812698765,
        address: 'Sargood Drive, 9305 Wanaka, New Zealand',
        info: `Edgewater is located on the edge of Lake Wanaka, only 2 km from Wanaka town centre. The property offers picturesque lake views, a day spa, a sauna and a tennis court. Staff are able to converse in English and Chinese.

        The hotel has a restaurant and a café, both offering lake views. Guests can enjoy great New Zealand cuisine and a wide range of regional wines. Chinese options for breakfast are available.
        
        Element Edgewater Day Spa is located on-site with stunning views of Lake Wanaka and the surrounding Mountains. It offers a variety of massage, beauty and spa treatments. Kayaking on the lake can be arranged, as well as mountain biking in the surrounding countryside. There is also an on-site children's playground for entertainment.`
    },
    {
        id: 114,
        type: 'Hostel',
        location: 'Wanaka, NZ',
        name: 'Wanaka Bakpaka Hostel',
        people: '1',
        minPeople: 1,
        maxPeople: 1,
        nights: 'Min 1 - Max 10',
        minNight: 1,
        maxNight: 10,
        price: 30,
        wifi: 'no',
        image: '../img/hostels/bakpaka-01.jpg',
        imageTwo: '../img/hostels/bakpaka-02.jpg',
        imageThree: '../img/hostels/bakpaka-03.jpg',
        imageFour: '../img/hostels/bakpaka-04.jpg',
        imageFive: '../img/hostels/bakpaka-05.jpg',
        imageSix: '../img/hostels/bakpaka-06.jpg',
        longitude: -44.68901414566924,
        latitude: 169.1323944380868,
        address: '117 Lakeside Road, Wanaka 9305',
        info: `Wanaka Bakpaka offers quality budget backpacker accommodation for the independent traveler. We are the only hostel in Wanaka located right on the lakeside giving you spectacular picture postcard views of Lake Wanaka and the Southern Alps. Away from the town hustle but still only a 5 minute lakeside stroll to the centre for shopping, cafes, bars and restaurants.`
    },
    {
        id: 115,
        type: 'Motel',
        location: 'Wanaka, NZ',
        name: 'Aspiring Lodge Motel',
        people: '2-4',
        minPeople: 2,
        maxPeople: 4,
        nights: 'Min 3 - Max 10',
        minNight: 3,
        maxNight: 10,
        price: 90,
        wifi: 'yes',
        image: '../img/motels/aspiring-01.jpg',
        imageTwo: '../img/motels/aspiring-02.jpg',
        imageThree: '../img/motels/aspiring-03.jpg',
        imageFour: '../img/motels/aspiring-04.jpg',
        imageFive: '../img/motels/aspiring-05.jpg',
        imageSix: '../img/motels/aspiring-06.jpg',
        longitude: -45.033658410996054,
        latitude: 168.67620516931336,
        address: '136 Frankton Road, Queenstown 9300',
        tags: ['motel', 'queenstown', 'colonial', 'colonial village', 'colonial village motel', 'village'],
        info: `Featuring panoramic views of the surrounding mountains, Aspiring Lodge Motel offers accommodations with a balcony or a private courtyard.

        Located right in the center of Wanaka, this motel is a 30-minute drive from the Cardrona and Treble Cone ski fields. Lake Wanaka is only 100 m away.
        
        All rooms and apartments at Aspiring Lodge Wanaka offer free WiFi, a refrigerator and a hairdryer. All include heating and electric blankets. Cooking facilities are available in some units.
        
        Free newspapers are available on request and free, secure off-street parking is provided.
        
        A selection of restaurants, cafes and shops are on the doorstep.`
    },
    {
        id: 116,
        type: 'House',
        location: 'Wanaka, NZ',
        name: 'Mount Iron Cabin',
        people: '1-4',
        minPeople: 1,
        maxPeople: 4,
        nights: 'Min 2 - Max 15',
        minNight: 2,
        maxNight: 15,
        price: 240,
        wifi: 'yes',
        image: '../img/houses/iron-01.jpg',
        imageTwo: '../img/houses/iron-02.jpg',
        imageThree: '../img/houses/iron-03.jpg',
        imageFour: '../img/houses/iron-04.jpg',
        imageFive: '../img/houses/iron-05.jpg',
        imageSix: '../img/houses/iron-06.jpg',
        longitude: -44.68377088552741,
        latitude: 169.16160126931402,
        address: '1 Weatherall Close, Wanaka 9305',
        info: `Mount Iron Cabin is a newly crafted stand-alone chalet on the side of Mount Iron, Wanaka. Built to soak up the sun and capture the mountain vistas this bespoke private chalet will be your base for adventure and/or pure relaxation. Nestled in a Kanuka glade, enjoy stargazing from the outdoor double bath and continue the stargazing in your plush bed with skylight above.

        Located on a quiet private road 5 minutes from central Wanaka this elevated chalet provides magnificent views and reconnects you with nature. Find refuge and be completely relaxed here, recharge ready for Wanaka’s adrenaline filled activities which are just minutes away. Walk out the door and its a mere 100m to the popular Mt Iron track, or bike down the hill and access one of the many interconnecting bike trails that Wanaka has to offer. Only 3 km from the Cabin and you can be on the shores of both Lake Wanaka and the Clutha River. You can immerse yourself in this beautiful arena that is Wanaka and Mount Aspiring National Park and then soak in a hot bath at the end of the day, stargaze and enjoy the privacy that Mount Iron Cabin has to offer. 
        `
    }

    // ===================================================================
    // end of wanaka arrays
    // ===================================================================

];

// ===================================================================
// end of arrays
// ===================================================================






// ===================================================================
// start of user input function
// ===================================================================


function userSubmit(event){
    event.preventDefault();
    
    let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    let msDay = 1000 * 3600 * 24;

    
    const checkInDate = new Date($('#checkInDate').val());
    const checkOutDate = new Date($('#checkOutDate').val());
    console.log(checkInDate);

    
    let checkInDay = checkInDate.getDate(),
        checkInMonth = checkInDate.getMonth(),
        checkInYear = checkInDate.getFullYear(),
        checkOutDay = checkOutDate.getDate(),
        checkOutMonth = checkOutDate.getMonth(),
        checkOutYear = checkOutDate.getFullYear();


    let checkInDetails = [checkInDay,checkInMonth,checkInYear].join('/');
    let checkOutDetails = [checkOutDay,checkOutMonth,checkOutYear].join('/');
    console.log(checkInDetails);
    console.log(checkOutDetails);
    console.log(checkInDate, checkOutDate);


    if ( (checkInDate == 'Invalid Date') || (checkOutDate == 'Invalid Date') ){
        alert('Please enter check in and check out dates');
    } else if( checkInDate.getTime() >= checkOutDate.getTime() ){
        alert('check out day cant be before check in date');
    } else{
        $('#introPage').hide(); 
        // $('#acommodation-container').show();
    }


   let difference = checkOutDate.getTime() - checkInDate.getTime();
   console.log(difference);

   let dayDifference = difference/msDay;
   console.log(dayDifference);

   let valueOfPeople = ($("#valueOfPeople").val());
   console.log(valueOfPeople);

   displayOptions(dayDifference, valueOfPeople);


};




// ===================================================================
// end of user input function
// ===================================================================





// ===================================================================
// start of card displaying function
// ===================================================================

function displayOptions(nights, guests){
        console.log(nights);
        console.log(guests);
        $('#acommodationCardContainer').empty();
    for(let i = 0; i < objectArray.length; i++){
        if( ((nights >= objectArray[i].minNight) && (nights <= objectArray[i].maxNight) && (guests >= objectArray[i].minPeople) && (guests <= objectArray[i].maxPeople)) ){
            generateCard(i)
        };
    }
}



// ===================================================================
// start of card displaying function
// ===================================================================








// ===================================================================
// start of modal function
// ===================================================================


// function modal(){
//     $('.card').click(function(){
//         let i = 0;
//         for(i = 0; i < objectArray.length; i++){
//             if((this.id == objectArray[i].id){
//                 $("#modalHeader")
//             }
//         }
//     });
// }





// ===================================================================
// end of modal function
// ===================================================================











// ===================================================================
// start of generate card container
// ===================================================================

function generateCard(x){
    $('#acommodationCardContainer').append(
        `
        <div id="${objectArray[x].id}" class="card">
            <img src="${objectArray[x].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="card-body__left">
                    <h5 class="card-title">${objectArray[x].name}</h5>
                    <p class="card-text">${objectArray[x].location}</p>
                </div>
                <div class="card-body__right">
                    <h5 class="card-title">$${objectArray[x].price} NZD <br> Per Night</h5>
                </div>
            </div>
        </div>
        `    
    )
};

// ===================================================================
// end of generate card container
// ===================================================================



submitBtn.addEventListener('click', userSubmit);
