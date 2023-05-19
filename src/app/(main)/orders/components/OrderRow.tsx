'use client'
import React from "react"
import { FiCreditCard, FiMinusSquare, FiMoreVertical, FiNavigation, FiPlusSquare, FiTruck } from "react-icons/fi"

import { Order } from "~/types/order.type"
import { TableCell, TableRow } from "~/components/Table"
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

export default function OrderRow({ order }: { order: Order }) {
  const [showDetails, setShowDetails] = React.useState(false)
  const countryInfo = countryMapping[order.ConsigneeCountry] ?? {}
  const phoneNumber = `${countryInfo.phoneCode ? `(${countryInfo.phoneCode}) ` : ''}${order.ConsigneeNumber}`

  return (
    <>
      <TableRow key={order.TrackingNumber} className={showDetails ? 'border-b-0' : ''}>
        <TableCell className="font-medium space-x-2 flex items-center">
          <Button size="small" onClick={() => setShowDetails(s => !s)}>
            {showDetails ? <FiMinusSquare size={16} /> : <FiPlusSquare size={16} />}
          </Button>
          <p className="mb-0">{order.TrackingNumber}</p>
        </TableCell>
        <TableCell>
          <div className="flex gap-2 items-center">
            <div className="rounded-full bg-green-500 h-[15px] w-[15px]" />
            <span className="text-gray-800 text-sm">Delivered</span>
          </div>
        </TableCell>
        <TableCell>{countryInfo.name ?? order.ConsigneeCountry}</TableCell>
        <TableCell>
          <p className="mb-0">{order.ConsigneeName}</p>
          <p className="mb-0 text-gray-500">{phoneNumber}</p>
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

      {showDetails && (
        <TableRow className="bg-gray-50 shadow-inner">
          <TableCell colSpan={6}>
            <div className="px-8 py-4 grid grid-cols-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs text-gray-400">Tracking Number</h3>
                  <p className="mb-0 text-lg font-semibold">{order.TrackingNumber}</p>
                </div>
                <div>
                  <h3 className="text-xs text-gray-400">Status</h3>
                  <div className="flex gap-2 items-center mt-1">
                    <div className="rounded-full bg-green-500 h-[15px] w-[15px]" />
                    <span className="text-gray-800 text-sm">Delivered</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs text-gray-400">Estimated Delivery</h3>
                  <p className="mb-0 mt-1">
                    25 May 2023 04:30pm
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs text-gray-400">Pickup Info</h3>
                  <p>Dayat</p>
                  <p>+6287865037772</p>
                  <p>Jl. Fake Address No.11, 83123</p>
                  <p>West Nusa Tenggara, Mataram</p>
                  <p>Indonesia</p>
                </div>

                <div>
                  <h3 className="text-xs text-gray-400">Consignee Info</h3>
                  <p>{order.ConsigneeName}</p>
                  <p>{order.ConsigneeNumber}</p>
                  <p>{order.ConsigneeAddress}</p>
                  <p>{order.ConsigneeProvince}, {order.ConsigneeCity}</p>
                  <p>{order.ConsigneeCountry}</p>
                </div>
              </div>


              <div className="space-y-6">
                <div>
                  <h3 className="text-xs text-gray-400">Parcel Info</h3>
                  <div className="grid grid-cols-2 w-[170px]">
                    <div className="space-y-1">
                      <p>Length</p>
                      <p>Width</p>
                      <p>Height</p>
                      <p>Weight</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p>{order.Length} cm</p>
                      <p>{order.Width} cm</p>
                      <p>{order.Height} cm</p>
                      <p>{order.Weight} kg</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs text-gray-400">Payment Method</h3>
                  <p className="text-md">{order.PaymentType}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs text-gray-400">More Actions</h3>
                  <div className="flex flex-col gap-2">
                    <Button>Print Label</Button>
                    <Button>Track</Button>
                    <Button variant="danger">Cancel</Button>
                  </div>
                </div>
              </div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

const paymentTypes = {
  cod: 'COD',
  prepaid: 'Prepaid'
}
function PaymentType({ paymentType }: { paymentType: "cod" | "prepaid" }) {
  return (
    <div className="flex items-center gap-4">
      {paymentType == 'cod' ? <FiTruck size={24} /> : <FiCreditCard size={24} />}
      <span>{paymentTypes[paymentType]}</span>
    </div>
  )
}
