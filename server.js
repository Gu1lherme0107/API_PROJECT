import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post('/user', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
      }
    });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Erro ao criar usuário', details: error.message });
  }
});

app.get('/user', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários', details: error.message });
  }
});

app.put('/user/:id', async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id
      },
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
      }
    });
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Erro ao atualizar usuário', details: error.message });
  }
});

app.delete('/user/:id', async (req, res) => {
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id
      }
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Erro ao deletar usuário', details: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
