# Frontend Dockerfile with CapacitorJS support

# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Capacitor CLI
# RUN npm install @capacitor/core @capacitor/cli

# Copy the rest of the application
COPY . .

# Expose the frontend port
EXPOSE 5173

# Start the frontend application
CMD ["npm", "run", "dev"]
