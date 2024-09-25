document.addEventListener('DOMContentLoaded', function () {
  const infos = document.querySelectorAll('.fourth-bdy-info');
  const prevButtons = document.querySelectorAll('.js-btn.prev');
  const nextButtons = document.querySelectorAll('.js-btn.next');
  let currentIndex = 0;

  infos[currentIndex].setAttribute('data-active', true);

  function showInfo(index) {
    infos.forEach((info, i) => {
      if (i === index) {
        info.style.opacity = '1';
        info.style.visiblity= 'visible';
        info.style.zIndex = '1';
        info.setAttribute('data-active', true);
      } else {
        info.style.opacity = '0';
        info.style.visiblity= 'hidden';
        info.style.zIndex = '0';
        info.removeAttribute('data-active');
      }
    });
  }

  nextButtons.forEach(button => {
    button.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % infos.length; 
      showInfo(currentIndex);
    });
  });

  prevButtons.forEach(button => {
    button.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + infos.length) % infos.length;  
      showInfo(currentIndex);
    });
  });
});
