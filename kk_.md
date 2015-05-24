# node-js-getting-started
[kklee0709/node-js-getting-started](https://github.com/kklee0709/node-js-getting-started) forked from heroku/node-js-getting-started

## Running Locally
```
$ foreman start web
OR
node index_kk_.js
```
```
- http://localhost:5000/
- http://localhost:5000/more
```

## Running heroku app
- https://node-js-getting-started-kk-0.herokuapp.com
- https://node-js-getting-started-kk.herokuapp.com
- https://node-js-getting-started-kk.herokuapp.com/more


## Push to GitHub
$ git add .
$ git commit -m "version 0.1"
$ git push origin master

## push/Deploy to Heroku
For more information about using Node.js on Heroku,
- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [https://devcenter.heroku.com/articles/getting-started-with-nodejs#push-local-changes](https://devcenter.heroku.com/articles/getting-started-with-nodejs#push-local-changes).

```
$ heroku login
$ heroku create
$ git add .
$ git commit -m "Demo"
$ git push heroku master
$ heroku open
$ heroku apps:rename <newname>
```

## Creating/Renaming Apps from the CLI
- https://devcenter.heroku.com/articles/creating-apps
- https://devcenter.heroku.com/articles/renaming-apps
```
$ heroku apps:rename <newname>

$ heroku config
$ heroku config:set TIMES=2
$ heroku addons
$ heroku releases
$ heroku logs
```

## View logs
https://devcenter.heroku.com/articles/getting-started-with-nodejs#view-logs
```
$ heroku logs --tail
```

## Scale the app
https://devcenter.heroku.com/articles/getting-started-with-nodejs#scale-the-app
```
$ heroku ps
```

## Start a console
https://devcenter.heroku.com/articles/getting-started-with-nodejs#start-a-console
```
$ heroku run node
$ heroku run bash
```

-----------------------
Now start your application locally using Foreman, which was installed as part of the Toolbelt: Just like Heroku, Foreman examines the Procfile to determine what to run.

Your app will now be running at localhost:5000. Test that it’s working with curl or a web browser, then Ctrl-C to exit.
```
$ foreman start web
```
-----------------------
Now deploy. Almost every deploy to Heroku follows this same pattern. First, add the modified files to the local git repository:
```
$ git add .
```
Now commit the changes to the repository:

$ git commit -m "Demo"

Now deploy, just as you did previously:

$ git push heroku master

Finally, check that everything is working:

$ heroku open
-----------------------
