# node-typescript-starter

A basic node-typescript starter with a couple of routes and authorisation using JWT, to get new apps up and running quickly in under 60 seconds

## Setup
    $ git clone https://github.com/DanAlvares/node-typescript-starter.git
    $ cd node-typescript-starter
    $ npm i
    $ npm start

## Git
    $ rm -rf .git
    $ git remote add origin <REPO_URL.git>
    $ git push -u origin master

## MongoDB in Docker
If a local Mongo Db is needed, spin one up in Docker

    $ docker pull mongo
    $ docker run --name some-mongo -d -p 127.0.0.1:27017:27017 mongo:4.1

To run the mongo shell. Enter the docker container this _docker exec_

    $ docker exec -it some-mongo bash
    > mongo
