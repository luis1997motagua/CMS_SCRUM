import {Schema,model} from 'mongoose'
const userSchema = new Schema({
    titulo:{
      type:String,
      required:true,
      unique:true
    },
    estado:{
        type:String,
        required:true
    },
    fechacumplimiento:{
        type:String,
        default:""
    },
    color:{
        type:String,
        required:true
    }
 },
 {
     timestamps:true,
     versionKey:false,
 }
);

export default model("Taskstate",userSchema);