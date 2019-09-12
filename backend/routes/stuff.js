const express = require ('express');
const router  = express.Router();


const stuffcontroller = require("../controllers/stuff")

router.post("/",stuffcontroller.createThing);

router.get('/:id',stuffcontroller.findOnething);

router.put("/:id", stuffcontroller.modifyThing);

router.delete("/:id",stuffcontroller.deleteThing);


router.get("/", stuffcontroller.displayThings )


module.exports = router;