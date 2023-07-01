import { Sequelize, DataTypes } from 'sequelize';
import connection from '../database';
import Category from './categories';
const sequelize = new Sequelize('node_JS', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    port: '3001'
});


const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        }
    }
}, {
    tableName: 'product', // Tên bảng trong cơ sở dữ liệu
    timestamps: false // Không sử dụng các trường timestamps (createdAt, updatedAt)
});
// Sử dụng phương thức sync() để tạo bảng trong cơ sở dữ liệu
Product.sync()
    .then(() => {
        console.log('Bảng "product" đã được tạo thành công.');
    })
    .catch((err) => {
        console.error('Lỗi khi tạo bảng "product":', err);
    });
export default ('Product', Product)