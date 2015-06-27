'use strict'

var $ = require('jquery');
var views = require('views');
var _ = require('underscore');

$.ajax({
  url: 'data/cars.data',
  method: 'GET'
})
.then(parseCarsCsv)
.then(renderCars);

function parseCarsCsv (carsCsv) {
  var carsRecord = carsCsv
    .split("\n")
    .map(function(record, i) {
      var cells = record.split(',');
      var index = (i+1).toString();
      return {
        symboling: cells[0],
        normalizedLosses: cells[1],
        make: cells[2],
        fuelType: cells[3],
        aspiration: cells[4],
        numOfDoors: cells[5],
        bodyStyle: cells[6],
        driveWheels: cells[7],
        engineLocation: cells[8],
        wheelBase: cells[9],
        length: cells[10],
        width: cells[11],
        height: cells[12],
        curbWeight: cells[13],
        engineType: cells[14],
        numOfCylinders: cells[15],
        engineSize: cells[16],
        fuelSystem: cells[17],
        bore: cells[18],
        stroke: cells[19],
        compressionRatio: cells[20],
        horsepower: cells[21],
        peakRpm: cells[22],
        cityMpg: cells[23],
        highwayMpg: cells[24],
        price: cells[25],
        id: index
      };
    });
    carsRecord.pop();
    console.log(carsRecord.length);
    console.log(carsRecord);
    return carsRecord;
};

function renderCars(carsArray) {
  var carsTemplate = views['cars-template'];
  var templateFn = _.template(carsTemplate, {variable: 'm'});
  var carsHTML = templateFn({cars: carsArray});

  $('.main-content').html(carsHTML);
}
