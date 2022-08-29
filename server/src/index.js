//import express  from 'express';
//import cors from 'cors';
//import mysql from 'mysql';
//import fileUpload from 'express-fileupload';
//import bodyParser from 'body-parser';
//import { fileURLToPath } from 'url';
//import { dirname } from 'path';
//import connection from './connection';

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const fileURLToPath = require('url');
const dirname = require ('path');

const app = express();
const port = process.env.PORT || 4000 ;
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);
app.use(fileUpload());
app.use(bodyParser());
app.use(express.json({extended: false})); 


// CORS POLICY
const dominios = ['http://localhost:3000'];
const corsOptions = {
    origin: true
}
app.use(cors(corsOptions));

app.listen(port, () => {});


//DATABASE

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "movies"
});


//AGREGAR 
app.post("/agregar", (req, res) => {
    const file = req.files.file;
    const filename = file.name;
    //console.log('body :', req.body);

    let path = __dirname + './../../src/assets/img/';

    file.mv(`${path}${filename}`, (err) => {
        if (err) {
          res.status(500).send({ message: "File upload failed", code: 200 });
        }
    });

    const sql = 'INSERT INTO movie  SET ?';
    const values = {'titulo': req.body.titulo, 
                    'sinopsis': req.body.sinopsis, 
                    'año': req.body.year, 
                    'imagen': req.body.fileName};
    //console.log(values);
    con.query(sql, values, function (err, result) {
        if (err) throw err;
    });


    res.sendStatus(200);
});

// RETORNAR DATOS
app.get("/fetch", (req, res) => {
    const sql = 'SELECT * FROM movie';
    let resultado;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// DELETE

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;

    const borrar = () => {
        console.log(`borrando id ${id}`);
        let sql = `DELETE FROM movie WHERE id = ${id}`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            if ( result.affectedRows == 1 ){
                res.json('Eliminado');
            } else {
                res.json('No se pudo eliminar');
            }
        });
    }

    let sql = `SELECT * FROM movie WHERE id = ${id}`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.length);
        if ( result.length > 0 ){
            console.log("existe");
            borrar();
        } else {
            res.json('Movie not found');
        }
    });
});

