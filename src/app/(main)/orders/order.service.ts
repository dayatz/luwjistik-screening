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
  return jsonData as Order[]
}

export async function createOrder(order: OrderCreateType) {
  console.log('--------- createOrder()')
  console.log(order)
  // const sessionToken = await AuthService.getSessionToken()
  const sessionToken = 'x'
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

