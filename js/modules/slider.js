function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){

   
   const rightArrowSlider = document.querySelector(nextArrow),
   leftArrowSlider = document.querySelector(prevArrow),
   slider = document.querySelector(container),
   imgSliders = document.querySelectorAll(slide),
   totalSliders = document.querySelector(totalCounter),
   currentSliders = document.querySelector(currentCounter),
   wrapperSliders = document.querySelector(wrapper),
   fieldSliders = document.querySelector(field),
   width = window.getComputedStyle(wrapperSliders).width;

   let  slideIndex = 1,
   offset = 0;

   if(imgSliders.length < 10){
      total.textContent = `0${imgSliders.length}`;
      currentSliders.textContent = `0${slideIndex}`;
   } else {
      total.textContent = imgSliders.length;
      currentSliders.textContent = slideIndex;
   }     

   fieldSliders.style.width = 100 * imgSliders.length + '%';
   fieldSliders.style.display = 'flex';
   fieldSliders.style.transition = '0.5s all';
   wrapperSliders.style.overflow = 'hidden';

   imgSliders.forEach(slide => {
   slide.style.width = width;
   });

   slider.style.position = 'relative';

   const indicators = document.createElement('ol'),
      dots = [];
   indicators.classList.add('carousel-indicators');
   indicators.style.cssText = `
   position: absolute;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 15;
   display: flex;
   justify-content: center;
   margin-right: 15%;
   margin-left: 15%;
   list-style: none;
   `;
   slider.append(indicators);

   for(let i = 0; i < imgSliders.length; i++){
   const dot = document.createElement('li');
   dot.setAttribute('data-slide-to', i + 1);
   dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
   `;
   if(i == 0){
      dot.style.opacity = 1;
   }
   indicators.append(dot);
   dots.push(dot);
   }

   function deleteNotDigits(str){
   return Number(width.replace(/\D/g, ""));
   }

   function transitionSlides(){
   if(imgSliders.length < 10){
      currentSliders.textContent = `0${slideIndex}`;
   } else {
      currentSliders.textContent = slideIndex;
   }
   }

   function activeDotOfSlides(){
   dots.forEach(dot=> {
      dot.style.opacity = '.5';
      dots[slideIndex - 1].style.opacity = 1;
   });
   }

   function offsetSlide(){
   fieldSliders.style.transform = `translateX(-${offset}px)`;
   }

   rightArrowSlider.addEventListener('click', function(){
   if(offset == deleteNotDigits(width) * (imgSliders.length - 1)){//width - сейчас содержит 500рх нужно вырезать два последних
      offset = 0;
   } else {
      offset += deleteNotDigits(width);
   }
   offsetSlide();

   if(slideIndex == imgSliders.length){
      slideIndex = 1;
   } else {
      slideIndex++;
   }

   transitionSlides();
   activeDotOfSlides();

   });

   leftArrowSlider.addEventListener('click', function(){
   if(offset == 0){//width - сейчас содержит 500рх нужно вырезать два последних
      offset = deleteNotDigits(width) * (imgSliders.length - 1)
   } else {
      offset -= deleteNotDigits(width);
   }
   offsetSlide();

   if(slideIndex == 1){
      slideIndex = imgSliders.length;
   } else {
      slideIndex--;
   }

   transitionSlides();
   activeDotOfSlides();
   });

   dots.forEach(dot=> {
   dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);

      offsetSlide();

      
      transitionSlides();
      activeDotOfSlides();
   });
   });


/* 
   showCarousel(slideIndex);

   if(imgSliders.length < 10){
      total.textContent = `0${imgSliders.length}`;
   } else {
      total.textContent = imgSliders.length;
   }

   function showCarousel(n){
      if(n > imgSliders.length){
         slideIndex = 1;
      }

      if(n < 1){
         slideIndex = slideIndex.length;
      }

      imgSliders.forEach(item => item.style.display = 'none');
      imgSliders[slideIndex - 1].style.display = 'block';

      if(imgSliders.length < 10){
         currentSliders.textContent = `0${slideIndex}`;
      } else {
         currentSliders.textContent = slideIndex;
      }
   }

   function nextSlide(n){
      showCarousel(slideIndex += n);
   }

   function prevSlide(n){
      showCarousel(slideIndex -= n);
   }

   leftArrowSlider.addEventListener('click', function(){
      prevSlide(-1);
   });
   rightArrowSlider.addEventListener('click', function(){
      nextSlide(+1);
   }); */
}

export default slider;
//module.exports = slider;