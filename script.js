let clock = document.querySelector(".clock")
let toggle = document.querySelector(".toggle")
let active = document.querySelector(".toggle__item--active")
let forSession = document.querySelector(".session")

// každou sekundu načte aktuální čas
let showTime = function(){
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = "AM"
    
    toggle.addEventListener("click", function(){
        active.classList.toggle("toggle__item--to24h")
        clock.classList.toggle("clock--to24h")
        forSession.classList.toggle("d-none")
    })

    if(active.classList.contains("toggle__item--to24h")){
        h = h < 10 ? "0" + h : h
        m = m < 10 ? "0" + m : m
        s = s < 10 ? "0" + s : s
    } else {
        if(h > 12){
            h = h - 12
            session = "PM"
        }
    
        h = h < 10 ? "0" + h : h
        m = m < 10 ? "0" + m : m
        s = s < 10 ? "0" + s : s

        forSession.textContent = session
    }
    
    clock.textContent = `${h} : ${m} : ${s}`
    setTimeout(showTime, 1000)
}

showTime()

// toggle hover
toggle.addEventListener("mouseover", function(){
    active.classList.add("toggle__item--hover")
})
toggle.addEventListener("mouseout", function(){
    active.classList.remove("toggle__item--hover")
})