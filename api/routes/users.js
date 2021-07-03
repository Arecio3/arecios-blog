const router = require('express').Router();
const User = require('../models/User')

// Register Route
router.post('/register', async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})



module.exports = router