
function bezeceDugme360() {
  var dugme1 = document.getElementById("drugo");
  var dugme2 = document.getElementById("prvo");

  document.onmousemove = function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    var rect1 = dugme1.getBoundingClientRect();
    var dugme1X = rect1.left + rect1.width / 2;
    var dugme1Y = rect1.top + rect1.height / 2;

    var distance = Math.hypot(mouseX - dugme1X, mouseY - dugme1Y);

    if (distance < 120) {
      var newX = Math.random() * (window.innerWidth - rect1.width);
      var newY = Math.random() * (window.innerHeight - rect1.height);

      dugme1.style.left = newX + "px";
      dugme1.style.top = newY + "px";

      var currentWidth = dugme2.offsetWidth;
      var currentHeight = dugme2.offsetHeight;

      dugme2.style.width = (currentWidth + 5) + "px";
      dugme2.style.height = (currentHeight + 2) + "px";
    }
  }
}

bezeceDugme360();
    function otvoriProzor() {
      // Otvaranje novog prozora (popup)
      var noviProzor = window.open("", "noviProzor", "width=400,height=400");

      noviProzor.document.write(`
        <!DOCTYPE html>
        <html lang="sr">
        <head>
          <meta charset="UTF-8">
          <title>Volim te!</title>
          <style>
            body { font-family: Arial, sans-serif; background-color: #dd529f; text-align: center; padding: 20px; }
            img { max-width: 100%; height: auto; margin: 20px 0; }
            h1,p { color: rgb(185, 43, 67);  }

          </style>
        </head>
        <body>
          <h1>Drago mi je da si pristala <3</h1>
          <img src="Kataija.jpg" alt="Zabavan GIF">
          <p>Usput i dalje necu da ti kazem gde idemo :D.</p>
        </body>
        </html>
      `);

      noviProzor.focus();
    }