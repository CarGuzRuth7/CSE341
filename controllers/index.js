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

//Obtain all db info
const getAllContacts = async (req, res) =>{
    const getAllData = await db.getDb().db('cse341').collection('contacts').find();

    getAllData.toArray().then((data)=>{
        res.send(data).status(200)
    })
    
    
}
const getContactById = async (req, res) =>{
    //get a single data from id
    const getSingleData = await db.getDb().db('cse341').collection('contacts').find({_id: new ObjectId(req.params.id)});
    

    getSingleData.toArray().then((data)=>{
        res.send(data).status(200)
    })
    
}


module.exports ={
  getAllContacts,
  getContactById
}