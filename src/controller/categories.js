import connection from "../database";
import Category from "../model/categories";

export const AddCat = async (req, res, next) => {
    try {
        const { name } = req.body;
        const data = await Category.create({ name })
        return res.json({ message: 'Add thanh cong', data })
    } catch (err) {
        return res.status(400).json({ message: 'Loi api' })
    }
}