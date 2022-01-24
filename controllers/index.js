module.exports = {
    home: (req, res) => res.render('pages/default/home.ejs'),
    notFound: (req, res) => res.render('pages/default/not-found.ejs'),
    exception: (req, res) => res.render('pages/default/exception.ejs'),
    dashboard: require('./dashboard'),
    auth: require('./auth')
}