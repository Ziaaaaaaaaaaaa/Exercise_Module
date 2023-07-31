let {writeFile,readFile,appendFile} = require('fs')

writeFile('./data.txt', 'cats are my favourite', (err)=>{
    if(!err)
    console.log('successful')
    else
    console.log('error found')
})


appendFile('./data.txt', ' dogs almost killed my cats', (err)=>{
    if(!err)
    console.log('successful')
    else
    console.log('error found')
})

readFile('./data.txt', 'utf-8', (err)=>{
    if(!err)
    console.log('successful')
    else
    console.log('error found')
})
