let numberOfClicks = 0;
let alertText = '';

const buttonToggleMenuVisibility = document.getElementById('toggleMenu');
const textAlert = 'You clicked me ';
const timeSingular = ' time';
const timePlural = ' times';

buttonToggleMenuVisibility
  .addEventListener("click", function() {
      numberOfClicks = numberOfClicks + 1;

      alertText = textAlert + numberOfClicks + (numberOfClicks <=1 ? timeSingular : timePlural);

      alert(alertText);
    }
  );
