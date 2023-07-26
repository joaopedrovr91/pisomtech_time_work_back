export interface UserPayload {
    sub: number;
    email: string;
    name: string;
    admin: boolean
    iat?: number;
    exp?: number;
}