class Enum {
    constructor(enumObj) {
        const handler = {
            get(target, name) {
                if (typeof target[name] != 'undefined') {
                    return target[name]
                }
                throw new Error(`${name} не существует`)
            },
            set() {
                throw new Error('Невозможно изменить Enum объект, когда он уже был определён')
            },
            ownKeys(target) {
                return Object.keys(target)
            }
        }

        return new Proxy(enumObj, handler)
    }
}

exports.ROLES = new Enum({
    Guest: 'guest',
    Admin: 'admin',
    Curator: 'curator',
    Participant: 'participant'
})

exports.ENTRY_STATUSES = new Enum({
    New: 'new',
    Accepted: 'accepted',
    Rejected: 'rejected'
})
