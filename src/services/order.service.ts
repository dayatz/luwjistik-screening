import { BACKEND_URL } from "~/config"
import AuthService from "./auth.service"
import { Order } from "./order.type"

const OrderService = {
  async getOrders() {
    const sessionToken = await AuthService.getSessionToken()
    const response = await fetch(`${BACKEND_URL}/orders`, {
      headers: {
        'Authorization': sessionToken
      }
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const jsonData = await response.json()
    return jsonData.data as Order[]
  }
}

export default OrderService
