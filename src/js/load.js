const load = document.querySelector('.load')
const number = document.querySelector('#number')
const bar = document.querySelector('.bar')

let progress = 0

// Progression de la barre
const progression = setInterval(() => {
    progress++

    bar.style.width = progress + "%"
    number.textContent = progress + "%"

    if (progress >= 100) {
        clearInterval(progression)

        setTimeout(() => {
            load.classList.add("fin")
            load.style.transition = 'all 0.8s ease-in'
            load.style.display = "none"
        },200)
    }
}, 30)