const express = require("express");
const router = express.Router();


//  로그아웃을 수행한다.
//  사용중인 세션을 삭제 한다. 
router.post("/", (req, res) => {
    req.session.destroy(function(){ 
        req.session;
    });
    return res.json({
            data : {auth : false}
    })
});


module.exports = router;