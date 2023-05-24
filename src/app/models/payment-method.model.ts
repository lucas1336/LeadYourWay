export interface PaymentMethod{
    id: number;
    nombre: string;
    numero_tarjeta: string;
    nombre_tarjeta: string;
    correo: string;
    exp_year: string;
    mes_exp: string;
    cvv: string;
}