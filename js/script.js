console.log('linked');


let script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key +'&callback=initMap&libraries=places&v=weekly" async defer >';
// global variables
let checkInDate,checkOutDate;
let map;
let markers =[];

function initMap(){
    let newZealand = {lat: -39.72496035524508, lng: 175.58280932991102};
        $("#checkInDate").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        minDate: new Date(),
        maxDate: "+1y",
        onSelect: function(date){
            let selectDate = new Date(date);
            let msInADay = 86400000;
            let stDate = new Date(selectDate.getTime() + msInADay);

            $('#checkOutDate').datepicker('option', 'minDate', stDate);
            let endDate = new Date(selectDate.getTime() + 15 * msInADay)

            $('#checkOutDate').datepicker('option', 'maxDate', endDate)
            console.log(date)
            checkInDate = date;
            window.checkInGlobal = date;

            let checkInDateTest = new Date($('#checkInDate').val());
            let checkOutDateTest = new Date($('#checkOutDate').val());

            let checkInDay = checkInDateTest.getDate();
            let checkInMonth = checkInDateTest.getMonth();
            let checkInYear = checkInDateTest.getFullYear();
            let checkOutDay = checkOutDateTest.getDate();
            let checkOutMonth = checkOutDateTest.getMonth();
            let checkOutYear = checkOutDateTest.getFullYear();

            let checkInDetails = [checkInDay, checkInMonth, checkInYear].join('-');
            console.log(checkInDetails);

            
            let checkOutDetails = [checkOutDay, checkOutMonth, checkOutYear].join('-');
            console.log(checkOutDetails);
            console.log(checkOutDateTest)
        }
    });

        
        $("#checkOutDate").datepicker({
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            // checkOutDetails = outDate;
            // window.checkOutGlobal = outDate;

        });

   

    map = new google.maps.Map(document.getElementById('mapContainer'),{
        zoom: 8,
        // center: myLatLng,
        center: newZealand 
    });

 


    // let latitude = objectArray[i].latitude;
    // let longitude = objectArray[i].longitude;
    // setMarkers(map);




};
// global create lat and lng variables

let longitude;
let latitude;



    // console.log(myLatLng);



