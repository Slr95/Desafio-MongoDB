const fs = require('fs').promises

async function readFile(filePath) {
    try{
    const data = await fs.readFile(filePath) //buffer tipo de dato de node. Es donde puedo trabajar con archivos
    console.log(data.toString())
    } catch(err) {
        console.error(`Error al tratar de leer el archivo ${err.message}`)
    }
}

//readFile('test.txt')

async function openFile() {
    try {
    const csvHeaders = 'nombre, cantidad, precio'
    await fs.writeFile('test.csv', csvHeaders)
    } catch(err) {
        console.error(`Error al tratar de leer el archivo ${err.message}`)
    }
}

//openFile()

async function addTestItem(name, quantity, price) {
    try {
        const csvLine = `\n${name}, ${quantity}, ${price}`
        await fs.writeFile('test.csv', csvLine, {flag: 'a'}) //el flag evita sobrescribir datos en el test.csv
    } catch(error) {
        console.error(`Error al tratar de leer el archivo ${err.message}`)
    }
}

/*
(async function() { //funcion autoejecutable
    await openFile()
    await addTestItem('papas', 10, 200)
    await addTestItem('huevos', 12, 180)
})()
*/

async function deleteFile(filePath) {
    try {
        await fs.unlink(filePath) //unlink borra un archivo
        console.log(`${filePath} borrado`)
    } catch(error) {
        console.error(`Error al tratar de eliminar el archivo ${err.message}`)
    }
}

//deleteFile('test.csv')

async function moveFile(oldPath, newPath) {
    try {
        await fs.rename(oldPath, newPath)
        console.log(`El archivo se movio ${oldPath} a ${newPath}`)
    } catch(error) {
        console.error(`Error al tratar de mover/renonmbrar el archivo ${err.message}`)
    }
}

moveFile('test.txt', 'test1.txt')