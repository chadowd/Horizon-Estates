const loadText = document.querySelector('.text')
const btn = document.getElementById('#view')

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log("visible");
            loadText.classList.add('view')
            btn.classList.add('hide')
        }
    })
})
observer.observe(loadText)