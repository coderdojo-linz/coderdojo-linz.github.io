ARG HUGO_VERSION

FROM floryn90/hugo:${HUGO_VERSION}

# Switch to root user to install dependencies
USER root

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get -yq update && apt-get -yq upgrade && apt-get install -yq nodejs && npm --version

# Set the working directory
WORKDIR /src

# Install npm dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Set permissions for the /src directory
RUN chown -R hugo:hugo /src

# Switch back to the original user
# USER hugo

CMD ["hugo", "server", "-D", "-F"]