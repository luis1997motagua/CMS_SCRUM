import {Schema,model} from 'mongoose';


const chatSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    comentario:{
        type:String,
        unique:true
    },
    archivo:{
        type:String
    },
    fechahora:{
        type:String,
        unique:true
    }
 },
 {
     timestamps:true,
     versionKey:false,
 }
);


export default model("Chat",chatSchema);