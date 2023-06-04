---
sidebar_position: 1
---

# Introduction
The AIrtisan API allows you to build your own custom conversational interfaces, and integrate them into your own website. This page will walk you through the process of making a request to your bot, and how to handle the response.

## API Keys
Before you get started making requests, keep in mind that you'll need an API key. API keys are scoped to a specific bot, and allow the API to authenticate a request. You can find your API keys on the "API" tab of your bot page. Keep in mind that API keys have both a "service name" and a "value".

### Service Name
If you're already familiar with using API's and API keys, this is the only part that might be unfamiliar. The service name can be whatever you'd like, and simply specifies the service that the API key is for. For example, if you're using the API key in a Node.js application, you might want to set the service name to "Node.js". If you're using the API key in a React application, you might want to set the service name to "React". The service name will be specified in the `x-service` header of your request, and chats will only be authenticated if the service name matches the service name of the API key.

### Value
The value is a unique string cryptographically generated on our side. Once you add a new API key, you'll get to copy this value once, and then it will be hidden forever. If you lose your API key, you'll need to generate a new one. If you think your API key has been compromised, you can delete it, and generate a new one at any time. The value will be specified in the `x-api-key` header of your request, and chats will only be authenticated if the value matches the value of the API key.
