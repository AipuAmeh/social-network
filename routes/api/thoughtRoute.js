
const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    createThoughts
} = require('../../controllers/thoughtController');

const {
    createReaction
} = require('../../controllers/reactionController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThoughts);

router.route('/:thoughtId').get(getOneThought);

router.route('/:thoughtId/reactions').post(createReaction);

module.exports = router;