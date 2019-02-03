from flask import Flask, render_template, jsonify, Response
from pymongo import MongoClient
import json
from bson import json_util
from bson.json_util import dumps
from datetime import datetime


app = Flask(__name__)

MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'ss'
COLLECTION_NAME = 'meetup'
FIELDS = {'_id': False, 'mtime': True, 'venue': True, 'group.group_country': True}
current_mtime = 2**100
total_rsvps = 0
country_dict = {}


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/meetup_rsvps")
def meetup_rsvps():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    rsvps = collection.find({'venue': {'$exists': 'true', '$ne': []}}, projection=FIELDS)
    json_address = []
    for location in rsvps:
        json_address.append(location)
        global current_mtime
        current_mtime = location['mtime']
    json_address = json.dumps(json_address, default=json_util.default)
    connection.close()
    resp = Response(json_address, mimetype='application/json')
    return resp


@app.route("/update_rsvps", methods=['GET', 'POST'])
def update_rsvps():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    global current_mtime
    rsvps = collection.find({'mtime': {'$gt': current_mtime}, 'venue': {'$exists': 'true', '$ne': []}}, projection=FIELDS)
#    return jsonify(current_mtime)
    json_address = []
    for location in rsvps:
        json_address.append(location)
        current_mtime = location['mtime']
    json_address = json.dumps(json_address, default=json_util.default)
    connection.close()
    resp = Response(json_address, mimetype='application/json')
    return resp

if __name__ == "__main__":
    app.run(port=5001, debug=True)
