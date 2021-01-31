import {Schema,model} from 'mongoose'
const TaskUserSchema = new Schema({
    username:{
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
    fechacumplimiento:{
        type:String,
        default:""
    },
    tarea : [{ type: Schema.Types.ObjectId, ref: 'Tasks' ,default:""}],
 },
 {
     timestamps:true,
     versionKey:false,
 }
);

export default model("TaskUser",TaskUserSchema);