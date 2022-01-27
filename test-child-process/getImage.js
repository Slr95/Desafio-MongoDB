const {execFile} = require('child_process')

//variables globales en node empieza con dos guiones bajos

execFile(__dirname + '/file.bat', (error, stdout, stderr) => {
    if(error) {
        console.error(`error: \n${error.message}`)
        return
    }
    if(stderr) {
        console.error(`stderr: \n${stderr}`)
        return
    }
    console.log(`stdout: \n${stdout}`)
})