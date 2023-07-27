
const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    createThoughts,
    updateThoughts,
    deleteThoughts
} = require('../../controllers/thoughtController');

const {
    createReaction,
    deleteReaction
} = require('../../controllers/reactionController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThoughts);

router.route('/:thoughtId')
.get(getOneThought)
.put(updateThoughts)
.delete(deleteThoughts);

router.route('/:thoughtId/reactions/')
.post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;