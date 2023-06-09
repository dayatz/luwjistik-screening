import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

import Button from "~/components/Button"
import OrderTable from './components/OrderTable'
import Card from '~/components/Card'
import OrderPagination from './components/OrderPagination'

import { getOrders } from './order.service'
import { Order } from '~/types/order.type'

let orders: Order[] = []
export default async function OrdersPage() {
  try {
    orders = await getOrders()
  } catch (error) {
    console.log(error)
  }

  return (
    <main className='max-w-7xl mx-auto space-y-8'>
      <div className="flex items-center">
        <h1 className='text-3xl font-bold'>Orders</h1>

        <div className='ml-auto flex gap-4 items-center'>
          <Button variant="primary" className='p-0'>
            <Link href='/orders/new' className='flex py-2 px-4'>
              <FiPlus size={18} /> New Order
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <OrderTable orders={orders} />
      </Card>

      {
        !!orders.length && (
          <div className='flex justify-between'>
            <div></div>
            <OrderPagination />
          </div>
        )
      }
    </main>
  )
}

