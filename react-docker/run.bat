REM Build a Docker image named 'react-docker' using the Dockerfile in the current directory.
docker build -t react-docker .

REM Run a Docker container based on the 'react-docker' image,
REM mapping port 5173 on the host machine to port 5173 inside the container.
docker run -p 5173:5173 react-docker

REM docker run -p 5173:5173 -v "$(pwd) :/app" -v /app/node_modules react-docker