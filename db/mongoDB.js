const { MongoClient, ObjectId } = require('mongodb');
const url ='mongodb+srv://AxelChacon:Axel0408@cluster0.goied7e.mongodb.net/test';
const dbName = 'codeEngine';
const client = new MongoClient(url);
const collection = client.db('codeEngine').collection('terms');
client.connect();

module.exports = {
    client, dbName, MongoClient, ObjectId, url, collection
};