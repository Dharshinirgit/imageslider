// variable slideposition for maintaing the image display
let slideposition=0;
// here query selector used for getting all the images from .images class
const sliders=document.querySelectorAll('.images');
// totalslider variable stores the count of the images we have
const totalslider=sliders.length;
// prev and button 
const btnprev=document.querySelector('#btn-prev');
const btnnext=document.querySelector('#btn-next');

//when prev and next button clicked the functions prevslide and nextslide will called respectively

btnprev.addEventListener('click',function(){
    prevslide();
});
btnnext.addEventListener('click',function(){
    nextslide();
});

/* following function automatically updates the current postion of the
to next position so images will be displayed one after another */

function updateposition()
{
    sliders.forEach(slide=>{
      slide.classList.remove('active');
      slide.classList.add('hidden');
    });

    sliders[slideposition].classList.add('active');
    dots.forEach(slide=>{
        slide.classList.remove('dot-active');
      });
    dots[slideposition].classList.add('dot-active');

}
/* we need to start the display of images from the current position to previous when prev button is clicked
the following functions prevslide() and nextslide() enables the foward and backward traversal in image slider */

function prevslide()
{
   if(slideposition==0)
   {
    slideposition=totalslider-1;
   } 
   else
   {
    slideposition--; 
   }
   updateposition();
}
function nextslide()
{
   if(slideposition==totalslider-1)
   {
     slideposition=0;
   } 
   else
   {
    slideposition++; 
   }
  updateposition();
}

// we going to activate the bar with respect to the image so bars activated and deactivated using forEach loop
// loop back after reaching last image

const dotcontainer=document.querySelector('.dots');
sliders.forEach(slide=>{
   const dot=document.createElement('div');
   dot.classList.add('dot');
   dotcontainer.appendChild(dot);
  });

  const dots=document.querySelectorAll('.dot');
  dots[slideposition].classList.add('dot-active');

// when bars clicked the corresponding image at that position will be displayed  

  dots.forEach((dot,index)=>{
    dot.addEventListener('click',function()
    {
       slideposition=index;
       updateposition();
    });
  });

// automatic slideshow feature added using setInterval method and for each 3seconds the image will changed
// automatic slideshow for each 3 seconds 

  setInterval(()=>{
     // loop back after reaching last image
     if(slideposition==totalslider-1)
     {
        slideposition=0;
     }   
     else
     {
        slideposition++;
     }
     updateposition();
  },3000)
