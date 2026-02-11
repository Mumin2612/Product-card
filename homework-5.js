// Функи которая выводит город и градус
function cityTemperature() {
    const city = "Варшава";
    const temperature = 3;

    console.log("Сейчас в " +  city  +  " температура " +  temperature + " градусов по Цельсию"); 
};
cityTemperature();

// Функция котрая сравнивает скорость света с задданым аргументом.    
const speedOfLight = 299792458;

function checkingLight(light) {
    if (light > speedOfLight) {
        console.log("Сверхсветовая скорость");
    } else if (light < speedOfLight) {
        console.log("Субсветовая  скорость");
    } else {
        console.log("Скорость света");
    };
};
checkingLight(299792459);

// Функция которая сравнивает бюджет и лимит. 
const accessory = "Айфон 15"; 
const price = 3500; 

function myLimit(limit) {
    if (limit >= price) {
        console.log(accessory + " приобретен. Спасибо за покупку!");
    } else {
        const differnce = price - limit
        console.log(`Вам не хватает ${differnce} пополните баланс.`);
    };
};
myLimit(3100);
