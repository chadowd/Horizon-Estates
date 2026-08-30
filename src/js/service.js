const textHeader = document.querySelector('.textService')
const presentS = document.querySelectorAll('.presentService')
const CartService = document.querySelectorAll('.cartService')
const CartSquad = document.querySelectorAll('.cartSquad')
const about = document.querySelectorAll('.presentation ')
const intro = document.querySelectorAll('.intro')
const call = document.querySelectorAll('.textCall')

// service Animation
const TextObserve  = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            textHeader.classList.add('ServiceView')
            console.log("visible");
            
        }
    })
})
if(textHeader){
    TextObserve.observe(textHeader)
}

const presentObserve = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('ServiceP')
            console.log("visible");
        }
    })
})
presentS.forEach((el)=>{
    presentObserve.observe((el))
})
// carte des activités
const CartObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('Carteview')
            console.log("visible");
        }
    })
})
CartService.forEach((el)=>{
    CartObserver.observe((el))
})
// carte de l'equipe
const SquadObserver= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('CarteSquad')
            console.log("visible");
        }
    })
})

CartSquad.forEach((el)=>{
    SquadObserver.observe((el))
})
// les à propos
const aboutObserver =    new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('presentView')
            console.log("visible");
        }
    })
})
about.forEach((el)=>{
    aboutObserver.observe((el))
})
// les valeurs
const introObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('valuerView')
        }
    })
})
intro.forEach((el)=>{
    introObserver.observe((el))
})
// invite au contact
const callObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('callView')
        }
    })
})
call.forEach((el)=>{
    callObserver.observe((el))
})


// contact parties 
const textContact = document.querySelector('.textContact')
const contact = document.querySelectorAll('.form')
const LastContact = document.querySelectorAll('.footerTop')
// animation contact h1
const textObserve = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            textContact.classList.add('contactView')
        }
    })
})
if(textContact){
    textObserve.observe(textContact)
}
// animation formulaire

const contactObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('FomrView')
        }
    })
})
contact.forEach((el)=>{
    contactObserver.observe((el))
})
// dernier entête
const lastObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('viewFooter')
        }
    })
})
LastContact.forEach((el)=>{
    lastObserver.observe((el))
})
// logique du formulaire
const inputText = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputTel = document.getElementById('tel')
const choix = document.getElementById('choix')
const message = document.getElementById('mail')
const btn = document.querySelector('.send')
let p = document.querySelectorAll('.error')
inputText.value = ""
inputEmail.value =""
inputTel.value = ""
message.value = ""
// regex
    const regexTel = /^\d{10}$/
    const regexEmail = /^\w+\d+[a-z]@\w+\.com$/
    const regexName = / ^A-Z.$/
// click
const form = document.querySelector('form')
form.addEventListener('submit',()=>{
    Event.preventDefault
    btn.addEventListener('click',()=>{
    if(inputText.value===''){
        p.innerHTML = 'Entrer la valeur demandé'
        p.style.color ='red'
    }
   else if(!regexName.test(inputText.value)){
        p.innerHTML = 'Entrer la valeur demandé'
        p.style.color ='red'
    }
    if(inputEmail.value===''){
          p.innerHTML = 'Entrer la valeur demandé'
        p.style.color ='red'
    }

  else  if(!regexEmail.test(inputEmail.value)){
          p.innerHTML = 'Entrer la valeur demandé'
        form.style.color ='red'
    }
    if(inputTel===''){
        alert('entre le num')
    }
   else if(!regexTel.test(inputTel.value)){
          p.innerHTML = 'Entrer la valeur demandé'
        p.style.color ='red'
        alert('entre le num')
    }
    if(message.value===''){
          p.innerHTML = 'Entrer la valeur demandé'
        p.style.color ='red'
    }
})
})
//faire apparaître le contact
const btnContact = document.querySelector('.formContact')
let contactForm = document.querySelector('form')
btnContact.addEventListener('click',()=>{
    console.log('contact');
    
    contactForm.classList.toggle('formView')
})
