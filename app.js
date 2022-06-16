const THEME = {
    'dark':{
    '--text-color': '#fff',
    '--text-color-grey':'#43455E',
    '--checkbox':' linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%)) /*linear-gradient( to )*/',
    '--bg':'no-repeat url("./images/bg-mobile-dark.jpg"),hsl(235, 21%, 11%)',
    '--theme':'url(images/icon-sun.svg)',
    '--bg-card':'hsl(235, 24%, 19%)'},
    'light':
    {"--text-color" : "#000",
    "--text-color-grey":"#43455E",
    "--checkbox": "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%)) /*linear-gradient( to )*/",
    "--bg":"no-repeat url('./images/bg-mobile-light.jpg'),hsl(0, 0%, 98%)",
    "--theme":"url(images/icon-moon.svg)",
    "--bg-card":"#fff"}

}
// set the variable of the theme given in root
let setTheme=function(theme){
    debugger
    let root = document.querySelector(':root')
    for( let v in theme ){
       
        root.style.setProperty(v,theme[v])
    }

}
window.addEventListener("DOMContentLoaded",()=>{
    //remove element from parent node 
    let remove = function(){
        this.classList.add('none')
        this.parentElement.removeChild(this)
    }
    // hide element
    let fade = function() {
        let parent = this.parentElement
        cleared(parent)   
    }
    let cleared = function(check) {
        check.classList.add('fade')
        check.addEventListener('animationend',remove)    
    }
    let hide = function (checkbox){ 
        checkbox.classList.add('fade')
        checkbox.addEventListener('animationend',()=>{
        checkbox.classList.add('none')
    })}
    let show = function (checkbox){ 
        checkbox.classList.remove('none')
        checkbox.classList.remove('fade')
  
    }
    let selected = function(eliment){
        let select = document.querySelector('.selected')
        select.classList.remove('selected')
        eliment.classList.add('selected')

    }
// add event to checkbox to mark elements as done 
    let checkboxes = document.querySelectorAll('.checkbox')
    
    checkboxes.forEach(checkbox =>{
        checkbox.addEventListener('click',(e) => {
            e.stopPropagation()
            e.preventDefault()
            checkbox.classList.toggle('checked')
        })
    })
//add event to the cross icon to remove elements 
    let crosses = document.querySelectorAll('.cross')

    crosses.forEach( cross => {
        cross.addEventListener('click',fade)
    })
// add window system to the app

let completed = document.getElementById('completed')
completed.addEventListener('click',()=>{
    selected(completed)
    let checkboxes = document.querySelectorAll('ul .checkbox')
    checkboxes.forEach(checkbox => {
        if(!checkbox.classList.contains('checked')){
            hide(checkbox)
        }else if(checkbox.classList.contains('checked')){
            show(checkbox)
        }
    })
})
  
let active = document.getElementById('active')
active.addEventListener('click',()=>{
    selected(active)
    let checkboxes = document.querySelectorAll('ul .checkbox')
    checkboxes.forEach(checkbox => {
        if(checkbox.classList.contains('checked')){
            hide(checkbox)
        }else if(!checkbox.classList.contains('checked')){
            show(checkbox)
        }
    })
})
let all = document.getElementById('all')
all.addEventListener('click',()=>{
    selected(all)
    let checkboxes = document.querySelectorAll('ul .checkbox')
    checkboxes.forEach(checkbox => {
        
            show(checkbox)
        
    })
})
let clear = document.getElementById('clear')
clear.addEventListener('click',()=>{
  
  
    let checkboxes = document.querySelectorAll('ul .checkbox')
    checkboxes.forEach(checkbox => {
          
        if(checkbox.classList.contains('checked')){
            
            cleared(checkbox)
        }
    })
})
//theme toggle
let theme = document.querySelector('#theme')
theme.addEventListener('click',()=>{
    
    if(theme.classList.contains('dark')){
        setTheme(THEME['light'])
        theme.classList.remove('dark')
        theme.classList.add('light')


    } else if(theme.classList.contains('light')){
        setTheme(THEME['dark'])
        theme.classList.remove('light')
        theme.classList.add('dark')


    }
})


})

