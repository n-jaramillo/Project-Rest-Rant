const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml.jpg' // imgCredit: Photo by <a href="https://unsplash.com/@sevcovic23?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Petr Sevcovic</a> on <a href="https://unsplash.com/photos/qE1jxYXiwOA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coding-cat-cafe.jpg' // imgCredit: Photo by <a href="https://unsplash.com/@sevcovic23?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Petr Sevcovic</a> on <a href="https://unsplash.com/photos/fyQr1T3GE34?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    }]

    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/show', (req, res) => {
    res.render('places/show')
})

router.get('/edit', (req, res) => {
    res.render('places/edit')
})

module.exports = router