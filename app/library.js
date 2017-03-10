'use strict'

module.exports = {

 /* Find the average of three integers */
 computeAverage: function(num1, num2, num3) {
   var average = (num1 + num2 + num3)/ 3;

   return average;
 },
 
 /* Find the factorial of an integer */
 computeFactorial: function(num) {
   // var factorial;
   //return factorial
   if (num === 0) {
    return 1
  } else {
  return num * this.computeFactorial(num-1)
  }
},

 /* Convert a given Celcius temperature to Fahrenheit */
 convertTempCtoF: function(cTemp) {
   var fTemp =  (((cTemp * (9/5)) + 32));
   return fTemp;
 },

 /* Convert a given Fahrenheit temperature to Celcius */
 convertTempFtoC: function(fTemp) {
   var cTemp = ((fTemp - 32) * (5/9));
   return cTemp;
 }

}
