---
sidebar_position: 3
---

# Understanding Enhancement

Let's talk about response enhancement, and how it let's AIrtisan chatbots create more natural conversations.

## What is Response Enhancement?

Response enhancement is a technique by which certain responses that the chatbot gives will appear more natural. This works by specifying that a given intent should be enhanced, and then when that intent is detected, an LLM will take the original, predefined response, and form a more natural response based on the context of the conversation before.

## Why use enhancement?

If that seems a little confusing, that's totally fine. You might be wondering why this is even an option to begin with. Let's look at an example to clarify a bit. Say you had the following intent:

```json
{
  "user_intent": "identify business services",
  "utterances": [
    "What services do you provide.",
    "How can you help me.",
    "What do you do."
  ],
  "responses": [
    "We provide a range of services, including X, Y, and Z."
  ]
}
```

As you can see, when the user want to know about the business's services, by default the chatbot will only respond with "We provide a range of services, including X, Y, and Z." However, maybe that specific response isn't always the most natural response. Take the following conversation:

> "Hello there"

> "Hello, I'm [bot name], representing [business name]"

> "I'm looking for web design service. What services do you provide?" <- classified as "identify business services"

> "We provide a range of services, including X, Y, and Z."

This is a valid response, and showcases the power of intent classification. However, there is an issue with this response. It may be subjective, but to me the response seems a little too robotic. It doesn't address their desire for web design service specifically, and therefore doesn't sound as natural as it could. A better response in my opinion would be something like:

> "We provide web design service! In fact, we provide a range of services, including X, Y, and Z."

However, with intent classification alone, you'd have to define an entirely new intent to have a response this fitting appear as a result of their inquiry. Enhancement let's you harness the power of LLMs like ChatGPT to provide more natural responses like this.


## How does it work?
Let's say I specified that this intent should in fact be enhanced:

```json
{
  "user_intent": "identify business services",
  "utterances": [
    "What services do you provide.",
    "How can you help me.",
    "What do you do."
  ],
  "responses": [
    "We provide a range of services, including X, Y, and Z."
  ],
  "should_enhance": true
}
```

Now, whenever the "identify business services" intent is encountered by your bot, it will send the conversation off to an LLM, along with some important context and the original response, and the LLM will provide an "enhanced" response to the user message. The LLM is specifically fine tuned using specialized methods to provide the most natural and useful response based on your [bot's configuration](/docs/basics/configuring-your-bot).

Providing a specific example of how your bot might act when using enhancement is difficult, because predicting the exact outcome of the LLM is next to impossible. However, if you've used LLMs like ChatGPT, GPT4, PaLM (Bard), etc. You're likely familiar with the way that these chatbots usually respond.


## Mitigating Hallucinations
If you're familiar with LLMs, you're probably also familiar with their tendency to hallucinate, or in other words produce false or misleading information. This is a major problem with LLMs, and trusting their output to represent your business. Due to the way that Generative LLMs usually work, there's no garunteed way to prevent them from hallucinating, and therefore we acknowledge the possibility of your chatbot giving the user false or misleading information if you use response enhancement. ChatGPT and other models are first and formost tasked with generating language which sounds human (e.g. language that sounds factual), not language that is actually factually accurate.

However, due to the nature of AIrtisan bot's, we can garuntee that they will hallucinate much less than similar services. This is because the only way that your chatbot will ever rely on an LLM which could hallucinate, is if it encounters an intent where you specifically tell it to. Other services don't provide you with low level control over how the chatbot will respond, and often the only way that you can mitigate hallucination is by controlling the sources of information to the chatbot.


## Can I Trust Enhancement?
We just threw a fairly large disclaimer at you, and we want to emphasize that enhanced messages __may__ contain hallucinations. However, it is generally very safe to rely on enhancement, and because it's per intent, if an intent necessitates factual information, you don't have to enable enhancement at all.

We're always trying to get better, so if you have feedback about how enhancement is working for you, or anything for that matter, let us know [here](https://airtisan.app/feedback).

## Next Steps
Now that you understand enhancement, we can talk about configuring your bot to use similar features, such as "none fallback". 
