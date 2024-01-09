// Custom JS file

// Display the current date
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// Get the current hour
var currentHour = moment().hour();

// Function to update the time blocks
function updateTimeBlocks() {
  // Loop through each time block
  $(".time-block").each(function () {
    // Get the data-time attribute
    var timeBlockHour = $(this).attr("data-time");

    // Compare the data-time with the current hour
    if (timeBlockHour < currentHour) {
      // Add the past class and remove the present and future classes
      $(this).addClass("past").removeClass("present future");
    } else if (timeBlockHour == currentHour) {
      // Add the present class and remove the past and future classes
      $(this).addClass("present").removeClass("past future");
    } else {
      // Add the future class and remove the past and present classes
      $(this).addClass("future").removeClass("past present");
    }
  });
}

// Call the function
updateTimeBlocks();

// Function to save the tasks to localStorage
function saveTasks() {
  // Get the data-time attribute
  var time = $(this).parent().attr("data-time");
  // Get the value of the textarea
  var task = $(this).siblings(".description").val();
  // Save the task to localStorage
  localStorage.setItem(time, task);
}

// Function to load the tasks from localStorage
function loadTasks() {
  // Loop through each time block
  $(".time-block").each(function () {
    // Get the data-time attribute
    var time = $(this).attr("data-time");
    // Get the task from localStorage
    var task = localStorage.getItem(time);
    // Set the value of the textarea
    $(this).children(".description").val(task);
  });
}

// Call the function
loadTasks();

// Add event listener to the save button
$(".saveBtn").on("click", saveTasks);
