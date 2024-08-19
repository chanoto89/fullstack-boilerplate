# Backend Dockerfile for NestJS

# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the backend port
EXPOSE 3000

# Start the NestJS server
CMD ["npm", "run", "dev"]
