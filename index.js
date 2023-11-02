const heroImageUrls=['./images/desktop-image-hero-1.jpg','./images/desktop-image-hero-2.jpg','./images/desktop-image-hero-3.jpg']

const heroText =[
    {
        title:"Discover innovative ways to decorate",
        text:" We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        title:"  We are available all across the globe",
        text:" With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        title:"Manufactured with the best materials",
        text:"  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

let prev = document.getElementById('prev')
let next = document.getElementById('next')

prev.addEventListener('click',(e)=>{
    e.preventDefault()
    let id = document.getElementsByClassName('slider-mobile')
    if(Number(id[0].id) === 0){
        document.getElementById('hero-image').src = heroImageUrls[2]
        document.getElementById('hero-title').innerText= heroText[2].title
        document.getElementById('hero-text').innerText= heroText[2].text
         id[0].id = 2
    }else{
        document.getElementById('hero-image').src = heroImageUrls[Number(id[0].id) - 1]
        document.getElementById('hero-title').innerText= heroText[Number(id[0].id) - 1].title
        document.getElementById('hero-text').innerText= heroText[Number(id[0].id) - 1].text
         id[0].id = Number(id[0].id) - 1
    }

})

next.addEventListener('click', (e)=>{
    e.preventDefault()
    let id = document.getElementsByClassName('slider-mobile')
    
    if(Number(id[0].id) === 2){
        document.getElementById('hero-image').src = heroImageUrls[0]
        document.getElementById('hero-title').innerText= heroText[0].title
        document.getElementById('hero-text').innerText= heroText[0].text

         id[0].id = 0
    }else{
        document.getElementById('hero-image').src = heroImageUrls[Number(id[0].id) + 1]
        document.getElementById('hero-title').innerText= heroText[Number(id[0].id) + 1].title
        document.getElementById('hero-text').innerText= heroText[Number(id[0].id) + 1].text
         id[0].id = Number(id[0].id) + 1
    }

})

let prevDesktop = document.getElementById('prevDesktop')
let nextDesktop = document.getElementById('nextDesktop')
prevDesktop.addEventListener('click',(e)=>{
    e.preventDefault()
    let id = document.getElementsByClassName('slider-mobile')
    if(Number(id[0].id) === 0){
        document.getElementById('hero-image').src = heroImageUrls[2]
        document.getElementById('hero-title').innerText= heroText[2].title
        document.getElementById('hero-text').innerText= heroText[2].text
         id[0].id = 2
    }else{
        document.getElementById('hero-image').src = heroImageUrls[Number(id[0].id) - 1]
        document.getElementById('hero-title').innerText= heroText[Number(id[0].id) - 1].title
        document.getElementById('hero-text').innerText= heroText[Number(id[0].id) - 1].text
         id[0].id = Number(id[0].id) - 1
    }

})

nextDesktop.addEventListener('click', (e)=>{
    e.preventDefault()
    let id = document.getElementsByClassName('slider-mobile')
    
    if(Number(id[0].id) === 2){
        document.getElementById('hero-image').src = heroImageUrls[0]
        document.getElementById('hero-title').innerText= heroText[0].title
        document.getElementById('hero-text').innerText= heroText[0].text

         id[0].id = 0
    }else{
        document.getElementById('hero-image').src = heroImageUrls[Number(id[0].id) + 1]
        document.getElementById('hero-title').innerText= heroText[Number(id[0].id) + 1].title
        document.getElementById('hero-text').innerText= heroText[Number(id[0].id) + 1].text
         id[0].id = Number(id[0].id) + 1
    }

})


