const { Post, Visitor } = require('../../models')

module.exports = {
    home: async (req, res) => {
        const locals = {
            data: [{
                Post: await Post.count(), 
                Visitors: await Visitor.count(), 
                Reader: await Post.sum('read')
            }],
            contentName: 'Statistic',
            layout: 'layouts/dashboard'
        }
        res.render('pages/dashboard/home', locals)
    },
    post: require('./post')
}