
const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema(
  { ownerName: String, totalArea: Number, availableArea: Number, usedArea : Number },
  { timestamps: true }
);

module.exports = mongoose.model("property", propertySchema);
