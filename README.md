# Node.js Workshop

## Purpose

The purpose of this workshop is to teach those who are new to Node.js how to get up and running with their
very own Node.js application.  You will learn now to initialize a Node project, how to utilize npm(Node package manager) 
to add dependencies to your project, and how to build your very first API.  By the end of this workshop you will have an 
API that you can access from a web browser or http client to provide a friendly birthday wish.  You will also hopefully have a better 
understanding of APIs and how they work on a more general level.
 
## Notes
- This project has numbered branches that you can checkout if you get lost along the way, the number will correspond to the
 step that it is next to the title in this README, so if have problems with step 1, you could do: ``git stash`` and then ``git checkout 1`` 
 
- In between steps, when you need to kill the process, you can do so using `Ctrl + C` 
 
- For Windows users, installing Node/NPM may not put the commands in your path, so you may need to run them like so: `c:\Program Files\nodejs\npm.cmd <command to run>`

## Install Node.js and NPM

To initialize the project you first need to have Node.js and NPM installed on your system, you can get node here: 
https://nodejs.org/en/download/

## Initialize the project (Step 1)

Once that is done you first need to initialize the project.  When you initialize the project, it will create a file named: 
``package.json``.  This file allows you to define your project and provide it with a name, description, a version number, etc.
It also allows you to add and track dependencies for your project so that if someone else wants to pull and build your project
it is easy for them to install of the dependencies that your project requires by simply running: ``npm install`` 

To start your own project, just run ``npm init`` in the commandline and walk through the steps that appear on screen:
 
[Example](./npmInit.png)

After that you take a look at your `package.json` file to see what it is all about.

## Works on my machine (Step 2)

Now lets install our first dependency and see what happens.  As we said in the previous step the ``package.json`` file is
used to track dependencies.  So lets go ahead and install Express a dependency that we will need to create our first API.
To install a dependency, you simply run ``npm install <dependency>``, so in our case we want to run ``npm install express``

So by installing a dependency, it should now be in your ``package.json`` file, right?  Nope, this is a standard 'gotcha' moment
with npm. You are now in the classic "works on my machine" situation. Go ahead and look at the `package.json` file again, 
it should look exactly the same as before.  This command can be useful when you want to evaluate a package before adding it
to your project, but we want it to work on everyone's machine, so that's no good.
 
To make sure that it works on everyone's machine, you need 
to explicitly tell npm that you want to save the dependency into your ``package.json`` file.  To do this, you can run:
``npm install express --save``

Now go ahead and open the `package.json` file again.  You should now notice that you have a dependencies section that 
looks something like:
    
    "dependencies": {
        "express": "^4.15.3"
    }


## My first index.js (Step 3)

In whatever method you feel comfortable, create a file in the same folder as the `package.json` file called index.js.  
You can technically call it whatever you want, but in this workshop, we will be using `index.js` in the commands.

Now that you have a file created, you can now add code to it.  Lets add JavaScript's equivalent of a print statement, a 
`console.log()` statement.  You can make it say whatever you want, just add `console.log('whatever you want to say');`

After you have added that you can run the script using `node index.js`, and you should see some output in your terminal.

## require("dependency"); (Step 4)

Now that we have express properly installed and we have an index file, we can now start to use the express dependency.  
To use a dependency in Node, we need to require it.  To do this, you do what the title suggests and make a call to `require("dependencyName");`

The problem with that is that you have no way to reference it later, so you need to store it somehow.  You can think 
about what `require` returns as an object as well. So where can you store an object in JavaScript?  A variable of course.  

You can do something like: `var express = require('express');`

This will allow you to later access the dependency using the keyword `express`.

Lets test it by adding a `console.log()` statement like we learned about above to log out the contents of express.
 
Something like: `console.log(express);` at the end of the file.

Now lets run the index script using: `node index.js`, and we should see something along the lines of:

    
    { [Function: createApplication]
      application:
       { init: [Function: init],
         defaultConfiguration: [Function: defaultConfiguration],
         lazyrouter: [Function: lazyrouter],
         handle: [Function: handle],
         use: [Function: use],
         route: [Function: route],
         engine: [Function: engine],
         param: [Function: param],
         set: [Function: set],
         path: [Function: path],
         enabled: [Function: enabled],
         disabled: [Function: disabled],
         enable: [Function: enable],
         disable: [Function: disable],
         
         ............................
         ........ Shortened .........
         ............................
         
         all: [Function] },
      query: [Function: query],
      static:
       { [Function: serveStatic]
         mime:
          Mime {
            types: [Object],
            extensions: [Object],
            default_type: 'application/octet-stream',
            Mime: [Function: Mime],
            charsets: [Object] } } }

If you are not seeing that, something went wrong with the importing of the dependency.
 
## Express (Step 5)

Since we now have a functioning copy of express imported, we can begin to use it.  When you `require` express, what you are
actually bringing in, is a function that returns an application. We can use that function to create and store and application
that we can begin to configure now.  

We can call and store the function like so: `var app = express();`

All that is left to do is configure it.  There is really only one piece of configuration that we need to do now, and that is
to tell it to listen for HTTP requests on a particular port.  In this example, we will us port 8000.

    app.listen(8000, function() {
        console.log("Listening on port 8000!");
    });

