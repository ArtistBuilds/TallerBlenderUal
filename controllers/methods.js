const { client, dbName, MongoClient, ObjectId, url, collection } = require('../db/mongoDB');


    /* Mensajes del buen cachón:
    En mi mente data es el término que el usuario introdujo en la barra de busqueda 
    no sé para que estoy importando cliente, dbName, etc xde*/



// Obtener una lista de términos que se relacionen con la búsqueda por título 

const search = async (data) => {

    collection.find({ term: data }).toArray((err, docs) => {
      if (err) {
        console.log('Error al buscar los términos:', err);
        return;
      }
      const resultados = docs.map(doc => doc.term);
      console.log('Resultados de la búsqueda:', resultados);
    });

};

// Obtener el primer término que se relacione con la búsqueda por título

const searchOne = async (data) => {

    collection.findOne({ term: data }, (err, doc) => {
        if (err) {
          console.log('Error al buscar el término:', err);
          return;
        }
        if (doc) {
          const resultado = doc.term;
          console.log('Resultado de la búsqueda:', resultado);
        } else {
          console.log('No se encontraron términos que coincidan con la búsqueda.');
        }
      });

};

// Obtener una lista de términos que se relacionen con la búsqueda por descripción

const description = async (data) => {

    collection.find({ meaning: data }).toArray((err, docs) => {
      if (err) {
        console.log('Error al buscar las descripciones:', err);
        return;
      }
      const resultados = docs.map(doc => doc.meaning);
      console.log('Resultados de la búsqueda:', resultados);
    });

};

// Obtener el primer término que se relacione con la búsqueda por descripción

const descriptionOne = async (data) => {

    collection.findOne({ meaning: data }, (err, doc) => {
        if (err) {
          console.log('Error al buscar la descripción', err);
          return;
        }
        if (doc) {
          const resultado = doc.meaning;
          console.log('Descripción:', resultado);
        } else {
          console.log('No se encontró la descripción');
        }
      });
      
};

// Obtener una lista de términos al azar

const random = async (data) => {

    collection.aggregate([{ $sample: { size: 10 } }]).toArray((err, docs) => {
        if (err) {
          console.log('Error al obtener los términos:', err);
          return;
        }
        const resultados = docs.map(doc => doc.term);
        console.log('Términos al azar:', resultados);
      });

};

// Obtener un término al azar

const randomOne = async (data) => {

    collection.aggregate([{ $sample: { size: 1 } }]).toArray((err, docs) => {
        if (err) {
          console.log('Error al obtener el término:', err);
          return;
        }
        if (docs.length > 0) {
          const resultado = docs[0].term;
          console.log('Término al azar:', resultado);
        } else {
          console.log('No se encontraron términos en la colección.');
        }
      });

};

// Obtener solo títulos de una lista de términos que se relacionen con la búsqueda por título

const title = async (data) => {

    collection.find({ term: { data } }).project({ titulo: 1, _id: 0 }).toArray((err, docs) => {
        if (err) {
          console.log('Error al obtener los términos:', err);
          return;
        }
        const resultados = docs.map(doc => doc.term);
        console.log('Títulos de términos relacionados con la búsqueda por título:', resultados);
      });

};

// Obtener el primer título que se relacione con la búsqueda por título

const titleOne = async (data) => {

    collection.findOne({ term: { data } }, { titulo: 1, _id: 0 }, (err, doc) => {
        if (err) {
          console.log('Error al obtener el término:', err);
          return;
        }
        if (doc) {
          const resultado = doc.term;
          console.log('Título de un término relacionado con la búsqueda por título:', resultado);
        } else {
          console.log('No se encontraron términos relacionados con la búsqueda por título en la colección.');
        }
      });

};


/* Estás últimas ni idea de que hice */

// Obtener solo descripciones de una lista de términos que se relacionen con la búsqueda por título

const descriptionz = async (data) => {

    collection.find({ meaning: { data } }).project({ titulo: 1, _id: 0 }).toArray((err, docs) => {
        if (err) {
          console.log('Error al obtener los términos:', err);
          return;
        }
        const resultados = docs.map(doc => doc.meaning);
        console.log('Títulos de términos relacionados con la búsqueda por título:', resultados);
      });

};

// Obtener la primera descripción que se relacione con la búsqueda por título

const descriptionzOne = async (data) => {

    collection.findOne({ meaning: { data } }, { titulo: 1, _id: 0 }, (err, doc) => {
        if (err) {
          console.log('Error al obtener el término:', err);
          return;
        }
        if (doc) {
          const resultado = doc.meaning;
          console.log('Título de un término relacionado con la búsqueda por título:', resultado);
        } else {
          console.log('No se encontraron términos relacionados con la búsqueda por título en la colección.');
        }
      });

};

module.exports = {
    search, searchOne, description, descriptionOne, random, randomOne, title, titleOne, descriptionz, descriptionzOne
};