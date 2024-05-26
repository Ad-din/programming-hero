document.getElementById('submit-btn').addEventListener('click',function () {
    const emailFeild=document.getElementById('email');

    const useremail=emailFeild.value;
    const passField=document.getElementById('password');
    const userpass=passField.value;
    if(useremail== 'abdul@gmail.com' && userpass=='abdul008'){
        window.location.href='bank.html';
    }
    else{alert('Wrong user!');}
    
})