const prompt = require("prompt-sync")();
function factorialOfANumber(num){

    if(num == 0)
    {
        return 1;
    }

    else
    {
        return num*factorialOfANumber(num-1);
    }
}

const result = factorialOfANumber(6);

console.log(`Factorial of a number - ${result}`)

const num = prompt('Enter a Positive Value - ');

if(num>=0)
{
    const res = factorialOfANumber(num)
    console.log(res);

}
else
{
    console.log('Enter a valid number')
}