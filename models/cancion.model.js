import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Cancion = sequelize.define('Cancion', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING },
}, {
  tableName: 'cancion',
  timestamps: false,
});

export default Cancion;
