import {getResource} from '../services/services';

function cards(){
   //Использувать классы для карточек

    class MenuCard{
      constructor(src, alt, title, description, price, parentSelector, ...classes){
         this.src = src;
         this.description = description;
         this.alt = alt;
         this.title = title;
         this.price = price;
         this.classes = classes;
         this.parent = document.querySelector(parentSelector);
         this.transfers = 27;
         this.changeToUAH();
      }


      changeToUAH(){
         this.price = this.price * this.transfers;
      }
      render(){
         let element = document.createElement('div');
         if(this.classes.length == 0){
            this.element = 'menu__item';
            element.classList.add(this.element);
         } else {
            this.classes.forEach(item => {
               element.classList.add(item);
            });
         }

         element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
         `;
         this.parent.append(element);
      }
   } 

   //Получение данных с сервера и обработка их с помощью класса Menu Card
    getResource('http://localhost:3000/menu')
   .then(data => {
      data.forEach(({img, altimg, title, descr, price}) => {
         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      })
      console.log(data);
   })  
   //Используем библиотеку axios
/*    axios.get('http://localhost:3000/menu')
   .then(data => {
      data.data.forEach(({img, altimg, title, descr, price}) => {
         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      })
   }); */
      //Динамическая получение данных с сервера и вывод карточек(без классов MenuCard)
/*        getResource('http://localhost:3000/menu')
      .then(data => createCard(data));
   
      function createCard(data){
         data.forEach(({img, altimg, title, descr, price}) => {
            const element = document.createElement('div');
            element.classList.add('menu__item');
   
            element.innerHTML = `
            <img src=${img} alt=${altimg}>
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${price}</span> грн/день</div>
            </div>
            `;
   
            document.querySelector('.menu .container').append(element);
         });
      }   */
  /*  new MenuCard(
      "img/tabs/vegy.jpg",
      "vegy",
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      9,
      '.menu .container'
   ).render();
   new MenuCard(
      "img/tabs/vegy.jpg",
      "vegy",
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      9,
      '.menu .container',
      'menu__item'
   ).render();
   new MenuCard(
      "img/tabs/vegy.jpg",
      "vegy",
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      9,
      '.menu .container',
      'menu__item'
   ).render(); */
}

export default cards;
//module.exports = cards;