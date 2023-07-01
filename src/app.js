import express from "express";
import cors from "cors";
import connection from "./database"
import CategoryRouter from "./router/categories"
import ProductRouter from "./router/product"

const app = express();
// middleware
app.use(express.json());
app.use(cors());


app.use('/api', CategoryRouter)
app.use('/api', ProductRouter)



connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối:', err);
        return;
    }
    console.log('okok');
    // Kết nối thành công, thực hiện các truy vấn ở đây
});
export const viteNodeApp = app;

// npm i vite vite-plugin-node -D
// Tạo file vite.config.js ở root -> clone github của thầy
// truy cập file app.js thêm cuối file -> export const viteNodeApp = app;
// Truy cập file package.json, sửa lại script -> npm run dev