const multer = require('multer');
import path from 'path';
const storage = multer.diskStorage({
    destination: path.join(__dirname,'../public/storage/imgs') 
     ,
      filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now()+'.pdf')
      }
})


export default multer({storage:storage});
