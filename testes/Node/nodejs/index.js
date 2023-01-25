const questions =[
    "O que aprendi hoje?",
    "O que deixou aborrecido? O que poderia fazer pra melhorar?",
    "O que me deixou feliz hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n"+ questions[index]+" > ")

}

ask()
const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Boa Vitor

    Você aprendeu:
    ${answers[0]}

    O que te aborreceu foi:
    ${answers[1]}

    O que te deixa feliz:
    ${answers[2]}

    Até amanhã
    `)
})

