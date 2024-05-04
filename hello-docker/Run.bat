@echo off

REM Navigate to the directory containing the Dockerfile.
cd /hello-docker

REM Build the Docker image with the tag "hello-docker".
docker build -t hello-docker .

REM List all Docker images to see if our image has been created.
docker images

REM Run the Docker container based on the "hello-docker" image.
docker run hello-docker

REM docker run -it hello-docker sh
REM This puts us directly within the OS and then we can type 'node hello.js' to run the commands.