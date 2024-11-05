const orcamentoService = require('../service/OrcamentoService');

// Controlador para criar um novo orçamento
async function createOrcamento(req, res) {
    try {
        const { nome, email, telefone, dataevent, horario, fotografo } = req.body;

        if (!nome || !email || !telefone || !dataevent || !horario || !fotografo) {
            return res.status(400).json({ error: 'Por favor, preencha todos os campos' });
        }

        const orcamentoData = { nome, email, telefone, dataevent, horario, fotografo };

        const existingOrcamento = await orcamentoService.findOrcamentoByNameCreate(nome);
        if (existingOrcamento) {
            return res.status(400).json({ error: 'Já existe um orçamento com este nome.' });
        }

        const newOrcamento = await orcamentoService.createOrcamento(orcamentoData);
        return res.status(201).json(newOrcamento);
    } catch (error) {
        console.error('Erro ao criar o orçamento:', error);
        return res.status(500).json({ error: 'Erro ao criar o orçamento' });
    }
}

// Controlador para listar todos os orçamentos
async function listOrcamentos(req, res) {
    try {
        const orcamentos = await orcamentoService.findAllOrcamentos();
        return res.status(200).json(orcamentos);
    } catch (error) {
        console.error('Erro ao listar os orçamentos:', error);
        return res.status(500).json({ error: 'Erro ao listar os orçamentos' });
    }
}

// Controlador para buscar um orçamento por nome
async function findOrcamentoByName(req, res) {
    try {
        const { nome } = req.params;

        const orcamento = await orcamentoService.findOrcamentoByName(nome);
        if (!orcamento) {
            return res.status(404).json({ error: 'Orçamento não encontrado.' });
        }

        return res.status(200).json(orcamento);
    } catch (error) {
        console.error('Erro ao buscar o orçamento por nome:', error);
        return res.status(500).json({ error: 'Erro ao buscar o orçamento' });
    }
}

// Controlador para buscar orçamento com filtros específicos
async function findOrcamentoWithFilters(req, res) {
    try {
        const filters = req.query;

        const orcamento = await orcamentoService.findOrcamentoWithFilters(filters);
        if (!orcamento) {
            return res.status(404).json({ error: 'Nenhum orçamento encontrado com os filtros fornecidos.' });
        }

        return res.status(200).json(orcamento);
    } catch (error) {
        console.error('Erro ao buscar orçamento com filtros:', error);
        return res.status(500).json({ error: 'Erro ao buscar orçamento' });
    }
}

module.exports = {
    createOrcamento,
    listOrcamentos,
    findOrcamentoByName,
    findOrcamentoWithFilters
};
