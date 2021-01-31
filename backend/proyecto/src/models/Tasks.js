import {Schema,model} from 'mongoose'
const userSchema = new Schema({
    titulo:{
      type:String,
      required:true,
      unique:true
    },
    actividades:{
        type:[String],
        required:true
    },
    estado:{
        type:String,
        required:true
    },
    encargado:{
        type:String,
        default:""
    }
 },
 {
     timestamps:true,
     versionKey:false,
 }
);

export default model("Tasks",userSchema);