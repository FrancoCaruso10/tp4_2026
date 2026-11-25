import { Usuario, Cancion, Escucha } from '../models/index.js';

const getEscuchas = async (usuarioId) => {
  // Equivale al JOIN entre escucha y cancion
  const escuchas = await Escucha.findAll({
    where: { usuario_id: usuarioId },
    include: [{ model: Cancion, as: 'cancion', attributes: ['nombre'] }],
  });
  return escuchas.map((e) => ({ nombre: e.cancion.nombre, reproducciones: e.reproducciones }));
};

const registrarEscucha = async (usuarioId, cancionId) => {
  const cancion = await Cancion.findByPk(cancionId);
  if (!cancion) return null;

  // Si ya la escuchó suma una reproducción, si no crea el registro
  let escucha = await Escucha.findOne({
    where: { usuario_id: usuarioId, cancion_id: cancionId },
  });
  if (escucha) {
    escucha.reproducciones = escucha.reproducciones + 1;
    await escucha.save();
  } else {
    escucha = await Escucha.create({ usuario_id: usuarioId, cancion_id: cancionId, reproducciones: 1 });
  }

  // Ejercicio 6: más de 10 canciones => fan
  const cantidad = await Escucha.count({ where: { usuario_id: usuarioId } });

  let fan = false;
  if (cantidad > 10) {
    await Usuario.update({ fan: true }, { where: { id: usuarioId } });
    fan = true;
  }

  return { escucha, cancionesEscuchadas: cantidad, fan };
};

export default { getEscuchas, registrarEscucha };
