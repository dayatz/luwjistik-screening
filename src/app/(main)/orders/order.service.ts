'use server';

import AuthService from "~/app/(auth)/auth.service";
import { BACKEND_URL } from "~/config"
import { Order, OrderCreateType } from "~/types/order.type";

export async function getOrders() {
  const sessionToken = await AuthService.getSessionToken()
  console.log({ sessionToken })
  const response = await fetch(`${BACKEND_URL}/orders`, {
    headers: {
      'Authorization': sessionToken
    }
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const jsonData = await response.json()
  const data = (jsonData.data || []) as Order[]
  return data
}

export async function createOrder(order: OrderCreateType) {
  const sessionToken = await AuthService.getSessionToken()

  const parsedOrder: OrderCreateType = {
    ...order,
    Weight: Number(order.Weight),
    Length: Number(order.Length),
    Width: Number(order.Width),
    Height: Number(order.Height),
  }
  const requestData = JSON.stringify(parsedOrder)
  const response = await fetch(`${BACKEND_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': sessionToken
    },
    body: requestData 
  })
  if (!response.ok) {
    throw new Error(await response.text())
  }
  const jsonData = await response.json()
  return jsonData
}

