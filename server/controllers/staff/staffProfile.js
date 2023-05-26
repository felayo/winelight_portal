const Staff = require("../../models/staff/staffModel.js");
const asyncHandler = require("express-async-handler");
const ErrorResponse = require("../../utils/errorResponse");

exports.getStaffProfile = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const staff = await Staff.findOne({ user: userId }).populate({
    path: "user",
    select: "email",
    model: "User",
  });
  if (!staff)
    return next(
      new ErrorResponse("No staff account was found for this user", 404)
    );

  res.status(200).json({
    success: true,
    message: "Account Retrieved Successfully!",
    data: staff,
  });
});

exports.createStaffProfile = asyncHandler(async (req, res, next) => {
  const file = req.file;
  const userId = req.user.id;

  let staff = await Staff.findOne({ user: userId });
  if (staff) {
    return next(
      new ErrorResponse("Account already exists for this user!", 422)
    );
  }

  if (file) {
    const avatar = {
      name: file.fieldname,
      file: file.path,
    };
    req.body.avatar = avatar;
  }
  req.body.user = userId;
  // req.body.department = req.params.deptId
  staff = await Staff.create(req.body);
  res
    .status(201)
    .json({
      success: true,
      message: "Staff profile created successfully",
      data: staff,
    });
});

exports.updateStaffProfile = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  let staff = await Agent.findOne({ user: userId });
  if (!staff)
    return next(
      new ErrorResponse("No staff account was found for this user", 404)
    );

  staff = await Staff.findOneAndUpdate({ user: userId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "Account update successful",
    data: others,
  });
});

exports.deleteStaffProfile = asyncHandler(async (req, res, next) => {
  const staffID = req.user.id;
  const staff = await Staff.findOne({ user: staffID });
  if (!staff)
    return next(
      new ErrorResponse("No staff account was found for this user", 404)
    );

  await Staff.findOneAndDelete({ user: staffID });
  res.status(200).json({
    success: true,
    message: "Account deleted successfully!",
  });
});
