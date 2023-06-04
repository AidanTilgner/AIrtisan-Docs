---
sidebar_position: 1
---

# Chat Requests
Chatting with your bot through the API is the best way to truly customize your bot's experience. This page will walk you through the process of making a request to your bot, and how to handle the response.

## Making Requests
The url of a chat request looks something like this:

```bash
https://airtisan.app/api/v1/bot/[your bot id]/chat
```

If you're looking for your bot id, you can find it in the "API" tab on your bot's page. The full request might look something like this:

```bash
curl -H "x-api-key: YOUR_API_KEY"
  -H "x-service: YOUR_API_KEY_SERVICE_NAME"
  -H "Content-Type: application/json"
  -X POST -d '{"message": "Hello"}'
  https://airtisan.app/api/v1/bot/4b7c1691-e464-4358-8652-44696e5b1bcc/chat
```

### Headers
As you can see, two headers are specified, following the same format as other API routes.

-  `x-service`: the name of the API key that you're using
- `x-api-key`: the value of the API key that you're using

### Body
The body of the request is a JSON object with a `message` key. There may be other arguments available in the future, but for now the `message` is all that's required.

## Handling Responses
An example response might look something like this:

```json
{
	"message": "Chat processed successfully.",
	"data": {
		"session_id": "b170f2d3-6457-446b-9008-34bc6d1a3a00",
		"intent": "say hello",
		"entities": [],
		"answer": "Hey! How can I help you?",
		"attachments": {
			"buttons": {}
		},
		"initial_text": "Hello",
		"confidence": 100,
		"enhanced": false,
		"botChat": 1,
		"userChat": 1,
		"conversation": {
			"id": 1,
			"generated_name": null,
			"session_id": "b170f2d3-6457-446b-9008-34bc6d1a3a00",
			"training_copy": false,
			"intents_graph": null,
			"chats": [
				{
					"id": 1,
					"order": 1,
					"session_id": "b170f2d3-6457-446b-9008-34bc6d1a3a00",
					"message": "Hello",
					"intent": "say hello",
					"confidence": null,
					"role": "user",
					"enhanced": false,
					"needs_review": false,
					"review_text": null,
					"reviewer": null,
					"created_at": "2023-06-04T06:27:19.000Z",
					"updated_at": "2023-06-04T06:27:19.000Z"
				},
				{
					"id": 2,
					"order": 2,
					"session_id": "b170f2d3-6457-446b-9008-34bc6d1a3a00",
					"message": "Hey! How can I help you?",
					"intent": "say hello",
					"confidence": 100,
					"role": "assistant",
					"enhanced": false,
					"needs_review": false,
					"review_text": null,
					"reviewer": null,
					"created_at": "2023-06-04T06:27:19.000Z",
					"updated_at": "2023-06-04T06:27:19.000Z"
				}
			],
			"created_at": "2023-06-04T06:27:19.000Z",
			"updated_at": "2023-06-04T06:27:19.000Z"
		},
		"conversation_id": 1
	}
}
```
The most important part of the response is the `data.answer` property. This is the bot generated response to the `message` in the request body. The `data` object also contains a `session_id` property, which is used to keep track of the conversation. You can use this `session_id` to make follow up requests, and the bot will remember the conversation.


### Response Structure
Here is an explanation of some of the notable properties in the response:

- `data.session_id`: the session id of the conversation
- `data.intent`: the classified intent of the message
- `data.entities`: the classified entities of the message
- `data.answer`: the bot generated response to the message
- `data.attachments`: any attachments that were on the intent, such as buttons
- `data.initial_text`: the original message that was sent
- `data.confidence`: the confidence of the intent classification
- `data.enhanced`: whether or not the message was enhanced
- `data.botChat`: the id of the chat entity for the bot
- `data.userChat`: the id of the chat entity for the user
- `data.conversation`: the conversation object
- `data.conversation_id`: the id of the conversation