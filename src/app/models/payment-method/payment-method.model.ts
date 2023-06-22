export interface PaymentMethod{
    id: number;
    cardNumber: string;
    cardHolder: string;
    cardCvv: string;
    cardExpirationDate: string;
    cardType: string;
    cardAmount: string;
    cardMain: boolean;
}