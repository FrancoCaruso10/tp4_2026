import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Usuario } from '../models/index.js';
import { JWT_SECRET } from '../config.js';

const crearUsuario = async (id, nombre, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await Usuario.create({ id, nombre, password: hashedPassword });
};

const login = async (id, password) => {
  const dbUser = await Usuario.findByPk(id);
  if (!dbUser) return { error: 'Usuario no encontrado' };

  const passOK = await bcrypt.compare(password, dbUser.password);
  if (!passOK) return { error: 'Clave invalida' };

  const payload = { id: dbUser.id, nombre: dbUser.nombre, rol: dbUser.rol };
  const token = jwt.sign(payload, JWT_SECRET);
  return { token };
};

export default { crearUsuario, login };
