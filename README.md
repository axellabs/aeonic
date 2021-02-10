# aeonic

## description
A personal notes app, based on markdown syntax and files.
This app is a refactor/reimagining of the previous sidequests repo, and meant to be a more versatile piece of software.

## development database
Using Docker and CouchDB:
`docker run -d --name databasename -p 0000 -e COUCHDB_USER=username -e COUCHDB_PASSWORD=password couchdb:latest`

To setup a single node and add databases, visit `http://127.0.0.1:0000/_utils#setup` after starting the development database server

System databases to create w/o using the Setup Wizard

```
curl -X PUT http://127.0.0.1:5984/_users

curl -X PUT http://127.0.0.1:5984/_replicator

curl -X PUT http://127.0.0.1:5984/_global_changes
```
