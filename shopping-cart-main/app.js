/* document.getElementById("case-plus").addEventListener('click',function(){
    //console.log('case-plus')
    const caseInput = document.getElementById('case-number');
    //console.log('10')
    const caseNumber = caseInput.value;
   // console.log("number");
   caseInput.value = parseInt(caseNumber)  + 1 ;
   //console.log(10);
})
document.getElementById("case-minus").addEventListener('click',function(){
    //console.log('case-plus')
    const caseInput = document.getElementById('case-number');
    //console.log('10')
    const caseNumber = caseInput.value;
   // console.log("number");
   caseInput.value = parseInt(caseNumber) - 1 ;
   //console.log(10);

})
document.getElementById("phone-plus").addEventListener('click',function(){
    //console.log('case-plus')
    const caseInput = document.getElementById('phone-number');
    //console.log('10')
    const caseNumber = caseInput.value;
   // console.log("number");
   caseInput.value = parseInt(caseNumber) + 1 ;
   //console.log(10);

})

document.getElementById('phone-minus').addEventListener('click',function(){
    const phoneInput = document.getElementById('phone-number');
    //console.log("tomi");
    const phoneNumbers = phoneInput.value; 
   // console.log("kaka")
    phoneInput.value = parseInt(phoneNumbers) - 1;
}) */
 
                    //SHORTCUT

//case shortcut
function updatescaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;//
  if(isIncreasing){
    caseNumber = parseInt(caseNumber)  + 1 ;//
  }

  else if(caseNumber >0){
    caseNumber = parseInt(caseNumber) - 1 ;//
  }
  caseInput.value = caseNumber;//
  const caseTotal = document.getElementById('case-total');//
  caseTotal.innerText = caseNumber * 59 ;//
}
//casepluse
document.getElementById("case-plus").addEventListener('click',function(){
   updatescaseNumber(true);
})
//caseminus
document.getElementById("case-minus").addEventListener('click',function(){
   updatescaseNumber(false);
})




//phone shortcut
function updatesPhoneNumber(isIncreasing){
   const phoneInput = document.getElementById('phone-number');
   let phoneNumbers = phoneInput.value; 

   if(isIncreasing){
    phoneNumbers = parseInt(phoneNumbers) + 1;  
   }
  else if(phoneNumbers > 0){
    phoneNumbers = parseInt(phoneNumbers) - 1;
  }
  phoneInput.value = phoneNumbers;
  const phoneTotal = document.getElementById('phone-total');//
  phoneTotal.innerText = phoneNumbers * 1219 ;//
  
}

document.getElementById("phone-plus").addEventListener('click',function(){
    updatesPhoneNumber(true)
})

document.getElementById('phone-minus').addEventListener('click',function(){
    updatesPhoneNumber(false)
})