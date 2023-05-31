const express = require("express");

const {
  getStaffProfile,
  createStaffProfile,
  updateStaffProfile,
  deleteStaffProfile,
  uploadDocument
} = require("../../controllers/staff/staffProfile");

const { upload } = require("../../middleware/multer");

const router = express.Router();



router.get("/", getStaffProfile);
router.post("/", upload.single("avatar"), createStaffProfile)
router.put("/", upload.any(), updateStaffProfile);
router.put("/upload", upload.any(), uploadDocument);
router.delete("/", deleteStaffProfile); // delete profile on dashboard

module.exports = router;
