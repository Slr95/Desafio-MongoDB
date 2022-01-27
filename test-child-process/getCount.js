const slowFunction = () => {
    let count = 0
    while (count < 10000000000){
    count ++
    }
    return count
}

process.on('message', message => {
    if(message == 'START') {
        console.log('El proceso secundario recibio el mensaje START')
        let result = slowFunction()
        let message = `{"Total count" : ${result}}`
        process.send(message)
    }
    if(message == 'OSOOO') {
        console.log('El proceso secundario recibio el mensaje OSOOO')
        let message = `{"Total count" : 0}`
        process.send(message)
    }
})

