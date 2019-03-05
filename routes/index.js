const express = require('express')
const router = express.Router()

const resource = require('../resources')

router.get('/json', async (req , res)=>{
    try{
        res.send(await resource().all())
    }catch(err){
        console.log(err)
    }
})

module.exports = router