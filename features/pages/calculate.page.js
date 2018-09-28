"use strict";

class Calculate {
  get side1Field() {
    return $(
      'android=new UiSelector().resourceId("com.eliasnogueira.trianguloapp:id/txtLado1")'
    );
  }
  get side2Field() {
    return $(
      'android=new UiSelector().resourceId("com.eliasnogueira.trianguloapp:id/txtLado2")'
    );
  }
  get side3Field() {
    return $(
      'android=new UiSelector().resourceId("com.eliasnogueira.trianguloapp:id/txtLado3")'
    );
  }
  get calculateButton() {
    return $(
      'android=new UiSelector().resourceId("com.eliasnogueira.trianguloapp:id/btnCalcular")'
    );
  }
  get resultTextField() {
    return $(
      'android=new UiSelector().resourceId("com.eliasnogueira.trianguloapp:id/txtResultado")'
    );
  }

  setTriangleSides(side1, side2, side3) {
    this.side1Field.setValue(side1);

    this.side2Field.setValue(side2);

    this.side3Field.setValue(side3);
  }
}

module.exports = new Calculate();
