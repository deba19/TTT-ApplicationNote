const request=require('request')
const http=require('http')
const express=require('express')
const app = express()
const path= require('path')
const server=http.createServer(app)
const port = process.env.PORT || 3000
const publicDirectoryPath= path.join(__dirname, '../public')
app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))
app.use(express.urlencoded({extended:true}))

//Function to count frequency of each word
function createWordMap (wordsArray) 
{
    var wordsMap = {};
    wordsArray.forEach(function (key) {
      if (wordsMap.hasOwnProperty(key)) {
        wordsMap[key]++;
      } else {
        wordsMap[key] = 1;
      }
    });
    return wordsMap;
}

//Function to sort word frequencies by  desending order
function sortByCount (wordsMap) 
{
    var finalWordsArray = [];
    finalWordsArray = Object.keys(wordsMap).map(function (key) {
      return {
        name: key,
        total: wordsMap[key]
      };
    });
  
    finalWordsArray.sort(function (a, b) {
      return b.total - a.total;
    });
    return finalWordsArray;
  }

//Function to split each word
function splitByWords (text) 
{
    var wordsArray = text.split(/\s+/);
    return wordsArray;
}


//Http call to read the text file from the given URL
request.get('https://terriblytinytales.com/test.txt','utf8',(err,res,data)=>{
    if(err || res.statusCode!==200)
    {
        console.log("Give URL is invalid")
    }
    var wordsArray = splitByWords(data);
    var wordsMap = createWordMap(wordsArray);
  
    finalWordsArray = sortByCount(wordsMap)
})
let finalArray=[]
let newnum
app.get('/home',(req,res)=>{
  
   res.render('home',{
     finalArray,
     newnum
   })
   //console.log(x)
})
app.post('/home',(req,res)=>{
  //res.send(finalWordsArray)
   newnum=req.body.newnum
  
  for(var i=0;i<newnum;i++)
  {
    finalArray.push(finalWordsArray[i])
  }
  console.log(newnum)
  res.redirect('/home')
})
server.listen(port,()=>
{
    console.log('Server is up on ',port)
})