import './css/styles.css';
import {GenerateImage} from './generateItems.js';
// generateItems.generateImg;
let dragndrop = (function(){
  let positionX = "";
  let positionY = "";
  let chooseTarget = "";
  let instance = new GenerateImage();
  instance.generateBody();
  instance.generateElements();
  /*Reset drop element's z-index value*/
  function resetZ(){
    let images = document.querySelectorAll('img');
    for(let idx = 0; idx < images.length; idx++){
      images[idx].style.zIndex = 5;
    }
  }
  /*Drag element*/
  function moveStart(event){
    chooseTarget = event.target;
    console.log(chooseTarget);
    positionX = event.offsetX===undefined ? event.layerX : event.offsetX;
    positionY = event.offsetY===undefined ? event.layerY : event.offsetY;
    resetZ()
    chooseTarget.style.zIndex = 10;

  }
  /*Drop element*/
  function moveDrop(event){
    event.preventDefault();
    chooseTarget.style.position = "absolute";
    chooseTarget.style.left = event.pageX - positionX + "px";
    chooseTarget.style.top  = event.pageY - positionY + "px";
  }
  /*Move over element*/
  function moveDragOver(event){
    event.preventDefault();
  }
  document.querySelector('body').addEventListener('dragstart',moveStart,false);
  document.querySelector('body').addEventListener('dragover',moveDragOver,false);
  document.querySelector('body').addEventListener('drop',moveDrop,false);
})();
