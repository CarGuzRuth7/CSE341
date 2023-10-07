// const matiasRoute = (req, res) => {
//     res.send("My husband is Matias Mansilla");
//   }
// const lindaRoute = (req, res) => {
//     res.send("My Sister is Linda Cardona");
//   }
// const virginiaRoute = (req, res) => {
//     res.send("My mom is Virginia Guzman");
//   }

const { ObjectId } = require('mongodb');
const db = require('../db/connection');

//GET requests
//Obtain all db info
const getAllContacts = async (req, res) => {
  try {
    const getAllData = await db.getDb().db('cse341').collection('contacts').find();

    getAllData.toArray().then((data) => {
      res.send(data).status(200);
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getContactById = async (req, res) => {
  //get a single data from id
  try {
    const idParam = new ObjectId(req.params.id);
    const getSingleData = await db
      .getDb()
      .db('cse341')
      .collection('contacts')
      .find({ _id: idParam });
    getSingleData.toArray().then((data) => {
      if (data == '') {
        res.status(404).send(data.error || idParam + ' ID Not Found');
      } else {
        res.send(data).status(200);
      }
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//POST request
const postNewContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const createNewContact = await db.getDb().db('cse341').collection('contacts').insertOne(contact);

  if (createNewContact.acknowledged) {
    res.status(201).json(createNewContact);
  } else {
    console.log('Error');
    res.status(500).send(createNewContact.error || 'Could not create document');
  }
};

//UPDATE request
const updateContact = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const newInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const updateContact = await db
    .getDb()
    .db('cse341')
    .collection('contacts')
    .updateOne({ _id: id }, { $set: newInfo });

  if (updateContact.modifiedCount > 0) {
    res.status(204).send(updateContact);
  } else {
    res.status(500).send(updateContact.error || 'Could not update document or does not exist');
  }
};

//DELETE request
const deleteContact = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const deleteContact = await db.getDb().db('cse341').collection('contacts').deleteOne({ _id: id });

  if (deleteContact.deletedCount > 0) {
    res.status(200).send(deleteContact);
  } else {
    res.status(500).send(deleteContact.error || 'Could not delete document or does not exist');
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  postNewContact,
  updateContact,
  deleteContact
};
