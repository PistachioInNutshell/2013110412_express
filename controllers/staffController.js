const Staff = require('../models/staff')
  
exports.index = async (req, res, next) => {
    const staff = await Staff.find().sort({ _id: -1 });
    res.status(200).json({
    data: staff,
    });
};

exports.show = async (req, res, next) => {

    try{
        const {id} = req.params
        const staff = await Staff.findOne({
            id : id
        });

        if(!staff){
            const error = new Error('ไม่พบผู้ใช้งาน')
            error.statusCode = 400
            throw error;
        }
        else{
            res.status(200).json({
                data: staff,
            })
        } 

    }catch (error){
        next(error)
    }
}

exports.insert = async (req, res, next) => {

    const {name, salary} = req.body

    let staff = new Staff({
        name : name,
        salary : salary,
    });
    await staff.save()

    return res.status(200).json({ 
        message: 'เพิ่มข้อมูลเรียบร้อยแล้ว',
    });
};

exports.destroy = async (req, res, next) => {

    try{
        const {id} = req.params
        const staff = await Staff.deleteOne({
            id : id
        });
        //console.log(staff)
        if(staff.deleteCount === 0){
            const error = new Error('ไม่สามารถลบข้อมูลผู้ใช้งานได้ / ไม่พบข้อมูลผู้ใช้งาน')
            error.statusCode = 400
            throw error;
        }else {
            return res.status(200).json({ 
                message: 'ลบข้อมูลเรียบร้อยแล้ว',
            });
        }

    }catch (error){
        next(error)
    }
}

exports.update = async (req, res, next) => {

    try{
        const {id} = req.params
        const {name, salary} = req.body

        /*const staff = await Staff.findById(id)
        staff.name = name
        staff.salary = salary 
        await staff.save()*/

        /*const staff = await Staff.findByIdAndUpdate(id,{
            name: name, 
            salary: salary
        })*/

        const staff = await Staff.updateOne({_id : id}, {
            name: name,
            salary: salary
        })

        console.log(staff)

        return res.status(200).json({ 
            message: 'แก้ไขข้อมูลเรียบร้อยแล้ว',
        });
    }catch (error){
        next(error)
    }
};
  