$(document).ready(function(){
    $('body').append(script);
// })




// ===================================================================
// start of query selectors
// ===================================================================

const confirmBooking = document.querySelector("#confirmBooking");
const submitBtn = document.querySelector("#submitBtn");
// const searchFilter = document.querySelector("#searchFilter");
// const refreshButton = document.querySelector("#refresh")
// const confirmBooking = document.querySelector("#confirmBooking")



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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',
        parking: 'Parking Avaliable',
        tv: 'Comes with TV',
        bathroom: 'Own bathroom',
        dinner: 'Offers dinner meals',
        offersDinner: 'yes', 
        image: './img/hotels/hanmer-01.jpg',
        imageTwo: './img/hotels/hanmer-02.jpg',
        imageThree: './img/hotels/hanmer-03.jpg',
        imageFour: './img/hotels/hanmer-04.jpg',
        imageFive: './img/hotels/hanmer-05.jpg',
        imageSix: './img/hotels/hanmer-06.jpeg',
        longitude: -42.520532551319555,
        latitude: 172.83025672678912,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '1 Conical Hill, Hanmer Springs 7334',
        tags: ['hotel', 'hanmer', 'hanmer springs', 'hanmer springs hotel'],
        info: `Set among mature trees and surrounded by the Southern Alps, this beautifully restored local landmark has been transformed into a resort with outdoor swimming pool, tennis and petanque courts. Guests enjoy free WiFi.
        <br>
        <br>
        Guests at Hanmer Springs Hotel can choose from a range of accommodations options from hotel rooms to self-contained villas. Free car parking is available.
        <br>
        <br>
        Hanmer Springs Hotel has an elegant restaurant and bar with high ceilings in the dining room, plus local wines and cuisine. The restaurant features a roaring fire in winter, or al fresco dining in summer.
        <br>
        <br>
        The Hanmer Springs Thermal Reserve is a 5-minute walk from the hotel. The property is a 90-minute drive from Christchurch.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Bunk beds and double beds',
        parking: 'On Road Parking',
        tv: 'Shared lounge',
        bathroom: 'Shared bathroom',
        dinner: 'Shared kitchen',
        offersDinner: 'no', 
        image: './img/hostels/kakapo-01.jpg',
        imageTwo: './img/hostels/kakapo-02.jpg',
        imageThree: './img/hostels/kakapo-03.jpg',
        imageFour: './img/hostels/kakapo-04.jpg',
        imageFive: './img/hostels/kakapo-05.jpg',
        imageSix: './img/hostels/kakapo-06.jpg',
        longitude: -42.525790748940395,
        latitude: 172.82850799795324,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '14 Amuri Avenue, Hanmer Springs 7334',
        tags: ['hostel', 'hanmer', 'hanmer springs', 'kakapo', 'lodge', 'kakapo lodge', 'backpackers', 'kakapo lodge backpackers'],
        info: `This two-story purpose-built backpacker hostel features modern rooms, an open lounge with warm fireplace, and a relaxed, friendly atmosphere. Enjoy our spacious, well-appointed backpacker accommodation, movie hire, 1GB free WiFi daily, large kitchen, outdoor courtyard with views of the Southern Alps, and friendly hostel dog.
        <br>
        <br>
        Just three minutes' walk from the town's main attraction, Hanmer Springs Thermal Pools and Spa, and a pleasant stroll to numerous restaurants and stores, this hostel is great base to enjoy your relaxing Hanmer getaway.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',        
        parking: 'On Road Parking',
        tv: 'Comes with TV',
        bathroom: 'Own bathroom',
        dinner: 'Small kitchen area',
        offersDinner: 'no', 
        image: './img/motels/chalets-01.jpg',
        imageTwo: './img/motels/chalets-02.jpg',
        imageThree: './img/motels/chalets-03.jpg',
        imageFour: './img/motels/chalets-04.jpg',
        imageFive: './img/motels/chalets-05.jpg',
        imageSix: './img/motels/chalets-06.jpg',
        longitude: -42.51871342418204,
        latitude: 172.824080697953,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '56 Jacks Pass Road, Hanmer Springs 7334',
        tags: ['motel', 'hanmer', 'hanmer springs', 'chalets', 'chalets motel'],
        info: `The Chalets Motel offers charming self-contained cottages with scenic mountain views. Featuring a DVD library, it is just 601 m from hot pools and Hanmer Springs’ village center.
        <br>
        <br>
        Heated chalets feature wood paneling and come with full kitchen. They offer parking space, a DVD player and comfortable lounge areas.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',        
        parking: 'Personal parking',
        tv: 'Comes with TV',
        bathroom: 'Large bathroom',
        dinner: 'Large kitchen area',
        offersDinner: 'no', 
        image: './img/houses/riverview-01.jpeg',
        imageTwo: './img/houses/riverview-02.jpg',
        imageThree: './img/houses/riverview-03.jpg',
        imageFour: './img/houses/riverview-04.jpg',
        imageFive: './img/houses/riverview-05.jpg',
        imageSix: './img/houses/riverview-06.jpg',
        longitude: -42.58037366550216,
        latitude: 172.78424810322687,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '750 Hanmer Springs Road, Highway, Hanmer Springs 7334',
        tags: ['house', 'hanmer', 'hanmer springs', 'riverview', 'river', 'riverview cottage', 'cottage'],
        info: `A cosy and spacious 1 Bedroom Cottage with lovely garden & mountain views. Free Continental self service breakfast. Kitchen has cooking elements, microwave, fridge/freezer-open plan with lounge area. Sky TV, free Wifi, a deck with great views. Bedroom is roomy-Queen bed, large bathroom with
        shower & spa bath. Located on main route to Hanmer Springs, just over the Waiau Ferry Bridge. 
        <br>
        <br>
        The Cottage is ideal for couples, solo adventurers, and the business traveler.`
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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',        
        parking: 'Personal parking',
        tv: 'Comes with TV',
        bathroom: 'Large bathroom',
        dinner: 'Offers dinner meals',
        offersDinner: 'yes', 
        image: './img/hotels/terrace-01.jpg',
        imageTwo: './img/hotels/terrace-02.jpg',
        imageThree: './img/hotels/terrace-03.jpg',
        imageFour: './img/hotels/terrace-04.jpg',
        imageFive: './img/hotels/terrace-05.jpg',
        imageSix: './img/hotels/terrace-06.jpg',
        longitude: -43.49897589664995,
        latitude: 171.6491313044863,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '623 Coleridge Road, Windwhistle 7572',
        tags: ['hotel', 'mount hutt', 'mt hutt', 'mount', 'terrace', 'terrace downs', 'resort', 'terrace downs resort'],
        info: `Situated in the picturesque Canterbury high country, Terrace Downs Resort features all day dining, an 18 hole golf course and a range of outdoor activities. The villas have open-plan living spaces with gas fires. Guests can enjoy free on-site parking.
        <br>
        <br>
        The cafe serves a menu of local produce and offers panoramic views of the mountains from breakfast to evening meals.
        <br>
        <br>
        Terrace Downs Resort also has tennis courts and a fitness centre onsite.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',
        parking: 'Parking Avaliable',
        tv: 'Comes with TV',
        bathroom: 'Own bathroom',
        dinner: 'Offers dinner meals',
        offersDinner: 'yes', 
        image: './img/hostels/tree-01.jpg',
        imageTwo: './img/hostels/tree-02.jpg',
        imageThree: './img/hostels/tree-03.jpg',
        imageFour: './img/hostels/tree-04.jpg',
        imageFive: './img/hostels/tree-05.jpg',
        imageSix: './img/hostels/tree-06.jpg',
        longitude: -43.63581876794095,
        latitude: 171.64346558928645,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '25 South Belt, Methven 7730',
        tags: ['hostel', 'mount hutt', 'mt hutt', 'mount', 'big tree', 'lodge', 'big tree lodge', 'big', 'tree', 'methven'],
        info: `Located in Methven, Big Tree Lodge Methven is a colonial villa and former vicarage, offering free Wi-Fi and free bicycle hire. Guests can prepare a meal in the shared kitchen or socialise in the shared lounge.
        <br>
        <br>
        Big Tree Lodge is a 3-minute drive from Methven Golf Course. It is a 40-minute drive from Mt Hutt Ski Resort and a 70-minute drive from Christchurch Airport.
        <br>
        <br>
        This budget-style accommodation offers rooms with free towels, linen and access to shared bathroom facilities. Some rooms feature heating, a kitchenette or a flat-screen TV with a DVD player.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',
        parking: 'Parking Avaliable',
        tv: 'Comes with TV',
        bathroom: 'Own bathroom',
        dinner: 'Small kitchen',
        offersDinner: 'no', 
        image: './img/motels/mthutt-01.jpg',
        imageTwo: './img/motels/mthutt-02.jpg',
        imageThree: './img/motels/mthutt-03.jpg',
        imageFour: './img/motels/mthutt-04.jpg',
        imageFive: './img/motels/mthutt-05.jpg',
        imageSix: './img/motels/mthutt-06.jpg',
        longitude: -43.62738085963577,
        latitude: 171.64752576915285,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '205 Main Street, 7730 Methven, New Zealand',
        tags: ['motel', 'mount hutt', 'mt hutt', 'mt hutt motel', 'mount', 'mount hutt motel'],
        info: `Mount Hutt Motels is located in Methven and features a grass tennis court. The motel features free WiFi, parking and barbecue facilities.
        <br>
        <br>
        All units feature a well equipped kitchen, bathroom, dining and lounge area, flat-screen TV and DVDs. Each unit has parking at their door and a patio setting looking onto manicured lawns and award winning gardens.
        <br>
        <br>
        There is a children play area with a trampoline.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',
        parking: 'Parking Avaliable',
        tv: 'Comes with TV',
        bathroom: 'Own bathroom',
        dinner: 'Large kitchen',
        offersDinner: 'no', 
        image: './img/houses/montrose-01.jpg',
        imageTwo: './img/houses/montrose-02.jpg',
        imageThree: './img/houses/montrose-03.jpg',
        imageFour: './img/houses/montrose-04.jpg',
        imageFive: './img/houses/montrose-05.jpg',
        imageSix: './img/houses/montrose-06.jpg',
        longitude: -43.47687674722087,
        latitude: 171.5891827539711,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '592 Blackford Road, Rakaia Gorge RD12, 7782',
        tags: ['house', 'mt hutt', 'mount hutt', 'mount', 'montrose', 'montrose estate', 'estate'],
        info: `Set on the base of Mount Hutt ski area, on 750 acres of prime riverfront land, Montrose Estate provides 3 chalets offering self-contained, luxury accommodations overlooking the Rakaia River, mountain ranges and a 5-acre lake.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',
        parking: 'Parking Avaliable',
        tv: 'Comes with TV',
        bathroom: 'Own bathroom',
        dinner: 'Offers dinner meals',
        offersDinner: 'yes', 
        image: './img/hotels/heritage-01.jpg',
        imageTwo: './img/hotels/heritage-02.jpg',
        imageThree: './img/hotels/heritage-03.jpg',
        imageFour: './img/hotels/heritage-04.jpg',
        imageFive: './img/hotels/heritage-05.jpg',
        imageSix: './img/hotels/heritage-06.jpg',
        longitude: -45.03705503488247, 
        latitude: 168.64221621662745,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '91 Fernhill Road, Queenstown 9300',
        tags: ['hotel', 'queenstown', 'heritage', 'heritage hotel'],
        info: `You can enjoy soaking in the view of the Remarkables mountain range, rising from the waters of Lake Wakatipu, from the comfort of Heritage Queenstown. Crafted from centuries-old stone and cedar, this sophisticated hotel is suitable for business and leisure stays and boasts stunning views over Lake Wakatipu and Queenstown. It is located within a 5-minute drive from the town centre.
        <br>
        <br>
        It features an outdoor swimming pool, spa pool, fitness centre and sauna, and an elegant restaurant. Guests enjoy unlimited complimentary WiFi.
        <br>
        <br>
        Heritage Queenstown offers modern, alpine-style accommodation in peaceful, scenic surroundings. Accommodation choices include Deluxe hotel rooms with options for families, 2-bedroom apartments and large open-plan studio suites.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Bunk beds',
        parking: 'On-street parking',
        tv: 'Shared lounge',
        bathroom: 'Shared bathroom',
        dinner: 'Shared kitchen',
        offersDinner: 'no', 
        image: './img/hostels/adventure-01.jpeg',
        imageTwo: './img/hostels/adventure-02.jpeg',
        imageThree: './img/hostels/adventure-03.jpeg',
        imageFour: './img/hostels/adventure-04.jpeg',
        imageFive: './img/hostels/adventure-05.jpeg',
        imageSix: './img/hostels/adventure-06.jpg',
        longitude: -45.03109706843424, 
        latitude: 168.6607642700365,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '36 Camp Street, Queenstown 9300',
        tags: ['hostel', 'queenstown', 'adventure', 'adventure hostel'],
        info: `Situated in Queenstown and with Skyline Gondola and Luge reachable within less than 1 km, Adventure Queenstown Hostel features a tour desk, non-smoking rooms, free bikes, free WiFi throughout the property and a shared lounge. Boasting barbecue facilities, the hostel is close to several noted attractions, around 500 m from Fear Factory Queenstown, 800 m from Queenstown Chamber Of Commerce and less than 1 km from Queenstown Lakes District Library. The accommodation provides evening entertainment and a shared kitchen.
        <br>
        <br>
        The hostel offers a sun terrace.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',
        parking: 'Parking Avaliable',
        tv: 'Comes with TV',
        bathroom: 'Own bathroom',
        dinner: 'Small kitchen',
        offersDinner: 'no', 
        image: './img/motels/colonial-01.jpg',
        imageTwo: './img/motels/colonial-02.jpg',
        imageThree: './img/motels/colonial-03.jpg',
        imageFour: './img/motels/colonial-04.jpg',
        imageFive: './img/motels/colonial-05.jpg',
        imageSix: './img/motels/colonial-06.jpg',
        longitude: -45.033658410996054,
        latitude: 168.67620516931336,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '136 Frankton Road, Queenstown 9300',
        tags: ['motel', 'queenstown', 'colonial', 'colonial village', 'colonial village motel', 'village'],
        info: `Boasting rooms with stunning mountain and lake views, Colonial Village Motel is just a 5-minute walk from Lake Wakatipu. Free parking is available.
        <br>
        <br>
        A fully equipped kitchenette with a stove, microwave and fridge is standard in all rooms apart from the Two Bedroom which includes a full kitchen and oven. After a day out you can relax on the terrace or watch TV.
        <br>
        <br>
        Central Queenstown is just a 10-minute walk and Skycity Casino is a 20-minute walk away. Bring your bicycle and enjoy a ride around Lake Wakatipu where you can stop for a coffee at the Frankston Marina.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',
        parking: 'Parking Avaliable',
        tv: 'Comes with TV',
        bathroom: 'Own bathroom',
        dinner: 'Large kitchen',
        offersDinner: 'no', 
        image: './img/houses/modbox-01.jpg',
        imageTwo: './img/houses/modbox-02.jpg',
        imageThree: './img/houses/modbox-03.jpg',
        imageFour: './img/houses/modbox-04.jpg',
        imageFive: './img/houses/modbox-05.jpg',
        imageSix: './img/houses/modbox-06.jpg',
        longitude: -45.01925336056335, 
        latitude: 168.70922560639272,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '21 Perkins Road, Frankton, Queenstown 9300',
        tags: ['house', 'queenstown', 'modbox', 'rua', 'modbox rua'],
        info: `This brand new, 2 bedroom property is perfectly nestled on Queenstown Hill. Enjoy uninterrupted views of Lake Wakatipu and The Remarkables mountain range. Located on a quiet street, with floor to ceiling windows this property is ultra private and comfortable.
        <br>
        <br>
        This property is located conveniently close to Queenstown CBD and the airport. Perfect for couples or small groups who want to enjoy Queenstown in luxury and style - but with the comforts of a well thought out holiday home.        
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',
        parking: 'Parking Avaliable',
        tv: 'Comes with TV',
        bathroom: 'Own bathroom',
        dinner: 'Offers dinner meals',
        offersDinner: 'yes', 
        image: './img/hotels/edgewater-01.jpg',
        imageTwo: './img/hotels/edgewater-02.jpg',
        imageThree: './img/hotels/edgewater-03.jpg',
        imageFour: './img/hotels/edgewater-04.jpg',
        imageFive: './img/hotels/edgewater-05.jpg',
        imageSix: './img/hotels/edgewater-06.jpg',
        longitude: -44.69409967568055, 
        latitude: 169.11240812698765,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: 'Sargood Drive, 9305 Wanaka, New Zealand',
        tags: ['hotel', 'wanaka', 'edge', 'edgewater', 'water', 'edgewater hotel'],
        info: `Edgewater is located on the edge of Lake Wanaka, only 2 km from Wanaka town centre. The property offers picturesque lake views, a day spa, a sauna and a tennis court. Staff are able to converse in English and Chinese.
        <br>
        <br>
        The hotel has a restaurant and a café, both offering lake views. Guests can enjoy great New Zealand cuisine and a wide range of regional wines. Chinese options for breakfast are available.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Bunk beds',
        parking: 'On-street parking',
        tv: 'Shared lounge',
        bathroom: 'Shared bathroom',
        dinner: 'Shared kitchen',
        offersDinner: 'no', 
        image: './img/hostels/bakpaka-01.jpg',
        imageTwo: './img/hostels/bakpaka-02.jpg',
        imageThree: './img/hostels/bakpaka-03.jpg',
        imageFour: './img/hostels/bakpaka-04.jpg',
        imageFive: './img/hostels/bakpaka-05.jpg',
        imageSix: './img/hostels/bakpaka-06.jpg',
        longitude: -44.68901414566924,
        latitude: 169.1323944380868,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '117 Lakeside Road, Wanaka 9305',
        tags: ['hostel', 'wanaka', 'wanaka bakpaka', 'pakpaka', 'backpackers', 'wanaka bakpaka hostel'],
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
        wifi: 'Wifi Avaliable',
        bed: 'Bunk beds',
        parking: 'On-street parking',
        tv: 'Shared lounge',
        bathroom: 'Shared bathroom',
        dinner: 'Shared kitchen',
        offersDinner: 'no', 
        image: './img/motels/aspiring-01.jpg',
        imageTwo: './img/motels/aspiring-02.jpg',
        imageThree: './img/motels/aspiring-03.jpg',
        imageFour: './img/motels/aspiring-04.jpg',
        imageFive: './img/motels/aspiring-05.jpg',
        imageSix: './img/motels/aspiring-06.jpg',
        longitude: -45.033658410996054,
        latitude: 168.67620516931336,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '136 Frankton Road, Queenstown 9300',
        tags: ['motel', 'wanaka', 'aspiring', 'aspiring lodge', 'aspiring lodge motel', 'lodge'],
        info: `Featuring panoramic views of the surrounding mountains, Aspiring Lodge Motel offers accommodations with a balcony or a private courtyard.
        <br>
        <br>
        Located right in the center of Wanaka, this motel is a 30-minute drive from the Cardrona and Treble Cone ski fields. Lake Wanaka is only 100 m away.
        <br>
        <br>
        All rooms and apartments at Aspiring Lodge Wanaka offer free WiFi, a refrigerator and a hairdryer. All include heating and electric blankets. Cooking facilities are available in some units.
        <br>
        <br>
        Free newspapers are available on request and free, secure off-street parking is provided.
        <br>
        <br>
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
        wifi: 'Wifi Avaliable',
        bed: 'Comfy double beds',
        parking: 'Parking Avaliable',
        tv: 'Comes with TV',
        bathroom: 'Own bathroom',
        dinner: 'Large kitchen',
        offersDinner: 'no', 
        image: './img/houses/iron-01.jpg',
        imageTwo: './img/houses/iron-02.jpg',
        imageThree: './img/houses/iron-03.jpg',
        imageFour: './img/houses/iron-04.jpg',
        imageFive: './img/houses/iron-05.jpg',
        imageSix: './img/houses/iron-06.jpg',
        longitude: -44.68377088552741,
        latitude: 169.16160126931402,
        tick: '<i class="fas fa-check"></i>',
        peopleIcon: '<i class="fa-solid fa-user-group"></i>',
        nightsIcon: '<i class="fas fa-cloud-moon"></i>',
        address: '1 Weatherall Close, Wanaka 9305',
        tags: ['house', 'wanaka', 'mount iron', 'cabin', 'iron', 'mount iron cabin', 'mount'],
        info: `Mount Iron Cabin is a newly crafted stand-alone chalet on the side of Mount Iron, Wanaka. Built to soak up the sun and capture the mountain vistas this bespoke private chalet will be your base for adventure and/or pure relaxation. Nestled in a Kanuka glade, enjoy stargazing from the outdoor double bath and continue the stargazing in your plush bed with skylight above.
        <br>
        <br>
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
    let selectedLocation = $("#selectedLocation").val();
    // console.log(selectedLocation);
    
    const checkInDate = new Date($('#checkInDate').val());
    const checkOutDate = new Date($('#checkOutDate').val());
    // console.log(checkInDate);

    
    // let checkInDay = checkInDate.getDate(),
    //     checkInMonth = checkInDate.getMonth(),
    //     checkInYear = checkInDate.getFullYear(),
    //     checkOutDay = checkOutDate.getDate(),
    //     checkOutMonth = checkOutDate.getMonth(),
    //     checkOutYear = checkOutDate.getFullYear();


    // let checkInDetails = [checkInDay,checkInMonth,checkInYear].join('/');
    // let checkOutDetails = [checkOutDay,checkOutMonth,checkOutYear].join('/');
    // console.log(checkInDetails);
    // console.log(checkOutDetails);
    // checkInDate = new Date(checkInDate.split("-").reverse().join("-"))
    // checkOutDate = new Date(checkOutDate.split("-").reverse().join("-"))

    console.log(checkInDate, checkOutDate);


    if ( (checkInDate == 'Invalid Date') || (checkOutDate == 'Invalid Date') ){
        alert('Please enter check in and check out dates');
    } else if( checkInDate.getTime() >= checkOutDate.getTime() ){
        alert('check out day cant be before check in date');
    } else if( selectedLocation == null){
        alert('Please choose a location')
    } else{
        $('#introPage').hide(); 
        $('#acommodationContainer').show();
    }


   let difference = checkOutDate.getTime() - checkInDate.getTime();
   console.log(difference);

   let dayDifference = difference/msDay;
   console.log(dayDifference);
   window.dayDifferenceGlobal = dayDifference;

   let valueOfPeople = ($("#valueOfPeople").val());
   console.log(valueOfPeople);

   displayOptions(dayDifference, valueOfPeople,selectedLocation);
   modal(checkInDate, checkOutDate, dayDifference);


};




// ===================================================================
// end of user input function
// ===================================================================





// ===================================================================
// start of card displaying function
// ===================================================================

function displayOptions(nights, guests,location){
    // reloadMarkers();
        console.log(nights);
        console.log(guests);
        console.log(location);

        $('#acommodationCardContainer').empty();
        

         if(location == 'everywhere'){
             console.log('everywhere has been selected');
             for(let i = 0; i < objectArray.length; i++){
                if( ( (nights >= objectArray[i].minNight) && (nights <= objectArray[i].maxNight) && (guests >= objectArray[i].minPeople) && (guests <= objectArray[i].maxPeople)   ) ){
                    generateCard(i);
                    console.log(i);
                    let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    // console.log(location);

                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
            
                    
                    
                    
                }
            }
         }else{
            for(let i = 0; i < objectArray.length; i++){
                if( ( (nights >= objectArray[i].minNight) && (nights <= objectArray[i].maxNight) && (guests >= objectArray[i].minPeople) && (guests <= objectArray[i].maxPeople)  && (location == objectArray[i].location)   ) ){
                    generateCard(i);
                    console.log(i);

                     let location = {lat: objectArray[i].latitude, lng:objectArray[i].longitude};
                    // console.log(location);

                    let marker = new google.maps.Marker({
                        position: location,
                        map:map
                    });
                    markers.push(marker);
                }
            }
         
         }
    // modal();
    console.log(markers);
}

// function reloadMarkers(){
//     // loop through our array and set the map to null value
//     for(let i =0; i<markers.length; i++){
//         markers[i].setMap(null);
//     }
//     markers=[];
// }
// ===================================================================
// end of card displaying function
// ===================================================================




 

// ===================================================================
// start of sorting cards function
// ===================================================================



// ===================================================================
// end of sorting cards function
// ===================================================================












// ===================================================================
// start of modal function
// ===================================================================




// i need to pass my days data into here / any other data that i want to display on the form from the initial search


function modal(checkIn,checkOut, nightDifference){   
                      
    

    $('.card').click(function(){
        reloadMarkers();
        console.log("click");
        $("#modalHeader").empty();
        $(".test").empty();
        $(".modal-innerform").empty();
        
        
        let i = 0;
        for(i = 0; i < objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                let accomPrice = objectArray[i].price;
                let nightsTotal = objectArray[i].nights;
              

            
                $("#modalHeader").append(
                    `
                    <div class="modal-header__left">
                        <h3 class="modal-header__name">${objectArray[i].name}</h3>
                        <p class="modal-header__address">${objectArray[i].address}</p>
                    </div>

                    <div class="modal-header__middle">
                        <div class="modal-header__icons">
                            ${objectArray[i].peopleIcon}
                            <p class="modal-header__info">${objectArray[i].people}</p>
                        </div>
                        <div class="modal-header__icons">
                            ${objectArray[i].nightsIcon}
                            <p class="modal-header__info">${objectArray[i].nights}</p>
                        </div>
                    </div>

                    <div class="modal-header__right">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    `
                )
                $(".test").append(
                    `
                    <div class="modal-body__top container-fluid">
                        <div class="modal-carousel col-md-6">


                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="${objectArray[i].image}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="${objectArray[i].imageTwo}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="${objectArray[i].imageThree}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="${objectArray[i].imageFour}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="${objectArray[i].imageFive}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="${objectArray[i].imageSix}" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                        
                        
                        
                        </div>
                        <div class="modal-info" col-md-6>
                            <p class="modal-info__text">${objectArray[i].info}</p>
                        </div>

                    </div>

                    <div class="checkmarks">

                        <div class="checkmarks-individual">
                            ${objectArray[i].tick}
                            <h3 class="checkmarks-text">${objectArray[i].wifi}</h3>
                        </div>
                        <div class="checkmarks-individual">
                            ${objectArray[i].tick}
                            <h3 class="checkmarks-text">${objectArray[i].bed}</h3>
                        </div>
                        <div class="checkmarks-individual">
                            ${objectArray[i].tick}                        
                            <h3 class="checkmarks-text">${objectArray[i].parking}</h3>
                        </div>
                        <div class="checkmarks-individual">
                            ${objectArray[i].tick}                        
                            <h3 class="checkmarks-text">${objectArray[i].tv}</h3>
                        </div>
                        <div class="checkmarks-individual">
                            ${objectArray[i].tick}                        
                            <h3 class="checkmarks-text">${objectArray[i].bathroom}</h3>
                        </div>
                        <div class="checkmarks-individual">
                            ${objectArray[i].tick}                        
                            <h3 class="checkmarks-text">${objectArray[i].dinner}</h3>
                        </div>
                    </div>
                    
                    `
                )

                $(".modal-innerform").append(
                    `
                    <div class="modal-form">
                    <div class="modal-form__container">
                        <h1 class="modal-form__header">Confirm your details</h1>
                        <form action="" class="confirmation-form">
                            <div class="confirmation-form__name">
                                <input type="text" placeholder="First Name" class="enter-name">
                                <input type="text" placeholder="Last Name" class="enter-name">
                            </div>
                            <div class="checkinandout">
                                <div class="date-checkin">
                                    <label for="" class="date-header">Check In Date</label>
                                    <input type="text" id="checkInDate" class="date-input" value="${checkInGlobal}">
                                </div>
                                <div class="date-checkout">
                                    <label for="" class="date-header">Check Out Date</label>
                                    <input type="text" id="checkOutDate" class="date-input" value="${checkOut}">
                                </div>    
                            </div>
                            <div class="guest-select">
                                <select class="guests" name="" id="">
                                    <option class="gueststext" value="" disabled selected hidden>Number of Guests</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div class="final-container">
                                <div class="meals">
                                    <h1 class="meals-header">Would you like to pay an additional $29NZD for dinners?</h1>
                                    
                                    <input name="mealsCheck" id="mealYes" class="meal-select" type="checkbox" value="29">
                                    <label for="mealYes">Yes</label>


                                    </input>
                                </div>
                                <div class="confirmation-container">
                                    <p class="total-paragraph">Your Total is</p>
                                    <h2 class="order-total" id="orderTotal">$ ${objectArray[i].price * dayDifferenceGlobal} NZD</h2>
                                    <button class="confirm-button" id="confirmBooking" type="submit">Go to Checkout</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                `
                )
               
                printTotalPrice();
                $("#mealYes").change(function(){
                    let mealTest = [];

                    if(this.checked = true){
                        mealTest.push(this.value);
                    } else if(this.checked == false){
                        mealTest.pop();
                    }
                    printTotalPrice(mealTest[0]);
                });

                function printTotalPrice(mealPrice = 0){
                    const price = accomPrice;
                    const nights = nightsTotal;
                    const total = (price * nights) + (parseFloat(mealPrice) * nights);
                    $("#orderTotal").text("$ " +total);
                }
                

                // mealArray = [];
                //     if($("#mealSelect") === "Yes"){
                //         mealArray.push(29);
                //     }else{
                //         mealArray.pop();
                //     }
                // totalPrice(mealArray[0])

                // function totalPrice(costOfMeal){
                    
                    
                //     const priceTest = objectArray[i].price;
                //     const nightsTest = nightDifference;
                //     // console.log(priceTest, nightsTest, costOfMeal);
                // }
                // totalPrice();
            }
            // console.log(markers);
            // console.log(latitude);
            // console.log(longitude);

            // new google.maps.Marker({
            //     position: {lat:latitude, lng:longitude},
            //     map,
               
            //   });
            // function setMarkers(map){

                // let latitude = objectArray[i].latitude;
                // let longitude = objectArray[i].longitude;
                // console.log(latitude, longitude);
                // // setMarkers(map);
            
    

                // new google.maps.Marker({
                //     position: {lat: objectArray[i].latitude, lng: objectArray[i].longitude},
                //     map:map
                    
            
                // })
                // })
            // }
            // console.log(latitude, longitude)
            // setMarkers();
        // console.log(position);
        };
    });

}

