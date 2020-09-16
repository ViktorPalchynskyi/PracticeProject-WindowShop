const images = () => {
   const imgPoput = document.createElement('div'),
      workSection = document.querySelector('.works'),
      bigImage = document.createElement('img');

   imgPoput.classList.add('popup');
   workSection.appendChild(imgPoput);

   imgPoput.style.justifyContent = 'center';
   imgPoput.style.alignItems = 'center';
   imgPoput.style.display = 'none';

   imgPoput.appendChild(bigImage);

   workSection.addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.target;

      if (target && target.classList.contains('preview')) {
         imgPoput.style.display = 'flex';
         const path = target.parentNode.getAttribute('href');
         bigImage.setAttribute('src', path);
      }

      if (target && target.matches('div.popup')) {
         imgPoput.style.display = 'none';
      }
   });
};

export default images;