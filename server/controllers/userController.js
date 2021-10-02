const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: "24h" });
};

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;

        if (!email || !password) {
            next(ApiError.badRequest("Некорректный email или password"));
        }

        const candidate = await User.findOne({ where: { email } });

        if (candidate) {
            next(ApiError.badRequest("Пользователь с таким email уже существует"));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, password: hashPassword });
        const token = generateJwt(user.id, user.email, user.role);

        return res.json({ token });
    }

    async login(req, res) {}

    async check(req, res, next) {
        const {
            query: { id },
        } = req;
        if (!id) {
            return next(ApiError.badRequest("Не задан ID"));
        }
        res.json(id);
    }
}

module.exports = new UserController();
