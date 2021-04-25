FROM node:6.9.4
ENV LAST_UPDATED 20180406T165100

# copy package file
COPY package.json /app/

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Copy source code
COPY . /app/

# Expose API port to the outside
EXPOSE 30020

# Launch application
CMD ["npm","start"]
