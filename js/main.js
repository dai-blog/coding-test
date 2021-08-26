'use strict';

{
  const bar = document.querySelector('.fa-bars');
  const modal = document.getElementById('overlay');
  const close = document.querySelector('.fa-times');

  bar.addEventListener('click', () => {
    modal.classList.add('appear');
    bar.classList.add('hide');
  });
  
  close.addEventListener('click', () => {
    modal.classList.remove('appear');
    bar.classList.remove('hide');
  });
}