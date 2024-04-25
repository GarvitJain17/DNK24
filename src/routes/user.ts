import express from "express";
import { deleteUser, getAllUsers, getUser, newUser } from "../controllers/user.js";
import { get } from "http";
import { adminOnly } from "../middlewares/auth.js";
const app = express.Router();

// route - /api/v1/user/new
app.post("/new",newUser)
// route - /api/v1/user/all
app.get("/all",adminOnly,getAllUsers)
// route - /api/v1/user/getUser
//chaining of routes
app.route("/:id").get(getUser).delete(adminOnly,deleteUser)
export default app ;

