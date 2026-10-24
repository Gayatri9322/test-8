var cl=console.log;

var planets = [
  { planetName: "Mercury", distanceFromSunKm: 57910000, diameterKm: 4879, hasRings: false, numberOfMoons: 0 },
  { planetName: "Venus", distanceFromSunKm: 108200000, diameterKm: 12104, hasRings: false, numberOfMoons: 0 },
  { planetName: "Earth", distanceFromSunKm: 149600000, diameterKm: 12742, hasRings: false, numberOfMoons: 1 },
  { planetName: "Mars", distanceFromSunKm: 227900000, diameterKm: 6779, hasRings: false, numberOfMoons: 2 },
  { planetName: "Jupiter", distanceFromSunKm: 778500000, diameterKm: 139820, hasRings: true, numberOfMoons: 79 }
];
cl(planets);

let result01='';
planets.forEach(function(para,i){
   result01+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.planetName}</td>
                        <td>${para.distanceFromSunKm}</td>
                        <td>${para.diameterKm}</td>
                        <td>${para.hasRings ? 'Yes' : 'No'}</td>
                        <td>${para.numberOfMoons}</td>
                    </tr>`
})


const table01=document.getElementById("table01");
table01.innerHTML=result01;
cl(result01);

var mountains = [
  { mountainName: "Everest", heightMeters: 8848, locationContinent: "Asia", firstAscentYear: 1953, isVolcano: false },
  { mountainName: "K2", heightMeters: 8611, locationContinent: "Asia", firstAscentYear: 1954, isVolcano: false },
  { mountainName: "Kangchenjunga", heightMeters: 8586, locationContinent: "Asia", firstAscentYear: 1955, isVolcano: false },
  { mountainName: "Matterhorn", heightMeters: 4478, locationContinent: "Europe", firstAscentYear: 1865, isVolcano: false },
  { mountainName: "Mount Fuji", heightMeters: 3776, locationContinent: "Asia", firstAscentYear: null, isVolcano: true }
];


let result02=' ';
for(let i=0; i<mountains.length;i++){
   result02+=`<tr>
                    <td>${i+1}</td>
                     <td>${mountains[i].mountainName}</td>
                     <td>${mountains[i].heightMeters}</td>
                     <td>${mountains[i].locationContinent}</td>
                     <td>${mountains[i].firstAscentYear}</td>                     
                     <td>${mountains[i].isVolcano ? 'Yes' : 'No'}</td>                
                     </tr>`
}
const table02=document.getElementById('table02');
table02.innerHTML=result02;
cl(result02);

var universities = [
  { uniName: "Harvard University", foundedYear: 1636, countryLocated: "USA", studentCount: 21000, worldRanking: 1 },
  { uniName: "University of Oxford", foundedYear: 1096, countryLocated: "UK", studentCount: 24000, worldRanking: 2 },
  { uniName: "Stanford University", foundedYear: 1885, countryLocated: "USA", studentCount: 17000, worldRanking: 3 },
  { uniName: "University of Cambridge", foundedYear: 1209, countryLocated: "UK", studentCount: 19000, worldRanking: 4 },
  { uniName: "MIT", foundedYear: 1861, countryLocated: "USA", studentCount: 11500, worldRanking: 5 }
];

// let result03='';
// universities.forEach((para,i)=>{
//   result03+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.uniName}</td>
//                         <td>${para.foundedYear}</td>
//                         <td>${para.countryLocated}</td>
//                         <td>${para.studentCount}</td>
//                         <td>${para.worldRanking}</td>
//                     </tr>`
// })
// const table03=document.getElementById('table03');
// table03.innerHTML=result03;
// cl(result03)

let result03='';
for(let i=0; i<universities.length;i++){
  result03+=`<tr>
                         <td>${i+1}</td>
                         <td>${universities[i].uniName}</td>
                         <td>${universities[i].foundedYear}</td>
                         <td>${universities[i].countryLocated}</td>
                         <td>${universities[i].studentCount}</td>
                         <td>${universities[i].worldRanking}</td>
                         </tr>`
}
const table03=document.getElementById('table03');
table03.innerHTML=result03;
cl(result03)

var animals = [
  { species: "African Elephant", averageWeightKg: 6000, habitatType: "Savannah", lifespanYears: 70, endangeredStatus: "Vulnerable" },
  { species: "Bald Eagle", averageWeightKg: 6.3, habitatType: "Forests", lifespanYears: 20, endangeredStatus: "Least Concern" },
  { species: "Giant Panda", averageWeightKg: 100, habitatType: "Bamboo Forests", lifespanYears: 20, endangeredStatus: "Vulnerable" },
  { species: "Blue Whale", averageWeightKg: 150000, habitatType: "Ocean", lifespanYears: 90, endangeredStatus: "Endangered" },
  { species: "Komodo Dragon", averageWeightKg: 70, habitatType: "Tropical Islands", lifespanYears: 30, endangeredStatus: "Vulnerable" }
];
// let result04='';

// animals.forEach((para,i)=>{
//   result04+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.species}</td>
//                         <td>${para.averageWeightKg}</td>
//                         <td>${para.habitatType}</td>
//                         <td>${para.lifespanYears}</td>
//                         <td>${para.endangeredStatus}</td>
//                     </tr>`
// })
// const table04=document.getElementById('table04');
// table04.innerHTML=result04;
// cl(result04);

let result04='';
for(let i=0; i<animals.length;i++){
  result04+=`<tr>
                         <td>${i+1}</td>
                       <td>${animals[i].species}</td>
                         <td>${animals[i].averageWeightKg}</td>
                         <td>${animals[i].habitatType}</td>
                         <td>${animals[i].lifespanYears}</td>
                         <td>${animals[i].endangeredStatus}</td>
                     </tr>`
}
const table04=document.getElementById('table04');
table04.innerHTML=result04;
cl(result04);

var apps = [
  { appName: "WhatsApp", categoryType: "Messaging", downloadsMillion: 5000, developerCompany: "Meta", subscriptionRequired: false },
  { appName: "Spotify", categoryType: "Music Streaming", downloadsMillion: 1000, developerCompany: "Spotify AB", subscriptionRequired: true },
  { appName: "Zoom", categoryType: "Video Conferencing", downloadsMillion: 1000, developerCompany: "Zoom Video Communications", subscriptionRequired: false },
  { appName: "Uber", categoryType: "Ride Hailing", downloadsMillion: 500, developerCompany: "Uber Technologies", subscriptionRequired: false },
  { appName: "Canva", categoryType: "Design", downloadsMillion: 100, developerCompany: "Canva Pty Ltd", subscriptionRequired: true }
];
// let result05='';

// apps.forEach((para,i)=>{
//   result05+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.appName}</td>
//                         <td>${para.categoryType}</td>
//                         <td>${para.downloadsMillion}</td>
//                         <td>${para.developerCompany}</td>
//                         <td>${para.subscriptionRequired ? 'Yes' : 'No'}</td>
//                     </tr>`
// })
// const table05=document.getElementById('table05');
// table05.innerHTML=result05;
// cl(result05);

let result05='';
for(let i=0; i<apps.length;i++){
  result05+=`<tr>
                         <td>${i+1}</td>
                         <td>${apps[i].appName}</td>
                         <td>${apps[i].categoryType}</td>
                         <td>${apps[i].downloadsMillion}</td>
                         <td>${apps[i].developerCompany}</td>
                         <td>${apps[i].subscriptionRequired ? 'Yes' : 'No'}</td>
                     </tr>`
}
const table05=document.getElementById('table05');
table05.innerHTML=result05;
cl(result05);



var continents = [
  { continentLabel: "Asia", surfaceAreaMillionSqKm: 44.58, countriesCount: 49, populationBillion: 4.75, largestCountry: "Russia" },
  { continentLabel: "Africa", surfaceAreaMillionSqKm: 30.37, countriesCount: 54, populationBillion: 1.4, largestCountry: "Algeria" },
  { continentLabel: "North America", surfaceAreaMillionSqKm: 24.71, countriesCount: 23, populationBillion: 0.6, largestCountry: "Canada" },
  { continentLabel: "South America", surfaceAreaMillionSqKm: 17.84, countriesCount: 12, populationBillion: 0.44, largestCountry: "Brazil" },
  { continentLabel: "Europe", surfaceAreaMillionSqKm: 10.18, countriesCount: 44, populationBillion: 0.75, largestCountry: "Russia" }
];

// let result06='';

// continents.forEach((para,i)=>{
//  result06+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.continentLabel}</td>
//                         <td>${para.surfaceAreaMillionSqKm}</td>
//                         <td>${para.countriesCount}</td>
//                         <td>${para.populationBillion}</td>
//                         <td>${para.largestCountry}</td>
//                     </tr>`
// })
// const table06=document.getElementById('table06');
// table06.innerHTML=result06;
// cl(result06);

let result06='';
for(let i=0; i<continents.length;i++){
  result06+=`
  <tr>
                       <td>${i+1}</td>
                         <td>${continents[i].continentLabel}</td>
                         <td>${continents[i].surfaceAreaMillionSqKm}</td>
                         <td>${continents[i].countriesCount}</td>
                         <td>${continents[i].populationBillion}</td>
                        <td>${continents[i].largestCountry}</td>
                     </tr>`
}
const table06=document.getElementById('table06');
table06.innerHTML=result06;
cl(result06);


var desserts = [
  { dessertName: "Chocolate Cake", sugarContentGrams: 80, servingTemp: "Room Temperature", mainIngredient: "Cocoa", calorieCount: 400 },
  { dessertName: "Ice Cream Sundae", sugarContentGrams: 60, servingTemp: "Cold", mainIngredient: "Milk", calorieCount: 300 },
  { dessertName: "Apple Pie", sugarContentGrams: 50, servingTemp: "Warm", mainIngredient: "Apples", calorieCount: 350 },
  { dessertName: "Cheesecake", sugarContentGrams: 65, servingTemp: "Cold", mainIngredient: "Cheese", calorieCount: 450 },
  { dessertName: "Baklava", sugarContentGrams: 70, servingTemp: "Room Temperature", mainIngredient: "Honey", calorieCount: 500 }
];
// let result07='';
//  desserts.forEach((para,i)=>{
//   result07+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.dessertName}</td>
//                         <td>${para.sugarContentGrams}</td>
//                         <td>${para.servingTemp}</td>
//                         <td>${para.mainIngredient}</td>
//                         <td>${para.calorieCount}</td>
//                     </tr>`
// })
// const table07=document.getElementById('table07');
// table07.innerHTML=result07;
// cl(result07);

let result07='';
for(let i=0;i<desserts.length;i++){
  result07+=`<tr>
                        <td>${i+1}</td>
                         <td>${desserts[i].dessertName}</td>
                         <td>${desserts[i].sugarContentGrams}</td>
                         <td>${desserts[i].servingTemp}</td>
                         <td>${desserts[i].mainIngredient}</td>
                         <td>${desserts[i].calorieCount}</td>
                     </tr>`
}
const table07=document.getElementById('table07');
table07.innerHTML=result07;
cl(result07);


var oceans = [
  { oceanTitle: "Pacific", avgDepthMeters: 4280, surfaceAreaMillionSqKm: 165.25, borderingContinents: 4, salinityPpt: 35 },
  { oceanTitle: "Atlantic", avgDepthMeters: 3646, surfaceAreaMillionSqKm: 106.46, borderingContinents: 4, salinityPpt: 36 },
  { oceanTitle: "Indian", avgDepthMeters: 3741, surfaceAreaMillionSqKm: 70.56, borderingContinents: 3, salinityPpt: 35 },
  { oceanTitle: "Southern", avgDepthMeters: 3270, surfaceAreaMillionSqKm: 21.96, borderingContinents: 1, salinityPpt: 34 },
  { oceanTitle: "Arctic", avgDepthMeters: 1205, surfaceAreaMillionSqKm: 15.56, borderingContinents: 2, salinityPpt: 30 }
];
// let result08='';
//  oceans.forEach((para,i)=>{
//   result08+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.oceanTitle}</td>
//                         <td>${para.avgDepthMeters}</td>
//                         <td>${para.surfaceAreaMillionSqKm}</td>
//                         <td>${para.borderingContinents}</td>
//                         <td>${para.salinityPpt}</td>
//                     </tr>`
// })
// const table08=document.getElementById('table08');
// table08.innerHTML=result08;
// cl(result08);

let result08='';
for(let i=0;i<oceans.length;i++){
  result08+=`
  <tr>
                        <td>${i+1}</td>
                        <td>${oceans[i].oceanTitle}</td>
                        <td>${oceans[i].avgDepthMeters}</td>
                        <td>${oceans[i].surfaceAreaMillionSqKm}</td>
                        <td>${oceans[i].borderingContinents}</td>
                        <td>${oceans[i].salinityPpt}</td>
                 </tr>`
}
const table08=document.getElementById('table08');
table08.innerHTML=result08;
cl(result08);

var gadgets = [
  { gadgetLabel: "Smartphone", featuresCount: 200, batteryLifeHours: 24, connectivityType: "5G", weightGrams: 180 },
  { gadgetLabel: "Tablet", featuresCount: 150, batteryLifeHours: 12, connectivityType: "WiFi", weightGrams: 500 },
  { gadgetLabel: "Smartwatch", featuresCount: 100, batteryLifeHours: 48, connectivityType: "Bluetooth", weightGrams: 50 },
  { gadgetLabel: "Drone", featuresCount: 120, batteryLifeHours: 1, connectivityType: "Radio", weightGrams: 1200 },
  { gadgetLabel: "E-reader", featuresCount: 80, batteryLifeHours: 72, connectivityType: "WiFi", weightGrams: 300 }
];

// let result09='';
// gadgets.forEach((para,i)=>{
//   result09+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.gadgetLabel}</td>
//                         <td>${para.featuresCount}</td>
//                         <td>${para.batteryLifeHours}</td>
//                         <td>${para.connectivityType}</td>
//                         <td>${para.weightGrams}</td>
//                     </tr>`
// })
// const table09=document.getElementById('table09');
// table09.innerHTML=result09;
// cl(result09);

let result09='';
for(let i=0;i<gadgets.length;i++){
  result09+=`<tr>
                        <td>${i+1}</td>
                        <td>${gadgets[i].gadgetLabel}</td>
                        <td>${gadgets[i].featuresCount}</td>
                        <td>${gadgets[i].batteryLifeHours}</td>
                        <td>${gadgets[i].connectivityType}</td>
                        <td>${gadgets[i].weightGrams}</td>
                        
              </tr>`
}
const table09=document.getElementById('table09');
table09.innerHTML=result09;
cl(result09);


var landmarks = [
  { landmarkLabel: "Eiffel Tower", heightMeters: 324, visitorCountYearMillion: 7, countryLocation: "France", constructionYear: 1889 },
  { landmarkLabel: "Statue of Liberty", heightMeters: 93, visitorCountYearMillion: 4, countryLocation: "USA", constructionYear: 1886 },
  { landmarkLabel: "Taj Mahal", heightMeters: 73, visitorCountYearMillion: 6.5, countryLocation: "India", constructionYear: 1648 },
  { landmarkLabel: "Sydney Opera House", heightMeters: 65, visitorCountYearMillion: 8.2, countryLocation: "Australia", constructionYear: 1973 },
  { landmarkLabel: "Christ the Redeemer", heightMeters: 38, visitorCountYearMillion: 2, countryLocation: "Brazil", constructionYear: 1931 }
];

// let result10='';
// landmarks.forEach((para,i)=>{
//  result10+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.landmarkLabel}</td>
//                         <td>${para.heightMeters}</td>
//                         <td>${para.visitorCountYearMillion}</td>
//                         <td>${para.countryLocation}</td>
//                         <td>${para.constructionYear}</td>
//                     </tr>`
// })
// const table10=document.getElementById('table10');
// table10.innerHTML=result10;
// cl(result10);

let result10='';
for(let i=0; i<landmarks.length;i++){
  result10+=`<tr>
                       <td>${i+1}</td>
                        <td>${landmarks[i].landmarkLabel}</td>
                        <td>${landmarks[i].heightMeters}</td>
                        <td>${landmarks[i].visitorCountYearMillion}</td>
                        <td>${landmarks[i].countryLocation}</td>
                        <td>${landmarks[i].constructionYear}</td>
             </tr>`
}
const table10=document.getElementById('table10');
table10.innerHTML=result10;
cl(result10);




var vehiclesModels = [
  { vehicleType: "Scooter", maxSpeedKph: 80, fuelCapacityLiters: 5, wheelCount: 2, manufacturerLocation: "India" },
  { vehicleType: "Truck", maxSpeedKph: 120, fuelCapacityLiters: 200, wheelCount: 6, manufacturerLocation: "USA" },
  { vehicleType: "Bus", maxSpeedKph: 100, fuelCapacityLiters: 150, wheelCount: 4, manufacturerLocation: "Germany" },
  { vehicleType: "Train", maxSpeedKph: 320, fuelCapacityLiters: 0, wheelCount: 32, manufacturerLocation: "France" },
  { vehicleType: "Helicopter", maxSpeedKph: 250, fuelCapacityLiters: 900, wheelCount: 3, manufacturerLocation: "Russia" }
];

// let result11='';
// vehiclesModels.forEach((para,i)=>{
//  result11+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.vehicleType}</td>
//                         <td>${para.maxSpeedKph}</td>
//                         <td>${para.fuelCapacityLiters}</td>
//                         <td>${para.wheelCount}</td>
//                         <td>${para.manufacturerLocation}</td>
//                     </tr>`
// })
// const table11=document.getElementById('table11');
// table11.innerHTML=result11;
// cl(result11);

let result11='';
for(let i=0;i<vehiclesModels.length;i++){
  result11+=`<tr>
                         <td>${i+1}</td>
                         <td>${vehiclesModels[i].vehicleType}</td>
                         <td>${vehiclesModels[i].maxSpeedKph}</td>
                         <td>${vehiclesModels[i].fuelCapacityLiters}</td>
                         <td>${vehiclesModels[i].wheelCount}</td>
                         <td>${vehiclesModels[i].manufacturerLocation}</td>
                     </tr>`
}
const table11=document.getElementById('table11');
table11.innerHTML=result11;
cl(result11);


var professions = [
  { professionName: "Doctor", avgSalaryUSD: 120000, yearsOfStudy: 8, riskLevel: "High", workEnvironment: "Hospital" },
  { professionName: "Teacher", avgSalaryUSD: 45000, yearsOfStudy: 4, riskLevel: "Low", workEnvironment: "School" },
  { professionName: "Engineer", avgSalaryUSD: 80000, yearsOfStudy: 4, riskLevel: "Medium", workEnvironment: "Office" },
  { professionName: "Chef", avgSalaryUSD: 50000, yearsOfStudy: 2, riskLevel: "Medium", workEnvironment: "Kitchen" },
  { professionName: "Pilot", avgSalaryUSD: 130000, yearsOfStudy: 3, riskLevel: "High", workEnvironment: "Cockpit" }
];

// let result12='';
// professions.forEach((para,i)=>{
//  result12+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.professionName}</td>
//                         <td>${para.avgSalaryUSD}</td>
//                         <td>${para.yearsOfStudy}</td>
//                         <td>${para.riskLevel}</td>
//                         <td>${para.workEnvironment}</td>
//                     </tr>`
// })
// const table12=document.getElementById('table12');
// table12.innerHTML=result12;
// cl(result12);

let result12='';
for(let i=0;i<professions.length;i++){
  result12+=`<tr>
                         <td>${i+1}</td>
                         <td>${professions[i].professionName}</td>
                         <td>${professions[i].avgSalaryUSD}</td>
                         <td>${professions[i].yearsOfStudy}</td>
                         <td>${professions[i].riskLevel}</td>
                         <td>${professions[i].workEnvironment}</td>
                     </tr>`
}
const table12=document.getElementById('table12');
table12.innerHTML=result12;
cl(result12);


var beveragesMenu = [
  { beverageTitle: "Latte", caffeineMg: 150, servingSizeMl: 240, servedHot: true, sugarContentG: 15 },
  { beverageTitle: "Smoothie", caffeineMg: 0, servingSizeMl: 300, servedHot: false, sugarContentG: 25 },
  { beverageTitle: "Green Tea", caffeineMg: 35, servingSizeMl: 250, servedHot: true, sugarContentG: 0 },
  { beverageTitle: "Cola", caffeineMg: 40, servingSizeMl: 330, servedHot: false, sugarContentG: 39 },
  { beverageTitle: "Lemonade", caffeineMg: 0, servingSizeMl: 350, servedHot: false, sugarContentG: 20 }
];

// let result13='';
// beveragesMenu.forEach((para,i)=>{
//  result13+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.beverageTitle}</td>
//                         <td>${para.caffeineMg}</td>
//                         <td>${para.servingSizeMl}</td>
//                         <td>${para.servedHot ? 'Yes' : 'No'}</td>
//                         <td>${para.sugarContentG}</td>
//                     </tr>`
// })
// const table13=document.getElementById('table13');
// table13.innerHTML=result13;
// cl(result13);

let result13='';
for(let i=0;i<beveragesMenu.length;i++){
  result13+=`<tr>
                         <td>${i+1}</td>
                         <td>${beveragesMenu[i].beverageTitle}</td>
                         <td>${beveragesMenu[i].caffeineMg}</td>
                         <td>${beveragesMenu[i].servingSizeMl}</td>
                         <td>${beveragesMenu[i].servedHot ? 'Yes' : 'No'}</td>
                         <td>${beveragesMenu[i].sugarContentG}</td>
                     </tr>`
}
const table13=document.getElementById('table13');
table13.innerHTML=result13;
cl(result13);


var flowers = [
  { flowerName: "Rose", petalCount: 32, fragranceLevel: "High", bloomingSeason: "Spring", stemLengthCm: 50 },
  { flowerName: "Lily", petalCount: 6, fragranceLevel: "Medium", bloomingSeason: "Summer", stemLengthCm: 60 },
  { flowerName: "Tulip", petalCount: 6, fragranceLevel: "Low", bloomingSeason: "Spring", stemLengthCm: 45 },
  { flowerName: "Sunflower", petalCount: 34, fragranceLevel: "Low", bloomingSeason: "Summer", stemLengthCm: 150 },
  { flowerName: "Orchid", petalCount: 3, fragranceLevel: "Medium", bloomingSeason: "Winter", stemLengthCm: 40 }
];

// let result14='';
// flowers.forEach((para,i)=>{
//  result14+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.flowerName}</td>
//                         <td>${para.petalCount}</td>
//                         <td>${para.fragranceLevel}</td>
//                         <td>${para.bloomingSeason}</td>
//                         <td>${para.stemLengthCm}</td>
//                     </tr>`
// })
// const table14=document.getElementById('table14');
// table14.innerHTML=result14;
// cl(result14);

let result14='';
for(let i=0;i<flowers.length;i++){
  result14+=`<tr>
                         <td>${i+1}</td>
                         <td>${flowers[i].flowerName}</td>
                         <td>${flowers[i].petalCount}</td>
                         <td>${flowers[i].fragranceLevel}</td>
                         <td>${flowers[i].bloomingSeason}</td>
                         <td>${flowers[i].stemLengthCm}</td>
           </tr>`
}
const table14=document.getElementById('table14');
table14.innerHTML=result14;
cl(result14);


var hotels = [
  { hotelLabel: "Grand Palace", stars: 5, totalRooms: 200, poolAvailable: true, cityLoc: "Dubai" },
  { hotelLabel: "Budget Inn", stars: 3, totalRooms: 80, poolAvailable: false, cityLoc: "Bangkok" },
  { hotelLabel: "Ocean View", stars: 4, totalRooms: 120, poolAvailable: true, cityLoc: "Miami" },
  { hotelLabel: "Mountain Lodge", stars: 4, totalRooms: 60, poolAvailable: false, cityLoc: "Aspen" },
  { hotelLabel: "Heritage Stay", stars: 5, totalRooms: 50, poolAvailable: true, cityLoc: "Jaipur" }
];

// let result15='';
// hotels.forEach((para,i)=>{
//  result15+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.hotelLabel}</td>
//                         <td>${para.stars}</td>
//                         <td>${para.totalRooms}</td>
//                         <td>${para.poolAvailable ? 'Yes' : 'No'}</td>
//                         <td>${para.cityLoc}</td>
//                     </tr>`
// })
// const table15=document.getElementById('table15');
// table15.innerHTML=result15;
// cl(result15);

let result15='';
for(let i=0;i<hotels.length;i++){
  result15+=`<tr>
                         <td>${i+1}</td>
                         <td>${hotels[i].hotelLabel}</td>
                         <td>${hotels[i].stars}</td>
                         <td>${hotels[i].totalRooms}</td>
                         <td>${hotels[i].poolAvailable ? 'Yes' : 'No'}</td>
                         <td>${hotels[i].cityLoc}</td>
                     </tr>`
}
const table15=document.getElementById('table15');
table15.innerHTML=result15;
cl(result15);


var islands = [
  { islandLabel: "Greenland", areaSqKm: 2166000, countryAdmin: "Denmark", inhabited: true, climateType: "Arctic" },
  { islandLabel: "Borneo", areaSqKm: 743330, countryAdmin: "Multiple", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Madagascar", areaSqKm: 587041, countryAdmin: "Madagascar", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Sumatra", areaSqKm: 473481, countryAdmin: "Indonesia", inhabited: true, climateType: "Tropical" },
  { islandLabel: "Honshu", areaSqKm: 227960, countryAdmin: "Japan", inhabited: true, climateType: "Temperate" }
];

// let result16='';
// islands.forEach((para,i)=>{
//  result16+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.islandLabel}</td>
//                         <td>${para.areaSqKm}</td>
//                         <td>${para.countryAdmin}</td>
//                         <td>${para.inhabited ? 'Yes' : 'No'}</td>
//                         <td>${para.climateType}</td>
//                     </tr>`
// })
// const table16=document.getElementById('table16');
// table16.innerHTML=result16;
// cl(result16);

let result16='';
for(let i=0;i<islands.length;i++){
  result16+=`<tr>
                         <td>${i+1}</td>
                         <td>${islands[i].islandLabel}</td>
                         <td>${islands[i].areaSqKm}</td>
                         <td>${islands[i].countryAdmin}</td>
                         <td>${islands[i].inhabited ? 'Yes' : 'No'}</td>
                         <td>${islands[i].climateType}</td>
                     </tr>`
}
const table16=document.getElementById('table16');
table16.innerHTML=result16;
cl(result16);


var insects = [
  { insectName: "Butterfly", wingspanCm: 12, legsCount: 6, lifespanDays: 30, canFly: true },
  { insectName: "Ant", wingspanCm: 0, legsCount: 6, lifespanDays: 180, canFly: false },
  { insectName: "Dragonfly", wingspanCm: 9, legsCount: 6, lifespanDays: 120, canFly: true },
  { insectName: "Bee", wingspanCm: 3, legsCount: 6, lifespanDays: 42, canFly: true },
  { insectName: "Ladybug", wingspanCm: 1, legsCount: 6, lifespanDays: 365, canFly: true }
];

// let result17='';
// insects.forEach((para,i)=>{
//  result17+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.insectName}</td>
//                         <td>${para.wingspanCm}</td>
//                         <td>${para.legsCount}</td>
//                         <td>${para.lifespanDays}</td>
//                         <td>${para.canFly ? 'Yes' : 'No'}</td>
//                     </tr>`
// })
// const table17=document.getElementById('table17');
// table17.innerHTML=result17;
// cl(result17);

let result17='';
for(let i=0;i<insects.length;i++){
  result17+=`<tr>
                         <td>${i+1}</td>
                         <td>${insects[i].insectName}</td>
                         <td>${insects[i].wingspanCm}</td>
                         <td>${insects[i].legsCount}</td>
                         <td>${insects[i].lifespanDays}</td>
                         <td>${insects[i].canFly ? 'Yes' : 'No'}</td>
                     </tr>`
}
const table17=document.getElementById('table17');
table17.innerHTML=result17;
cl(result17);


var festivals = [
  { festivalName: "Holi", monthObserved: "March", durationDays: 2, originCountry: "India", outdoorEvent: true },
  { festivalName: "Rio Carnival", monthObserved: "February", durationDays: 5, originCountry: "Brazil", outdoorEvent: true },
  { festivalName: "Oktoberfest", monthObserved: "October", durationDays: 16, originCountry: "Germany", outdoorEvent: true },
  { festivalName: "Thanksgiving", monthObserved: "November", durationDays: 1, originCountry: "USA", outdoorEvent: false },
  { festivalName: "Chinese New Year", monthObserved: "January", durationDays: 15, originCountry: "China", outdoorEvent: true }
];
// let result18='';
// festivals.forEach((para,i)=>{
//  result18+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.festivalName}</td>
//                         <td>${para.monthObserved}</td>
//                         <td>${para.durationDays}</td>
//                         <td>${para.originCountry}</td>
//                         <td>${para.outdoorEvent ? 'Yes' : 'No'}</td>
//                     </tr>`
// })
// const table18=document.getElementById('table18');
// table18.innerHTML=result18;
// cl(result18);

let result18='';
for(let i=0;i<festivals.length;i++){
  result18+=`<tr>
                         <td>${i+1}</td>
                         <td>${festivals[i].festivalName}</td>
                         <td>${festivals[i].monthObserved}</td>
                         <td>${festivals[i].durationDays}</td>
                         <td>${festivals[i].originCountry}</td>
                         <td>${festivals[i].outdoorEvent ? 'Yes' : 'No'}</td>
                     </tr>`
}
const table18=document.getElementById('table18');
table18.innerHTML=result18;
cl(result18);


var rivers = [
  { riverLabel: "Ganges", lengthKm: 2525, flowsThroughCountries: 2, avgDepthM: 16, deltaExists: true },
  { riverLabel: "Nile", lengthKm: 6650, flowsThroughCountries: 11, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Amazon", lengthKm: 6400, flowsThroughCountries: 7, avgDepthM: 20, deltaExists: true },
  { riverLabel: "Danube", lengthKm: 2850, flowsThroughCountries: 10, avgDepthM: 8, deltaExists: true },
  { riverLabel: "Mississippi", lengthKm: 3730, flowsThroughCountries: 1, avgDepthM: 9, deltaExists: true }
];
// let result19='';
// rivers.forEach((para,i)=>{
//  result19+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.riverLabel}</td>
//                         <td>${para.lengthKm}</td>
//                         <td>${para.flowsThroughCountries}</td>
//                         <td>${para.avgDepthM}</td>
//                         <td>${para.deltaExists ? 'Yes' : 'No'}</td>
//                     </tr>`
// })
// const table19=document.getElementById('table19');
// table19.innerHTML=result19;
// cl(result19);

let result19='';
for(let i=0;i<rivers.length;i++){
  result19+=`<tr>
                         <td>${i+1}</td>
                         <td>${rivers[i].riverLabel}</td>
                         <td>${rivers[i].lengthKm}</td>
                         <td>${rivers[i].flowsThroughCountries}</td>
                         <td>${rivers[i].avgDepthM}</td>
                         <td>${rivers[i].deltaExists ? 'Yes' : 'No'}</td>
                     </tr>`
}
const table19=document.getElementById('table19');
table19.innerHTML=result19;
cl(result19);

var spices = [
  { spiceName: "Turmeric", colorHue: "Yellow", originRegion: "India", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Cinnamon", colorHue: "Brown", originRegion: "Sri Lanka", pungencyLevel: "Medium", isPowdered: true },
  { spiceName: "Clove", colorHue: "Dark Brown", originRegion: "Indonesia", pungencyLevel: "High", isPowdered: false },
  { spiceName: "Paprika", colorHue: "Red", originRegion: "Spain", pungencyLevel: "Low", isPowdered: true },
  { spiceName: "Black Pepper", colorHue: "Black", originRegion: "India", pungencyLevel: "Medium", isPowdered: true }
];

// let result20='';
// spices.forEach((para,i)=>{
//  result20+=`<tr>
//                         <td>${i+1}</td>
//                         <td>${para.spiceName}</td>
//                         <td>${para.colorHue}</td>
//                         <td>${para.originRegion}</td>
//                         <td>${para.pungencyLevel}</td>
//                         <td>${para.isPowdered ? 'Yes' : 'No'}</td>
//                     </tr>`
// })
// const table20=document.getElementById('table20');
// table20.innerHTML=result20;
// cl(result20);
let result20='';
for(let i=0;i<spices.length;i++){
  result20+=`<tr>
                         <td>${i+1}</td>
                         <td>${spices[i].spiceName}</td>
                         <td>${spices[i].colorHue}</td>
                         <td>${spices[i].originRegion}</td>
                         <td>${spices[i].pungencyLevel}</td>
                         <td>${spices[i].isPowdered ? 'Yes' : 'No'}</td>
                     </tr>`
}
const table20=document.getElementById('table20');
table20.innerHTML=result20;
cl(result20);


var tools = [
  { toolName: "Hammer", weightKg: 1.2, handleMaterial: "Wood", manualTool: true, usageCategory: "Construction" },
  { toolName: "Screwdriver", weightKg: 0.2, handleMaterial: "Plastic", manualTool: true, usageCategory: "Repair" },
  { toolName: "Electric Drill", weightKg: 2.5, handleMaterial: "Plastic", manualTool: false, usageCategory: "Construction" },
  { toolName: "Wrench", weightKg: 0.8, handleMaterial: "Steel", manualTool: true, usageCategory: "Repair" },
  { toolName: "Chainsaw", weightKg: 5.5, handleMaterial: "Metal", manualTool: false, usageCategory: "Cutting" }
];
let result21='';
tools.forEach((para,i)=>{
 result21+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.toolName}</td>
                        <td>${para.weightKg}</td>
                        <td>${para.handleMaterial}</td>
                        <td>${para.manualTool ? 'Yes' : 'No'}</td>
                        <td>${para.usageCategory}</td>
                    </tr>`
})
const table21=document.getElementById('table21');
table21.innerHTML=result21;
cl(result21);




var minerals = [
  { mineralLabel: "Quartz", hardnessMoh: 7, crystalSystem: "Hexagonal", isMetallic: false, marketPriceUSDkg: 5 },
  { mineralLabel: "Diamond", hardnessMoh: 10, crystalSystem: "Cubic", isMetallic: false, marketPriceUSDkg: 50000 },
  { mineralLabel: "Hematite", hardnessMoh: 6.5, crystalSystem: "Trigonal", isMetallic: true, marketPriceUSDkg: 120 },
  { mineralLabel: "Gold", hardnessMoh: 2.5, crystalSystem: "Cubic", isMetallic: true, marketPriceUSDkg: 60000 },
  { mineralLabel: "Feldspar", hardnessMoh: 6, crystalSystem: "Triclinic", isMetallic: false, marketPriceUSDkg: 8 }
];

let result22='';
minerals.forEach((para,i)=>{
 result22+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.mineralLabel}</td>
                        <td>${para.hardnessMoh}</td>
                        <td>${para.crystalSystem}</td>
                        <td>${para.isMetallic ? 'Yes' : 'No'}</td>
                        <td>${para.marketPriceUSDkg}</td>
                    </tr>`
})
const table22=document.getElementById('table22');
table22.innerHTML=result22;
cl(result22);


var planetsMoons = [
  { moonLabel: "Europa", orbitingPlanet: "Jupiter", diameterKm: 3121, discoveredYear: 1610, surfaceMaterial: "Ice" },
  { moonLabel: "Titan", orbitingPlanet: "Saturn", diameterKm: 5150, discoveredYear: 1655, surfaceMaterial: "Ice" },
  { moonLabel: "Ganymede", orbitingPlanet: "Jupiter", diameterKm: 5268, discoveredYear: 1610, surfaceMaterial: "Ice" },
  { moonLabel: "Io", orbitingPlanet: "Jupiter", diameterKm: 3643, discoveredYear: 1610, surfaceMaterial: "Sulfur" },
  { moonLabel: "Phobos", orbitingPlanet: "Mars", diameterKm: 22, discoveredYear: 1877, surfaceMaterial: "Rock" }
];
let result23='';
planetsMoons.forEach((para,i)=>{
 result23+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.moonLabel}</td>
                        <td>${para.orbitingPlanet}</td>
                        <td>${para.diameterKm}</td>
                        <td>${para.discoveredYear}</td>
                        <td>${para.surfaceMaterial}</td>
                    </tr>`
})
const table23=document.getElementById('table23');
table23.innerHTML=result23;
cl(result23);


var musicalBands = [
  { bandLabel: "The Beatles", originCity: "Liverpool", formedYear: 1960, genreStyle: "Rock", albumsCount: 13 },
  { bandLabel: "Queen", originCity: "London", formedYear: 1970, genreStyle: "Rock", albumsCount: 15 },
  { bandLabel: "Coldplay", originCity: "London", formedYear: 1996, genreStyle: "Alternative", albumsCount: 9 },
  { bandLabel: "Metallica", originCity: "Los Angeles", formedYear: 1981, genreStyle: "Metal", albumsCount: 11 },
  { bandLabel: "ABBA", originCity: "Stockholm", formedYear: 1972, genreStyle: "Pop", albumsCount: 8 }
];
let result24='';
musicalBands.forEach((para,i)=>{
 result24+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.bandLabel}</td>
                        <td>${para.originCity}</td>
                        <td>${para.formedYear}</td>
                        <td>${para.genreStyle}</td>
                        <td>${para.albumsCount}</td>
                    </tr>`
})
const table24=document.getElementById('table24');
table24.innerHTML=result24;
cl(result24);



var citiesMetro = [
  { metroLabel: "Tokyo Metro", trackLengthKm: 195, totalStations: 180, dailyRidershipMillion: 6.8, operatingSince: 1927 },
  { metroLabel: "London Underground", trackLengthKm: 402, totalStations: 270, dailyRidershipMillion: 5, operatingSince: 1863 },
  { metroLabel: "New York Subway", trackLengthKm: 394, totalStations: 472, dailyRidershipMillion: 5.5, operatingSince: 1904 },
  { metroLabel: "Delhi Metro", trackLengthKm: 389, totalStations: 286, dailyRidershipMillion: 2.8, operatingSince: 2002 },
  { metroLabel: "Paris Metro", trackLengthKm: 226, totalStations: 304, dailyRidershipMillion: 4.1, operatingSince: 1900 }
];
let result25='';
citiesMetro.forEach((para,i)=>{
 result25+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.metroLabel}</td>
                        <td>${para.trackLengthKm}</td>
                        <td>${para.totalStations}</td>
                        <td>${para.dailyRidershipMillion}</td>
                        <td>${para.operatingSince}</td>
                    </tr>`
})
const table25=document.getElementById('table25');
table25.innerHTML=result25;
cl(result25);



var sciDiscoveries = [
  { discoveryLabel: "Gravity", discoveredBy: "Isaac Newton", yearMade: 1687, fieldArea: "Physics", impactLevel: "High" },
  { discoveryLabel: "DNA Structure", discoveredBy: "Watson & Crick", yearMade: 1953, fieldArea: "Biology", impactLevel: "High" },
  { discoveryLabel: "Penicillin", discoveredBy: "Alexander Fleming", yearMade: 1928, fieldArea: "Medicine", impactLevel: "High" },
  { discoveryLabel: "Radioactivity", discoveredBy: "Marie Curie", yearMade: 1898, fieldArea: "Physics", impactLevel: "High" },
  { discoveryLabel: "Relativity", discoveredBy: "Albert Einstein", yearMade: 1905, fieldArea: "Physics", impactLevel: "High" }
];
let result26='';
sciDiscoveries.forEach((para,i)=>{
 result26+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.discoveryLabel}</td>
                        <td>${para.discoveredBy}</td>
                        <td>${para.yearMade}</td>
                        <td>${para.fieldArea}</td>
                        <td>${para.impactLevel}</td>
                    </tr>`
})
const table26=document.getElementById('table26');
table26.innerHTML=result26;
cl(result26);




