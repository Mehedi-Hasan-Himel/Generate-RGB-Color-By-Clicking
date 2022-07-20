/*
# - Project Requirements:  
# - Change the background color by generating random RGB color by clicking a button.  
*/

// Steps:

//  Step-01: create on load function/handler.
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById(`root`);
  const changeBtn = document.getElementById(`change-btn`);

  changeBtn.addEventListener(`click`, function () {
    const bgColor = generateRGBColor();
    root.style.backgroundColor = bgColor; 
  });
}

// Step-02: Random color generator function.
function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green},${blue})`;
}

//  Step-03: collect all necessary references.
//  Step-04: handle the click event.
