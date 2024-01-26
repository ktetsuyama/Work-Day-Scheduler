// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
	var kStartHour = 9;
	var kEndHour = 17;
	// TODO: Add a listener for click events on the save button. This code should
	// use the id in the containing time-block as a key to save the user input in
	// local storage. HINT: What does `this` reference in the click listener
	// function? How can DOM traversal be used to get the "hour-x" id of the
	// time-block containing the button that was clicked? How might the id be
	// useful when saving the description in local storage?
	//

	//
	// TODO: Add code to get any user input that was saved in localStorage and set
	// the values of the corresponding textarea elements. HINT: How can the id
	// attribute of each time-block be used to do this?
	//
	//Code to display the current date in the header of the page.
	var today = dayjs();
	$("#currentDay").text(today.format("dddd, MMM D, YYYY"));
	// code that creates the timeblocks and sets the attributes, including if the time block is in the current hour or not
	for (var i = kStartHour; i <= kEndHour; i++) {
		var relativeTime;
		var currentHour = today.hour();
		if (i < currentHour) {
			relativeTime = "past";
		} else if (i === currentHour) {
			relativeTime = "present";
		} else {
			relativeTime = "future";
		}
		var timeBlock = $("<div>")
			.attr("id", "hour-" + i)
			.attr("class", "row time-block " + relativeTime)
			.attr("data-hour", i);

		$("#schedule").append(timeBlock);
		var AmPm;
		if (i < 12) {
			AmPm = i + "AM";
		} else if (i === 12) {
			AmPm = i + "PM";
		} else {
			AmPm = i - 12 + "PM";
		}
		var timeBlockTime = $("<div>")
			.attr("class", "col-2 col-md-1 hour text-center py-3")
			.text(AmPm);
		$("#hour-" + i).append(timeBlockTime);

		var timeBlockTextArea = $("<textarea>")
			.attr("class", "col-8 col-md-10 description")
			.attr("rows", "3");
		$("#hour-" + i).append(timeBlockTextArea);

		var timeBlockButton = $("<button>")
			.attr("class", "btn saveBtn col-2 col-md-1")
			.attr("aria-label", "save");
		$("#hour-" + i).append(timeBlockButton);

		var timeBlockButtonSave = $("<i>")
			.attr("class", "fas fa-save")
			.attr("aria-hidden", "true");
		$(".btn saveBtn col-2 col-md-1").append(timeBlockButtonSave);
	}
});
