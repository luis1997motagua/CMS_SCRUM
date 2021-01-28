import {Schema,model} from 'mongoose'
const userSchema = new Schema({
    username:{
      type:String,
      required:true
    },
    actividades:{
        type:[String],
        required:true
    },
    fechainicio:{
        type:String,
        required:true
    },
    fechafinalizacion:{
        type:String,
        required:true
    },
    tipoactividad:{
        type:String,
        required:true
    },
    coloractividad:{
        type:String,
        required:true
    },
    fechacumplimiento:{
        type:String
    }
 },
 {
     timestamps:true,
     versionKey:false,
 }
);

export default model("Tasks",userSchema);