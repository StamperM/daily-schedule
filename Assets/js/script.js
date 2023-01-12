var today = dayjs();
var toDoDescription = $(".description");
var button = $(".saveBtn");
var thingsToDo = {};

button.on('click',function(event){
  event.preventDefault();
 var descriptionValue = $(this).siblings(".description").val();
 console.log(descriptionValue);
 var hourId = $(this).parent().attr('id');
 var splitHourId = hourId.split('-')[1];
 console.log(splitHourId);
 console.log(hourId);
 thingsToDo[splitHourId]=descriptionValue
 console.log(thingsToDo);
 
});

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

var timeBlock = dayjs().set("hour",6);
$(document).ready(function () {
  console.log("ready!");
  console.log(timeBlock);
});
var todaysDate = $("#currentDay").text(today.format("MMM D, YYYY"));
var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
function updateTimeSlots() {
  for (i = 0; i < workHours.length; i++) {
    if (timeBlock < workHours) {
      $(".timeBlock").addClass("past");
    } else if (timeBlock === workHours) {
      $(".timeBlock").addClass(".present");
    } else {
      $(".timeBlock").addClass(".Future");
    }
  }
}
// when I click save I want to save user input so it can be displayed on the p
function userInput() {
  button.submit("click", function (event) {
    localStorage.setIem(
      "todo",
      JSON.stringify({
        description: toDoDescription.text(),
        time: $(".timeBlock").text(),
      })
    );
  });
}

function getUserInput() {
  var updatedToDo = localStorage.getItem(".description");
  var todo = document.querySelector(".description").val;
 console.log(updatedToDo);
 console.log(todo);

}
function updateTimeSlots() {
  var todo = localStorage.getItem(getUserInput());
  var thingsToDo = [];

  if (todo) {
    thingsToDo = JSON.parse(todo);
  }
  thingsToDo.push()({
    description: todo,
    time: ,
  });
  localStorage.setItem("allTheThings", JSON.stringify(thingsToDo));

}

$(function () {
  $(".saveBtn").click(function () {
    console.log("save");

    localStorage.setItem("thingsToDo", thingsToDo);
    updateTimeSlots();
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
