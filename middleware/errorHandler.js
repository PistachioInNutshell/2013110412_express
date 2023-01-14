module.exports = (err, req, res, next) => {

    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        status_code: statusCode,
        message: 'error : ' + err.messages
    })
    /*res.status(404).json({
        status_code: 404,
        massage: 'error : ' + err.message
    })*/
}