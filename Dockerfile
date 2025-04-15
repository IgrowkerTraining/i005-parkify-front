# Etapa 1: Construcción del frontend
FROM node:20-alpine AS build

WORKDIR /app
COPY . .
RUN npm install

# Aumentar el límite de memoria para evitar errores de out-of-memory
ENV NODE_OPTIONS=--max-old-space-size=2048

RUN npm run build     

# Etapa 2: Servidor estático con "serve"
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