var nationalParks = [
  { parkLabel: "Yellowstone", countryLocated: "USA", establishedYear: 1872, areaSqKm: 8983, annualVisitorsMillion: 4.1 },
  { parkLabel: "Serengeti", countryLocated: "Tanzania", establishedYear: 1951, areaSqKm: 14750, annualVisitorsMillion: 1.5 },
  { parkLabel: "Banff", countryLocated: "Canada", establishedYear: 1885, areaSqKm: 6641, annualVisitorsMillion: 4 },
  { parkLabel: "Kruger", countryLocated: "South Africa", establishedYear: 1926, areaSqKm: 19485, annualVisitorsMillion: 1.8 },
  { parkLabel: "Fiordland", countryLocated: "New Zealand", establishedYear: 1952, areaSqKm: 12500, annualVisitorsMillion: 1 }
];
let result27='';
nationalParks.forEach((para,i)=>{
 result27+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.parkLabel}</td>
                        <td>${para.countryLocated}</td>
                        <td>${para.establishedYear}</td>
                        <td>${para.areaSqKm}</td>
                        <td>${para.annualVisitorsMillion}</td>
                    </tr>`
})
const table27=document.getElementById('table27');
table27.innerHTML=result27;
cl(result27);



var artPaintings = [
  { paintingTitle: "Mona Lisa", artistName: "Leonardo da Vinci", yearCreated: 1503, styleType: "Portrait", currentLocation: "Louvre" },
  { paintingTitle: "Starry Night", artistName: "Vincent van Gogh", yearCreated: 1889, styleType: "Post-Impressionism", currentLocation: "MoMA" },
  { paintingTitle: "The Persistence of Memory", artistName: "Salvador Dalí", yearCreated: 1931, styleType: "Surrealism", currentLocation: "MoMA" },
  { paintingTitle: "Girl with a Pearl Earring", artistName: "Johannes Vermeer", yearCreated: 1665, styleType: "Tronie", currentLocation: "Mauritshuis" },
  { paintingTitle: "The Scream", artistName: "Edvard Munch", yearCreated: 1893, styleType: "Expressionism", currentLocation: "National Gallery Oslo" }
];
let result28='';
artPaintings.forEach((para,i)=>{
 result28+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.paintingTitle}</td>
                        <td>${para.artistName}</td>
                        <td>${para.yearCreated}</td>
                        <td>${para.styleType}</td>
                        <td>${para.currentLocation}</td>
                    </tr>`
})
const table28=document.getElementById('table28');
table28.innerHTML=result28;
cl(result28);



