$(document).ready(function () {
    backgroundState = true;
    $('#toggle-darkmode').on('click', function () { 
        if (backgroundState) {
            $('body').css('background', '#ffffff');
        } else {
            $('body').css('background', '#000000');
        }
        backgroundState = !backgroundState;
    });
   
});