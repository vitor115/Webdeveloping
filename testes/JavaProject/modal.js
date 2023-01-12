const button = document.querySelector("#openModal");
const divInvis = button.nextElementSibling
button.addEventListener('click', removeInvis)
document.addEventListener('keydown', addInvis)


function removeInvis(){
    divInvis.classList.remove('invisible')
}


function addInvis(event){
    if(!divInvis.classList.contains("invisible")){
        if(event.code == "Escape"){
            divInvis.classList.add('invisible')
        }
    }
    
}
