import belt from './images/belt.svg';
import body from './images/body.svg';
import eyes01 from './images/eyes01.svg';
import hand_left from './images/hand_left01.svg';
import hand_right from './images/hand_right01.svg';
import head from './images/head01.svg';
import mouth from './images/mouth02.svg';
import neck from './images/neck01.svg';
import nose from './images/nose01.svg';

export class GenerateImage{
  generateElements(){

    const pictures = [`${belt}`,`${eyes01}`,`${hand_left}`,`${hand_right}`,`${head}`,`${mouth}`,`${neck}`,`${nose}`];
    for(let idx = 0; idx < 8; idx++){
      let img = document.createElement('img');
      img.setAttribute('draggable',"true");
      img.src = pictures[idx];
      img.style.postion = 'relative';
      img.style.left = `${idx*100}`;
      img.style.top = `${idx*100}`;
      img.style.zIndex = 5;
      document.body.appendChild(img);
    }
  }
    generateBody(){
      let bodyImg = document.createElement('img');
      bodyImg.src = `${body}`;
      bodyImg.style.position = 'absolute';
      bodyImg.style.left = `${400}`;
      bodyImg.style.top = `${100}`;
      bodyImg.style.zIndex = 5;
      document.body.appendChild(bodyImg);
    }

}
