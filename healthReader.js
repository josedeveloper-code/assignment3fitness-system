healthMetricsCounter("./data/health-metric.csv")
// Total health entries: 8

const jsonMetrics = '{"user": "Jose", "weeklyGoal": 150, "metrics": [{"date": "2024-06-01", "steps": 24, "caloriesBurned": 2000, "sleepHours": 7}, {"date": "2024-06-02", "steps": 10, "caloriesBurned": 1800, "sleepHours": 6}, {"date": "2024-06-03", "steps": 8, "caloriesBurned": 2200, "sleepHours": 8}, {"date": "2024-06-04", "steps": 12, "caloriesBurned": 2100, "sleepHours": 5}, {"date": "2024-06-05", "steps": 15, "caloriesBurned": 1900, "sleepHours": 7}, {"date": "2024-06-06", "steps": 9, "caloriesBurned": 2300, "sleepHours": 6}, {"date": "2024-06-07", "steps": 11, "caloriesBurned": 2050, "sleepHours": 8}]}';

// Jose Health Metrics for the week of June 1st to June 7th, 2024.

const JosehealthMetrics = {
    "healthrate": 54,
    "heartrateStatus": "good",
    "steps": 99,
    "caloriesBurned": 16200,
    "sleepHours": 54,
    "active": true,
    "timeran": "00.32min"
};

// Ariana Ran 5 miles in the 30 minutes and burn 500 calories after lunch.

const arianaHealthMetrics = {
    "healthrate": 60,
    "bloodPressure": 50,
    "track step": 5000,
    "caloriesBurned": 500,
    "sleepHours": 8,
    "active": true,
    "timeran": "00.30min",
    "minutesRan": 30,
};


// Using the " HealthReader"
const usersHealthData = JSON.parse(jsonMetrics);
console.log("User:", usersHealthData.user);
console.logout("Weekly Goal:", usersHealthData.weeklyGoal);
console.log("Health Metrics:");

// Now I am  create the console log for the Users Data on their health reading from the file.
console.log(usersHealthData.metrics); // Output: Jose weekly goals and health rates for this week. 

new healthReader()
function printHealthMetrics() {
    var reader = new healthReader();
    reader.onload = (evt) => {
        console.log(evt.target.result);
    }
}

console.log("Hello Jose, here are your health metrics for the week:");
console.log ("Date       | Steps | Calories Burned | Sleep Hours");
console.log("--------------------------------------------------");

console.log (24+ 10 + 8 + 12 + 15 + 9 + 11 + 14); // Total steps: 99
console.log (2000 + 1800 + 2200 + 2100 + 1900 + 2300 + 2050 + 1950);
// Total calories burned: 16200
console.log (7 + 6 + 8 + 5 + 7 + 6 + 8 + 7); // Total sleep hours: 54

// This is how I keep comment for Json healthReader.js file.
var healthData = {
    "status": "good job jose! you meet 150 steps goal!",
    "heartRate": 65,
    "sleepHours": 7,
    "caloriesburned": 75, 
    "steps": 160,
    "active": true
};


console.log("Start"); 

setTimeout(() => {
    console.log("Timeout");
})
console.log("End");

var a = console.log(10);
 var b  =  10; 


fetch("https://api.example.com/healthdata")
.then(response => response.json())
.then(data => {
    console.log("Fetched Health Data:", data);
});

