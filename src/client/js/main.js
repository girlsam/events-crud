(function () {

  console.log('sanity check');

  //aligns height of article boxes on index.html
  $('.box').matchHeight();

})();

$('form').on('submit', function(e) {
  e.preventDefault();
});

//validate birthday
$('#birthday').on('blur', function() {
  var birthday = $(this).val();
  console.log(birthday);
  if ($('p').is('#over21')) {
    validate(birthday);
  }
});

//helper functions
//momentjs script to validate birthday
function validate(date) {
  var twentyOneYears = moment().subtract(21, 'years');
  var birthday = moment(date);
  if (!birthday.isValid()) {
    console.log('not valid');
    $('#valid-message').css('display', 'block', 'margin-bottom', '15px').append('Please enter a valid birthday.');
  }
  else if (twentyOneYears.isAfter(birthday)) {
    console.log('over 21');
    return 'valid';
  }
  else {
    console.log('under 21');
    $('#valid-message').css('display', 'block').css('margin-bottom', '15px').append('You must be at least 21 years old to register.');
  }
}
