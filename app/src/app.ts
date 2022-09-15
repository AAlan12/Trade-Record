import { NegotiationController } from "./controllers/negotiation-controller.js";

const controller = new NegotiationController();
const form = document.querySelector('.form');
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
}else{
    throw Error('Unable to start the application. Check if the form exists')
}

const buttonImport = document.querySelector('#button-import');
if(buttonImport){
    buttonImport.addEventListener('click', () => {
        controller.importData();
    });
}else{
    throw Error('Import button not found')
}
