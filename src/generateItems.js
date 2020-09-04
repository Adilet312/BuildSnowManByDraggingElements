import belt from './images/belt.svg';
import body from './images/body.svg';
import eyes01 from './images/eyes01.svg';
import hand_left from './images/hand_left01.svg';
import hand_right from './images/hand_right01.svg';
import head from './images/head01.svg';
import mouth from './images/mouth01.svg';
import neck from './images/neck01.svg';
import nose from './images/nose01.svg';

export function generateImg(){

  const pictures = [`${belt}`,`${body}`,`${eyes01}`,`${hand_left}`,`${hand_right}`,`${head}`,`${mouth}`,`${neck}`,`${nose}`];
  for(let idx = 0; idx < 9; idx++){
    let img = document.createElement('img');
    img.setAttribute('draggable',"true");
    img.src = pictures[idx];
    document.body.appendChild(img);
  }
}
generateImg();
