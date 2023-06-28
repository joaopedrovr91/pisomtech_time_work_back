export interface UserPayload {
    sub: string;
    email: string;
    name: string;
    admin: boolean
    iat?: number;
    exp?: number;
}