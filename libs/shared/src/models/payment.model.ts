export interface PaymentRequest {
  paymentId: string;
  amount: number;
  description?: string;
  policyNumber?: string;
}
