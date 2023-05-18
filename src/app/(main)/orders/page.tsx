import { FiPlus } from 'react-icons/fi'

import OrderService from "~/services/order.service"
import Today from "./components/Today"
import Button from "~/components/Button"

const orders = [
  {
    "TrackingNumber": "c10f0ecf-c505-4753-a3f1-f5e00bd04089",
    "ConsigneeAddress": "Something something street 22",
    "ConsigneeName": "Jon",
    "ConsigneeNumber": "12345678",
    "ConsigneeCity": "Singapore",
    "ConsigneeProvince": "Singapore",
    "ConsigneePostalCode": "12345",
    "ConsigneeCountry": "SG",
    "PaymentType": "cod",
    "Weight": 2.2,
    "Height": 1.2,
    "Width": 1,
    "Length": 4.5
  }
]


export default function OrdersPage() {
  return (
    <main>
      <div className="flex justify-between items-center">
        <div>
          <h1>Orders</h1>
          <Today />
        </div>
        <Button variant="primary">
          <FiPlus size={18} /> New Order
        </Button>
      </div>
    </main>
  )
}
