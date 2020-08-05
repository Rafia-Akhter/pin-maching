var randomPinNumber = Math.floor(10000 + Math.random()* 90000);
randomPinNumber = String(randomPinNumber);
randomPinNumber = randomPinNumber.substring(0,4);
console.log(randomPinNumber);

const generatorPinBtn = document.getElementById("randomPinGeneratorBtn");
generatorPinBtn.addEventListener("click" , function(){
    const pinNumber = document.getElementById("pinNumber");
    const randomPinNumber = parseFloat(pinNumber);

    const generatorPinBtn = document.getElementById("randomPinNum").innerText;
    const currentGeneratorPinNum = parseFloat(randomPinNumber);
    const totalRandomNumber = generatorPinBtn + currentGeneratorPinBtn;
    document.getElementById("randomPinNum").innerText = totalRandomNumber;
  

})



    