var historicalBattles = [
  { battleName: "Waterloo", battleYear: 1815, mainCombatants: "France vs Coalition", outcome: "Coalition Victory", casualtiesApprox: 47000 },
  { battleName: "Hastings", battleYear: 1066, mainCombatants: "Normans vs Anglo-Saxons", outcome: "Norman Victory", casualtiesApprox: 10000 },
  { battleName: "Gettysburg", battleYear: 1863, mainCombatants: "Union vs Confederacy", outcome: "Union Victory", casualtiesApprox: 51000 },
  { battleName: "Stalingrad", battleYear: 1942, mainCombatants: "USSR vs Nazi Germany", outcome: "Soviet Victory", casualtiesApprox: 2000000 },
  { battleName: "Agincourt", battleYear: 1415, mainCombatants: "England vs France", outcome: "English Victory", casualtiesApprox: 10000 }
];
let result29='';
historicalBattles.forEach((para,i)=>{
 result29+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.battleName}</td>
                        <td>${para.battleYear}</td>
                        <td>${para.mainCombatants}</td>
                        <td>${para.outcome}</td>
                        <td>${para.casualtiesApprox}</td>
                    </tr>`
})
const table29=document.getElementById('table29');
table29.innerHTML=result29;
cl(result29);



var awards = [
  { awardTitle: "Nobel Prize", categoryGiven: "Various", established: 1901, awardCountry: "Sweden", frequencyYears: 1 },
  { awardTitle: "Academy Award", categoryGiven: "Film", established: 1929, awardCountry: "USA", frequencyYears: 1 },
  { awardTitle: "Pulitzer Prize", categoryGiven: "Journalism & Arts", established: 1917, awardCountry: "USA", frequencyYears: 1 },
  { awardTitle: "Booker Prize", categoryGiven: "Literature", established: 1969, awardCountry: "UK", frequencyYears: 1 },
  { awardTitle: "Olympic Gold", categoryGiven: "Sports", established: 1896, awardCountry: "Various", frequencyYears: 4 }
];

let result30='';
awards.forEach((para,i)=>{
 result30+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.awardTitle}</td>
                        <td>${para.categoryGiven}</td>
                        <td>${para.established}</td>
                        <td>${para.awardCountry}</td>
                        <td>${para.frequencyYears}</td>
                    </tr>`
})
const table30=document.getElementById('table30');
table30.innerHTML=result30;
cl(result30);


