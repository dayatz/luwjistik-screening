import { FiArrowDown, FiCreditCard, FiMoreVertical, FiNavigation, FiPlusSquare, FiTruck } from "react-icons/fi"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/Table"
import { Order } from "~/types/order.type"
import EmptyData from "~/components/EmptyData"
import Button from "~/components/Button"

const countryMapping: {
  [key: string]: {
    name: string,
    phoneCode?: string
  }
} = {
  SG: {
    name: "Singapore",
    phoneCode: "+65"
  }
}


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
          <TableHead>Consignee Country</TableHead>
          <TableHead>Consignee Contact</TableHead>
          <TableHead>Payment Type</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const countryInfo = countryMapping[order.ConsigneeCountry] ?? {}
          const phoneNumber = `${countryInfo.phoneCode ? `(${countryInfo.phoneCode}) `:''}${order.ConsigneeNumber}`
          return (
            <TableRow key={order.TrackingNumber}>
              <TableCell className="font-medium space-x-2">
                <Button size="small"><FiPlusSquare size={16} /></Button>
                <span>{order.TrackingNumber}</span>
              </TableCell>
              <TableCell>{countryInfo.name ?? order.ConsigneeCountry}</TableCell>
              <TableCell>
                <p className="mb-0">{order.ConsigneeName}</p>
                <p className="mb-0">{phoneNumber}</p>
              </TableCell>
              <TableCell>
                <PaymentType paymentType={['cod', 'prepaid'].includes(order.PaymentType) ? order.PaymentType : 'cod'} />
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="small">Print</Button>

                  <a href="https://v2.luwjistik.io/tracking" target="_blank" title="Track">
                    <Button size="small">
                      <FiNavigation size={16} />
                    </Button>
                  </a>
                  <Button size="small">
                    <FiMoreVertical size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

const paymentTypes = {
  cod: 'COD',
  prepaid: 'Prepaid'
}
function PaymentType({ paymentType }: { paymentType: "cod"|"prepaid"}) {
  return (
    <div className="flex items-center gap-4">
    {paymentType == 'cod' ? <FiTruck size={24} />:<FiCreditCard size={24} />}
    <span>{paymentTypes[paymentType]}</span>
    </div>
  )
}
