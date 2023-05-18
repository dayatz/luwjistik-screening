import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/Table"

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

export default function OrderTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tracking Number</TableHead>
          <TableHead>Consignee Country</TableHead>
          <TableHead>Consignee Contact</TableHead>
          <TableHead>Payment Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const countryInfo = countryMapping[order.ConsigneeCountry] ?? {}
          const phoneNumber = `${countryInfo.phoneCode && `(${countryInfo.phoneCode})`} ${order.ConsigneeNumber}`
          return (
            <TableRow key={order.TrackingNumber}>
              <TableCell className="font-medium">{order.TrackingNumber}</TableCell>
              <TableCell>{countryInfo.name ?? '-'}</TableCell>
              <TableCell>
                <p className="mb-0">{order.ConsigneeName}</p>
                <p className="mb-0">{phoneNumber}</p>
              </TableCell>
              <TableCell>{order.PaymentType}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

