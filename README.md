# TTT-ApplicationNote

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
    ' npm run dev '
If you get the message "Server is up on 3000", then go to your browser and search:
    **localhost:3000/home**

### Project architecture 
    1. "Node" Modules Folder

    2. "src" folder (containing all server side files)
        a. "index.js" => server side application
    
    3. "views" folder (containing all client side files)
        a. "CSS" Folder
            i. home.css  => for frontend design
        b. "home.hbs" => Frontend of the project
    4. package.json
    5. package-lock.json
