let clock = document.querySelector(".clock")
let toggle = document.querySelector(".toggle")
let active = document.querySelector(".toggle__item--active")
let forSession = document.querySelector(".session")

// přidá 0 před čéslo menší než 10
let addZero = function(x){
    if(x < 10){
        return "0" + x
    } else {
        return x
    }
}

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
        h = addZero(h)
        m = addZero(m)
        s = addZero(s)
    } else {
        if(h > 12){
            h = h - 12
            session = "PM"
        }
    
        h = addZero(h)
        m = addZero(m)
        s = addZero(s)

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