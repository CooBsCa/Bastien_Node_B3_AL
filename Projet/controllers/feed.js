import Post from '../models/post.js';
import { validationResult } from 'express-validator';
import multer from "multer";

//setup multer upload directory
const upload = multer({ dest: 'uploads/' })

const getCity = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                "cityName": "Lisbonne",
                "countryName": "Portugal",
                "population": 65000000
            }
        ]
    });
};

const createCity = (req, res) => {
    console.log('here');
    console.log('body', req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: 'Validation failed, entered data is incorrect.',
            errors: errors.array()
        });
    }
    const cityName = req.body.cityName;
    const countryName = req.body.countryName;
    const population = req.body.population;
    const post = new Post({
        cityName: cityName,
        countryName: countryName,
        population: population
    });
    post
        .save()
        .then(result => {
            res.status(201).json({
                message: 'City created successfully!',
                post: result
            });
        })
        .catch(err => {
            console.log(err);
        });
};

const imageUpload = (req, res) => {
        console.log(req.file);
        //key value name for postman
        upload.single('image');
        res.send('upload réussi!');
};

export default { getCity, createCity, imageUpload };