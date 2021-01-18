const router = require("express").Router();

//user registrar ruta
router.post("/registro-user",async(req,res)=>{

});
//admin registrar ruta
router.post("/registro-admin",async(req,res)=>{
    
});
//superadmin registrar ruta
router.post("/registro-superadmin",async(req,res)=>{
    
});

//user login ruta
router.post("/login-user",async(req,res)=>{

});
//admin login ruta
router.post("/login-admin",async(req,res)=>{
    
});
//superadmin login ruta
router.post("/login-superadmin",async(req,res)=>{
    
}); 

//user protected ruta
router.post("/user-profile",async(req,res)=>{

});
//admin protected ruta
router.post("/admin-profile",async(req,res)=>{
    
});
//superadmin protected ruta
router.post("/superadmin-profile",async(req,res)=>{
    
}); 


module.exports = router;