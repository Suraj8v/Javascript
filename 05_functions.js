function summ()
{
    return sum(23,55)
}

function sum(a,b)
{
    console.log("in sum")
     displayResult(a+b)
}

function displayResult(data)
{
    console.log("The sum is : "+data)
}


setTimeout(summ,10000);