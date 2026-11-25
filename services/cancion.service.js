import { Cancion, Escucha } from '../models/index.js';

const crearCancion = async (nombre) => {
  return await Cancion.create({ nombre });
};

const modificarCancion = async (id, nombre) => {
  const cancion = await Cancion.findByPk(id);
  if (!cancion) return null;
  cancion.nombre = nombre;
  await cancion.save();
  return cancion;
};

const borrarCancion = async (id) => {
  const cancion = await Cancion.findByPk(id);
  if (!cancion) return null;
  // Primero sus escuchas (por la FK), después la canción
  await Escucha.destroy({ where: { cancion_id: id } });
  await cancion.destroy();
  return cancion;
};

export default { crearCancion, modificarCancion, borrarCancion };
