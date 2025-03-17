'use client'
import useSWR from 'swr'
import { fetcher, get } from '@/config/api'

export default function Page() {
  const { data, error, isLoading } = useSWR(get.nodes, fetcher)
  if (error) return 'An error has occurred.' + get.nodes
  if (isLoading) return 'Loading...'
  console.log(data)
  return <div>ok</div>
}
