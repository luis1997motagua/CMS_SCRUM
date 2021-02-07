import {Schema,model} from 'mongoose'
const TaskUserSchema = new Schema({
    encargado:{
      type:String,
      required:true
    },
    fechainicio:{
        type:String,
        required:true
    },
    fechafinal:{
        type:String,
        required:true
    },
    tarea : [{ type: Schema.Types.ObjectId, ref: 'Tasks' ,default:""}],
 },
 {
     timestamps:true,
     versionKey:false,
 }
);

export default model("TaskUser",TaskUserSchema);