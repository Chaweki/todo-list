//const { default: interact } = require("interactjs")
class Sortable {
    constructor(element){
        this.element=element
       
        this.items = this.element.querySelectorAll(this.element.dataset.sortable)
        this.item_height=this.items[0].offsetHeight
        this.item_width=this.items[0].offsetWidth
        this.element.style.height =( this.item_height * this.items.length) + 'px'
        this.items.forEach(el => {
            el.style.position = 'absolute'
            el.style.top = '0px'
            let pos = el.dataset.position
            this.moveItem(el,pos)

        });
        //this.interact = this.interact.bind(this)
        this.interact()
    }
    moveItem(el,p){
        let y = this.item_height * (p)
        el.style.transform = `translate3D(0,${y}px,0)`
       
        el.dataset.position = p
       
    }
    interact() {
    interact(this.element.dataset.sortable,{
    context:this.element
}).draggable({
    inertia: false,
    manualStart:false,
   

    onmove:(e) => {
        this.move(e)

    }
}).on('dragstart',(e)=>{
    e.target.classList.add('is-dragged')
    e.target.addEventListener('click',check)
    this.startPosition = e.target.dataset.position
    
}).on('dragend',(e)=>{
    e.target.classList.remove('is-dragged')
    this.addClick(e.target)
    this.moveItem(e.target,e.target.dataset.position)
})
}
move(e){
   
    let yIntial= this.item_height * (this.startPosition)
    let y= yIntial + e.clientY - e.clientY0 
    e.target.style.transform = `translate3D(0,${y}px,0)`
    let oldPosition = e.target.dataset.position
    let newPosition= this.guesPossition(y)
    if(oldPosition != newPosition){
        this.swap(oldPosition,newPosition)
        e.target.dataset.position=newPosition
    }
}

guesPossition(y) {
    let row = Math.floor(y/ this.item_height)
    if(row < 0 ){
        row = 0
    }
    if(row >= this.items.length){
        row= this.items.length-1
    }
    return row
}
swap(start,end){
    this.items.forEach(item => {
        if(!item.classList.contains('is-dragged')){
            let position = parseInt(item.dataset.position,10)
            
            if(position >= end && position < start && end < start){
           
                this.moveItem(item,position+1)
    
            }else if(position <= end && position > start && end > start){
                this.moveItem(item,position-1)
                


            }
        }


    });

}
addClick(eliment){
    setTimeout(()=>{
        eliment.addEventListener('click',check)

    },1000)
}


}

