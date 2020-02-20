from asgiref.sync import async_to_sync
from celery import shared_task
from channels.layers import get_channel_layer

channel_layer = get_channel_layer()
import urllib.request
import re
import nltk
import random
import string
import bs4 as bs

try:
    raw_data = urllib.request.urlopen('https://en.wikipedia.org/wiki/Global_warming')
    raw_data = raw_data.read()

    html_data = bs.BeautifulSoup(raw_data, 'lxml')

    all_paragraphs = html_data.find_all('p')

    article_content = ""

    for p in all_paragraphs:
        article_content += p.text

    article_content = article_content.lower()  # converts to lowercase

    article_content = re.sub(r'\[[0-9]*\]', ' ', article_content)
    article_content = re.sub(r'\s+', ' ', article_content)
except:
    article_content = "my name is kimutai"
sentence_list = nltk.sent_tokenize(article_content)
article_words = nltk.word_tokenize(article_content)

lemmatizer = nltk.stem.WordNetLemmatizer()


def LemmatizeWords(words):
    return [lemmatizer.lemmatize(word) for word in words]


remove_punctuation = dict((ord(punctuation), None) for punctuation in string.punctuation)


def RemovePunctuations(text):
    return LemmatizeWords(nltk.word_tokenize(text.lower().translate(remove_punctuation)))


greeting_input_texts = ("hey", "heys", "hello", "morning", "evening", "greetings",)
greeting_replie_texts = ["hey", "hey hows you?", "*nods*", "hello there", "ello", "Welcome, how are you"]


def reply_greeting(text):
    for word in text.split():
        if word.lower() in greeting_input_texts:
            return random.choice(greeting_replie_texts)


from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


def give_reply(user_input):
    chatbot_response = ''
    sentence_list.append(user_input)
    word_vectors = TfidfVectorizer(tokenizer=RemovePunctuations, stop_words='english')
    vecrorized_words = word_vectors.fit_transform(sentence_list)
    similarity_values = cosine_similarity(vecrorized_words[-1], vecrorized_words)
    similar_sentence_number = similarity_values.argsort()[0][-2]
    similar_vectors = similarity_values.flatten()
    similar_vectors.sort()
    matched_vector = similar_vectors[-2]
    if (matched_vector == 0):
        chatbot_response = chatbot_response + "I am sorry! I don't understand you"
        return chatbot_response
    else:
        chatbot_response = chatbot_response + sentence_list[similar_sentence_number]
        return chatbot_response


@shared_task
def ReplyUserMessage(channel_name, message, conversation):
    user_input = message
    if user_input != 'bye':
        if user_input == 'thanks' or user_input == 'thank you very much' or user_input == 'thank you':
            message = "Most welcome"
        else:
            if reply_greeting(user_input) is not None:
                print("here")
                message = reply_greeting(user_input)
            else:
                message = give_reply(user_input)
                sentence_list.remove(user_input)
    else:
        pass
    async_to_sync(channel_layer.group_send)(channel_name,
                                            {'command': 'new_message',
                                             'type': "new_message",
                                             'conversation': conversation,
                                             'Event': "New message",
                                             "from": "qua_bot",
                                             "message": message})
