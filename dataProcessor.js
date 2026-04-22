require('dotenv').config();

// Allow from me to create how many data collecting the health reader for the user. per day, week, month, year.
var dataprocessor = {
    "user": "Jose Corril",
    "weeklyGoal": 150,
    "steps": 160,
    "caloriesBurned": 75,

    // this year collecting from the health reader for the user.
    "steps": [24, 10, 8, 12, 15, 9, 11, 14],
"weight": 55,
"height": 1.75,
"bmi": 18.0,

    // How many does user have calories burned for the week.
    "caloriesBurned": [2000, 1800, 2200, 2100, 1900, 2300, 2050, 1950],

    // what is the rate of customer pulse rate for the week.
    "heartRate": [65, 70, 68, 72, 66, 69, 71, 67],
    // How many hours does user sleep for the week.
    "sleepHours": [7, 6, 8, 5, 7, 6, 8, 7],
    "active": true,
    "timeran": "00.30min",
    "minutesRan": 30,
    "steps": 160,

    // high calories burned for the week.
    "highCaloriesBurned": 2300

console.log("UserName:", process.env.USER_NAME);
// "Jose Corril"
console.log("WeeklyGoal:", process.env.WEEKLY_GOAL);
// "150"

function fn1() { 
    console.log("This is a function that does something.");
} 

function fn2() { 
    console.log("this is function 2");
}

function fn3() {
    fn3();
}
fn3(); // Stack overflow to show the error js for function. 

module.exports = { fn1, fn2 }; // Exporting the functions to be used in other files 

console.log("This is the data processor file. It contains functions to process health data.");