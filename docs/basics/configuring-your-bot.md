---
sidebar_position: 4
---

# Configuring your Bot
Your bot has a lot of settings you can mess with to make sure that it acts the way you want. Here we'll talk about what those settings are, how they work, and why you might want to use them.

:::note
Most of the things we'll be talking about today reference the "Settings" tab on a bot page.
:::
## Personality
First off, how do you give your bot some personality? This is an important customization feature because it lets you define your bots name, and keep branding consistent for your chatbot. There are currently two configuration items for your bot:

- Name: What your user facing bot will be named
- Description: A description of your bot which will be given to the enhancement model

These two fields are fairly self explanatory, and there will be other fields in the future to refine your bot's personality, such as a default prompt, and an ideal client prospect description.

## Works For
Now we want to give the chatbot a little bit of information about who it's working for. There are four fields currently in this section:

- Name: The name of the individual or company that the bot is representing
- Description: A description of the individual or company that the bot is representing
- Site URL: The URL of the website that the bot is representing
- Tagline: A tagline for the individual or company that the bot is representing

These fields are used to help the enhancement model understand the context of the conversation, and to help the bot respond to questions about the individual or company that it is representing. There will be more optional information to add in the future, such as a logo and options to add metadata that the enhancement model will use to better understand the context of the conversation.

## Specification
This section focuses on specific functionality of the bot, and how it should behave. There are currently two options in this section.

### None Fallback
This option tells your bot that it should fall back on the enhancement model when an intent of the user isn't successfully classified. This is essentially a catch all for questions or messages that you didn't expect, and thus don't have training data for. Keep in mind, you will still be able to see that the message was classified with a "None" intent, and you can use that information to add more training data to your bot.

### HIPAA Friendly
This option tells your bot that identifiable information such as emails, phone numbers, and names should not be stored in the database. This is an experimental feature, and we are still working on making it more robust. If you have any questions about this feature, please reach out to us at [our support page](https://airtisan.app/help/support). Keep in mind, we cannot yet garuntee that personally identifiable patient information will be kept secure, and we are not responsible for any HIPAA violations that may occur as a result of using this feature. This is a convenience feature, and should not be relied upon for HIPAA compliance.

## Security
The final section we'll talk about here is the security section. As you may have guessed, this section deals with security settings for your bot. Here are the differentt options in this section:

### Domains
A list of domains that your bot is allowed to be embedded on via widgets. When an AIrtisan chat widget tries to make a request to your bot, it will only allow the chat to be processed if the domain that the request is coming from is in this list. This is a security feature to prevent other people from embedding your bot on their website, and potentially stealing your data.

### Allow Widgets (allow public access)
In order for widgets to work, you must enable this option. By disabling it, you can only make chat requests to your bot via the API. Essentially, since widgets are public facing code, they have to make a request to a public API endpoint for your bot (more on that [here](/docs/using-the-api/)). Because this is a public endpoint, it is technically possible for anyone to make a chat request to your bot. This option allows you to disable that functionality, and only allow requests from your own website. Keep in mind, if you disable this option, you will not be able to use widgets.
