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


## My first index.js (Step 3)
In whatever method you feel comfortable, create a file in the same folder as the `package.json` file called index.js.  
You can technically call it whatever you want, but in this workshop, we will be using index.js in the commands.

Now that you have a file created, you can now add code to it.  Lets add JavaScipt's equivalent of a print statement, a 
`console.log()` statement.  You can make it say whatever you want, just add `console.log("whatever you want to say");`

After you have added that you can run the script using `node index.js`, and you should see some output in your terminal.

## require("dependency"); (Step 4)
Now that we have express properly installed and we have an index file, we can now start to use the express dependency.  
To use a dependency in Node, we need to require it.  To do this, you do what the title suggests and make a call to `require("dependencyName");`

The problem with that is that you have no way to reference it later, so you need to store it somehow. Without getting to much 
into the nitty gritty details, just about everything in JavaScript is an object.  You can think about what `require` returns 
as an object as well. So where can you store an object in JavaScript?  A variable of course.  

You can do something like: `var express = require('express');`

This will allow you to later access the dependency using the keyword `express`.

Lets test it by adding a `console.log()` state like we learned about above to log out the contents of express.
 
Something like: `console.log(express);`

Now lets run the index script using node, and we should see something along the lines of:

    
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
         acl: [Function],
         bind: [Function],
         checkout: [Function],
         connect: [Function],
         copy: [Function],
         delete: [Function],
         get: [Function],
         head: [Function],
         link: [Function],
         lock: [Function],
         'm-search': [Function],
         merge: [Function],
         mkactivity: [Function],
         mkcalendar: [Function],
         mkcol: [Function],
         move: [Function],
         notify: [Function],
         options: [Function],
         patch: [Function],
         post: [Function],
         propfind: [Function],
         proppatch: [Function],
         purge: [Function],
         put: [Function],
         rebind: [Function],
         report: [Function],
         search: [Function],
         subscribe: [Function],
         trace: [Function],
         unbind: [Function],
         unlink: [Function],
         unlock: [Function],
         unsubscribe: [Function],
         all: [Function: all],
         del: [Function],
         render: [Function: render],
         listen: [Function: listen] },
      request:
       IncomingMessage {
         header: [Function: header],
         get: [Function: header],
         accepts: [Function],
         acceptsEncodings: [Function],
         acceptsEncoding: [Function],
         acceptsCharsets: [Function],
         acceptsCharset: [Function],
         acceptsLanguages: [Function],
         acceptsLanguage: [Function],
         range: [Function: range],
         param: [Function: param],
         is: [Function: is],
         protocol: [Getter],
         secure: [Getter],
         ip: [Getter],
         ips: [Getter],
         subdomains: [Getter],
         path: [Getter],
         hostname: [Getter],
         host: [Getter],
         fresh: [Getter],
         stale: [Getter],
         xhr: [Getter] },
      response:
       ServerResponse {
         status: [Function: status],
         links: [Function],
         send: [Function: send],
         json: [Function: json],
         jsonp: [Function: jsonp],
         sendStatus: [Function: sendStatus],
         sendFile: [Function: sendFile],
         sendfile: [Function],
         download: [Function: download],
         type: [Function: contentType],
         contentType: [Function: contentType],
         format: [Function],
         attachment: [Function: attachment],
         append: [Function: append],
         header: [Function: header],
         set: [Function: header],
         get: [Function],
         clearCookie: [Function: clearCookie],
         cookie: [Function],
         location: [Function: location],
         redirect: [Function: redirect],
         vary: [Function],
         render: [Function: render] },
      Route: [Function: Route],
      Router:
       { [Function]
         param: [Function: param],
         handle: [Function: handle],
         process_params: [Function: process_params],
         use: [Function: use],
         route: [Function: route],
         acl: [Function],
         bind: [Function],
         checkout: [Function],
         connect: [Function],
         copy: [Function],
         delete: [Function],
         get: [Function],
         head: [Function],
         link: [Function],
         lock: [Function],
         'm-search': [Function],
         merge: [Function],
         mkactivity: [Function],
         mkcalendar: [Function],
         mkcol: [Function],
         move: [Function],
         notify: [Function],
         options: [Function],
         patch: [Function],
         post: [Function],
         propfind: [Function],
         proppatch: [Function],
         purge: [Function],
         put: [Function],
         rebind: [Function],
         report: [Function],
         search: [Function],
         subscribe: [Function],
         trace: [Function],
         unbind: [Function],
         unlink: [Function],
         unlock: [Function],
         unsubscribe: [Function],
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
 
## Express (Step )


## HTTP Methods  (Step )


## GET (Step )


## GET with route parameter (Step )


## POST/PUT (Step )


##Wrapping up

