const returnFirstTwoDrivers = (input) => input.slice (0,2)

const returnLastTwoDrivers = (input) => input.slice (-2) 

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (value1) => function (value2) {
    return value1 * value2;
  };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, returns) => returns(drivers)