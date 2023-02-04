module.exports.isAdmin = (res, req, next) => {
    const {role} = req.user
    if(role === 'admin'){
        next()
    }else {
        return res.status(403).json({
            error:{
                message: 'Non-authuticate member cannot access into system'
            }
        })
    }
}