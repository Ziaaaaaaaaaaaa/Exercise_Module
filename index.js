let {writeFile,readFile,appendFile} = require('fs')

writeFile('./data.txt', 'cats are my favourite', (err,data)=>{
    if(!err)
    console.log(data);
})


appendFile('./data.txt', ' dogs almost killed my cats', (err,data)=>{
    if(!err)
    console.log(data);
})

readFile('./data.txt', 'utf-8', (err,data)=>{
    if(!err)
    console.log(data);
})

