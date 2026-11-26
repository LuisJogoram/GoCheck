<script setup>
import { ref, reactive } from 'vue';

const cadastrar = reactive([
    {
    ativado: false
    }
])

function ativarCadastrar() {
    cadastrar.ativado = !cadastrar.ativado
}

const nome = ref('')
const documento = ref('')
const telefone = ref('')
const nomeeme = ref('')
const telefoneeme = ref('')

const passageiros = reactive([
    {
    nome: 'Luiz Lins',
    documento: "000.000.000-01",
    telefone: "(00)00000-0000",
    telefoneEme: "(00)00000-0000",
    presente: false
    },

    {
    nome: 'Laura Lívia',
    documento: "000.000.000-02",
    telefone: "(00)00000-0000",
    telefoneEme: "(00)00000-0000",
    presente: true
    },

    {
    nome: 'Maria Silva',
    documento: "000.000.000-03",
    telefone: "(00)00000-0000",
    telefoneEme: "(00)00000-0000",
    presente: false
    },
  
    {
    nome: 'João Souza',
    documento: "000.000.000-04",
    telefone: "(00)00000-0000",
    telefoneEme: "(00)00000-0000",
    presente: true
    },
])

const presenca = (n) => {
    passageiros[n].presente = !passageiros[n].presente
}

const criar = (nome, documento, telefone, telefoneeme) => {
    passageiros.push({
        nome: nome,
        documento: documento,
        telefone: telefone,
        telefoneEme: telefoneeme,
        presente: false
    });
};

const editar = (n) => {
    cadastrar.ativado = true
    nome.value = passageiros[n].nome
    documento.value = passageiros[n].documento
    telefone.value = passageiros[n].telefone
    telefoneeme.value = passageiros[n].telefoneEme
}

const excluir = (n) => {
    passageiros.splice(n,1);
}

</script>

<template>
    <div class="tab-titulo">
        <h2>Nome da Viagem</h2>
        <a class="button" @click="ativarCadastrar()">Cadastrar Passageiro</a>
    </div>
    <div class="form-card" v-if="cadastrar.ativado === true">
        <h2>Cadastrar Novo Passageiro</h2>
        <div class="form-2parts">
            <div class="form-field">
                <label for="name">Digite o nome completo do passageiro</label>
                <input id="name" type="text" placeholder="Nome completo" required v-model="nome">
            </div>
            <div class="form-field">
                <label for="id">Digite o documento de identificação (CPF se for brasileiro)</label>
                <input id="id" type="text" placeholder="Documento de identificação" required v-model="documento">
            </div>
        </div>
        <div class="form-2parts">
            <div class="form-field">
                <label for="cellcont">Digite o telefone de contato do passageiro</label>
                <input id="cellcont" type="text" placeholder="Ex: (00)00000-0000" required v-model="telefone">
            </div>
            <div class="form-field">
                <label for="celleme">Digite o contato de emergência do passageiro</label>
                <input id="celleme" type="text" placeholder="Ex: (00)00000-0000" required v-model="telefoneeme">
            </div>
        </div>

        <div class="form-buttons">
            <button @click="criar(nome, documento, telefone, telefoneeme)">Salvar</button>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Documento</th>
                <th>Telefone</th>
                <th>Telefone de Emergência</th>
                <th>Status</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(p, id) in passageiros" :key="p.id">
                <td>{{ p.nome }}</td>
                <td>{{ p.documento }}</td>
                <td>{{ p.telefone }}</td>
                <td>{{ p.telefoneEme }}</td>
                <td v-if="p.presente === true">
                    <p class="pre">Presente</p>
                </td>
                <td v-else>
                    <p class="aus">Ausente</p>
                </td>
                <td>
                    <a class="button a button-tab" @click="presenca(id)">Presente</a>
                    <a class="button a button-tab" @click="editar(id)">Editar</a>
                    <a class="button a button-tab" @click="excluir(id)">Excluir</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.a {
    padding: 4px
}
</style>