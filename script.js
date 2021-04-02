var currentDay = $('#currentDay');
var now = moment();
var hour = parseInt(now.format('H'));
var saveButton = $('#nine-am-save-btn');

/*var saveDescription = function (event) {
    localStorage.setItem()
}*/

currentDay.text(now.format('dddd, MMMM Do'));

saveButton.on('click', function () {
    var description = $('textarea[name="9am"]').val();
    console.log(description);
    localStorage.setItem("9am", description);
})





