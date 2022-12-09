module.exports =
     function (req, res, next) {
         res.actions = "middleware before routing , here you can redirect, intercept or....."
        next();
}

