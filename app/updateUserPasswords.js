const { PrismaClient } = require('@prisma/client');
const crypto = require('crypto');

const prisma = new PrismaClient();

// Função para gerar salt e hash
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return { salt, hash };
}

async function updateUsers() {
  const users = await prisma.user.findMany();  // Buscando todos os usuários

  for (const user of users) {
    const { salt, hash } = hashPassword(user.password);  // Gera o salt e hash para a senha
    await prisma.user.update({
      where: { id: user.id },
      data: {
        salt: salt,  // Atualiza o salt
        passwordHash: hash,  // Atualiza o hash da senha
      },
    });
  }

  console.log('Usuários atualizados com sucesso');
  await prisma.$disconnect();
}

updateUsers().catch((e) => {
  console.error(e);
  prisma.$disconnect();
});
