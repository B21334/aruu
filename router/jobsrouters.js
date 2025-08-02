import express from "express";
import {getalljobs, getjobbyid, postjob,updatejob} from '../controller/jobcontronller.js';
const routers=express.Router();

//routes
routers.post('/jobs/:adminid',postjob);
routers.get('/jobs',getalljobs);
routers.get('/jobs/:id',getjobbyid);
routers.put('/jobs/:id/:adminid',updatejob);
routers.delete('/jobs/:id/:adminid',deletejob);
routers.post('/import/:id/:adminid',importjob);
export default routers