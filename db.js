import pg from 'pg';
import { Sequelize } from 'sequelize';
import dbconfig from './dbconfig.js';

// Conexión a la base con Sequelize (ORM): en vez de escribir SQL a mano,
// los services usan los modelos de la carpeta /models.
export const sequelize = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
  host: dbconfig.host,
  port: dbconfig.port,
  dialect: 'postgres',
  dialectModule: pg, // se lo pasamos explícito para que Vercel lo incluya
  dialectOptions: { ssl: dbconfig.ssl },
  logging: false,
});
