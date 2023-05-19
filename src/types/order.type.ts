export interface Order {
  TrackingNumber: string;
  ConsigneeAddress: string;
  ConsigneeName: string;
  ConsigneeNumber: string;
  ConsigneeCity: string;
  ConsigneeProvince: string;
  ConsigneePostalCode: string;
  ConsigneeCountry: string;
  PaymentType: 'cod' | 'prepaid';
  Weight: number;
  Height: number;
  Width: number;
  Length: number;
}

export type OrderCreateType = Omit<Order, 'TrackingNumber'>
