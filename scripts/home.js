let images =['slide1.jpg','slide2.jpg','slide3.jpg','slide4.jpg','slide5.jpg','slide6.jpg','slide7.jpg']
const slider = document.getElementById('slider')

setInterval(function(){
    let index=Math.floor(Math.random()*images.length)
    slider.src=`./assets/hero-section/${images[index]}`
},4000)

const header=document.getElementById('header')
const logo = document.getElementById('logo')

window.addEventListener('scroll',function(){
    let y=this.window.scrollY;
    if(y>=100){
        header.style.backgroundColor='rgb(28, 27, 27,0.8)'
        logo.src='./assets/logo-icon.png'
        if(this.window.screen.width>900){
            logo.style.height='70px'
        }else{
            logo.style.height='40px'
        }
    }else{
        header.style.backgroundColor='transparent'
        logo.src='./assets/logo.png'
        if(this.window.screen.width>900){
            logo.style.height='150px'
        }else{
            logo.style.height='90px'
        }
        
        
    }
})