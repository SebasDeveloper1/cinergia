enum PaymentType {
  totalPay = 'PT',
  mandatoryDonation = 'DO',
  voluntaryDonation = 'DV',
  free = null,
}

export const paymentType = {
  totalPay: PaymentType.totalPay,
  mandatoryDonation: PaymentType.mandatoryDonation,
  voluntaryDonation: PaymentType.voluntaryDonation,
  free: PaymentType.free,
};
