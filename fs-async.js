const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
    }
    const first = result
    readFile('./content/subfolder/text.txt', 'utf8',(err,result) =>{
        if (err){
            consolr.log(err)
        }
        const second = result
        writeFile('./content/result-async.txt',`Here is the data of async file ${first} and ${second}`, 
        (err, result)=>{
            if (err){
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
})