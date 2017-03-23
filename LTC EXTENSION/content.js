console.log('content script');

chrome.runtime.onMessage.addListener(function(message, sender, respond) {
  console.log('content script received message!', message);

  // VARIABLES
  var x = Math.floor(Math.random()*256);
  var y = Math.floor(Math.random()*256);
  var z = Math.floor(Math.random()*256);

  var a = Math.floor(Math.random()*5);

  // BACKGROUND CHANGE
  if(message == "background-change"){
    console.log('changing: background');
    document.body.style.backgroundColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  } // end background change

  // FONT CHANGE
  if(message == "font-change"){
    console.log('changing: font');

    var link = document.getElementsByTagName('a');
    var p = document.getElementsByTagName('p');
    var h = document.getElementsByTagName('h1');


    if(a==0){


          for (var i = 0; i < link.length; i++) {
            link[i].style.fontFamily = '"Times New Roman", Times, serif';
            link[i].style.color = 'rgb(' + x + ',' + y + ',' + z + ')';
          }

          for (var i = 0; i < p.length; i++) {
            p[i].style.color = 'rgb(' + z + ',' + x + ',' + y + ')';
            p[i].style.fontFamily = 'Impact, Charcoal, sans-serif';

          }

          for (var i = 0; i < h.length; i++) {
            h[i].style.color = 'rgb(' + z + ',' + y + ',' + x + ')';
            h[i].style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
          }


    } // end 0

    if(a==1){


          for (var i = 0; i < link.length; i++) {
            link[i].style.color = 'rgb(' + x + ',' + y + ',' + z + ')';
            link[i].style.fontFamily = 'Impact, Charcoal, sans-serif';

          }

          for (var i = 0; i < p.length; i++) {
            p[i].style.color = 'rgb(' + z + ',' + x + ',' + y + ')';
            p[i].style.fontFamily = '"Times New Roman", Times, serif';

          }

          for (var i = 0; i < h.length; i++) {
            h[i].style.color = 'rgb(' + z + ',' + y + ',' + x + ')';
            h[i].style.fontFamily = '"Lucida Console", Monaco, monospace';
          }

    } // end 1

    if(a==2){


          for (var i = 0; i < link.length; i++) {
            link[i].style.color = 'rgb(' + x + ',' + y + ',' + z + ')';
            link[i].style.fontFamily = '"Courier New", Courier, monospace';
          }

          for (var i = 0; i < p.length; i++) {
            p[i].style.color = 'rgb(' + z + ',' + x + ',' + y + ')';
            p[i].style.fontFamily = '"Lucida Console", Monaco, monospace';

          }

          for (var i = 0; i < h.length; i++) {
            h[i].style.color = 'rgb(' + z + ',' + y + ',' + x + ')';
            h[i].style.fontFamily = 'Impact, Charcoal, sans-serif';
          }


    } // end 2

    if(a==3){


          for (var i = 0; i < link.length; i++) {
            link[i].style.color = 'rgb(' + x + ',' + y + ',' + z + ')';
            link[i].style.fontFamily = '"Lucida Console", Monaco, monospace';

          }

          for (var i = 0; i < p.length; i++) {
            p[i].style.color = 'rgb(' + z + ',' + x + ',' + y + ')';
            p[i].style.fontFamily = '"Comic Sans MS", cursive, sans-serif';

          }

          for (var i = 0; i < h.length; i++) {
            h[i].style.color = 'rgb(' + z + ',' + y + ',' + x + ')';
            h[i].style.fontFamily = '"Courier New", Courier, monospace';
          }


    } // end 3

    if(a==4){


          for (var i = 0; i < link.length; i++) {
            link[i].style.color = 'rgb(' + x + ',' + y + ',' + z + ')';
            link[i].style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
          }

          for (var i = 0; i < p.length; i++) {
            p[i].style.color = 'rgb(' + z + ',' + x + ',' + y + ')';
            p[i].style.fontFamily = '"Courier New", Courier, monospace';

          }

          for (var i = 0; i < h.length; i++) {
            h[i].style.color = 'rgb(' + z + ',' + y + ',' + x + ')';
            h[i].style.fontFamily = '"Times New Roman", Times, serif';
          }


    } // end 4

  } // end font change

  // DIV CHANGE
  if(message == "div-change"){
    console.log('changing: div');

    var div = document.getElementsByTagName('div');

    for (var i = 0; i < div.length; i++) {
      div[i].style.backgroundColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    } // end for


  } // end div change

  // WIDTH CHANGE
  if(message == "video-change"){
    console.log('changing: video');

    if (a == 0) {
      window.frames[0].location = "https://www.youtube.com/embed/3sOXiL05VSY";
    } // end 0

    if (a == 1) {
      window.frames[0].location = "https://www.youtube.com/embed/SmbmeOgWsqE";
    } // end 1

    if (a == 2) {
      window.frames[0].location = "https://www.youtube.com/embed/bhZXaWYTPoE";
    } // end 2

    if (a == 3) {
      window.frames[0].location = "https://www.youtube.com/embed/pUncXbXAiV0";
    } // end 3

    if (a == 4) {
      window.frames[0].location = "https://www.youtube.com/embed/zt-V2wrogpw";
    } // end 4


  } // end font change

});
