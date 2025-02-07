FROM ubuntu:20.04

# Set environment variables to ensure non-interactive installation
ENV DEBIAN_FRONTEND=noninteractive

# Update and install required tools
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    unzip \
    gnupg \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

RUN npm install webpack webpack-cli --save-dev
# Install PM2 globally
RUN npm install -g pm2

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install 

# Copy the rest of the app's source code to the container
COPY . .

# Build the application (if applicable)
RUN npm run build

# Expose the port your server runs on
#EXPOSE 8055

# Command to start your server
CMD ["pm2-runtime", "npm", "--", "start", "--", "--port", "80"]
