#!/bin/bash

# Pull from the GitHub repository
git pull

# Install dependencies using yarn
yarn

# Build the project
yarn build

# Restart the server
pm2 restart pm2.config.js
