# Use the official Node.js 21.5.0 image as the base image
FROM node:21.5.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on (default for Next.js is 3000)
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]
