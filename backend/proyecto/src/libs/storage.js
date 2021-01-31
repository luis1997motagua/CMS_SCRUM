const multer = require('multer');
import path from 'path';

const storage = multer.diskStorage({
     destination: function(req,file,cb){
       cb(null,'../public/storage/imgs')
     },
     filename : function(req,file,cb){
       cb(null,`${file.fieldname}-${Date.now()}`)
     }
})

/*const storage = multer.diskStorage({
    destination: path.join(__dirname,'../public/storage/imgs') 
     ,
      filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now()+'.pdf')
      }
})*/

const upload = multer({storage})

module.exports = upload