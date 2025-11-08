# Use official Node image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 5000

# Start app
CMD ["npm", "start"]
