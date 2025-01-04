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

# # Install Flyway
# RUN wget -qO- https://download.red-gate.com/maven/release/com/redgate/flyway/flyway-commandline/11.0.0/flyway-commandline-11.0.0-linux-x64.tar.gz | tar -xvz && \
#     mv flyway-11.0.0 /flyway && \
#     ln -s /flyway/flyway /usr/local/bin/flyway

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install pm2 -g

# Copy the rest of the app's source code to the container
COPY . .

# Expose the port your server runs on
 EXPOSE 8055

# Command to start your server
CMD [pm2 start npm --name tyb-website -- run start -- -p 8055]
