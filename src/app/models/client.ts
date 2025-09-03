export interface ClientI{
    id?: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    status: "ACTIVE" | "INACTIVE";
}                                                