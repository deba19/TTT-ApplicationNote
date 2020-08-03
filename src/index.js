const request=require('request')
const http=require('http')
const express=require('express')
const app = express()
const path= require('path')
const server=http.createServer(app)
const port = process.env.PORT || 3000
const publicDirectoryPath= path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

//Http call to read the text file from the given URL
request.get('https://terriblytinytales.com/test.txt','utf8',(err,res,data)=>{
    if(err || res.statusCode!==200)
    {
        console.log("Give URL is invalid")
    }
    data=data
    
    //console.log(data)
})

server.listen(port,()=>
{
    console.log('Server is up on ',port)
})