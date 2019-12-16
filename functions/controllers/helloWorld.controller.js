'use strict'

const postHello = async(req, res) => {
    console.log('ES UN POST');
    console.log(req);
    return res.status(200).send({
        message: 'Se hizo el post correctamente.'
    });
};

const getAllHello = async(req, res) => {
    console.log('ES UN GETALL');
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    return res.status(200).send({
        message: 'Se hizo el getAll correctamente.'
    });
};

const getHello = async(req, res) => {
    console.log('ES UN GET');
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    return res.status(200).send({
        message: 'Se hizo el get correctamente.'
    });
};

const putHello = async(req, res) => {
    console.log('ES UN PUT');
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    return res.status(200).send({
        message: 'Se hizo el put correctamente.'
    });
};

const delHello = async(req, res) => {
    console.log('ES UN DEL');
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    return res.status(200).send({
        message: 'Se hizo el del correctamente.'
    });
};

module.exports = {
    postHello,
    getAllHello,
    getHello,
    putHello,
    delHello
}