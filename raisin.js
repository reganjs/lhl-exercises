/* const raisinAlarm = (cookie) => {  //function
    for (let oops of cookie) {  //iterate through for loop 
        if (oops === "🍇") {  //if array (oops) === "Raisin" 
            return "Raisin Alert!";  //return the words Raisin Alert!, exits immediately after finding the raisin
        }
    }
    return "All Good!";  //otherwise return All Good!
};
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));  //logs Raisin Alarm!
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));  //logs Raisin Alarm!
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); */ //logs All Good!



const raisinAlarmArray = (cookies) => { //function for raisinAlarmArray 
    let result = []; //set array (result) to empty 
    for (let oops of cookies) { //iterate through with for loop 
        if (oops.includes("🍇")) { //if we encounter a raisin 
            result.push("Raisin Alert!"); //push the text Raisin Alert!
        } else { //otherwise 
            result.push("All Good!"); //push the text All Good!
        }
    }
    return result; //return the result 
};

console.log(raisinAlarmArray(
    [
        ["🍫", "🍫", "🍇", "🍫"],
        ["🍫", "🍇", "🍫", "🍫", "🍇"],
        ["🍫", "🍫", "🍫"]
    ]
));