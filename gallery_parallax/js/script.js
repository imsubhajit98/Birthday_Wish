


// MouseEvent 

document.addEventListener("mousemove", parallax);


function parallax(event) {

  this.querySelectorAll(".mouse").forEach((shift) => {
    const position = shift.getAttribute("value");
    console.log(event.pageX);

    const x = (window.innerWidth - event.pageX * position) / 800;
    // console.log("x is ",x);
    const y = (window.innerHeight - event.pageY * position) / 800;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// light box 

lightGallery(document.querySelector('.gallery'));