var bridges = [
  { bridgeLabel: "Golden Gate", lengthMeters: 2737, countryLocated: "USA", builtYear: 1937, materialMain: "Steel" },
  { bridgeLabel: "Tower Bridge", lengthMeters: 244, countryLocated: "UK", builtYear: 1894, materialMain: "Steel" },
  { bridgeLabel: "Brooklyn Bridge", lengthMeters: 1825, countryLocated: "USA", builtYear: 1883, materialMain: "Steel & Stone" },
  { bridgeLabel: "Sydney Harbour Bridge", lengthMeters: 1149, countryLocated: "Australia", builtYear: 1932, materialMain: "Steel" },
  { bridgeLabel: "Akashi Kaikyō", lengthMeters: 3911, countryLocated: "Japan", builtYear: 1998, materialMain: "Steel" }
];
let result31='';
bridges.forEach((para,i)=>{
 result31+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.bridgeLabel}</td>
                        <td>${para.lengthMeters}</td>
                        <td>${para.countryLocated}</td>
                        <td>${para.builtYear}</td>
                        <td>${para.materialMain}</td>
                    </tr>`
})
const table31=document.getElementById('table31');
table31.innerHTML=result31;
cl(result31);


var spaceTelescopes = [
  { telescopeName: "Hubble", launchYear: 1990, primaryMirrorM: 2.4, operatorAgency: "NASA/ESA", missionStatus: "Active" },
  { telescopeName: "James Webb", launchYear: 2021, primaryMirrorM: 6.5, operatorAgency: "NASA/ESA/CSA", missionStatus: "Active" },
  { telescopeName: "Spitzer", launchYear: 2003, primaryMirrorM: 0.85, operatorAgency: "NASA", missionStatus: "Retired" },
  { telescopeName: "Chandra", launchYear: 1999, primaryMirrorM: 1.2, operatorAgency: "NASA", missionStatus: "Active" },
  { telescopeName: "Kepler", launchYear: 2009, primaryMirrorM: 0.95, operatorAgency: "NASA", missionStatus: "Retired" }
];
let result32='';
spaceTelescopes.forEach((para,i)=>{
 result32+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.telescopeName}</td>
                        <td>${para.launchYear}</td>
                        <td>${para.primaryMirrorM}</td>
                        <td>${para.operatorAgency}</td>
                        <td>${para.missionStatus}</td>
                    </tr>`
})
const table32=document.getElementById('table32');
table32.innerHTML=result32;
cl(result32);

