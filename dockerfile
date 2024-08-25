FROM node:18

# Install unixodbc-dev
RUN apt-get update && apt-get install -y unixodbc-dev

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Build the project
RUN npm run build

# Expose the build directory
CMD ["npm", "start"]
