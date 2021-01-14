
# Tests

[localhost](http://localhost:30020/)
[localhost](http://localhost:30020/newentry?name=Great)

[Ventress.local](http://Ventress.local:30020/)
[Ventress.local](http://Ventress.local:30020/newentry?name=Great)

[HTL Syno R227](http://services01.htl-braunau.at:30020/)
[HTL Syno R227](http://services01.htl-braunau.at:30020/newentry?name=Great)

# Docker Info Sources

- [Dockerizing your Node.js Applications](http://nodesource.com/blog/dockerizing-your-nodejs-applications/)
- [nodesource](https://hub.docker.com/r/nodesource/node/)
- [Docker: Port a node.js app to Docker](https://github.com/docker/labs/tree/master/developer-tools/nodejs/porting)
- [Docker + NodeJS + mysql](https://medium.com/@niratattri/building-a-node-js-application-and-deploying-through-docker-meet-docker-aa8ae677ea12)



# Docker

```bash
docker run hello-world
```

Web Server: 

```bash
docker run -d -p 80:80 --name webserver nginx
# System Port : Container Port
```

```bash
docker run -it ubuntu bash
```

```bash
docker container ls  # show running containers
docker container ls -a  # shows stopped containers too
docker container stop webserver
docker container rm webserver # rm container
docker image ls
docker image rm nginx # remove image

```

was macht `docker run -it `?:

```
-t              : Allocate a pseudo-tty
-i              : Keep STDIN open even if not attached
```

Docker file sharing.
make directory available to containers using Docker’s bind mount (-v) feature.

[How To Remove Docker Images, Containers, and Volumes](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)

#  Node

```bash
$ node --version
v6.9.4
```


# Dockerize Node JS

Dockerfile:

```
FROM node:6.9.4
ENV LAST_UPDATED 20180406T165100

# copy package file
COPY package.json /app/

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Copy source code
COPY . /app/

# Expose API port to the outside
EXPOSE 30020

# Launch application
CMD ["npm","start"]
```

Build the docker image:

```bash
docker build -t dockertest .
docker image ls
```

Run container from image:

```bash
docker run -p 30020:30020 -it dockertest
```

Restart container:

```bash
docker restart <CONTAINER_NAME>
```



# mariaDB

[mariaDB auf Docker Hub](https://hub.docker.com/_/mariadb/)

```bash
docker run --name some-mariadb -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mariadb:tag
```
... where some-mariadb is the name you want to assign to your container, my-secret-pw is the password to be set for the MySQL root user and tag is the tag specifying the MySQL version you want. See the list above for relevant tags.

```bash
docker run -p 3306:3306 --name docker-mariadb -e MYSQL_ROOT_PASSWORD=root -d mariadb:10.2
docker run -p 3306:3306 --name docker-mariadb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=test -d mariadb:10.2
```

```bash
mysql --host 0.0.0.0 --port 3306 --user root --password
```

Neustart des Containers

```bash
docker stop docker-mariadb
docker rm docker-mariadb
```

Nach Neustart (`docker start docker-mariadb`) des Containers sind die Daten noch da.
Nach `docker run ...` sind die Daten weg - neuer Container.


## mariaDB Mit `Dockerfile`

Initilisieren der Datenbank mit `dump.sql`.

```
FROM mariadb:10.2

# init with data
COPY dump.sql /docker-entrypoint-initdb.d/
````

```bash
docker build -t mariadb-img .
docker run -p 3306:3306 --name docker-mariadb -e MYSQL_ROOT_PASSWORD=root MYSQL_DATABASE=test -d mariadb-img
```

```bash
docker stop docker-mariadb
docker rm docker-mariadb
```

# Volumes

[Docker Volumes](https://docs.docker.com/storage/volumes/)

```bash
docker volume create mariadb-vol
docker volume ls
docker volume inspect mariadb-vol
```

```bash
docker run -d \
  --name devtest \
  --mount source=myvol2,target=/app \
  nginx:latest
```

```bash
docker run \
    -p 3306:3306 \
    --name docker-mariadb \
    -e MYSQL_ROOT_PASSWORD=root \
    --mount source=mariadb-vol,target=/var/lib/mysql \
    -d mariadb:10.2
```

Daten im Volume bleiben erhalten, auch wenn der Container gelöscht wird!

Volumes liegen in einer Virtuellen Maschine (und nicht direkt im Host File System).
Zugriff:

```bash
docker run -v dockertest_mysql_data:/volume_data -it ubuntu:16.04 bash
```


# Docker Compose

```bash
docker-compose build
docker-compose up -d
docker-compose down
```

Compose uses a **project name** to isolate environments from each other
The default project name is the basename of the project directory. 
You can set a custom project name by using the `-p` command line option or the `COMPOSE_PROJECT_NAME` environment variable.


yml File:

```
version: '2.2'
services:
    mysql:
        build: ./MariaDB
        restart: always
        environment:
          MYSQL_ROOT_PASSWORD: root
        healthcheck:
            test: "exit 0"
        volumes:
          - mysql_data:/var/lib/mysql
        ports:
          - 3306:3306
    
    nodejs:
        build: .
        restart: always
        depends_on:
            mysql:
                condition: service_healthy
        ports:
            - 30020:30020

volumes:
    mysql_data:
        driver: "local"

#
# creates 2 images:
#  - dockertest_nodejs
#  - dockertest_mysql
#
```

NodeJS - Servername ist nicht mehr localhost

```javascript
let connection = mysql.createConnection({
    host: 'mysql', // hier Namen des Service aus dem yml File angeben !!!
    user: 'root',
    password: 'root',
    database: 'test',
    dateStrings: true, /* dates are retrieved as 'YYYY-MM-DD' */
    timezone: -2 /* 'local' not working when retrieving - why? */
})
```



# Database Dumps

Dump database `test`:

```bash
sudo docker exec dockertest_mysql_1 sh -c 'exec mysqldump test -uroot -proot' >test_dump.sql
```


# Synology

```bash
ssh matejkaf@Ventress.local
sudo docker version
```

Alle Befehle mit sudo ausführen.
Versuche mit `docker-machine` sind gescheitert.



# Docker Hub

[Siehe Docker Doc](https://docs.docker.com/get-started/part2/#tag-the-image)

A registry is a collection of repositories, and a repository is a collection of images.

```bash
docker login

# docker tag image username/repository:tag
docker tag dockertest matejkafr/test:1.0.0

# docker push username/repository:tag
docker push matejkafr/test:1.0.0
```

Pull on any machine:

```bash
docker run -p 4000:80 username/repository:tag
```