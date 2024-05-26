console.log("Devtools added")
function totalPrice() {
    let fistSpanPrice=document.getElementById('spanId1').innerText;
    let secondSpanPrice=document.getElementById('spanId2').innerText;

        let firstPrice=parseInt(fistSpanPrice);
        let secondPrice=parseInt(secondSpanPrice);
        let SubtotalPrice=firstPrice+secondPrice;
       let taxPrice=SubtotalPrice/10;
       let totalPrice=SubtotalPrice+taxPrice;

     document.getElementById('subTotal').innerText=SubtotalPrice;
     document.getElementById('tax').innerText=taxPrice;
     document.getElementById('total').innerText=totalPrice;
    console.log("Span Updte price:",totalPrice);
}


function plusClick(spanId,valueId,price) {
   let val= valueId.value++;
    val=parseInt(val)+1; 
   //document.getElementById('valueF').innerText=val;
  spanId.innerText=val*price;
  totalPrice();
 

}
function minusClicked(spanId,valueId,price) {

    let val=valueId.value--;
    
        val=parseInt(val)-1;
        let m=spanId.innerText;
    let integer=parseInt(m);
    spanId.innerText=integer-price;
    totalPrice();
  
    
    
}
function removeBtnClicked(id) {
   id.remove();
  
}


