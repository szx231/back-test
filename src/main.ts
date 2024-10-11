import express from 'express';
import { sessionMiddlware } from './config/session';
import { authRouter } from './routes/auth';

const app = express();

app.use(sessionMiddlware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRouter);

app.listen(4000, () => {
  console.log('Server started at :4000');
});
