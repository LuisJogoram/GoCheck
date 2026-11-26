import Localbase from 'localbase'

const db = new Localbase('passageirosdb')
db.config.debug = false

export default db