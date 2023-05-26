const express = require("express");

const {
  getStaffProfile,
  createStaffProfile,
  updateStaffProfile,
  deleteStaffProfile,
} = require("../../controllers/staff/staffProfile");


const router = express.Router();
//const { upload } = require("../../middleware/multer");


router.get("/", getStaffProfile);
// router.post("/", upload.single("avatar"), createAgentProfile)
router.post("/", createStaffProfile);
//router.put("/", upload.single("avatar"), updateAgentProfile); // update profile on dashboard
router.put("/", updateStaffProfile); // update profile on dashboard
router.delete("/", deleteStaffProfile); // delete profile on dashboard

module.exports = router;
