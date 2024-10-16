const uuid=require('uuid')
const path = require('path');
const {Usluga} = require('../models/models')
const ApiError=require('../error/ApiError');


class uslugaControllers {
    async create(req,res, next){
        try {
            const {name, price,typeId,info}= req.body
        const {img}=req.files
        let fileName = uuid.v4() +".jpg"
        img.mv(path.resolve(__dirname,'..', 'static',fileName))

        const device =await Usluga.create({name, price, typeId,img: fileName})

        return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req,res){

    }
    async getOne(req,res){

    }
}
module.exports = new uslugaControllers()
