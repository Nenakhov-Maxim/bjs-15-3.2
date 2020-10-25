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
let memory = [];
let sumRes;
let limited;

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    for (let i = 0, len = memory.length; i < len; i++) {
        const element = memory[i];
        if (element.args.length < 1) {
            element.args = Array.from(arguments);
            sleep(100);
            element.result = args.reduce((summ, arg) => {
                return summ += +arg;
            }, 0);
            checkAndAddNewElement(limited);
            return element.result;
        } else {
            const comparison = memory.find(item => {
                if (item.args.length === Array.from(arguments).length) {
                    return compareArrays(item.args, Array.from(arguments))
                }
                return true;
            })
            if (comparison.args.length > 0) {
                return comparison.result;
            }
        }
    }
}

function compareArrays(arr1, arr2) {
    let isParArrays = arr1.every((elem, index) => {
        return elem === arr2[index];
    })
    return isParArrays;

}

function checkAndAddNewElement(limit) {
    if (memory.length <= limit) {
        memory.push({ args: [], result: 0 });
    } else {
        memory.splice(0, 1);
        memory.push({ args: [], result: 0 });
    }
}



function memorize(fn, limit) {
    limited = limit;
    memory = [{ args: [], result: sumRes }];
    console.log(memory);
    return fn;
}