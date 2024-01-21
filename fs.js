const {readFileSync, writeFileSync}  = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/subfolder/text.txt','utf-8')

console.log(first, second);

writeFileSync('./content/write-file.txt',`Here is the result : ${first}, ${second}`)

//to append the data in the file
writeFileSync('./content/write-file.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'})