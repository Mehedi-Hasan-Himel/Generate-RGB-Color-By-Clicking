/*
# - Project Requirements:  
# - Change the background color by generating random RGB color by clicking a button.  
*/

// Steps:

//  Step-01: create on load function/handler.
window.onload = () => {
  main();
};

function main() {}

// Step-02: Random color generator function.
function generateRGBColor() {
   const red = Math.floor(Math.random() * 255);
   console.log(red);
}

//  Step-03: collect all necessary references.
//  Step-04: handle the click event.
