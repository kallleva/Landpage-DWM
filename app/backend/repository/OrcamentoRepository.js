const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para criar um novo agendamento
async function createOrcamento(orcamentoData) {
  
    const dataCompleta = new Date(`${orcamentoData.dataevent}T${orcamentoData.horario}:00.000Z`);

    return await prisma.Orcamento.create({
        data: {
            nome: orcamentoData.nome,
            dataevent: new Date(orcamentoData.dataevent),
            localevent: orcamentoData.localevent,
            email: orcamentoData.email,
            telefone: orcamentoData.telefone,
            horario: dataCompleta,
            fotografo: parseInt(orcamentoData.fotografo, 10), // Converte para número
        },
    });
}
async function findOrcamentoByName(orcamentoname) {
    return await prisma.Orcamento.findFirst({
        where: {
            nome: orcamentoname
        }
    });
}

async function findOrcamentoList(orcamentoData) {
    return await prisma.Orcamento.findFirst({
        where: {
            nome: orcamentoData.nome,
            dataevent: Date(orcamentoData.dataevent),
            horario: dataCompleta,
            fotografo: parseInt(orcamentoData.fotografo, 10), // Converte para número
        }
    });
}

module.exports = { createOrcamento, findOrcamentoByName, findOrcamentoList };
