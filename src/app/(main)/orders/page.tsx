import { FiPlus } from 'react-icons/fi'

// import OrderService from "~/services/order.service"
import Button from "~/components/Button"
import OrderTable from './components/OrderTable'
import Card from '~/components/Card'
import Link from 'next/link'

export default function OrdersPage() {
  return (
    <main className='max-w-7xl mx-auto space-y-8'>
      <div className="flex items-center">
        <h1 className='text-3xl font-bold'>Orders</h1>

        <div className='ml-auto flex gap-4 items-center'>
          <div>
            filters
          </div>
          <Button variant="primary" className='p-0'>
            <Link href='/orders/new' className='flex py-2 px-4'>
              <FiPlus size={18} /> New Order
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <OrderTable />
      </Card>
    </main>
  )
}

