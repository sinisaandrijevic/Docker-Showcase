# Use the official Node.js 20 Alpine image as the base image
FROM node:20-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy all files and directories from the host's current directory into the container's /app directory
COPY . .

# Define the default command to run when the container starts
CMD node hello.js