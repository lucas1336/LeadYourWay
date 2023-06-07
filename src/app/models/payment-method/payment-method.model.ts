export interface PaymentMethod{
    id: number;
    cardNumber: string;
    cardHolder: string;
    cardCVV: string;
    cardExpirationDate: string;
    cardType: string;
}