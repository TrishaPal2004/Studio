const blocks = document.querySelectorAll(".parallax-block");

blocks.forEach(block => {
    const box = block.querySelector(".boxx"); // Select the entire box
    const movingValue =  0.2; // Adjust this for intensity

    block.addEventListener("mousemove", parallax);
    
    function parallax(e) {
        const rect = block.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position within the block
        const y = e.clientY - rect.top; // Y position within the block

        // Calculate movement based on mouse position and data-value
        const moveX = (x * movingValue);
        const moveY = (y * movingValue);

        // Apply transformation to the whole box
        box.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    }

    // Reset the box position when the cursor leaves the block
    block.addEventListener("mouseleave", () => {
        box.style.transform = "translate(0, 0) scale(1)";
    });
});


// Select all blocks and text elements
const blcks = document.querySelectorAll('.hero .block .boxx');
const texts = document.querySelectorAll('.hero .container .text');
const imges = document.querySelectorAll('.hero .block img');
const containers=document.querySelectorAll('.hero .parallax-block');
// Counter to track hovered blocks
let hoverCount = 0;

// Add hover event listeners for each block
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
      img.src = img.dataset.original; // Always reset to original source
      img.classList.remove('outline-image'); // Remove outline from all images
    });

    containers.forEach((cont, contIndex) => {
        cont.classList.remove('z-10');
    });

  });
});

// Wait until the window is fully loaded
window.addEventListener("load", () => {
    const images = document.querySelectorAll('.hero img');
    
    // Add a class to each image to start the animation
    images.forEach(img => {
      img.classList.add("animate-in");
    });
  });
  