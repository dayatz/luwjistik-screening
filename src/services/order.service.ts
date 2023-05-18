import { BACKEND_URL } from "~/config"
import AuthService from "./auth.service"
import { Order, OrderCreateType } from "./order.type"

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
  },

  async createOrder(order: OrderCreateType) {
    const sessionToken = await AuthService.getSessionToken()
    const response = await fetch(`${BACKEND_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionToken
      },
      body: JSON.stringify(order)
    })
    if (!response.ok) {
      throw new Error(await response.text())
    }
    const jsonData = await response.json()
    return jsonData
  }
}

export default OrderService
