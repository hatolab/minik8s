import { API_PATH } from '@/lib/consts'

export const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const get = {
  nodes: API_PATH + 'nodes',
  node: (name: string) => API_PATH + 'nodes/${name}',
  nodeStatus: (name: string) => API_PATH + 'nodes/${name}/status',
}
