window.addEventListener("DOMContentLoaded",()=>{
    let checkboxes = document.querySelectorAll('.checkbox')
    
    checkboxes.forEach(checkbox =>{
        checkbox.addEventListener('click',(e) => {
           e.stopPropagation()
            e.preventDefault()
            checkbox.classList.toggle('checked')
        })
    })

    let crosses = document.querySelectorAll('.cross')

    crosses.forEach( cross => {
        cross.addEventListener('click',(e) => {
            e.preventDefault() 
            e.stopPropagation()       
            this.classList.add('fade')
            
        })
    })

    let fades= document.querySelectorAll('.fade')
    fades.forEach(fade => {
        fade.addEventListener('animationend',()=>{
            this.classList.add('none')
        })
    })





})

