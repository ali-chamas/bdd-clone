let images =['slide1.jpg','slide2.jpg','slide3.jpg','slide4.jpg','slide5.jpg','slide6.jpg','slide7.jpg']
const slider = document.getElementById('slider')

setInterval(function(){
    let index=Math.floor(Math.random()*images.length)
    slider.src=`./assets/hero-section/${images[index]}`
},4000)