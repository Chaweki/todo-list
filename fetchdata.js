/**
 * {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}

      <li class="todo checkbox checked task" data-position="0" data-id="1" > eating food <span class="cross"><img src="images/icon-cross.svg" alt=""></span></li>

 */
const getData = async function (url){
    try{
    let response = await fetch(url)
    if(response.ok){
        let data =  await response.json()
        console.log(data)
        let ul = document.getElementById('sort1')
        data.forEach(task => {
            let li= document.createElement('li')
            li.className=`todo checkbox ${'checked'? task.completed :''} task`
            li.setAttribute('data-position',(task.id-1))
            li.setAttribute('data-id',task.id)
             
            li.innerHTML=` ${task.title}<span class="cross"><img src="images/icon-cross.svg" alt=""></span>`

            ul.appendChild(li)
        });       
        
    }else{
        console.error('retour du server:' ,response.status)
    }
    }catch(e){
        console.error('une erreur: ',e)
    }
}


