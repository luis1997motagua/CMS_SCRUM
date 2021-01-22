import {Schema,model} from 'mongoose'
const userSchema = new Schema({
    fechainicial:{
        type:Date,
        required:true
    },
    fechafinalizacion:{
        type:Date,
        required:true
    },
    tipoactividad:{
        type:String,
        required:true
    },
    actividades:{
        type:[String],
        required:true
    },
    coloractividad:{
        type:String,
        required:true
    },
    fechacumplimiento:{
        type:Date
    },
    enlacearchivo:{
        type:String
    },
    comentario:{
        type:String
    },
    user : [{ type: Schema.Types.ObjectId, ref: 'User' }]
 },
 {
     timestamps:true,
     versionKey:false,
 }
);

export default model("Tasks",userSchema);