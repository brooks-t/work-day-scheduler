var currentDay = $('#currentDay');
var now = moment();
var hour = parseInt(now.format('H'));
var saveButtonNine = $('#nine-am-save-btn');
var nineAM = $('#nine-am-text');
var saveButtonTen = $('#ten-am-save-btn');
var tenAM = $('#ten-am-text');
var saveButtonEleven = $('#eleven-am-save-btn');
var elevenAM = $('#eleven-am-text');
var saveButtonTwelve = $('#twelve-pm-save-btn');
var twelvePM = $('#twelve-pm-text');
var saveButtonOne = $('#one-pm-save-btn');
var onePM = $('#one-pm-text');
var saveButtonTwo = $('#two-pm-save-btn');
var twoPM = $('#two-pm-text');
var saveButtonThree = $('#three-pm-save-btn');
var threePM = $('#three-pm-text');
var saveButtonFour = $('#four-pm-save-btn');
var fourPM = $('#four-pm-text');
var saveButtonFive = $('#five-pm-save-btn');
var fivePM = $('#five-pm-text');


// retrieves stored data and populates scheduler. determins whether a time block is past, present or future
function storedData () {
    storedItemNine = localStorage.getItem('9am');
    console.log(storedItemNine);
    nineAM.text(storedItemNine);
    if (9 < hour) {
        $('#nine-am-description').addClass("past");
    } else if (9 == hour)  {
        $('#nine-am-description').addClass("present");
    } else {
        $('#nine-am-description').addClass("future");
    }

    storedItemTen = localStorage.getItem('10am');
    console.log(storedItemTen);
    tenAM.text(storedItemTen);
    if (10 < hour) {
        $('#ten-am-description').addClass("past");
    } else if (10 == hour)  {
        $('#ten-am-description').addClass("present");
    } else {
        $('#ten-am-description').addClass("future");
    }

    storedItemEleven = localStorage.getItem('11am');
    console.log(storedItemEleven);
    elevenAM.text(storedItemEleven);
    if (11 < hour) {
        $('#eleven-am-description').addClass("past");
    } else if (11 == hour)  {
        $('#eleven-am-description').addClass("present");
    } else {
        $('#eleven-am-description').addClass("future");
    }

    storedItemTwelve = localStorage.getItem('12pm');
    console.log(storedItemTwelve);
    twelvePM.text(storedItemTwelve);
    if (12 < hour) {
        $('#twelve-pm-description').addClass("past");
    } else if (12 == hour)  {
        $('#twelve-pm-description').addClass("present");
    } else {
        $('#twelve-pm-description').addClass("future");
    }

    storedItemOne = localStorage.getItem('1pm');
    console.log(storedItemOne);
    onePM.text(storedItemOne);
    if (13 < hour) {
        $('#one-pm-description').addClass("past");
    } else if (13 == hour)  {
        $('#one-pm-description').addClass("present");
    } else {
        $('#one-pm-description').addClass("future");
    }

    storedItemTwo = localStorage.getItem('2pm');
    console.log(storedItemTwo);
    twoPM.text(storedItemTwo);
    storedItemOne = localStorage.getItem('1pm');
    console.log(storedItemOne);
    onePM.text(storedItemOne);
    if (14 < hour) {
        $('#two-pm-description').addClass("past");
    } else if (14 == hour)  {
        $('#two-pm-description').addClass("present");
    } else {
        $('#two-pm-description').addClass("future");
    }

    storedItemThree = localStorage.getItem('3pm');
    console.log(storedItemThree);
    threePM.text(storedItemThree);
    if (15 < hour) {
        $('#three-pm-description').addClass("past");
    } else if (15 == hour)  {
        $('#three-pm-description').addClass("present");
    } else {
        $('#three-pm-description').addClass("future");
    }

    storedItemFour = localStorage.getItem('4pm');
    console.log(storedItemFour);
    fourPM.text(storedItemFour);
    if (16 < hour) {
        $('#four-pm-description').addClass("past");
    } else if (16 == hour)  {
        $('#four-pm-description').addClass("present");
    } else {
        $('#four-pm-description').addClass("future");
    }

    storedItemFive = localStorage.getItem('5pm');
    console.log(storedItemFive);
    fivePM.text(storedItemFive);
    if (17 < hour) {
        $('#five-pm-description').addClass("past");
    } else if (17 == hour)  {
        $('#five-pm-description').addClass("present");
    } else {
        $('#five-pm-description').addClass("future");
    }
}

//declares current day in the jumbo header
currentDay.text(now.format('dddd, MMMM Do'));

//click listeners that save a data entry to a specific timeblock and store it in the local memory
saveButtonNine.on('click', function () {
    var description = $('textarea[name="9am"]').val();
    console.log(description);
    localStorage.setItem("9am", description);
})

saveButtonTen.on('click', function () {
    var description = $('textarea[name="10am"]').val();
    console.log(description);
    localStorage.setItem("10am", description);
})

saveButtonEleven.on('click', function () {
    var description = $('textarea[name="11am"]').val();
    console.log(description);
    localStorage.setItem("11am", description);
})

saveButtonTwelve.on('click', function () {
    var description = $('textarea[name="12pm"]').val();
    console.log(description);
    localStorage.setItem("12pm", description);
})

saveButtonOne.on('click', function () {
    var description = $('textarea[name="1pm"]').val();
    console.log(description);
    localStorage.setItem("1pm", description);
})

saveButtonTwo.on('click', function () {
    var description = $('textarea[name="2pm"]').val();
    console.log(description);
    localStorage.setItem("2pm", description);
})

saveButtonThree.on('click', function () {
    var description = $('textarea[name="3pm"]').val();
    console.log(description);
    localStorage.setItem("3pm", description);
})

saveButtonFour.on('click', function () {
    var description = $('textarea[name="4pm"]').val();
    console.log(description);
    localStorage.setItem("4pm", description);
})

saveButtonFive.on('click', function () {
    var description = $('textarea[name="5pm"]').val();
    console.log(description);
    localStorage.setItem("5pm", description);
})

// retrieve the local data
storedData ();




