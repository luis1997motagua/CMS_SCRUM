const multer = require('multer');
import path from 'path';
const storage = multer.diskStorage({
    destination:'../public/storage/imgs'
     ,
    filename:function(req,file,cb){
        cb(null,path.extname(file.originalname));
    }
})


export default multer({storage});
