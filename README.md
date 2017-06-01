#Node.js Workshop

##Purpose
The purpose of this workshop is to teach those who are new to Node.js how to get up and running with their
very own Node.js application.  You will learn now to initialize a Node project, how to utilize npm(Node package manager) 
to add dependencies to your project, and how to build your very first API.  By the end of this workshop you will have an 
API that you can access from a web browser to provide a friendly greeting.  You will also hopefully have a better 
understanding of APIs and how they work on a more general level.
 
 
This project has numbered branches that you can checkout if you get lost along the way, the number will correspond to the
 step that it is next to in this README, so if have problems with step 15, you could do:  ``git checkout 15`` 
 
##Install Node.js and NPM

To initialize the project you first need to have Node.js and NPM installed on your system, you can get node here: 
https://nodejs.org/en/download/

## Initialize the project (Branch 1)

Once that is done you first need to initialize the project.  When you initialize the project, it will create a file named: 
``package.json``.  This file allows you to define your project and provide it with a name, description, a version number, etc.
It also allows you to add and track dependencies for your project so that if someone else wants to pull and build your project
it is easy for them to install of the dependencies that your project requires by simply running: ``npm install`` 

To start your own project, just run ``npm init`` in the commandline and walk through the steps that appear on screen:
 
[Example](./npmInit.png)

After that you take a look at your `package.json` file to see what it is all about.

## Works on my machine (Branch 2)
Now lets install our first dependency and see what happens.  As we said in the previous step the ``package.json`` file is
used to track dependencies.  So lets go ahead and install Expressm a dependency that we will need to create our first API.
To install a dependency, you simply run ``npm install <dependency>``, so in our case we want to run ``npm install express``

So by installing a dependency, it should now be in your ``package.json`` file, right?  Nope, this is a 'gotcha' moment
with npm. You are now in the classic "works on my machine" situation. Go ahead and look at the `package.json` file again, 
it should look exactly the same as before.  That's no good.
 
To make sure that it works on everyone's machine, you need 
to explicitly tell npm that you want to save the dependency into your ``package.json`` file.  To do this, you can run:
``npm install express --save``

Now go ahead and open the `package.json` file again.  You should now notice that you have a dependencies section that 
looks something like:
    
    "dependencies": {
        "express": "^4.15.3"
    }


## My first index.js (Branch 3)


## require("dependency"); (Branch 4)


## Express (Branch 7)


## HTTP Methods  (Branch 8)


## GET (Branch 9)


## GET with route parameter (Branch 10)


## POST/PUT (Branch 9)


##Wrapping up

