// import the moment.js library
const moment = require('moment');

// create an empty array to store the dates
let moonDates = [];

// loop through all 12 months of 2023
for (let month = 0; month < 12; month++) {
    // get the new moon date for the current month
    let newMoon = moment([2023, month]).startOf('month').newMoon();
    // get the full moon date for the current month
    let fullMoon = moment([2023, month]).startOf('month').fullMoon();

    // add the new moon and full moon dates to the moonDates array
    moonDates.push({ date: newMoon.format('MMMM D'), phase: 'New Moon' });
    moonDates.push({ date: fullMoon.format('MMMM D'), phase: 'Full Moon' });
}

console.log(moonDates);

