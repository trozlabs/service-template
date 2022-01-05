FROM node:17

# directory to run commands from.
# overridden in docker-compose.yml working_dir
WORKDIR /app

# this is here because the OS may require different 
# variations of modules than your host machine.
COPY ./package.json /app
RUN npm install

# then copy the code over. .dockerignore should 
# exclude node_modules/ on host machine
COPY . /app

# default command to run when container starts
# overridden in docker-compose.yml command
CMD npm start 

# default port the code will listen on.
EXPOSE 3000