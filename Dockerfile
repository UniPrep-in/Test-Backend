# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the code
COPY . .

# Expose backend port
EXPOSE 5000

# Start server
CMD ["node", "index.js"]