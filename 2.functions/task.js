"use strict"

function getArrayParams(...arr) {
  if  (arr.length === 0)  {
    return 0;
  }
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = sum / arr.length;

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}


function summElementsWorker(...arr) {
  if  (arr.length === 0)  {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if  (arr.length === 0)  {
    return 0;
  }
  let difference = Math.max(...arr) - Math.min(...arr);
  return Math.abs(difference);
}

function differenceEvenOddWorker(...arr) {
  if  (arr.length === 0)  {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++)  {
    if (arr[i] % 2 === 0)  {
      sumEvenElement += arr[i]
    }
    else  {
      sumOddElement += arr[i]
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if  (arr.length === 0)  {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++)  {
    if  (arr[i] % 2 === 0)  {
      sumEvenElement += arr[i]
      countEvenElement ++
    }  
  }
  return  sumEvenElement/countEvenElement;
}


function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let max;
  for (let i = 0; i < arrOfArr.length; i++) {
    max = func(...arrOfArr[i]);
    if (max > maxWorkerResult) {
      maxWorkerResult = max;
    }
  }
  return maxWorkerResult;
}