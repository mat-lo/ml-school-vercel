let cols = ['orange','violet','cyan']
let chars = ['//', '>_', '.']

document.addEventListener("DOMContentLoaded", (event) => {      

    document.getElementById("cover").onclick = (e) => {        
        e.target.remove()
        document.getElementById("video-container").style.display = "block"
        document.getElementById("video-container").innerHTML = "<iframe src='https://www.youtube.com/embed/2Q1bUWRM2i0?&autoplay=1' frameborder='0' allow='autoplay; fullscreen' allowfullscreen autoplay></iframe>"

    }

    let DELTA = ((window.innerWidth-444)/2)-(window.innerWidth/12)    
    DELTA = Math.min(DELTA, 80)        

    Array.from(document.getElementsByTagName("h3")).map(h3 => h3h3(h3))

    if (window.innerWidth > 700) {
        Array.from(document.querySelectorAll("section")).map(section => sbunna(section, DELTA))        
    }

})


// horrible fix for a horrible framework. 
// don't use hugo please, let it disappear
// as just another human mistake, 
// washed out by the unfolding of history
Array.from(document.querySelector("footer").getElementsByTagName("a")).map(a => {
    if (!a.hasAttribute("href")) a.parentNode.removeChild(a)
})


// FUNCTIONS
// FUNCTIONS
// FUNCTIONS
let h3h3 = el => {    
    var col = cols[~~(Math.random()*cols.length)]    
    var char = chars[~~(Math.random()*chars.length)]    
    el.className+=(" "+col+"h3")
    el.innerHTML = char+el.innerHTML    
}

let sbunna = (section, D) => {    
    const n = (Math.floor(Math.random()*D*2))-D
    section.style.transform = "translateX(" + n + "px)"
}