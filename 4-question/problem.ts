//create a functions and develop a calculator application by using of a typescript and add,mul,div,sub
import * as readline from 'readline';

function add(firstNumber:number,secondNumber:number):number{
    return firstNumber+secondNumber;
}

function sub(firstNumber:number,secondNumber:number):number{
    return firstNumber-secondNumber;
}

function mul(firstNumber:number,secondNumber:number):number{
    return firstNumber*secondNumber;
}

function div(firstNumber:number,secondNumber:number):number{
    return firstNumber/secondNumber;
}

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function Calculator(){
    console.log('\nEnter which operation you want to do \n 1.Addition \n 2.Subtraction \n 3.Multiplication \n 4.Division');
    r1.question("Choose an option",(option)=>{
        if(option=='5'){
            console.log("Exiting");
            r1.close();
            return;
        }

        r1.question("Enter the first number",(firstInput)=>{
            const firstNumber=parseFloat(firstInput);
            r1.question("Enter the second number",(secondInput)=>{
                const secondNumber=parseFloat(secondInput);

                let result:number;
                try{
                    switch(option){
                        case '1':
                            result=add(firstNumber,secondNumber);
                            console.log(`${firstNumber} + ${secondNumber} = ${result}`);
                            break;
                        case '2':
                            result=sub(firstNumber,secondNumber);
                            console.log(`${firstNumber} - ${secondNumber} = ${result}`);
                            break;    
                        case '3':
                            result=mul(firstNumber,secondNumber);
                            console.log(`${firstNumber} * ${secondNumber} = ${result}`);
                            break;    
                        case '4':
                            result=div(firstNumber,secondNumber);
                            console.log(`${firstNumber} / ${secondNumber} = ${result}`);
                            break;  
                        default:
                            console.log("Invalid option try inputting once again");
                            break;      
                   } 
                }catch (error) {
                    console.error('Error');
                }
                // Continue to the next calculation
                Calculator();
            });
        });
    });
}
Calculator();
