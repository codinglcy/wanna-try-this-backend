import jwt from 'jsonwebtoken';

function loginRequired(req, res, next) {
    const userToken = req.headers['authorization']?.split(' ')[1];

    if(!userToken || userToken === 'null'){
        res.status(403).json({
            result: "forbidden-approach",
            reason: "로그인한 유저만 사용할 수 있는 서비스입니다."
        });
        return;
    }

    try{
        const secretKey = process.env.JWT_SECRET || "secret-key";
        const jwtDecoded = jwt.verify(userToken, secretKey);

        const userId = jwtDecoded.userId;

        req.currentUserId = userId;

        next();
    }catch(err){
        res.status(403).json({
            result:"forbidden-approach",
            reason: "정상적인 토큰이 아닙니다."
        });
        return;
    }

}

export {loginRequired};