# service-template
A Microservice Template Project

- [Nginx](https://hub.docker.com/_/nginx) v1.21.4
- [Node](https://hub.docker.com/_/node) v17.3.0
- [MongoDB](https://hub.docker.com/_/mongo) v4.2
- [MySQL](https://hub.docker.com/_/mysql) v5.7 Because, sadly, that's all anyone ever uses.

## Getting Started

Some convienience scripts have been added to the `package.json` file.

### Standard Scripts:

- `npm start` normal startup of Node server and assumes you've setup your own databases.
- `npm run develop` To run Node with live reload and debugging enabled.
- `npm run develop-break-on-startup` Same as the above command but will pause immediately on startup.

### Docker Scripts:

- `npm run docker` runs a proxy server, node and database containers defined in the `docker-compose.yml`
- `npm run docker-detached` same as above but, runs as a background process.
- `npm run docker-destroy` destroys docker containers and database volumes.

### Verify Application is Running 

Check that API is running at either url. (Some options below assume you are running Docker)

- __Terminal__: `curl -H 'content-type: application/json' http://localhost/help`
- __Terminal__: `curl -H 'content-type: application/json' http://localhost:3000/help`
- __Browser__: [http://localhost/help]() Verify the proxy container is working.
- __Browser__: [http://localhost:3000/help]() API Server direct access through exposed port.

### Node Chrome Debugger

1. Open URL: _[chrome://inspect/#devices](chrome://inspect/#devices)_
2. Click on _Open dedicated DevTools for Node_

You should now be able to see the logs from the node app in a Chrome console.

## Optional Tools:

- [Compass](https://www.mongodb.com/products/compass): A MongoDB Client
- [MySQL Workbench](https://www.mysql.com/products/workbench/): A MySQL Client
- [Insomnia](https://insomnia.rest/download) A REST Client

    # Backup MongoDB
    docker exec example-db-mongo sh -c 'exec mongodump -u root -p secret --archive' > ./example.archive
    # Import MongoDB
    docker-compose exec -T example-db-mongo sh -c 'mongorestore --archive' < example.archive
    