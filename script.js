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



function storedData () {
    storedItemNine = localStorage.getItem('9am');
    console.log(storedItemNine);
    nineAM.text(storedItemNine);

    storedItemTen = localStorage.getItem('10am');
    console.log(storedItemTen);
    tenAM.text(storedItemTen);

    storedItemEleven = localStorage.getItem('11am');
    console.log(storedItemEleven);
    elevenAM.text(storedItemEleven);

    storedItemTwelve = localStorage.getItem('12pm');
    console.log(storedItemTwelve);
    twelvePM.text(storedItemTwelve);

    storedItemOne = localStorage.getItem('1pm');
    console.log(storedItemOne);
    onePM.text(storedItemOne);

    storedItemTwo = localStorage.getItem('2pm');
    console.log(storedItemTwo);
    twoPM.text(storedItemTwo);

    storedItemThree = localStorage.getItem('3pm');
    console.log(storedItemThree);
    threePM.text(storedItemThree);

    storedItemFour = localStorage.getItem('4pm');
    console.log(storedItemFour);
    fourPM.text(storedItemFour);

    storedItemFive = localStorage.getItem('5pm');
    console.log(storedItemFive);
    fivePM.text(storedItemFive);
}

currentDay.text(now.format('dddd, MMMM Do'));

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


storedData ();




/*var storedNine = localStorage.getItem("9am");
var myText = $('#nine-am-text');

var nineAm = $('textarea[name="9am"]').val();
nineAm.text(storedNine);*/



