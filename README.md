# TTT-Assignment

### Required npm dependencies to be installed in local computer (If you already have Nodejs installed in your computer)
    1. npm i request
    2. npm i express
    3. npm i nodemon
    4. npm i hbs

### How to install Nodejs in Ubuntu?
    ' sudo apt-get update '
    ' sudo apt-get install nodejs '
    ' sudo apt-get install npm ' 

### How to run the project in your local computer?
After installing the above dependencies, type the following command in project directory terminal:
    npm run dev
If you get the message *Server is up on 3000*, then go to your browser and search:
    **localhost:3000/home**
Because, in src/index.js, we have assigned port 3000 for this project. 

Next, you have to provide a number **N** in the input field, the application will return you first **N** words in decending orders of frequency, that are present in the file https://terriblytinytales.com/test.txt 


### Where to find live website?
This website is deployed on AWS. One can find and check working of the website by visiting this link:
    ''

### Sample input and output of the project

    1. When value of **N** is 0
    !(./sample_output/zero.png)
    2. When value of **N** is greater than 0
    !(./sample_output/big.png)

### Project architecture 
    1. "Node" Modules Folder

    2. "sample_output" Folder containing screenshots of sample output 

    3. "src" folder (containing all server side files)
        a. "index.js" => server side application
    
    4. "views" folder (containing all client side files)
        a. "CSS" Folder
            i. home.css  => for frontend design
        b. "home.hbs" => Frontend of the project

    5. Dockerfile

    6. package.json

    7. package-lock.json

### Project deployment on AWS
This project is deployed on AWS. I have pulled a node image from Dockerhub, then created a dockerhub using that. Dockerfile that is used there, is present in the project folder.
A Docker container is always running on AWS EC2 instance.


### Basic implementation idea of the the project
In src/index.js,
First, I have fetched the text file from the given link. Then I have splitted each words fetched from the text file by calling the function **splitByWords()** function. Then I have created a function, **createWordMap()** to count the frequency of each word. Finally we have created and called a function **sortByCount()** to sort the frequency of each words in decending order.

 After that, we have fetched the input **N** provided by the user and then we have retured first **N** words according to the frequency.

 We have used *Handlebars* npm dependency to render the HTML file.
