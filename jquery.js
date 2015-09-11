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
     };
     });
});

$(document).keypress(function(e) {
    var s = String.fromCharCode(e.which);
    if (s.match(/[a-zA-Z\.]/))
        console.log(s + ' is a match!');
});

/*var lines = [];
var lineCount = 0;
$(sentences).each(function(){
   var letters = this.split();
   var line = $('<div class="letters"></div>');
   $(letters).each(function() {
       line.append($('<div class="letter"></div>').text(this));
   });
   lines.push(line);
});

$('.test').append(lines[lineCount]);*/