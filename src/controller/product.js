import Product from "../model/product";

export const AddProduct = async (req, res, next) => {
    try {
        const { name, price, image, description, cat_id } = req.body;
        const data = await Product.create({ name: name, price: price, image: image, description: description, cat_id: cat_id })
        return res.json({ message: 'Add thanh cong', data })
    } catch (err) {
        return res.json({ message: 'Loi api' })
    }
}

export const RemoveProduct = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = await Product.findByPk(id)
        data.destroy()
        return res.json({ message: 'DELETE thanh cong', data })
    } catch (err) {
        return res.json({ message: 'Loi api' })
    }
}
export const GetAllProduct = async (req, res, next) => {
    try {

        const data = await Product.findAll()

        return res.json({ message: 'Lay thanh cong', data })
    } catch (err) {
        return res.json({ message: 'Loi api' })
    }
}
export const GetOneProduct = async (req, res, next) => {
    try {

        const data = await Product.findByPk(req.params.id)
        if (!data) {
            return res.json({ message: 'Khong co san pham' })
        }
        return res.json({ message: 'Lay 1 thanh cong', data })
    } catch (err) {
        return res.json({ message: 'Loi api' })
    }
}