import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/Table"
import { Order } from "~/types/order.type"
import EmptyData from "~/components/EmptyData"
import OrderRow from "./OrderRow"


// const orders = [
//   {
//     "TrackingNumber": "c10f0ecf-c505-4753-a3f1-f5e00bd04089",
//     "ConsigneeAddress": "Something something street 22",
//     "ConsigneeName": "Jon",
//     "ConsigneeNumber": "12345678",
//     "ConsigneeCity": "Singapore",
//     "ConsigneeProvince": "Singapore",
//     "ConsigneePostalCode": "12345",
//     "ConsigneeCountry": "SG",
//     "PaymentType": "cod",
//     "Weight": 2.2,
//     "Height": 1.2,
//     "Width": 1,
//     "Length": 4.5
//   }
// ]

export default function OrderTable({ orders }: { orders: Order[] }) {
  if (!orders.length) return <EmptyData />

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tracking Number</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Consignee Country</TableHead>
          <TableHead>Consignee Contact</TableHead>
          <TableHead>Payment Type</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => <OrderRow order={order} />)}
      </TableBody>
    </Table>
  )
}
