const {spawn} = require('child_process')
const { error } = require('console')

const child = spawn('findstr', ['error', './listFiles.js'])

child.stdout.on('data', data => {
    console.log(`stdout: \n${data}`)
})

child.stderr.on('data', data => {
    console.log(`stderr: \n${data}`)
})

child.on('error', error => {
    console.error(`error: \n${error.message}`)
})

child.on('close', code => {
    console.log(`El proceso secundario termino con codigo ${code}`)
})