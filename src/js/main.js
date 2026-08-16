const loadText = document.querySelector('.text')
const btn = document.getElementById('#view')
const textHeader = document.querySelector('.textHeader')

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log("visible");
            loadText.classList.add('view')

        }
    })
})
observer.observe(loadText)
// header observer

window.addEventListener('DOMContentLoaded',()=>{
    const view = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                alert('element visible')
                textHeader.classList.add('textHeader')
            }
        })
    })
})
view.observe(textHeader)