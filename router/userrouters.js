
import express from 'express'

const router=express.Router();
import { forgotpassword, getallusers, login, register, updateuser, deleteuser} from '../controller/usercontroller.js';

router.post('/register',register);
router.post('/login',login);
router.get('/getusers',getallusers);
router.put('/updateuser/:id',updateuser)
router.patch('/forgotpassword/:id',forgotpassword);
router.delete('/deleteuser/:id',deleteuser)
export default router