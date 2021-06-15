//post code section
let btn2 = document.querySelector('#btn2');
let form = document.getElementById('btn2-form');

//cell
let cellBtn1 = document.querySelector('#cellBtn1');
let cellBtn2 = document.querySelector('#cellBtn2');

//email
let emailBtn1 = document.querySelector('#emailBtn1');
let emailBtn2 = document.querySelector('#emailBtn2');





//post code event listener

btn2.addEventListener('click', button2);
form.addEventListener('click', form1);




//post code function

function button2() {




    var x = document.getElementById("form1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


}

let number = document.querySelector('#post');
let regex = /^[0-9]{4}$/;
let spn = document.getElementById('spn');


function form1(e) {


    if(number.value == ""){
        spn.innerText = "Enter Your Post code";
    }else if(number.value.match(regex)){
        spn.innerText ="Valid Post code";
    }else{
        spn.innerText = "inValid Post code";
    }



    e.preventDefault();
}


//cell num function

function cellHide() {

    var x = document.getElementById("cellForm");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }




}

//cell event listener
cellBtn1.addEventListener('click',cellHide);
cellBtn2.addEventListener('click',cellinfo);



let cellnumber = document.querySelector('#cellInput')
let regEx = /^\+8801[0-9]{9}$/;
let cellinform = document.querySelector('#cellInform');

function cellinfo(e) {

    if(cellnumber.value == ""){
        cellinform.innerText = "Enter your Number";
    }else if(cellnumber.value.match(regEx)){
        cellinform.innerText = "Valid Number";
    }else{
        cellinform.innerText = "inValid Number";
    }
  

    e.preventDefault();  

}



//email function

function emailHide() {

    var x = document.getElementById("emailForm");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }



}


//email event listener
emailBtn1.addEventListener('click',emailHide);
emailBtn2.addEventListener('click',emailInfo);




let email = document.getElementById('emailInput');
let regEX = /^[A-Za-z0-9\.?]+[^\.]@[A-Za-z0-9\.?]+[^\.]$/;
let emailInform = document.getElementById('emailInfo');

console.log(email);


function emailInfo(e) {


    if(email.value == ""){
        emailInform.innerText = "Enter your Email";
    }else if(email.value.match(regEX)){
        emailInform.innerText = "Valid Email address";
    }else{
        emailInform.innerText = "inValid Email Address";
    }
  
    e.preventDefault();

}