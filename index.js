// Code your solution here

function findMatching(arrayofdrivers, string) {
  return arrayofdrivers.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch (arrayofdrivers, string) {
  let lengthOfName = string.length;
  return arrayofdrivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === string;
  });
}

function matchName (arrayofdrivers, name) {
  return arrayofdrivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
