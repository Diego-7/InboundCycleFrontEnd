const sendButton = document.querySelector(".formButton");
const formCamp = document.querySelector(".form-camp")
const popUp = document.querySelector(".popup");
const emptySpace = document.querySelector(".empty-space");
const closeDiv = document.querySelector(".close-button");
const closeDiv1 = document.querySelector(".close-button1");
const checkBox = document.querySelector(".check-box");

//CALL FUNCTIONS
buttonClick();
closePopup();
closePopupError();

//FUNCTION CLICK FORM BUTTON

function buttonClick(){

sendButton.onclick = function clicked(event) {

    event.preventDefault();

    if(formCamp.value == '' || checkBox.checked == false){
        emptySpace.style.display = 'block';
        return;
    }

    else{

popUp.style.display = 'block';

}
}
}

//FUNCTION CLOSE POPUP
function closePopup(){

closeDiv.onclick = (e) =>{

    e.preventDefault()

    popUp.style.display = "none";
}
}

//FUNCTION ERROR POPUP CLOSE
function closePopupError(){

    closeDiv1.onclick = () => {
    
        emptySpace.style.display = 'none';
        return;
    }
    }


