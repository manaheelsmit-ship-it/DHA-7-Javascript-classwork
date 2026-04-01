// alert('hello javascript')

// var userName = 'admin'
// userName = 'john'
// userName = 'rizwan'
// console.log(userName) // we will use this for printing value in console
// alert('hello '+userName)
// var fatherName;  //declaration
// fatherName = 'saleem' //initialization
// var num1 = 4
// var num2 = 5
// console.log(num1 + num2 - 76)
// var userName = prompt('what is your name ?')
// alert('hello '+ userName)
// var value1 = Number(prompt('enter your first value'))
// var value2 = Number(prompt('enter your 2nd value'))
// console.log(typeof value1)
// console.log(typeof value2)
// console.log(value1+value2)
// var num1 = 7
// var sum = num1++ + ++num1 + --num1
// console.log(sum)

// var userName = prompt('how old are you??') 
// var num = 3
// if ( num != 9) {
//     console.log('got it')
// } else {
//     console.log('enter your value ')
// }
//  =  //assigning a variable     
//  == //comparision
//  ===  //comparision
//  != 
//  !==
//  >
//  <
//  >=
//  =>

// var percentage = prompt('give me your percentage')
// if (percentage > 90 ) {
//     alert('your grade is A+')
// } else if (percentage > 80) {
//     alert('your grade is A')
// }
// else if (percentage > 70) {
//     alert('your grade is B')
// }
// else if (percentage > 60) {
//     alert('your grade is C')
// }
// else {
//     alert('you are fail')
// }
// && // AND OPERATOR BOTH CONDITIONS ARE TRUE
// || //OR OPERATOR ONLY ONE CONDITION IS TRUE 

// var age = Number(prompt('how old are you?'))
// var classess = Number(prompt('in which class you are ?'))
// var weight = 20
// if (age === 6 && classess === 3 || weight  === 20){
//     alert('you are allowed')
// }
// else{
//     alert('you are not allowed')
// }


// var sub1 = prompt('your first subject name ?')
// var sub2 = prompt('your second subject name ?')
// var sub3 = prompt('your third subject name ?')
// var totalMarks = 300
// var sub1Marks = Number(prompt('first subject mark'))
// var sub2Marks = Number(prompt('second subject mark'))
// var sub3Marks = Number(prompt('third subject mark'))
// var obtainedMarks = sub1Marks + sub2Marks + sub3Marks
// var percentage = obtainedMarks / totalMarks * 100
// alert('Your obtained marks is ' + obtainedMarks + ' and your percentage is %'+ percentage)

//arrays
var countries = ['pakistan', 'india', 'iran', 'japan', 'china', 'turkey']
countries[1] = 'america'

countries.pop() //remove last value of an array
countries.push('korea', 'singapore') //add element in the end of an array
countries.shift()  //remove first value of an array
countries.unshift('afghanistan') //add element in the start of an array
countries.splice(2, 0, 'russia')
var newArray = countries.slice(2, 4)
console.log(newArray)



//for loop
var countries = ['pakistan', 'india', 'iran', 'japan', 'china', 'turkey']
for (var i = 0; i <= countries.length; i++) {
    if (countries[i] == 'iran') {
        console.log('found it ')
        break;
    }
    else {
        console.log('not found ')
    }
}

// for(var i = 1; i <= 10 ; i++){
//     console.log('2 * ' + i + ' = '+ i*2)
// }

var countries = ['pakistan', 'india', 'iran']
var city = ['karachi', 'hyderabad' , 'larkana']
for (var i = 0 ; i < countries.length; i++){
    for(var j = 0 ; j < city.length ; j++){
        console.log(countries[i], city[j])
    }
}


var userName = prompt('what is your name?')
console.log(userName.toLowerCase())