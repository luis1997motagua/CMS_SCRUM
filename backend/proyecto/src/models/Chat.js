import {Schema,model} from 'mongoose';


const chatSchema = new Schema({
    username:{
        type:String
    },
    comentario:{
        type:String,
    },
    archivo:{
        type:String
    },
    fechahora:{
        type:String,
    }
 },
 {
     timestamps:true,
     versionKey:false,
 }
);


export default model("Chat",chatSchema);