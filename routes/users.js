const { create, all, update, destroy } = require('../controllers/users');
const { userValidation } = require('../middlewere/validation.input');

const router = require('express').Router();

router.post("/", userValidation, create);
router.get("/", all);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router