const mainnumber = document.getElementsByClassName("mainnumber");
const length = document.getElementById("lengthp");
const volume = document.getElementById("volumep");
const mass = document.getElementById("massp");
const inputnumber = document.getElementById("mainnumberinpt");

length.innerHTML = `<span class="mainnumber">0</span> meters = <span id="meterstofeet">0</span> feet | <span class="mainnumber">0</span> feet = <span id="feettometers">0</span> meters`;

volume.innerHTML = `<span class="mainnumber">0</span> liters = <span id="literstogallons">0</span> gallons | <span class="mainnumber">0</span> gallons = <span id="gallonstoliters">0</span> liters`;

mass.innerHTML = `<span class="mainnumber">0</span> kilos = <span id="kilostopounds">0</span> pounds | <span class="mainnumber">0</span> pounds = <span id="poundstokilos">0</span> kilos`;

/* prettier-ignore */
inputnumber.addEventListener("input", function () {
  let feet = inputnumber.value * 3.281;
  let meters = inputnumber.value / 3.281;
  let gallons = inputnumber.value * 0.264;
  let liters = inputnumber.value / 0.264;
  let pounds = inputnumber.value * 2.204;
  let kilos = inputnumber.value / 2.204;
    
    length.innerHTML = `<span class="mainnumber">${inputnumber.value}</span> meters = <span id="meterstofeet">${Number(feet).toFixed(3)}</span> feet | <span class="mainnumber">${inputnumber.value}</span> feet = <span id="feettometers">${Number(meters).toFixed(3)}</span> meters`;
    
    volume.innerHTML = `<span class="mainnumber">${inputnumber.value}</span> liters = <span id="literstogallons">${Number(gallons).toFixed(3)}</span> gallons | <span class="mainnumber">${inputnumber.value}</span> gallons = <span id="gallonstoliters">${Number(liters).toFixed(3)}</span> liters`;

    mass.innerHTML = `<span class="mainnumber">${inputnumber.value}</span> kilos = <span id="kilostopounds">${Number(pounds).toFixed(3)}</span> pounds | <span class="mainnumber">${inputnumber.value}</span> pounds = <span id="poundstokilos">${Number(kilos).toFixed(3)}</span> kilos`;
});
