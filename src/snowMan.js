import './css/styles.css';
import generateItems from './generateItems.js';
generateItems.generateImg;
let dragndrop = (function(){
  let positionX = "";
  let positionY = "";
  let chooseTarget = "";
  function moveStart(event){
    chooseTarget = event.target;
    positionX = event.offsetX===undefined ? event.layerX : event.offsetX;
    positionY = event.offsetY===undefined ? event.layery : event.offsetY;
  }
  document.querySelector('body').addEventListener('dragstart',false);
})();
