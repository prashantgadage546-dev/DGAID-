# Base image
FROM node:18

# Working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all backend files
COPY . .

# Expose port
EXPOSE 5000

# Start Node.js server
CMD ["node", "index.js"]
