import db from '@/db'

export default class BaseModel {
    static collection = ''

    constructor(d = {}) {
        this.id = d.id ?? crypto.randomUUID()
    }
    static col() {
        return db.collection(this.collection)
    }
    toJSON() {
        return {
            id: this.id,
        }
    }

    static async ordem() {
        const lista = await this.col().orderBy('id').get()
        return lista.map(d => new this(d))
    }

    async criar() {
        const col = this.constructor.col()
        const filtro = { nome: this.nome }
        const existe = await col.doc(filtro).get()
        if (existe)
            await col.doc(filtro).set(this.toJSON())
        else
            await col.add(this.toJSON())
        return this
    }

    async excluir() {
        await this.constructor.col().doc({ id: this.id }).delete()
    }
}