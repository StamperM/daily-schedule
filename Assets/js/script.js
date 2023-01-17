var today = dayjs();
var toDoDescription = $(".description");
var button = $(".saveBtn");
var thingsToDo = {};
var descriptionValue;
var todaysDate = $("#currentDay").text(today.format("MMM D, YYYY"));
var currentUpdatedToDo = JSON.parse(localStorage.getItem("timeblock") || "{}");


$(document).ready(function () {
  updateTimeSlots();
});

function updateTimeSlots() {
  var currentTime = parseInt(dayjs().format("H"));
  $(".time-block").each(function () {
    var timeblockHour = parseInt($(this).attr('id').split("-")[1]);
    $(this).children(".description").val(currentUpdatedToDo[timeblockHour]);

    if (timeblockHour < currentTime) {
      $(this).addClass("past");
    } else if (timeblockHour === currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  })
}

$(function () {
  $(".saveBtn").click(function (event) {
    console.log("save");
    event.preventDefault();
    descriptionValue = $(this).siblings(".description").val();
    var hourId = $(this).parent().attr('id');
    var splitHourId = hourId.split('-')[1];
    
    currentUpdatedToDo[splitHourId] = descriptionValue;
    localStorage.setItem('timeblock', JSON.stringify(currentUpdatedToDo))
    console.log(currentUpdatedToDo);
    console.log(descriptionValue);
    console.log(splitHourId);




  }
  )
})

