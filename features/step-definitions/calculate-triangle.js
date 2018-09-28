"use strict";

const calculatePage = require("../pages/calculate.page");

const chai = require("chai");
const assert = chai.assert;

const { Given, When, Then } = require("cucumber");

Given(
  "that the sides of the triangle are {int}, {int}, {int}",
  (side1, side2, side3) => {
    calculatePage.setTriangleSides(side1, side2, side3);
  }
);

When("calculate the type of the triangle", () => {
  calculatePage.calculateButton.click();
});

Then("the message {string} should be displayed", msg => {
  assert.equal(calculatePage.resultTextField.getText(), msg);
});