// 36. fashionBrands
var fashionBrands = [
  { brandLabel: "Gucci", foundedYear: 1921, originCountry: "Italy", productType: "Luxury Fashion", annualRevenueBillionUSD: 11 },
  { brandLabel: "Louis Vuitton", foundedYear: 1854, originCountry: "France", productType: "Luxury Goods", annualRevenueBillionUSD: 15 },
  { brandLabel: "Nike", foundedYear: 1964, originCountry: "USA", productType: "Sportswear", annualRevenueBillionUSD: 37 },
  { brandLabel: "Adidas", foundedYear: 1949, originCountry: "Germany", productType: "Sportswear", annualRevenueBillionUSD: 26 },
  { brandLabel: "Zara", foundedYear: 1974, originCountry: "Spain", productType: "Fast Fashion", annualRevenueBillionUSD: 23 }
];

let result33='';
fashionBrands.forEach((para,i)=>{
 result33+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.brandLabel}</td>
                        <td>${para.foundedYear}</td>
                        <td>${para.originCountry}</td>
                        <td>${para.productType}</td>
                        <td>${para.annualRevenueBillionUSD}</td>
                    </tr>`
})
const table33=document.getElementById('table33');
table33.innerHTML=result33;
cl(result33);


var musicalInstrumentsPro = [
  { instrumentName: "Piano", categoryFamily: "Keyboard", rangeOctaves: 7, madeOf: "Wood & Metal", originCentury: 18 },
  { instrumentName: "Violin", categoryFamily: "String", rangeOctaves: 4, madeOf: "Wood", originCentury: 16 },
  { instrumentName: "Trumpet", categoryFamily: "Brass", rangeOctaves: 2.5, madeOf: "Brass", originCentury: 15 },
  { instrumentName: "Flute", categoryFamily: "Woodwind", rangeOctaves: 3, madeOf: "Metal", originCentury: "Ancient" },
  { instrumentName: "Drum Set", categoryFamily: "Percussion", rangeOctaves: 1, madeOf: "Wood & Metal", originCentury: 20 }
];
let result34='';
musicalInstrumentsPro.forEach((para,i)=>{
 result34+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.instrumentName}</td>
                        <td>${para.categoryFamily}</td>
                        <td>${para.rangeOctaves}</td>
                        <td>${para.madeOf}</td>
                        <td>${para.originCentury}</td>
                    </tr>`
})
const table34=document.getElementById('table34');
table34.innerHTML=result34;
cl(result34);


