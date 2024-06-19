"use strict";

module.exports.getUserDetails = (event) => {
  const randomNumber = parseInt(Math.random() * 100);
  const obj = {
    name: "Piyush",
    age: 27,
    location: "Pune",
    randomInt: randomNumber,
  };
  return JSON.stringify(obj);
};
