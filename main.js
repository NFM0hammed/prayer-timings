let prayerTimings = document.querySelector(".prayer-timings table tbody");
let selectedCity = document.querySelector(".prayer-timings select");
let nameOfCity = "الرياض"
const cities = ["Riyadh", "Makkah%20al%20Mukarramah", "Madinah", "Jeddah", "Tabuk"];

// Method #01 [Promise]
// const apiPrayerTimings = (city) => {

//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest();
        
//         request.onload = function() {
            
//             // Complete request
//             if(this.readyState === 4) {
    
//                 // Means OK
//                 if(this.status >= 200 && this.status <= 299) {
    
//                     resolve(JSON.parse(this.response));
    
//                 } else {
    
//                     reject(Error("Error, The response is incorrect !"));
        
//                 }
        
//             }
    
//         }
    
//         request.open("GET", `https://api.aladhan.com/v1/timingsByCity?country=SA&city=${city}`, true);
    
//         request.send();

//     })

// };

// function showPrayerTimings(city) {

//     apiPrayerTimings(city).then((resolve) => {
    
//         return resolve.data.timings;
        
//     })
//     .then((data) => {
    
//         // console.log(data);

//         let tr = document.createElement("tr");

//         // Name of city
//         let tdCity = document.createElement("td");
//         tdCity.textContent = nameOfCity;

//         // Fajr pray time
//         let tdFajr = document.createElement("td");
//         tdFajr.textContent = data.Fajr;

//         // Sunrise time
//         let tdSunrise = document.createElement("td");
//         tdSunrise.textContent = data.Sunrise;

//         // Dhuhr pray time
//         let tdDhuhr = document.createElement("td");
//         tdDhuhr.textContent = data.Dhuhr;

//         // Asr pray time
//         let tdAsr = document.createElement("td");
//         tdAsr.textContent = data.Asr;
        
//         // Maghrib pray time
//         let tdMaghrib = document.createElement("td");
//         tdMaghrib.textContent = data.Maghrib;

//         // Isha pray time
//         let tdIsha = document.createElement("td");
//         tdIsha.textContent = data.Isha;


//         tr.appendChild(tdIsha);
//         tr.appendChild(tdMaghrib);
//         tr.appendChild(tdAsr);
//         tr.appendChild(tdDhuhr);
//         tr.appendChild(tdSunrise);
//         tr.appendChild(tdFajr);
//         tr.appendChild(tdCity);

//         prayerTimings.appendChild(tr);
        
//     })
    
//     .catch((reject) => {
    
//         console.log(reject);
    
//     });

// }

// showPrayerTimings(cities[0]);

// selectedCity.addEventListener("change", () => {

//     // To change the row of the previous city prayers times
//     prayerTimings.children[1].remove();

//     // To add the city prayers times that you selected
//     for(let i = 0; i < cities.length; ++i) {

//         if(cities[i] === selectedCity.value) {

//             nameOfCity = selectedCity[i].innerText;

//             showPrayerTimings(selectedCity.value);

//             break;

//         }

//     }

// });


// Method #02 [Async & Await]
//  function apiPrayerTimings(city) {

//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest();
        
//         request.onload = function() {
            
//             // Complete request
//             if(this.readyState === 4) {
    
//                 // Means OK
//                 if(this.status >= 200 && this.status <= 299) {
    
//                      resolve(JSON.parse(this.response));
    
//                 } else {
    
//                     reject(Error("Error, The response is incorrect !"));
        
//                 }
        
//             }
    
//         }
    
//         request.open("GET", `https://api.aladhan.com/v1/timingsByCity?country=SA&city=${city}`, true);
    
//         request.send();

//     })

// }

// async function showPrayerTimings(city) {

//     let resolve = await apiPrayerTimings(city).catch((reject) => console.log(reject));

//     let data = await resolve.data.timings;

//     let tr = document.createElement("tr");

//     // Name of city
//     let tdCity = document.createElement("td");
//     tdCity.textContent = nameOfCity;

//     // Fajr pray time
//     let tdFajr = document.createElement("td");
//     tdFajr.textContent = data.Fajr;

//     // Sunrise time
//     let tdSunrise = document.createElement("td");
//     tdSunrise.textContent = data.Sunrise;

//     // Dhuhr pray time
//     let tdDhuhr = document.createElement("td");
//     tdDhuhr.textContent = data.Dhuhr;

//     // Asr pray time
//     let tdAsr = document.createElement("td");
//     tdAsr.textContent = data.Asr;
    
//     // Maghrib pray time
//     let tdMaghrib = document.createElement("td");
//     tdMaghrib.textContent = data.Maghrib;

