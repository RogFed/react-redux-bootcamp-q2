export const baseUrl = 'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api'
export const key = 'lEwy5sEhdU9L8vCoiU7ex7p2rqczxk3I4avJgEGX'

export const ecommerceGetProductsApiPromise = async () => {
  const response = await fetch(`${baseUrl}/products`, {
    headers: {
      'x-api-key': key
    }
  })

  return response.json()
}

export const ecommercePostOrderPromise = async history => {
  const response = await fetch(`${baseUrl}/orders`, {
    method: 'POST',
    headers: {
      'x-api-key': key
    }
  })

  return response.json()
}