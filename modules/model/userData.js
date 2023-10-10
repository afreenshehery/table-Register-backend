"use strict";

let mongoose = require("../config/db");
let Schema = mongoose.Schema;

let schemaDefinition = new Schema(
  {
    Emp_ID: { type: Number },
    Name: { type: String },
    Location: { type: String },
    Geography: { type: String },
    Cost_Centre: { type: String },
    Job_Code: { type: String },
    Table_Number: { type: Number },
    Participant: { type: String },

    created_at: { type: Date, default: () => Date.now() },
    updated_at: { type: Date, default: () => Date.now() },
  },
  { versionKey: false, collection: "userDetails" }
);

let exportModel = mongoose.model("userDetails", schemaDefinition);

module.exports = exportModel;

// isUser_firstTime:{type:String,default: true},
