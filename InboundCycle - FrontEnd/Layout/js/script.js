const sendButton = document.querySelector(".formButton");
const popUp = document.querySelector(".popup");
const contend = document.querySelector(".wrap");
const closeDiv = document.querySelector(".exit");

sendButton.onclick = function clicked(event) {

    event.preventDefault();

popUp.style.display = 'block';

}

closeDiv.onclick = (e) =>{

    e.preventDefault()

    popUp.style.display = "none";
}

