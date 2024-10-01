# Builder stage
FROM node:21-alpine AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package*.json ./
RUN pnpm install

# Copy the rest of the files and build the application
COPY . .
RUN pnpm run build

# Prune development dependencies
RUN pnpm prune --prod

# Final stage
FROM node:21-alpine
WORKDIR /app

# Copy necessary files from builder stage
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

# Set the environment and expose the port
EXPOSE 3000
ENV NODE_ENV=production

# Command to run the application
CMD [ "node", "build" ]