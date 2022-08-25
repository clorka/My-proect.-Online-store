
//выводим заставку
const zast1 = document.getElementById('zast1');
zast1.style.backgroundImage = 'url(image/zastavka2.jpg)'
function openzastavka1(){ 
    zast1.style.backgroundImage = 'url(image/zastavka1.jpg)'
  }; 
  function openzastavka2(){ 
    zast1.style.backgroundImage = 'url(image/zastavka2.jpg)'
  }; 
  setInterval(openzastavka1, 7000);
  setInterval(openzastavka2, 14000);

  let menub  = document.getElementById('menub');

