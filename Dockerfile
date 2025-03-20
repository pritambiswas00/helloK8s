FROM node:14-alpine

#Set Working Directory
WORKDIR /app

#Copy Package.json and Lock.json

COPY package*.json ./

#Install Dependencies
RUN npm install

#Copy the rest of the application 
COPY . .

#Expose Port
EXPOSE 3000

#Command to start the application 
CMD [ "node", "app/app.js" ]