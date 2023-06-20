export class KnownException extends Error {
    constructor(public show: boolean, public message: string, public status: number) {
        super(message)
        Object.setPrototypeOf(this, KnownException.prototype)
    }
}