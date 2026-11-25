import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Escucha = sequelize.define('Escucha', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  cancion_id: { type: DataTypes.INTEGER, allowNull: false },
  reproducciones: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
}, {
  tableName: 'escucha',
  timestamps: false,
});

export default Escucha;
