# sails-stylusify

Sails.js is great but it comes with ejs, less and coffeescript support.

What if you prefer stylus (and nib) instead of less. And you prefer something like handlebars instead of ejs. And while you're there you probably want to use browserify as well, which lets you use node.js style require statement on the browserside.

Sails-Stylusify is little more than making minor modification made to the generated sails.js project with handlebars as a template. Grunt tasks have been added for stylus and browserify and some other tasks have been commented out.

As a result it is an easy place to jumpstart new projects.

Things to note:
- You need to add a local.js to the config folder to get it working locally. That is a sails.js convention.
- Once you use sails lift, stylus, js and template changes can be seen without restarting the server. It can be slow sometimes though. Perhapst of how grunt works. I'm looking into it.

I don't claim to be an expert by any means so pull requests with optimisations are welcome.
