import {Schema,model} from 'mongoose'
export const Roles = ["Encargado","Auditor","SuperAdmin"]
const roleSchema = new Schema(
 {
     name:String,
 },
 {
    versionKey:false,
 }
);

export default model("Role",roleSchema);