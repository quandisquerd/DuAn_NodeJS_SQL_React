import { Sequelize, DataTypes } from 'sequelize';
import connection from '../database';

const sequelize = new Sequelize('node_JS', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    port:'3001'
});

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'category', // Tên bảng trong cơ sở dữ liệu
    timestamps: false // Không sử dụng các trường timestamps (createdAt, updatedAt)
});

// Sử dụng phương thức sync() để tạo bảng trong cơ sở dữ liệu
Category.sync()
    .then(() => {
        console.log('Bảng "category" đã được tạo thành công.');
    })
    .catch((err) => {
        console.error('Lỗi khi tạo bảng "category":', err);
    });

export default Category;