
const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    createThoughts,
    updateThoughts
} = require('../../controllers/thoughtController');

const {
    createReaction
} = require('../../controllers/reactionController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThoughts);

router.route('/:thoughtId').get(getOneThought).put(updateThoughts);

router.route('/:thoughtId/reactions').post(createReaction);

module.exports = router;