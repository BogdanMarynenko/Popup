const popupBg = document.querySelector('.popup__bg'),
      popup = document.querySelector('.popup'),
      popupOpen = document.querySelectorAll('.open-popup'),
      popupClose = document.querySelector('.close-popup');

popupOpen.forEach((button) => {
  button.addEventListener('click', (e) =>{
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
  })
});
  popupClose.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    
  });

  document.addEventListener('click', (e) => {
    if(e.target === popupBg){
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });


