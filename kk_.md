## https://github.com/heroku/node-js-getting-started

# Running Locally
foreman start web OR node index_kk_.js
http://localhost:5000/

# Deploy the app
# https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app
$ heroku create
$ git push heroku master
$ heroku open

# View logs
# https://devcenter.heroku.com/articles/getting-started-with-nodejs#view-logs
$ heroku logs --tail

# Scale the app
# https://devcenter.heroku.com/articles/getting-started-with-nodejs#scale-the-app
$ heroku ps

# Push local changes, Deploying to Heroku
# https://devcenter.heroku.com/articles/getting-started-with-nodejs#push-local-changes
heroku login
git add .
git commit -m "Demo"
git push heroku master
heroku open

# Start a console
# https://devcenter.heroku.com/articles/getting-started-with-nodejs#start-a-console
heroku run node
heroku run bash

heroku open
https://node-test-kk-.herokuapp.com/
https://node-test-kk-.herokuapp.com/more


# Creating Apps from the CLI
# https://devcenter.heroku.com/articles/creating-apps
# Renaming Apps from the CLI
# https://devcenter.heroku.com/articles/renaming-apps
heroku apps:rename newname
heroku apps:rename node-test-kk-

heroku config
heroku config:set TIMES=2
heroku addons
heroku releases
heroku logs



-----------------------
Now start your application locally using Foreman, which was installed as part of the Toolbelt: Just like Heroku, Foreman examines the Procfile to determine what to run.

Your app will now be running at localhost:5000. Test that it’s working with curl or a web browser, then Ctrl-C to exit.

$ foreman start web
-----------------------
Now deploy. Almost every deploy to Heroku follows this same pattern. First, add the modified files to the local git repository:

$ git add .

Now commit the changes to the repository:

$ git commit -m "Demo"

Now deploy, just as you did previously:

$ git push heroku master

Finally, check that everything is working:

$ heroku open
-----------------------
