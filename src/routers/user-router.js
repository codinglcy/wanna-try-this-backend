import { Router } from "express";
import { userService } from '../services/index.js';
import { loginRequired } from '../middlewares/login-required.js';

const userRouter = Router();

userRouter.post("/", async(req, res) => {
    const userInfo = req.body;
    const newUser = await userService.addUser(userInfo);

    res.status(201).json(newUser);
});

userRouter.get('/', async(req, res, next) => {
    const userId = req.currentUserId;
    
    try{
        const user = await userService.getUser(userId);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
});

userRouter.patch('/nickname', loginRequired, async(req, res, next) => {
    const {userId, newNickname} = req.body;

    try{
        const updateNickname = await userService.editUserNickname(userId, newNickname);
        res.status(200).json(updateNickname);
    }catch(err){
        next(err);
    }
    
});

userRouter.patch('/addFood', loginRequired, async(req, res, next) => {
    const {userId, addFoodId} = req.body;
    
    try{
        const updateUserFood = await userService.addUserFood(userId, addFoodId);
        res.status(200).json(updateUserFood);
    }catch(err){
        next(err);
    }
});

// TODO #1: router 동작확인
// TODO #2: express-validator로 입력값 검증
userRouter.get("/logout", async(req, res) => {
// userRouter.get("/logout", loginrequired, async(req, res) => {
    try {
        req.logout();
        req.session.save(() => {
            res.status(200).redirect('/');
        })
    } catch (error) {
        next(error);
    }
})

userRouter.delete("/:userId", async(req, res) => {
// userRouter.delete("/", loginrequired, async(req, res) => {
    try {
        const deletedUser = await userService.deleteUser(req.params);
        res.status(200).json(deletedUser);
    } catch (error){
        next(error);
    }
})

export { userRouter };