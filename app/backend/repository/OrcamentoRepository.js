const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para criar um novo orçamento
async function createOrcamento(orcamentoData) {
    // Gera a data e hora completas
    const dataCompleta = new Date(`${orcamentoData.dataevent}T${orcamentoData.horario}:00.000Z`);

    return await prisma.Orcamento.create({
        data: {
            nome: orcamentoData.nome,
            dataevent: new Date(orcamentoData.dataevent),
            localevent: orcamentoData.localevent,  // Verifique se "localevent" é realmente um campo na tabela
            email: orcamentoData.email,
            telefone: orcamentoData.telefone,
            horario: dataCompleta,
            fotografo: parseInt(orcamentoData.fotografo, 10),  // Converte para número
        },
    });
}

// Função para buscar um orçamento pelo nome
async function findOrcamentoByName(orcamentoname) {
    return await prisma.Orcamento.findFirst({
        where: {
            nome: orcamentoname,
        },
    });
}

// Função para buscar um orçamento com base em múltiplos filtros
async function findOrcamentoByFilters(orcamentoData) {
    const dataCompleta = new Date(`${orcamentoData.dataevent}T${orcamentoData.horario}:00.000Z`);

    return await prisma.Orcamento.findFirst({
        where: {
            nome: orcamentoData.nome,
            dataevent: new Date(orcamentoData.dataevent), // Correção: use `new Date()` para criar uma data válida
            horario: dataCompleta,
            fotografo: parseInt(orcamentoData.fotografo, 10), // Converte para número
        },
    });
}

// Função para listar todos os orçamentos
async function findOrcamentoListAll() {
    return await prisma.Orcamento.findMany();  // Corrigido para findMany()
}

module.exports = { createOrcamento, findOrcamentoByName, findOrcamentoByFilters, findOrcamentoListAll };
