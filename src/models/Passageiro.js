import BaseModel from './BaseModel'
export default class Passageiro extends BaseModel {
    static collection = 'passageiros'
    constructor(d = {}) {
        super(d)
        this.nome = d.nome ?? ''
        this.documento = d.documento ?? ''
        this.telefone = d.telefone ?? ''
        this.telefoneEme = d.telefoneEme ?? ''
        this.status = d.status ?? false
    }
    toJSON() {
        return {
            ...super.toJSON(),
            nome: this.nome,
            documento: this.documento,
            telefone: this.telefone,
            telefoneEme: this.telefoneEme,
            status: this.status
        }
    }
}