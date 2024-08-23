# Use an official Node.js runtime as a parent image
FROM node:20

# Install system dependencies required by odbc
RUN apt-get update && \
    apt-get install -y \
    unixodbc \
    unixodbc-dev \
    build-essential

# Set the working directory
WORKDIR /app

# Copy the application code
COPY . .

# Install dependencies
RUN npm install

# Build the application (if necessary)
RUN npm run build

# Start the application
CMD ["npm", "start"]
