let auto_1 = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: '2022',
    average_speed: 90
}

let auto_2 = {
    manufacturer: 'Ford',
    model: 'Mustang',
    year: '2021',
    average_speed: 120
}

let auto_3 = {
    manufacturer: 'Volvo',
    model: 'XC90',
    year: '2020',
    average_speed: 100
}

function GetInfo(auto){
    alert(`Производитель: ${auto.manufacturer} Модель: ${auto.model}
Год выпуска: ${auto.year} Средняя скорость: ${auto.average_speed}`);
}

function CountTime(auto, distance){
    let nes_time = 0;
    let speed = auto.average_speed;
    let IfBreak = false;

    for(let i = distance; i > 0; i-=speed){
        nes_time++;
        if(nes_time % 4 === 0){  
            nes_time++;
            IfBreak = true;
        }
    }
    if(IfBreak){
        alert(`Необходимое время с учётом на перерывы: ${nes_time}`);
    }
    else{
        alert(`Необходимое время: ${nes_time}`);
    }
    return nes_time;
}

function getYearsSinceRelease(auto){
    let years;
    let dateNow = new Date();
    years = dateNow.getFullYear() - auto.year
    alert(`Лет прошло с момента выпуска автомобиля: ${years}`);
    return years;
}