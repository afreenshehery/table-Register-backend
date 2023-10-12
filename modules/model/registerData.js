"use strict";

let mongoose = require("../config/db");
let Schema = mongoose.Schema;

let schemaDefinition = new Schema(
  {
    Emp_ID: { type: Number },
    Name: { type: String },
    created_at: { type: Date, default: () => Date.now() },
    updated_at: { type: Date, default: () => Date.now() },
  },
  { versionKey: false, collection: "registerData" }
);

let exportModel = mongoose.model("registerData", schemaDefinition);

module.exports = exportModel;

// isUser_firstTime:{type:String,default: true},