// let markers =[];

modal();
function reloadMarkers(){
    // loop through our array and set the map to null value
    for(let i =0; i<markers.length; i++){
        markers[i].setMap(null);
    }
    markers=[];
}



// ===================================================================
// end of modal function
// ===================================================================


// ===================================================================
// start of confirmation container
// ===================================================================

$("#confirmBooking").click(function(event){
    event.preventDefault();
    console.log("clicked");
    $("#introPage").hide(); 
    $("#acommodationContainer").hide(); 
    $("#confirmationContainer").show();

});

// ===================================================================
// end of confirmation container
// ===================================================================



// ===================================================================
// start of generate card container
// ===================================================================

function generateCard(x){
    $('#acommodationCardContainer').append(
        `
        <div id="${objectArray[x].id}" class="card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <img src="${objectArray[x].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="card-body__left">
                    <h5 class="card-title">${objectArray[x].name}</h5>
                    <p class="card-text">${objectArray[x].location}</p>
                </div>
                <div class="card-body__right">
                    <h5 class="card-title">$${objectArray[x].price} NZD Per Night</h5>
                    <h5 class="card-title">Total Price: $${objectArray[x].price * dayDifferenceGlobal}</h5>
                </div>
            </div>
        </div>
        `    
    )
    modal();
};

// ===================================================================
// end of generate card container
// ===================================================================



submitBtn.addEventListener('click', userSubmit);
// searchFilter.addEventListener("click", filterSearchWord)
// confirmBooking.addEventListener("click", confirmation)
// confirmBooking.addEventListener("click", confirmBooking)
});