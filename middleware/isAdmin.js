const isAdmin = (req, res, next ) => {
    true ? next() : res.status(401).json({message: "prohibido el acceso"});
}

module.exports = {isAdmin}