import express from 'express';
import { config } from './config/environment';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'IGNES API is ready' });
});

app.listen(config.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.port}`);
});
