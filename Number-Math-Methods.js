1) [12.345, 67.890, 34.567], // Round each element to 2 decimal places using toFixed()

arr=[12.345,67.890,34.567]
res=arr.map(a=>a.toFixed(2))
console.log(res)

Output :
[ '12.35', '67.89', '34.57' ]

2) ['123abc', '456def', '789ghi'], // Convert each element to an integer using parseInt()

arr=['123abc','456def','789ghi']
res=arr.map(a=>parseInt(a))
console.log(res)

Output :
[ 123, 456, 789 ]

3) [12, 34.56, 78, 90.12], // Check if each element is an integer using isInteger()

arr= [12, 34.56, 78, 90.12]
res=arr.map(a=>Number.isInteger(a))
console.log(res)

Output :
[ true, false, true, false ]



4) ['abc', 123, 'def', 456], // Check if each element is NaN (Not a Number) using isNaN()

arr=['abc',123,'def',456]
res=arr.map(a=>isNaN(a))
console.log(res)

Output :
[ true, false, true, false ]

5) [123.456, 789.012, 345.678] // Format each element to have a precision of 4 significant digits using toPrecision()

arr=[123.456,789.012,345.678]
res=arr.map(a=>a.toPrecision(4))
console.log(res)

Output :
[ '123.5', '789.0', '345.7' ]

6) generate random otp 6 digit num using math.random

let otp = Math.floor(100000 + Math.random() * 900000);
console.log(otp); 

Output :
750646


