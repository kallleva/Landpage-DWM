const orcamentoRepository = require('../repository/OrcamentoRepository');

class OrcamentoService {
    // Cria um novo agendamento
    async createOrcamento(orcamentoData) {
        try {
            const novoOrcamento = await orcamentoRepository.createOrcamento(orcamentoData);
            return novoOrcamento;
        } catch (error) {
            console.error("Erro ao criar orcamento:", error);
            throw new Error("Erro ao criar orcamento.");
        }
    }

    // Busca um agendamento pelo nome
    async findOrcamentoByNameCreate(nome) {
        const orcamento = await orcamentoRepository.findOrcamentoByName(nome);
        return orcamento;
    }

    // Busca um agendamento pelo nome
    async findOrcamentoByName(nome) {
        try {
            const orcamento = await orcamentoRepository.findOrcamentoByName(nome);
            if (!orcamento) {
                throw new Error("Orcamento não encontrado.");
            }
            return orcamento;
        } catch (error) {
            console.error("Erro ao buscar orcamento por nome:", error);
            throw new Error("Erro ao buscar orcamento por nome.");
        }
    }

    // Busca uma lista de agendamentos com base em vários critérios
    async findOrcamentoList(orcamentoData) {
        try {
            const orcamentos = await orcamentoRepository.findOrcamentoList(orcamentoData);
            return orcamentos;
        } catch (error) {
            console.error("Erro ao buscar lista de orcamentos:", error);
            throw new Error("Erro ao buscar lista de orcamentos.");
        }
    }
}

module.exports = new OrcamentoService();
