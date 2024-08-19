# Stage 1: Build the frontend
FROM node:18 AS frontend-build

WORKDIR /app

COPY apps/client/package*.json ./apps/client/
RUN cd apps/client && npm install
COPY apps/client/ ./apps/client/
RUN cd apps/client && npm run build

# Stage 2: Build the backend
FROM node:18 AS backend-build

WORKDIR /app

COPY apps/api/package*.json ./apps/api/
RUN cd apps/api && npm install
COPY apps/api/ ./apps/api/
RUN cd apps/api && npm run build

# Stage 3: Combine frontend and backend
FROM node:18

WORKDIR /app

# Copy frontend build into the backend build directory
COPY --from=frontend-build /app/apps/client/dist /app/client/dist

# Copy backend build
COPY --from=backend-build /app/apps/api/dist /app/api/dist

# Set environment variables if needed
ENV NODE_ENV=production

# Install production dependencies
WORKDIR /app/api
COPY apps/api/package*.json ./
RUN npm install --only=production

# Expose ports
EXPOSE 3000

# Start the backend service
CMD ["node", "dist/main.js"]
