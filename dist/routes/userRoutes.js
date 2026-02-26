import express from "express";
import { deleteUser, getBankDetails, getFamily, getNominee, getUserByEmpId, getUserById } from "../controllers/userController.js";
const router = express.Router();
router.get("/get-user/:id", getUserById);
router.get("/get-family/:id", getFamily);
router.get("/get-nominee/:id", getNominee);
router.get("/get-bank/:id", getBankDetails);
router.get("/get-user/:employeeId", getUserByEmpId);
router.get("/detele-user", deleteUser);
export default router;
//# sourceMappingURL=userRoutes.js.map