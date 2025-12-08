const mongodb = require("../db/connect");
const objectId = require("mongodb").ObjectId;


const awesomeFunction = (req, res, next) => {
    res.json("Welcome DnD and Pathfinder nerds!");
};

const tooeleTechFunction = (req, res) => {
    res.json("Anyone seen the druid?");
};

const getAllClasses = async (req, res) => {
    try {
        const result = await mongodb.getDb().db().collection("classes").find();
        result.toArray().then((lists) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(lists);
        });
    } catch (error) {
        res.status(500).json(error);
    }
  
};

//GET single class
const getSingleClass = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb
        .getDb()
        .db()
        .collection("classes")
        .find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(list[0]);
    });
    } catch (error) {
        res.status(500).json(error);
    }
};

// CREATE classes
const createClass = async (req, res) => {
    try {
        const classes = {
          className: req.body.className,
          hitpoints: req.body.hitpoints,
          wealth: req.body.wealth,
          classAlignment: req.body.classAlignment,
        }

        const response = await mongodb
        .getDb()
        .db()
        .collection("classes")
        .insertOne(classes);
    if (response.acknowledge) {
        res.status(201).json(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occurred while creating the class."
        );
    }
    } catch (error) {
        res.status(500).json(error);
    }
};

// update one class
const updateClass = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const classes = {
            className: req.body.className,
            hitpoints: req.body.hitpoints,
            wealth: req.body.wealth,
            classAlignment: req.body.classAlignment,
        };

        const response = await mongodb
        .getDb()
        .db()
        .collection("classes")
        .replaceOne({ _id: userId}, classes);
    if (response.acknowledge) {
        res.status(204).json(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occurred while updating the classes."
        );
    }
    }catch (error) {
        res.status(500).json(error);
    }
};

// delete one class
const deleteClasses = async (req, res) => {
    try{
        const userId = new ObjectId(req.params.id);
        const response = await mongodb
        .getDb()
        .db()
        .collection("classes")
        .deleteOne({ _id: userId}, true);
    console.log(response);
    if (response.acknowledge) {
        res.status(200).send(response);
    } else {
        res
        .status(500)
        .json(
            response.error || "Some error occured while deleting the class."
        );
    }
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = { awesomeFunction, tooeleTechFunction, getAllClasses, getSingleClass, createClass, updateClass, deleteClasses  };