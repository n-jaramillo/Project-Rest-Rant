const router = require('express').Router()
const db = require('../models')

// INDEX
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

// NEW POST
router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = undefined
    }
    if (!req.body.city) {
        req.body.city = undefined
    }
    if (!req.body.state) {
        req.body.state = undefined
    }
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                let value = req.body
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `
                    message += `${err.errors[field].message}`
                }
                res.render('places/new', { message, value })
            }
            else {
                res.render('error404')
            }
        })
})

// NEW FORM
router.get('/new', (req, res) => {
    res.render('places/new')
})

// SHOW
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// EDIT FORM
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// EDIT PUT
router.put('/:id', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = undefined
    }
    if (!req.body.city) {
        req.body.city = undefined
    }
    if (!req.body.state) {
        req.body.state = undefined
    }
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// DELETE
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(place => {
            res.status(303).redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// NEW COMMENT FORM
router.get('/:id/comment', (req, res) => {
    res.render('comments/new', { id: req.params.id })
})

// NEW COMMENT POST
router.post('/:id/comment', (req, res) => {
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
})

// DELETE COMMENT
router.delete('/:id/comment/:rantId', (req, res) => {
    db.Comment.findByIdAndDelete(req.params.rantId)
        .then(() => {
            res.status(303).redirect(`/places/${req.params.id}`)
        })
})

module.exports = router