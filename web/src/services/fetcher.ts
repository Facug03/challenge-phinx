import { config } from '@/src/config'

export const fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${config.API_URL}${url}`)
  const data = await response.json()

  return data
}