var webBrowsers = [
  { browserName: "Chrome", developerOrg: "Google", firstReleaseYear: 2008, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Firefox", developerOrg: "Mozilla", firstReleaseYear: 2002, engineUsed: "Gecko", platformSupport: "Cross-platform" },
  { browserName: "Safari", developerOrg: "Apple", firstReleaseYear: 2003, engineUsed: "WebKit", platformSupport: "Apple devices" },
  { browserName: "Edge", developerOrg: "Microsoft", firstReleaseYear: 2015, engineUsed: "Blink", platformSupport: "Cross-platform" },
  { browserName: "Opera", developerOrg: "Opera Software", firstReleaseYear: 1995, engineUsed: "Blink", platformSupport: "Cross-platform" }
];
let result35='';
webBrowsers.forEach((para,i)=>{
 result35+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.browserName}</td>
                        <td>${para.developerOrg}</td>
                        <td>${para.firstReleaseYear}</td>
                        <td>${para.engineUsed}</td>
                        <td>${para.platformSupport}</td>
                    </tr>`
})
const table35=document.getElementById('table35');
table35.innerHTML=result35;
cl(result35);


var airlines = [
  { airlineName: "Emirates", foundedYear: 1985, hubAirport: "Dubai International", fleetSize: 262, allianceMember: false },
  { airlineName: "Qatar Airways", foundedYear: 1993, hubAirport: "Hamad International", fleetSize: 237, allianceMember: false },
  { airlineName: "Singapore Airlines", foundedYear: 1947, hubAirport: "Changi Airport", fleetSize: 155, allianceMember: true },
  { airlineName: "Lufthansa", foundedYear: 1953, hubAirport: "Frankfurt Airport", fleetSize: 277, allianceMember: true },
  { airlineName: "Delta Air Lines", foundedYear: 1924, hubAirport: "Atlanta", fleetSize: 915, allianceMember: true }
];
let result36='';
airlines.forEach((para,i)=>{
 result36+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.airlineName}</td>
                        <td>${para.foundedYear}</td>
                        <td>${para.hubAirport}</td>
                        <td>${para.fleetSize}</td>
                        <td>${para.allianceMember ? 'Yes' : 'No'}</td>
                    </tr>`
})
const table36=document.getElementById('table36');
table36.innerHTML=result36;
cl(result36);

