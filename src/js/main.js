const loadText = document.querySelector('.text')
const btn = document.getElementById('view')
const textHeader = document.querySelector('.textHeader')
const textRaison = document.querySelectorAll('.ask p')
const elements= document.querySelectorAll('.para')
const carte = document.querySelector('.carte')
const slider = document.getElementById('home')
const pass = document.querySelector('.pass')
const retour = document.querySelector('.return')
// accueil 
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log("visible");
            loadText.classList.add('view')

        }
    })
})
 if (loadText) {
  observer.observe(loadText); 
}

// header observer

window.addEventListener('DOMContentLoaded',()=>{
    const view = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                textHeader.classList.add('textHeader')
            }
        })
    })
  if (textHeader) {
  view.observe(textHeader); 
}
})

// raison
const paraObseve = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
           entry.target.classList.add('paraView') 
        }
    })
})
textRaison.forEach((el)=> paraObseve.observe(el))
// slider
let position = 370
pass.addEventListener('click',()=>{
    position+=370
    slider.style.transform = `translateX(-${position}px)`
})
//return
retour.addEventListener('click',()=>{
   position -= 370
   slider.style.transform =`translateX(-${position}px)`  
})


