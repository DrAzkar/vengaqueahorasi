# Usa una imagen base de Python
FROM node:20.15.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR src\app

# Copia los archivos de dependencias y las instala
COPY package*.json ./
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Construye la aplicación Angular
RUN npm run build --prod

#Expose the default port for the Angular app
EXPOSE 4200

#Start the Angular app when the container starts
CMD ["npm", "start"]