from email.quoprimime import quote
from flask import Flask, render_template
import urllib.request, json
import random
import math
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app, support_credentials=True)



@app.route('/')

def helloIndex():
    return 'Hello world'

@app.route('/getQuotes',methods=['GET'])
@cross_origin(supports_credentials=True)
def getQuotes():
    url = "https://zenquotes.io/api/quotes"

    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)

    index = math.floor(random.random()*len(dict))
    temp = dict[index]

    print("response = ",temp)

    return temp['q']+"#"+temp['a']


app.run(host='0.0.0.0',port=5000)