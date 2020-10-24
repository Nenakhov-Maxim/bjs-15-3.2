// Задание 1

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    const namesWeapons = weapons.map(item => item.name);
    return namesWeapons;
}

function getCountReliableWeapons(strength) {
    const amountReliableWeapons = weapons.filter(item => item.durability > strength);
    return amountReliableWeapons.length;
}

function hasReliableWeapons(strength) {
    const someWeapons = weapons.some(item => item.durability > strength);
    return someWeapons;
}

function getReliableWeaponsNames(strength) {
    const nameReliableWeapons = weapons
        .filter(item => item.durability > strength)
        .map(item => item.name);
    return nameReliableWeapons;
}

function getTotalDamage() {
    const totalDamage = weapons
        .reduce((totalItemsDamage, weapon) => {
            return totalItemsDamage + weapon.attack;
        }, 0);
    return totalDamage;
}

function getValuestCountToSumValues(arr, summ) {
    let i = 0;
    let result = arr.reduce((totalNumber, number) => {
        if (totalNumber < summ) {
            i += 1
            return totalNumber + number;
        }
        return totalNumber;
    }, 0);
    return (i);
}

// Задание 2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    let isParArrays = arr1.every((elem, index) => {
        return elem === arr2[index];
    })
    return isParArrays;
}

function memorize(fn, limit) {
    let memory = [];
}