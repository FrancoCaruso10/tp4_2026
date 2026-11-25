import Usuario from './usuario.model.js';
import Cancion from './cancion.model.js';
import Escucha from './escucha.model.js';

// Relaciones: escucha es la tabla intermedia de la relación N a M
// entre usuario y cancion.
Usuario.hasMany(Escucha, { foreignKey: 'usuario_id' });
Escucha.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' });

Cancion.hasMany(Escucha, { foreignKey: 'cancion_id' });
Escucha.belongsTo(Cancion, { foreignKey: 'cancion_id', as: 'cancion' });

export { Usuario, Cancion, Escucha };
