export default (err: any, res: any) => {
    if(err.name == 'ValidationError'){
        return res.status(400).json({
            message: err.message
        })
    }
    if(err.name == 'JsonWebTokenError'){
        return res.status(401).json({
            message: 'Not authorized'
        })
    }
    if(err.name == 'TokenExpiredError'){
        return res.status(401).json({
            message: 'Token expired'
        })
    }
    return res.status(500).json({
        message: 'Something went wrong'
    })
}
