# Kafka Spark Streaming Consumer

from __future__ import print_function

import sys
import json

from pymongo import MongoClient

from pyspark import SparkContext
from pyspark.streaming import StreamingContext
from pyspark.streaming.kafka import KafkaUtils

def insertRecord(record):
	client = MongoClient('localhost:27017')
	db = client.ss
	collection = db.meetup
	collection.insert_one(record)


if __name__ == "__main__":
	if len(sys.argv) != 3:
		print("Usage: kafka_spark_consumer_01.py <zk> <topic>", file=sys.stderr)
		exit(-1)
	sc = SparkContext(appName="PythonStreamingMeetupData")
	ssc = StreamingContext(sc, 5)

	zkQuorum, topic = sys.argv[1:]
	kvs = KafkaUtils.createStream(ssc, zkQuorum, "spark-streaming-consumer", {topic: 1})
	rsvps = kvs.map(lambda v: v[1])
	rsvps_json = rsvps.map(lambda x: json.loads(x, encoding='ascii'))
	rsvps_json.pprint()
	rsvps_json.foreachRDD(lambda rdd: rdd.foreach(insertRecord))
	ssc.start()
	ssc.awaitTermination()
