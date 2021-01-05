/**
 *
 * Author: Dana Schultz
 * Date Created: 2019-04-03
 * Last Modified: 2019-04-08
 *
 */

document.addEventListener('DOMContentLoaded', load);

function hideAllErrors(){
    let errorFields = document.getElementsByClassName('error');

    for(var i = 0; i < errorFields.length; i++){
        errorFields[i].style.display = 'none';
    }

}

function validate(e){
    hideAllErrors();

    if(formHasErrors()){
        e.preventDefault();
        return false;
    }
    return true;
}

function formHasErrors(){
    let errorFlag = false;

    if(document.getElementById('fullname').value == ''){
        document.getElementById('fullname_error').style.display = 'block';

        if(!errorFlag){
            document.getElementById('fullname').focus();
        }

        errorFlag = true;
    }

    if(document.getElementById('email').value ==""){
        document.getElementById('email_error').style.display = 'block';

        if(!errorFlag){
            document.getElementById('email').focus();
        }

        errorFlag = true;
    }

    let emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(!emailRegex.test(document.getElementById('email').value) && document.getElementById('email').value != ''){
        document.getElementById('emailformat_error').style.display = 'block';

        if(!errorFlag){
            document.getElementById('email').focus();
            document.getElementById('email').select();
        }

        errorFlag = true;
    }

    if(document.getElementById('phone').value == ''){
        document.getElementById('phone_error').style.display = 'block';

        if(!errorFlag){
            document.getElementById('phone').focus();
        }

        errorFlag = true;
    }

    let phoneRegex = new RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/);
    if(!phoneRegex.test(document.getElementById('phone').value) && document.getElementById('phone').value != ''){
        document.getElementById('phoneformat_error').style.display = 'block';

        if(!errorFlag){
            document.getElementById('phone').focus();
            document.getElementById('phone').select();
        }

        errorFlag = true;
    }

    if(document.getElementById('message').value == ''){
        document.getElementById('message_error').style.display = 'block';

        if(!errorFlag){
            document.getElementById('message').focus();
        }

        errorFlag = true;
    }

    return errorFlag;
}

function clear(){
    hideAllErrors();

    let inputs = document.getElementsByTagName('input');

    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }

    document.getElementsByTagName('textarea')[0].value = '';
    inputs[0].focus();
}

function load(){
    hideAllErrors();

    document.getElementById('email').setAttribute('placeholder', 'email@example.com');
    document.getElementById('phone').setAttribute('placeholder', '204 123 4567');

    document.getElementById('submit').addEventListener('click', validate);
    document.getElementById('clear').addEventListener('click', clear);
}