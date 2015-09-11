$(document).ready(function() {
    $('#keyboard-upper-container').hide();
    $("#keyboard-lower-container").show();

$(document).keydown(function(e) {
     if (e.which === 16) {
    $('#keyboard-upper-container').show();
    $('#keyboard-lower-container').hide();
     };
     
});
       
$(document).keyup(function(e) {
     if (e.which === 16) {
    $('#keyboard-upper-container').hide();
    $('#keyboard-lower-container').show();
     }
    else 
    $('.key').removeClass('highlight');
     });
});

$(document).keypress(function(e){
     var s = String.fromCharCode(e.which);
     if (s.match(/[a-zA-Z]/),(/[32]/));
       console.log(s + '');
});

$(document).keypress(function(e) {
     var pressKey =e.charCode;
     $('#'+pressKey).addClass('highlight') ;
});


/*var lines = [];
var lineCount = 0;
$(sentences).each(function(){
   var letters = this.split('');
   console.log(letters);
   var line = $('<div class="letters"></div>');
   $(letters).each(function() {
       var letter = this;
       if(letter == ' ') {
           letter = '&nbsp;';
       }
       line.append($('<div class="letter"></div>').html(letter));
   });
   lines.push(line);
});

$('.test').append(lines[lineCount]);*/