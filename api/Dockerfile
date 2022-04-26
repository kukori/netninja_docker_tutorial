# image:tag
FROM node:17-alpine

# installed nodemon globally in the container it will restart the server if the content changes
RUN npm i -g nodemon

WORKDIR /app

# first we copy the package json so the RUN npm i step can be cached
COPY package.json .

# this runs at build time
RUN npm i

# the dest directory is relative to the WORKDIR so in this case it'll copy to /app
COPY . .

EXPOSE 4000

# CMD ["node", "app.js"]
CMD ["npm", "run", "dev"]
# build an image
# sudo docker build -t myapp .
# with versioning: sudo docker build -t myapp:v1 .
# sudo docker images
# sudo docker container ls
# port on the computer that we map to:port exposed by the container
# run runs an image to create a new container. start runs an already created container again.
# sudo docker run --name myapp_container2 -p 4000:4000 myapp:v1
# adding the volume flag: sudo docker run --name myapp_container2 --rm -v /home/kukori/c/docker-crash-course-lesson-5/api:/app -v /app/node_module -p 4000:4000 myapp:v2
# sudo docker start myapp_container2
# sudo docker ps
# this one shows all the containers (stopped ones as well):
# sudo docker ps -a
# sudo docker stop myapp
# delete docker image:
# sudo docker image rm hello-world
# delete container:
# sudo docker container rm upbeat_villani
# delete all images/containers/volumes at once: sudo docker system prune -a
# sudo docker-compose up
# -v removes the volumes as well
# sudo docker-compose down -v