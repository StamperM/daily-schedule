var today = dayjs();
var toDoDescription = $(".description");
var button = $(".saveBtn");
var thingsToDo = {};
var descriptionValue ;

var timeBlock = dayjs().set("hour");
$(document).ready(function () {
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
  } else if (timeblockHour === currentTime) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
})
}
 




// 




$(function () {
  $(".saveBtn").click(function (event){
    console.log("save");
// on save button read value and time
 event.preventDefault();
  descriptionValue = $(this).siblings(".description").val();
 var hourId = $(this).parent().attr('id');
 var splitHourId = hourId.split('-')[1];
 var currentUpdatedToDo = JSON.parse(localStorage.getItem("timeblock")|| "{}");
currentUpdatedToDo[splitHourId]=descriptionValue;
localStorage.setItem('timeblock',JSON.stringify( currentUpdatedToDo))
    
}
)
})
