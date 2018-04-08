# Using this
Hi, so this should work now.

To get started, clone this repo, or pull from your existing folder. Once that's done, ensure to remove the node_modules folder if it's there. We want to start fresh.

To get started run

* npm install
* webpack -p --progress --config production.webpack.config.js
* node index.js

After running those, the application should be available at localhost:8080.

# Customising this

To customise the page skeleton that exists on every page, change the html in the render method in `header.jsx`. You can pretty much do whatever you want here. 

If you want to add HTML to a single page, you can just add it to the markdown files.

# Publishing this
If you're happy with it, then you need to create your docker image to run this with. To do so run 

docker build -t <dockerhubusername>/wedding:latest .
docker push <dockerhubusername>/wedding:latest

To do the above you'll need to have signed in to dockerhub, you can do this via `docker login`

Once that's pushed, let me know, we'll go through the first publish together.

# This all sounds nutty
If this all just sucks, you may be able to get what you want out of a pre-generated builder such as those on squarespace etc, this is mainly if you want to really be able to control everything.
