const express = require("express");

const {
    askNewQuestion,
    getAllQuestions,
    getSingleQuestion,
    editQuestion
} = require("../controllers/question");

const {
    getAccessToRoute,
    getQuestionOwnerAccess
} = require("../middlewares/authorization/auth");

 

const router = express.Router();


// Ask New Question
// Permissions - Only Logged In Users
router.get("/",getAllQuestions);
router.get("/:id",getSingleQuestion);
router.post("/ask",getAccessToRoute,askNewQuestion);
router.put("/:id/edit",[getAccessToRoute,getQuestionOwnerAccess],editQuestion);



module.exports = router;
