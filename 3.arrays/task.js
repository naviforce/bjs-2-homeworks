"use strict"

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);  // boolean
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, arr) =>  {
        acc += item;
        if(index === arr.length - 1)    {
            return acc / arr.length;
        }
        return acc;
    }, 0);
    return result; // array
}