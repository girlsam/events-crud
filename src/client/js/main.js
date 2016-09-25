(function () {

  //aligns height of article boxes on index.html
  $('.box').matchHeight();

})();

$('form').on('submit', function(e) {
  e.preventDefault();
});

//validate birthday
$('#birthday').on('blur', function() {
  var birthday = $(this).val();
  if ($('p').is('#over21')) {
    validate(birthday);
  }
});

//helper functions
//momentjs script to validate birthday
function validate(date){
  var twentyOneYears = moment().subtract(21, "years");
  var birthday = moment(date);
  if (!birthday.isValid()) {
    $('#valid-message').css('visibility', 'visible', 'margin-bottom', '15px').append("Please enter a valid birthday.");
  }
  else if (twentyOneYears.isAfter(birthday)) {
    return 'valid';
  }
  else {
    $('#valid-message').css('visibility', 'visible').css('margin-bottom', '15px').append("You must be at least 21 years old to register.");
  }
}
