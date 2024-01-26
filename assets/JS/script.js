$(function () {
	var kStartHour = 9;
	var kEndHour = 17;

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

		//decides if the time displayed should have AM or PM appended and translates the time from 24hr to 12hr time
		var AmPm;
		if (i < 12) {
			AmPm = i + "AM";
		} else if (i === 12) {
			AmPm = i + "PM";
		} else {
			AmPm = i - 12 + "PM";
		}

		//creates the time text for the timeblock
		var timeBlockTime = $("<div>")
			.attr("class", "col-2 col-md-1 hour text-center py-3")
			.text(AmPm);
		$("#hour-" + i).append(timeBlockTime);

		//creates the text area for the timeblock and displays text that has been saved in local storage
		var timeBlockTextArea = $("<textarea>")
			.attr("class", "col-8 col-md-10 description")
			.attr("rows", "3")
			.val(localStorage.getItem(kStorageKey));
		$("#hour-" + i).append(timeBlockTextArea);

		//creates the button to save the text in the text area
		var timeBlockButton = $("<button>")
			.attr("class", "btn saveBtn col-2 col-md-1")
			.attr("aria-label", "save");
		$("#hour-" + i).append(timeBlockButton);

		//listens for a click of the save button and saves the text to local storage
		timeBlockButton.on("click", function () {
			var textInput = $(this).prev(".description").val();
			localStorage.setItem(kStorageKey, textInput);
		});

		//creates the icon of a 3.5" floppy disk to indicate the button is to be used to save the text in the text area
		var timeBlockButtonSave = $("<i>")
			.attr("class", "fas fa-save")
			.attr("aria-hidden", "true");
		$(".btn").append(timeBlockButtonSave);
	}
});
