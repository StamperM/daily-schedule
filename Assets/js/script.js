var today = dayjs();
var toDoDescription = $(".description");
var button = $(".saveBtn");
var thingsToDo = {};
var descriptionValue ;



// button.on("submit", function(){
//   console.log('does on submit work?')
//   thingsToDo.push()({
//       description: toDoDescription.val($(".description").text),
//       time: $(".timeBlock").text(),
//   })
//   console.log("test")
//   localStorage.setItem('doThis',JSON.stringify(thingsToDo));
//   console.log(thingsToDo);
// })

var timeBlock = dayjs().set("hour",14);
$(document).ready(function () {
  console.log("ready!");
  console.log(timeBlock);
  updateTimeSlots();
});


var todaysDate = $("#currentDay").text(today.format("MMM D, YYYY"));


function updateTimeSlots() {
  // get current hour
  var currentTime = dayjs().format("H");
  // select timebox class
  $(".time-block").each(function(){
 // get ID and split hour away from ID
 var timeblockHour = $(this).attr('id').split("-")[1];
 // get difference betwee current hour and split hour 

 // assign past present and future

  if (timeblockHour < currentTime) {
    $(this).addClass("past");
  } else if (timeblockHour=== currentTime) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
})
}
 




// 




$(function () {
  $(".saveBtn").click(function (event) {
    console.log("save");
// on save button read value and time
 event.preventDefault();
  descriptionValue = $(this).siblings(".description").val();
 var hourId = $(this).parent().attr('id');
 var splitHourId = hourId.split('-')[1];
//  $(".custom-verifyTime").addClass(hourId)
//  thingsToDo[splitHourId]=descriptionValue
 
 

// read local storage for current stuff. 

var currentUpdatedToDo = JSON.parse(localStorage.getItem("timeblock")|| "{}");
 


// write new value time on to the current stuff. 

currentUpdatedToDo[splitHourId]=descriptionValue
// write current stuff back to local storage. 
localStorage.setItem('timeblock',JSON.stringify( currentUpdatedToDo))
    
  });


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

function circles() {
  //  if $("#custom-verify").isBefore(dayjs(today)){
  //  $("#custom-verify") .addClass('.future')
  //  }
}
