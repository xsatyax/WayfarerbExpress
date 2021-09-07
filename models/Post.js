const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const City = require('./Cities')


const postSchema = new Schema ({
    title: String,
    content: String,
    img: String,
    cities: { type:mongoose.Types.ObjectId, ref: 'Cities'}
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post