const router = require('express').Router();

router.post('/register', (req, res)=>{
    res.send("Register");
})
/*router.post('/ligin',(req,res)=>{
    res.send('login');
})*/

module.exports = router;