let express = require("express"),
  router = express.Router(),
  controller = require("../controller/controller");

router.post("/getImpTable", controller.addEmployees);

module.exports = router;
