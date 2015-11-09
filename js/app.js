$( document ).ready(function() {

    function drawSkills(){
      var canvas1 = document.getElementById('skills');
      var canvas2 = document.getElementById('methods');
      var canvas3 = document.getElementById('frmwrks');
      var canvas4 = document.getElementById('vrsnCtrl');
      /*var ctx = canvas1.getContext('2d');
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, (Math.PI/180)*270);
      ctx.stroke();
      var cty = canvas1.getContext('2d');
      cty.beginPath();
      cty.arc(75, 75, 25, 0, (Math.PI/180)*270);
      cty.stroke();
      ctx.endPath();
      */
      var bkGnd = "#D0D0D0";
      var textColor = "#000";
      if (canvas1.getContext) {
        var ctx1 = canvas1.getContext('2d');
        ctx1.fillStyle = bkGnd;
        ctx1.fillRect(0,0,170,50);
        ctx1.fillRect(0,55,190,50);
        ctx1.fillRect(0,110,100,50);
        ctx1.fillRect(0,170,170,50);
        ctx1.font = "10pt Helvetica Neue, Helvetica, Roboto, Arial, sans-serif";
        ctx1.fillStyle = textColor;
        ctx1.fillText("Html/Css 70%",20,25);
        ctx1.fillText("PHP 90%",20,80);
        ctx1.fillText("Python 40%",20,135);
        ctx1.fillText("Javascript/ JQuery 70%",20,195);
      }
      if (canvas2.getContext) {
        var ctx2 = canvas2.getContext('2d');
        ctx2.fillStyle = bkGnd;
        ctx2.font = "10pt Helvetica Neue, Helvetica, Roboto, Arial, sans-serif";
        ctx2.fillRect(0,0,170,50);
        ctx2.fillStyle = textColor;
        ctx2.fillText("Agile/Scrum",20,25);
      }
      if (canvas3.getContext) {
        var ctx3 = canvas3.getContext('2d');
        ctx3.fillStyle = bkGnd;
        ctx3.fillRect(0,0,190,50);
        ctx3.fillRect(0,55,190,50);
        ctx3.font = "10pt Helvetica Neue, Helvetica, Roboto, Arial, sans-serif";
        ctx3.fillStyle = textColor;
        ctx3.fillText("Grunt/Gulp",20,25);
        ctx3.fillText("Jasmine(Testing)",20,80);
      }
      if (canvas4.getContext) {
        var ctx4 = canvas4.getContext('2d');
        ctx4.fillStyle = bkGnd;
        ctx4.fillRect(0,0,150,50);
        ctx4.fillRect(0,55,190,50);
        ctx4.font = "10pt Helvetica Neue, Helvetica, Roboto, Arial, sans-serif";
        ctx4.fillStyle = textColor;
        ctx4.fillText("SVN",20,25);
        ctx4.fillText("Git",20,80);
      }
    };
    drawSkills();
});
$(document).foundation();
