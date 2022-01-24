const moment = require('moment')
const posts = [
    {id: 1, title: 'Lorem Ipsum', body: 'Body text', createdAt: Date()},
    {id: 2, title: 'Dolor Sit Amet', body: 'Text body', createdAt: Date()}
]
module.exports = {
    index: (req, res) => {
        const locals = {
            data: {
                posts: posts.map(i => {
                    i.fromNow = moment(i.createdAt).fromNow()
                    return i
                }),
            },
            contentName: 'Post'
        }
        res.render('pages/dashboard/post', locals)
    }
}