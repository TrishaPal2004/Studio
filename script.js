const blocks = document.querySelectorAll(".parallax-block");

blocks.forEach(block => {
    const box = block.querySelector(".boxx"); 
    const movingValue =  0.2; 

    block.addEventListener("mousemove", parallax);
    
    function parallax(e) {
        const rect = block.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top; 

       
        const moveX = (x * movingValue);
        const moveY = (y * movingValue);

        
        box.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    }

    
    block.addEventListener("mouseleave", () => {
        box.style.transform = "translate(0, 0) scale(1)";
    });
});


// Select all blocks and text elements
const blcks = document.querySelectorAll('.hero .block .boxx');
const texts = document.querySelectorAll('.hero .container .text');
const imges = document.querySelectorAll('.hero .block img');
const containers=document.querySelectorAll('.hero .parallax-block');

let hoverCount = 0;


blcks.forEach((block, blockIndex) => {
  block.addEventListener('mouseenter', () => {
    hoverCount++;
    texts.forEach(text => text.classList.add('hover-effect'));
    imges.forEach((img, imgIndex) => {
      if (imgIndex !== blockIndex) {
        img.src = 'Untitled51.png'; 
        img.classList.add('outline-image');
      }
    });

    containers.forEach((cont, contIndex) => {
      if (contIndex !== blockIndex) {
        cont.classList.add('z-10');
      }
    });
  });

  block.addEventListener('mouseleave', () => {
    hoverCount--;
    texts.forEach(text => text.classList.remove('hover-effect'));
    
    // Reset all images back to their original state
    imges.forEach((img, imgIndex) => {
      img.src = img.dataset.original; 
      img.classList.remove('outline-image');
    });

    containers.forEach((cont, contIndex) => {
        cont.classList.remove('z-10');
    });

  });
});

// Wait until the window is fully loaded
window.addEventListener("load", () => {
    const images = document.querySelectorAll('.hero img');
    
   
    images.forEach(img => {
      img.classList.add("animate-in");
    });
  });
  
