$( document ).ready(function() {
    $('#type-content').hide();

    var i = 0;
    var txt = 'Kyaw Naing Thu'; /* The text */
    var speed = 200; /* The speed/duration of the effect in milliseconds */
    typeWriter();    
    function typeWriter() {
      if (i < txt.length) {
        $("#type-name").append(txt.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }else{
        $('#type-content').fadeIn('slow');
      }
    }

});