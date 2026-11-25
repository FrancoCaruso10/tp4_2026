import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Usuario = sequelize.define('Usuario', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  nombre: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  rol: { type: DataTypes.CHAR(1), allowNull: false, defaultValue: 'U' },
  fan: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
}, {
  tableName: 'usuario', // la tabla que ya existe en Neon
  timestamps: false,    // la tabla no tiene columnas createdAt / updatedAt
});

export default Usuario;
