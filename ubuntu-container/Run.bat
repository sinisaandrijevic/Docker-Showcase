@echo off

docker pull ubuntu
REM Pulls the latest Ubuntu Docker image from the Docker Hub.
REM You can access the Ubuntu image through Docker Desktop under Images.

docker run -it ubuntu
REM Executes the image and creates the container.
REM You can access the Ubuntu container through Docker Desktop under Containers.

REM When you return to the terminal, it will resemble the Ubuntu command line.
REM From now on, you can use commands as you would on Ubuntu (e.g., ls, mkdir, ...).

REM We are running an entirely different OS (Ubuntu in this case) simply by executing the Docker image within the Docker container.