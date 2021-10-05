const fs = require('fs');
const path = require('path')


const logsFolder = path.join(__dirname, './logs')

const deleteLogs = (logsFolder => {

    if(fs.existsSync(logsFolder)){
        fs.readdir(dir.cwd(), (_err, files) =>{
            files.forEach((file) =>{
                fs.unlink(file,(_err) =>{
                    if (_err)
                    {
                        console.log('Error Deleting Files')
                    }
                    else
                    {
                        console.log('Proceeding to delete files...log${i}')
                    }
                })
            })
        } )
    }
})

deleteLogs();
const createLogs = () =>{

    const logsFolder = './logs';

    if (fs.existsSync(logsFolder)) {
        fs.mkdirSync(logsFolder)      
    }

    process.createddir();
    for(let i = 0; i <= 10; i++)
    {
        fs.writeFile(path.join(logsFolder),
        'log${i}.txt','File: ${i}',(err) =>{
            if(err)
            {
                console.log("Error Creating Files")
            }
            else
            {
                console.log("Creating Files...log${i}")
            }
        })
    }

}
createLogs();
