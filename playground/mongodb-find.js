const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server', err);
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // find({completed: false}) <-- Query
    // db.collection('Todos').find({
    //     _id: new ObjectID('5bbc77ac47909a58b9b5aeb8')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });



    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: 'Andrew'
    }).count().then((count) => {
        console.log(`Så många heter Andrew: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Andrew count');
    });

    db.collection('Users').find({
        name: 'Andrew'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    // client.close();
})