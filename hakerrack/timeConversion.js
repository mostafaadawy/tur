// function convertTo24HourFormat(timeString) {
//     // Split the time string into parts (hours, minutes, and AM/PM)
//     const parts = timeString.match(/(\d+):(\d+):(\d+)([APM]+)$/i);

//     if (parts && parts.length === 5) {
//         let hours = parseInt(parts[1]);
//         const minutes = parts[2];
//         const seconds = parts[3];
//         const ampm = parts[4].toUpperCase();
//         console.log('this is log ',parts[0])
//         console.log('this is log ',parts[1])
//         console.log('this is log ',parts[2])
//         console.log('this is log ',parts[3])
//         console.log('this is log ',parts[4])
//         console.log('this is log ',parts[5])
//         if (ampm === 'PM' && hours !== 12) {
//             hours += 12;
//         } else if (ampm === 'AM' && hours === 12) {
//             hours = 0;
//         }

//         // Convert hours, minutes, and seconds to strings with leading zeros if needed
//         hours = hours.toString().padStart(2, '0');

//         // Return the result in 24-hour format
//         return `${hours}:${minutes}:${seconds}`;
//     }

//     // Return the input string as is if it doesn't match the expected format
//     return timeString;
// }
function timeConversion(s) {
    const receivedTime = s.match(/(\d+):(\d+):(\d+)([APM]+)$/i);
    let hours = parseInt(receivedTime[1]);
    const min = receivedTime[2];
    const sec = receivedTime[3];
    const ampm = receivedTime[4].toUpperCase();
    console.log(hours, min, sec, ampm)
    if(ampm == "PM" && hours >12) hours += 12;
    if(ampm == "AM" && hours==12) hours = 0;
    ampm == "AM"? hours = 0 : hours =hours+12;
    return hours.toString().padStart(2,0)+":"+min.toString()+":"+sec.toString();

}
// Example usage:
const timeString = '07:00:00PM';
const result = timeConversion(timeString);
console.log(result); // Output: '00:00:00'
