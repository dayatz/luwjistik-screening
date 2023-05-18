import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"
import Card from "~/components/Card"
import NewOrderForm from "./NewOrderForm"

export default function NewOrderPage() {
  return (
    <main className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/orders">
          <FiArrowLeft size={32} />
        </Link>
        <h1 className='text-3xl font-bold'>Create New Order</h1>
      </div>

      <Card>
        <NewOrderForm />
      </Card>
    </main>
  )
}
