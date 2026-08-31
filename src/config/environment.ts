import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL || 'postgresql://ignes:ignes@localhost:5432/ignes?schema=public',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key-change-me',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
};
