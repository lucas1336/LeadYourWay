export interface PaymentMethod{
    id: number;
    cardNumber: string;
    cardHolder: string;
    cardCVV: string;
    cardExpirationDate: string;
    exp_year: string;
    mes_exp: string;
}