Feature: Calculate Triangle Type

  
Scenario Outline: Equilateral triangle
    Given that the sides of the triangle are <side1>, <side2>, <side3>
    When calculate the type of the triangle
    Then the message "<msg>" should be displayed

    Examples:
        |    side1   |    side2   |    side3   |             msg            |
        |      1     |      1     |      1     |  O triângulo é Equilátero  |
        |     100    |     100    |     100    |  O triângulo é Equilátero  |

Scenario Outline: Isosceles triangle
    Given that the sides of the triangle are <side1>, <side2>, <side3>
    When calculate the type of the triangle
    Then the message "<msg>" should be displayed

    Examples:
        |    side1   |    side2   |    side3   |             msg            |
        |      5     |      1     |      1     |   O triângulo é Isósceles  |
        |     500    |     100    |     100    |   O triângulo é Isósceles  |
        

Scenario Outline: Scalene triangle
    Given that the sides of the triangle are <side1>, <side2>, <side3>
    When calculate the type of the triangle
    Then the message "<msg>" should be displayed

    Examples:
        |   side1   |    side2   |    side3   |           msg            |
        |     1     |      2     |      3     |  O triângulo é Escaleno  |
        |    100    |     200    |     300    |  O triângulo é Escaleno  |