What this is doing is calling the listen function that is a part of the app object, and then passing it the port number 
8000 to listen on.  The second argument being passed in to the listen function, is what is called a 'callback' function. 
This is a  function that he listen function will invoke when it is done executing. 

If we run the script again, like previously (`node index.js`), we should see that this time, the script does not exit and 
we see that the content in our `console.log` was logged to the console, so we know the listen function executed.  
There is now an express server listening for requests on port 8000.  So now lets try accessing the server from a web browser.
Open your browser of choice and navigate to `localhost:8000`.  You should see an error along the lines of 'Cannot GET /', 
we will change that in the next couple steps.

## HTTP Methods

Before we go on to continue setting up our API, it is important to stop and talk about different kinds of HTTP requests
called HTTP Methods.  All of you use all of these on a daily basis whether you realize it our not.  We are not going to cover
all of them, but just the 2 of the most commonly used.
 
GET - this is probably one of the most commonly use HTTP methods there is. Every time you navigate to a web page, you are 
making at least one GET request to a web server asking for the resources you need to view that page.  Any information that
you need to transfer as part of a GET request is either done as part of the URL or as a request header(we will not get into these today).

POST - A post request is also very commonly used.  Every time you login to a page or submit a form, that is probably a 
post request.  They send information through the use of a 'body'.  The body could be xml, json, text, etc.

You can create an 'endpoint' for either of these methods in Express.

## GET (Step 6)

To add a GET method on the app, we need to modify our `index.js` file, and tell our application that we want to create 
an endpoint of type get.  We need to do this before we tell the application to start listening.  So above the listen 
statement we can add the following:
    
    app.get('/', function(request, response) {
        response.send('Hello, world!');  
    });
    
This looks pretty similar to the listen statement, so we should feel comfortable with this.  What we are doing is telling 
the application that we want to create a GET endpoint on '/', or the root level.  The second argument, the callback function, 
can be considered a handler for every HTTP request we send to that endpoint. So every time a GET request is sent to 
`localhost:8000`, that function will be invoked.  You will notice that this time the callback has arguments, that is because
every time we hit that endpoint, express is passing the incoming request object in, as well as the response object that we will 
use to respond to the request.  When we call `response.send('Hello, world!');` we are sending the text 'Hello, world!' as a 
response.  Now we can try it out, by running the script again and navigating to `localhost:8000` in our browser.

## GET with route parameter (Step 7)

As we talked about earlier, if there is ever any information that we need to send as part of a GET request, we send it as 
a part of the URL.  In this section, we will use this to wish some of the helpers today a happy birthday.  So we will do something
very similar to the previous section:
        
    app.get('/happy-birthday', function(request, response) {
        response.send('Happy Birthday Ricky!');  
    });

This is nothing new, and it only works to wish Ricky a happy birthday, so lets jazz it up.   

    app.get('/happy-birthday/:name', function(request, response) {
        response.send('Happy Birthday ' + request.params.name + '!');  
    });
    
We can make a minor modification to the endpoint name and add a `:name` to the end.  This tells Express to treat everything in the URL 
after `/happy-birthday/` as the variable name.  We can then access that name by using the `name` property on the `request.params`
object.  

Now we can navigate to `localhost:8000/happy-birthday/Justin` and wish Justin happy birthday.
Also, lets not forget to navigate to `localhost:8000/happy-birthday/Evan` and wish Evan happy birthday as well.

## POST (Step 8)

Now that we have played around with GET requests, it is time to give POST a shot.  To support parsing the bodies of the 
incoming POST requests, we need to add another dependency called body-parser.  

We can run: `npm install body-parser --save`

Then we can add a couple statement below our instantiation of the `app` variable.
 
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    
What these lines do is `require` the body-parser package and set up what is called middleware.  This particular piece of 
middleware will run before every request.  The body-parser will translate the request body into a format that express can understand.  Once we have those lines added, we can add a POST endpoint that
should look very familiar:
    
    app.post('/addTwoNumbers', function(request, response) {
        var c = request.body.a + request.body.b;
        response.send("a + b = " + c);  
    });

This endpoint is expecting a body with two parameters called `a` and `b`.

So now we can fire up Postman, and set it to use a POST request, and point it towards `localhost:8000/addTwoNumbers`.
When we set up the middleware, we told it that we wanted our body parser to parse the body as JSON, so we can set the body type
to 'application/json' and provide the following body:
      
    {
    	"a": 1,
    	"b": 1
    }

We should get a response with our numbers being added together.

[Example Postman Request](./postman.png)


## Status Codes (Step 9)

Every time an endpoint is accessed, it sends a status code.  Probably a couple of the better known examples of these are 
404 not found or 500 internal server error. 

The status codes conform to the convention:

- 1XX - Informational responses 
- 2XX - Success
- 3XX - Redirection
- 4XX - Client error
- 5XX - Server error
    
When you don't provide a status code, express sends a status of 200 by default which means that the request was successful.
Suppose we want to provide a different status code, we can do something like: 

    app.post('/addTwoNumbers', function(request, response) {
        var c = request.body.a + request.body.b;
        response.send(500, "a + b = " + c);  
    });

Now if we restart the script and hit the endpoint again using Postman, you should see a status code of 500 Internal Server Error


## The End