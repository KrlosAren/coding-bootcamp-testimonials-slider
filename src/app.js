
import './assets/styles/main.scss';

import maleAvatar from './assets/images/image-john.jpg';
import famaleAvatar from './assets/images/image-tanya.jpg';

const data = {
  male: {
    avatar: maleAvatar,
    caption: `“If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer.”`,
    name: 'John Tarkpor',
    position: 'Junior Front-end Developer',
  },
  famale: {
    avatar: famaleAvatar,
    caption: `“I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future.”`,
    name: 'Tanya Sinclair',
    position: 'UX Engineer',
  },
};

const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

const avatar = document.getElementById('clientImg');
const caption = document.getElementById('captionText');
const name = document.getElementById('name');
const position = document.getElementById('position');

nextButton.onclick = () => {
  avatar.setAttribute('src', data.male.avatar);
  caption.innerText = data.male.caption;
  name.innerText = data.male.name;
  position.innerText = data.male.position;
};

prevButton.onclick = () => {
  avatar.setAttribute('src', data.famale.avatar);
  caption.innerText = data.famale.caption;
  name.innerText = data.famale.name;
  position.innerText = data.famale.position;
};
