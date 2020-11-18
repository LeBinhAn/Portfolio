$('#toggle-darkmode-slider').on('change', function () { 
    if (this.checked) {
        $('body').css('background', '#ffffff');
        $('header').css('color', '#000000');
    } else {
        $('body').css('background', '#000000');
        $('header').css('color', '#ffffff');
    }
})