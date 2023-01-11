let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for(let x =0; x< weeklyExpenseQuestions.length; x++)
{
let stringAnswer= window.prompt(weeklyExpenseQuestions[x])
let numberAnswer = parseFloat(stringAnswer)
console.log(numberAnswer)
weeklyExpenses = weeklyExpenses + numberAnswer
}
let m = monthlyExpenseQuestions.length
while( m>0)
{
    m--
let stringAnswer= window.prompt(monthlyExpenseQuestions[m])
let numberAnswer = parseFloat(stringAnswer)
console.log(numberAnswer)
monthlyExpenses = monthlyExpenses + numberAnswer
}
for(let a =0; a< annualExpenseQuestions.length; a++)
{
let stringAnswer= window.prompt(annualExpenseQuestions[a])
let numberAnswer = parseFloat(stringAnswer)
console.log(numberAnswer)
annualExpenses = annualExpenses + numberAnswer
}