//     // Isha pray time
//     let tdIsha = document.createElement("td");
//     tdIsha.textContent = data.Isha;


//     tr.appendChild(tdIsha);
//     tr.appendChild(tdMaghrib);
//     tr.appendChild(tdAsr);
//     tr.appendChild(tdDhuhr);
//     tr.appendChild(tdSunrise);
//     tr.appendChild(tdFajr);
//     tr.appendChild(tdCity);

//     prayerTimings.appendChild(tr);

// }

// showPrayerTimings(cities[0]);

// selectedCity.addEventListener("change", () => {

//     // To change the row of the previous city prayers times
//     prayerTimings.children[1].remove();

//     // To add the city prayers times that you selected
//     for(let i = 0; i < cities.length; ++i) {

//         if(cities[i] === selectedCity.value) {

//             nameOfCity = selectedCity[i].innerText;

//             showPrayerTimings(selectedCity.value);

//             break;

//         }

//     }

// });


// Method #03 [Fetch]
// function apiPrayerTimings(city) {

//     fetch(`https://api.aladhan.com/v1/timingsByCity?country=SA&city=${city}`).then((resolve) => {

//         if(resolve.ok) {

//             return resolve;

//         }

//     })
//     .then((response) => {

//         return response.json();

//     })
//     .then((result) => {

//         // console.log(data);

//         let data = result.data.timings

//         let tr = document.createElement("tr");

//         // Name of city
//         let tdCity = document.createElement("td");
//         tdCity.textContent = nameOfCity;
    
//         // Fajr pray time
//         let tdFajr = document.createElement("td");
//         tdFajr.textContent = data.Fajr;
    
//         // Sunrise time
//         let tdSunrise = document.createElement("td");
//         tdSunrise.textContent = data.Sunrise;
    
//         // Dhuhr pray time
//         let tdDhuhr = document.createElement("td");
//         tdDhuhr.textContent = data.Dhuhr;
    
//         // Asr pray time
//         let tdAsr = document.createElement("td");
//         tdAsr.textContent = data.Asr;
        
//         // Maghrib pray time
//         let tdMaghrib = document.createElement("td");
//         tdMaghrib.textContent = data.Maghrib;
    
//         // Isha pray time
//         let tdIsha = document.createElement("td");
//         tdIsha.textContent = data.Isha;
    
    
//         tr.appendChild(tdIsha);
//         tr.appendChild(tdMaghrib);
//         tr.appendChild(tdAsr);
//         tr.appendChild(tdDhuhr);
//         tr.appendChild(tdSunrise);
//         tr.appendChild(tdFajr);
//         tr.appendChild(tdCity);
    
//         prayerTimings.appendChild(tr);

//     })
//     .catch((reject) => console.log(reject));

// }

// apiPrayerTimings(cities[0]);

selectedCity.addEventListener("change", () => {

    // To change the row of the previous city prayers times
    prayerTimings.children[1].remove();

    // To add the city prayers times that you selected
    for(let i = 0; i < cities.length; ++i) {

        if(cities[i] === selectedCity.value) {

            nameOfCity = selectedCity[i].innerText;

            apiPrayerTimings(selectedCity.value);

            break;

        }

    }

});


// Method #04 [Axios]
function apiPrayerTimings(city) {

    axios.get(`https://api.aladhan.com/v1/timingsByCity?country=SA&city=${city}`)
    .then((response) => {
        
        // console.log(response);

        let data = response.data.data.timings;

        let tr = document.createElement("tr");

        // Name of city
        let tdCity = document.createElement("td");
        tdCity.textContent = nameOfCity;
    
        // Fajr pray time
        let tdFajr = document.createElement("td");
        tdFajr.textContent = data.Fajr;
    
        // Sunrise time
        let tdSunrise = document.createElement("td");
        tdSunrise.textContent = data.Sunrise;
    
        // Dhuhr pray time
        let tdDhuhr = document.createElement("td");
        tdDhuhr.textContent = data.Dhuhr;
    
        // Asr pray time
        let tdAsr = document.createElement("td");
        tdAsr.textContent = data.Asr;
        
        // Maghrib pray time
        let tdMaghrib = document.createElement("td");
        tdMaghrib.textContent = data.Maghrib;
    
        // Isha pray time
        let tdIsha = document.createElement("td");
        tdIsha.textContent = data.Isha;
    
    
        tr.appendChild(tdIsha);
        tr.appendChild(tdMaghrib);
        tr.appendChild(tdAsr);
        tr.appendChild(tdDhuhr);
        tr.appendChild(tdSunrise);
        tr.appendChild(tdFajr);
        tr.appendChild(tdCity);
    
        prayerTimings.appendChild(tr);

    });
    
}

apiPrayerTimings(cities[0]);