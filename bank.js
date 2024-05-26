
//deposit function

document.getElementById('dep-btn').addEventListener('click',function () {
    
    const depFeild=document.getElementById('dep-input');
    const newVal= depFeild.value;
    if (newVal.value=='') {
        console.log('Enter an amount');
    }
    else{
        const preValue=document.getElementById('dep-bal').innerText;
        const curVal=parseFloat(preValue) + parseFloat(newVal);
        document.getElementById('dep-bal').innerText=curVal;
        depFeild.value='';
    }
    
})

//Withdraw-fucntion
document.getElementById('with-btn').addEventListener('click',function () {
    let withAmount=document.getElementById('with-inp').value;
    const wiAm=parseFloat(withAmount);
    const toRemAm=document.getElementById('total-bal').innerText;
    const totalAmount=parseFloat(toRemAm);
    console.log(totalAmount);
    if(totalAmount==0 || totalAmount<wiAm){
        console.log('Balance empoty');
    }
    else{
        const RemAmount=totalAmount-wiAm;
        document.getElementById('total-bal').innerText=RemAmount;
        withAmount='';
        console.log(`${wiAm}$ was withdrawn`);
    }
})



