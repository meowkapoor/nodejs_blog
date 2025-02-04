const User = require('../models/user');

async function handleGet(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetbyId(req,res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"});
    return res.json(user);
}

async function handlePatch(req,res){
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {last_name: "Changed"});
        return res.json({status: "success"});
    } catch(err) {
        return res.status(500).json({ status: "error", message: "failed to save updates" });
    }
}

async function handleDelete(req,res){
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.json({status: "success"});
    } catch(err) {
        res.status(500).json({status: "error", message: "failed to save updates"});
    }
}

async function handlePost(req,res){
    const body = req.body;
    if( !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({error: "all fields are required"});
    }

    try{
        const result = await User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title
        });

        return res.status(201).json({msg: "success"});
    
    }
    catch (err){
        return res.status(500).json({msg: "something went wrong", error: err.message});
    }
}

module.exports = {
    handleGet,
    handleGetbyId,
    handlePatch,
    handleDelete,
    handlePost
}