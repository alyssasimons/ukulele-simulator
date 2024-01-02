const buttons = document.querySelectorAll(".chord").length;

for (let i = 0; i < buttons; i++) {

  document.querySelectorAll(".chord")[i].addEventListener("click", function() {

    $(this).animate( {
      opacity: 0.65
    });
    
    $(this).animate( {
      opacity: 1
    });

    const buttonInnerHTML = this.innerHTML;

    chordSounds(buttonInnerHTML);
  });

}

//fix audio feedback

function chordSounds(key) {
    const ukeImg = document.querySelector("img");

    switch (key) {

      case "Am":
        ukeImg.setAttribute("src", "assets/am.png");
        const am = new Audio("sounds/Am.mp3");
        am.play();
        break;
        
      case "A7":
        ukeImg.setAttribute("src", "assets/a7.png");
        const a7 = new Audio("sounds/A7.mp3");
        a7.play();
        break;

      case "B7":
        ukeImg.setAttribute("src", "assets/b7.png");
        const b7 = new Audio('sounds/B7.mp3');
        b7.play();
        break;
  
      case "C":
        ukeImg.setAttribute("src", "assets/c.png");
        const c = new Audio('sounds/C.mp3');
        c.play();
        break;
  
      case "Dm7":
        ukeImg.setAttribute("src", "assets/dm7.png");
        const dm7 = new Audio('sounds/Dm7.mp3');
        dm7.play();
        break;
  
      case "Em":
        ukeImg.setAttribute("src", "assets/em.png");
        const em = new Audio('sounds/Em.mp3');
        em.play();
        break;
  
      case "Em7":
        ukeImg.setAttribute("src", "assets/em7.png");
        const em7 = new Audio('sounds/Em7.mp3');
        em7.play();
        break;

      case "F":
        ukeImg.setAttribute("src", "assets/f.png");
        const f = new Audio('sounds/F.mp3');
        f.play();
        break;

      case "G":
        ukeImg.setAttribute("src", "assets/g.png");
        const g = new Audio('sounds/G.mp3');
        g.play();
        break;

      case "G7":
        ukeImg.setAttribute("src", "assets/g7.png");
        const g7 = new Audio('sounds/G7.mp3');
        g7.play();
        break;
  
      default: console.log(key);
  
    }
  }
