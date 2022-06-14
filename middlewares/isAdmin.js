//Export logic
module.exports = (req, res, next) => {
    // pick the token
    let token = req.headers.authorization.split(' ')[1];
    // pick the user logged
    let {user} = jwt.decode(token, authConfig.secret)
    try {
        if (user.rol == "admin") {
            next();
        } else {
            res.status(403).send({ msg: `User is not allowed.` });
        }
    } catch (error) {
        res.status(400).json({
            msg: `Something went wrong! Try checking the info and try again.`,
            error: error
        });
    }

};