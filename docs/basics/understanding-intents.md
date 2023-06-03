---
sidebar_position: 2
---

# Understanding Intents

AIrtisan chatbots work using a combination of intent classification and response generation. In this section, we'll cover the basics of intent classification and how to use it to create a chatbot that responds to user messages.

## What is an intent?
An intent, in the context of chatbots, usually means that goal of the user when they send a certain message. For example, say a user said the following:

> "What services do you provide."

The intent of this message is to identify your business's services. In other words, the user's goal is to identify business services. Therefore, we could define this message as an example of the "identify business services" intent.

:::tip
It's best to be specific when defining intents. For example, instead of defining an intent as "identify services", you could define it as "identify business services." This specificity will help the chatbot better understand the user's message.
:::

## How does AIrtisan classify intents?
Using AIrtisan, you can define a list of intents that your chatbot will be able to recognize. For each intent, you can provide a list of example messages that the chatbot will use to learn how to recognize the intent. For example, if you wanted to create a chatbot that could recognize the "identify business services" intent, you could provide the following example messages:

- "What services do you provide."
- "How can you help me."
- "What do you do."

Based on these messages, there may be a few ways that the chatbot should respond. For example, the chatbot could respond with:

- "We provide a range of services, including X, Y, and Z."
- "We can help you with X, Y, and Z."
- "We do X, Y, and Z."

In order to determine which response to use, the chatbot will use the intent classification model to determine which intent the user's message is most similar to. In this case, the user's message is most similar to the "identify business services" intent, so the chatbot will respond with one of the responses listed.

Now, to put your new knowledge of intents to use, continue onto the next section where you'll learn about training your chatbot.