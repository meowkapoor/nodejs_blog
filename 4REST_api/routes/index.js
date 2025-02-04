const express = require('express');

const {
    handleGet,
    handleGetbyId,
    handlePatch,
    handleDelete,
    handlePost
} = require('../controllers/user');

const router = express.Router();

router
    .route('/')
        .get(handleGet)
        .post(handlePost);

router
    .route('/:id')
        .get(handleGetbyId)
        .patch(handlePatch)
        .delete(handleDelete);

module.exports = router;