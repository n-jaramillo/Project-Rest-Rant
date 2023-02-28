// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/h-thai-ml.jpg', // imgCredit: Photo by <a href="https://unsplash.com/@sevcovic23?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Petr Sevcovic</a> on <a href="https://unsplash.com/photos/qE1jxYXiwOA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//     founded: '1994'
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/coding-cat-cafe.jpg', // imgCredit: Photo by <a href="https://unsplash.com/@sevcovic23?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Petr Sevcovic</a> on <a href="https://unsplash.com/photos/fyQr1T3GE34?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//     founded: '1991'
// }]

const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: '/images/chia-fruit-drink.jpg'},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    }
})

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)