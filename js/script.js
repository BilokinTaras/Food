import tabs  from './modules/tabs';
import modal  from './modules/modal';
import timer  from './modules/timer';  
import cards  from './modules/cards';
import calculator  from './modules/calculator';
import forms  from './modules/forms';
import slider  from './modules/slider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', ()=>{

   const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);
/* const tabs = require('./modules/tabs'),
         modal = require('./modules/modal'),
         timer = require('./modules/timer'),  
         cards = require('./modules/cards'),
         calculator = require('./modules/calculator'),
         forms = require('./modules/forms'),
         slider = require('./modules/slider'); */


         tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
         modal('[data-modal]', '.modal', modalTimerId);
         timer('.timer', '2023-01-11');
         cards();
         calculator();
         forms('form', modalTimerId);
         slider({
            container: '.offer__slider', 
            nextArrow: '.offer__slider-next img',
            prevArrow: '.offer__slider-prev img',
            field: '.offer__slider-inner',
            wrapper: '.offer__slider-wrapper',
            totalCounter: '#total',
            currentCounter: '#current',
            slide: '.offer__slide'
         });
});