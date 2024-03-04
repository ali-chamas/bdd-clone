
//hero section images
let images =['slide1.jpg','slide2.jpg','slide3.jpg','slide4.jpg','slide5.jpg','slide6.jpg','slide7.jpg']
const slider = document.getElementById('slider')

setInterval(function(){
    let index=Math.floor(Math.random()*images.length)
    slider.src=`./assets/hero-section/${images[index]}`
},4000)


//scroling nav
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

//info cards
let infoCards=[
    {
        image:'1.png',
        title:'Community',
        desc:'An environment catering to creative minds, providing the framework for ambitious and sustainable communities. BDD creates a community for collaboration, facilitates the sharing of ideas and connects decision makers with entrepreneurs.',
        color:'rgb(43, 43, 187,0.1)'
    },
    {
        image:'2.png',
        title:'Sharing Economy',
        desc:'A business district providing value added services and cutting edge facilities for developing, producing and exchanging innovative tools and applications.',
        color:'rgb(43, 43, 187,0.1)'
    },
    {
        image:'3.png',
        title:'Smart Design',
        desc:'A new urban topography that reflects the creative community with innovative and ground breaking architecture seamlessly integrating the latest technological solutions.',
        color:'rgba(73, 238, 95, 0.109)'
    },
    {
        image:'4.png',
        title:'Sustainability',
        desc:'An urban environment focused on minimizing primary energy consumption and reducing the impact of the built environment on human health and nature, with the aim of achieving LEED silver rating.',
        color:'rgba(238, 73, 188, 0.109)',
    },
    {
        image:'5.png',
        title:'Social Well Being',
        desc:'A high tech and high quality environment that allows new ways of working and promotes change for more flexible work practices and lifestyles.',
        color:'rgba(227, 238, 73, 0.109)'
    }
]

const infoCardsContainer=document.getElementById('info-card-container');

for(let i=0;i<infoCards.length;i++){
    infoCardsContainer.innerHTML+=` <div class="info_card flex primary-bg card-p gap column center">
                                    <img src="./assets/info-section/${infoCards[i].image}" alt="">
                                    <h2>${infoCards[i].title}</h2>
                                    <p>${infoCards[i].desc}</p>
                                </div>  `

}

let infoCard= document.querySelectorAll('.info_card');

for(let i=0;i<infoCard.length;i++){
    infoCard[i].addEventListener('mouseover',function(){
        infoCard[i].style.backgroundColor=infoCards[i].color
    })
    infoCard[i].addEventListener('mouseleave',function(){
        infoCard[i].style.backgroundColor='white'
    })
}


//join us cards
const joinCardsContainer=document.getElementById('joinCards_container')
let joinCards=[
    {
        title:'PRIVATE OFFICES',
        ul:[
            'Ready to move in offices for startups','Customizable offices for medium to large companies','Investment opportunities in premium commercial real estate'
        ]
    },
    {
        title:'MEMBERSHIP PLANS TO OUR HOT DESKS',
        ul:[
            'Day and weekly passes','The Smart Starter','The Free Bird','The Happy Committer','The Dedicated'
        ]
    },
    {
        title:'MEETING & EVENT SPACES',
        ul:[
            'Four fully equipped meeting rooms, up to 12 people','One closed event space, up to 250 people','3 Training rooms, 30-50 people each','TRooftop','Garden'
        ]
    },
    {
        title:'VIRTUAL OFFICES',
        ul:[
            'Business Address','Business Address Plus','Yearly Business Address'
        ]
    }
]

for(let i = 0;i<joinCards.length;i++){
    joinCardsContainer.innerHTML+=`<div class="join_card flex justify-between align-center column gap ">
    <div class="flex column align-center">
        <h2>${joinCards[i].title}</h2>
        <ul class='joinCards_ul'>
           
          
        </ul>
    </div>
    <button type='button' class="button-style">Know More</button>
</div>`
}

let joinCardsUl=document.querySelectorAll('.joinCards_ul');

for(let i = 0;i<joinCards.length;i++){
    for(let j =0;j<joinCards[i].ul.length;j++){
        joinCardsUl[i].innerHTML+=`<li>${joinCards[i].ul[j]}</li>`
    }
}


//hub-section cards

const hubCardsContainer = document.getElementById('hubCards_container');

let hubCards=[
    {img:'home_community.png',number:3500,title:'Community Members',color:'linear-gradient(45deg, #17785b, #5bf004)'},
    {img:'home_events.png',number:1533,title:'EVENTS PER YEAR',color:'linear-gradient(45deg, #8a1d94, #e53131)'},
    {img:'home_vc.png',number:160,title:'STARTUPS, SMES AND SUPPORT ORGANIZATIONS',color:'linear-gradient(45deg, #135535, #24fa6f)'},
    {img:'home_support.png',number:35,title:'INDUSTRIES REPRESENTED',color:'linear-gradient(45deg, #4c36d6, #0c92f3)'}
]
for(let i = 0;i<hubCards.length;i++){
    hubCardsContainer.innerHTML+=`<div class="flex column hub_cards center">
                                        <img src="./assets//hub-section/${hubCards[i].img}" alt="">
                                        <h2 class='hub_h'>${hubCards[i].number}+</h2>
                                        <h3>${hubCards[i].title}</h3>
                                    </div>`
}

let hubHeaders = document.querySelectorAll('.hub_h')

for(let i =0;i<hubHeaders.length;i++){
    hubHeaders[i].style.backgroundImage=hubCards[i].color
}


//scroll up button
const scrollUp=document.getElementById('scrollBtn');
window.addEventListener('scroll',function(){
    let y=this.window.scrollY;
    if(y>=1200){
        scrollUp.style.display='flex'
    }
    else{
        scrollUp.style.display='none'
    }

})