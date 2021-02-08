import {Schema,model} from 'mongoose'
const userSchema = new Schema({
    titulo:{
      type:String,
      unique:true
    },
    estado:{
        type:String,
    },
    fechacumplimiento:{
        type:String,
        default:""
    },
    color:{
        type:String,
    }
 },
 {
     timestamps:true,
     versionKey:false,
 }
);

export default model("Taskstate",userSchema);