var volcanoes = [
  { volcanoLabel: "Mauna Loa", heightMeters: 4169, lastEruptionYear: 2022, locationIsland: "Hawaii", volcanoType: "Shield" },
  { volcanoLabel: "Mount Etna", heightMeters: 3329, lastEruptionYear: 2021, locationIsland: "Sicily", volcanoType: "Stratovolcano" },
  { volcanoLabel: "Krakatoa", heightMeters: 813, lastEruptionYear: 2018, locationIsland: "Indonesia", volcanoType: "Caldera" },
  { volcanoLabel: "Mount Fuji", heightMeters: 3776, lastEruptionYear: 1707, locationIsland: "Honshu", volcanoType: "Stratovolcano" },
  { volcanoLabel: "Eyjafjallajökull", heightMeters: 1651, lastEruptionYear: 2010, locationIsland: "Iceland", volcanoType: "Stratovolcano" }
];
let result37='';
volcanoes.forEach((para,i)=>{
 result37+=`<tr>
                        <td>${i+1}</td>
                        <td>${para.volcanoLabel}</td>
                        <td>${para.heightMeters}</td>
                        <td>${para.lastEruptionYear}</td>
                        <td>${para.locationIsland}</td>
                        <td>${para.volcanoType}</td>
                    </tr>`
})
const table37=document.getElementById('table37');
table37.innerHTML=result37;
cl(result37);



