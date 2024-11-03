import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//REGISTER
//http://localhost:2202/api/auth/register
router.post("/register", register);

//LOGIN
//http://localhost:2202/api/auth/login
router.post("/login", login);

//GET ME
//http://localhost:2202/api/auth/me
router.get("/me", checkAuth, getMe);

export default router;
