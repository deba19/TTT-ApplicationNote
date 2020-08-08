# TTT-Assignment

### Required npm dependencies to be installed (If you already have Nodejs installed in your computer)
    1. npm i request
    2. npm i express
    3. npm i nodemon
    4. npm i hbs

### How to install Nodejs in Ubuntu?
    ' sudo apt-get update '
    ' sudo apt-get install nodejs '
    ' sudo apt-get install npm ' 

### How to run the project in your computer?
After installing the above dependencies, type the following command in project directory terminal:
    npm run dev
If you get the message *Server is up on 3000*, then go to your browser and search:
    **localhost:3000/home**
Because, in src/index.js, we have assigned port 3000 for this project. 

Next, you have to provide a number **N** in the input field, the application will return you first **N** words in decending orders of frequency, that are present in the file https://terriblytinytales.com/test.txt 

### Sample input and output of the project

### Project architecture 
    1. "Node" Modules Folder

    2. "sample_output" Folder containing screenshots of sample output 

    3. "src" folder (containing all server side files)
        a. "index.js" => server side application
    
    4. "views" folder (containing all client side files)
        a. "CSS" Folder
            i. home.css  => for frontend design
        b. "home.hbs" => Frontend of the project

    5. package.json

    6. package-lock.json

### Basic implementation idea of the the project
In src/index.js,
First, I have fetched the text file from the given link. Then I have splitted each words fetched from the text file by calling the function **splitByWords()** function. Then I have created a function, **createWordMap()** to count the frequency of each word. Finally we have created and called a function **sortByCount()** to sort the frequency of each words in decending order.

 After that, we have fetched the input **N** provided by the user and then we have retured first **N** words according to the frequency.
 
 We have used *Handlebars* npm dependency to render the HTML file.
