'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { fetcher, get } from '@/config/api'
import useSWR from 'swr'

export function NodeTable() {
  const { data, error, isLoading } = useSWR(get.nodes, fetcher, { refreshInterval: 1000 })

  if (error || isLoading) {
    return (
      <>
        {Array.from({ length: 24 }).map((_, index) => (
          <div key={index} className="bg-muted/50 aspect-video h-12 w-full rounded-lg" />
        ))}
      </>
    )
  }

  const parsedData = JSON.parse(data.data)
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium">数据类型</TableHead>
          <TableHead className="font-medium">UUID</TableHead>
          <TableHead className="font-medium">主机名</TableHead>
          <TableHead className="font-medium">状态</TableHead>
          <TableHead className="font-medium">IP</TableHead>
          <TableHead className="font-medium">CPU</TableHead>
          <TableHead className="font-medium">内存</TableHead>
          <TableHead className="font-medium">Pod数量</TableHead>
          <TableHead className="font-medium">更新时间</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {parsedData.map((item: any, index: number) => (
          <TableRow key={index}>
            <TableCell>{item.kind}</TableCell>
            <TableCell>{item.metadata.uuid}</TableCell>
            <TableCell>{item.status.hostname}</TableCell>
            <TableCell>{item.status.condition}</TableCell>
            <TableCell>{item.ip}</TableCell>
            <TableCell>{item.status.cpuPercent.toFixed(2)}%</TableCell>
            <TableCell>{item.status.memPercent.toFixed(2)}%</TableCell>
            <TableCell>{item.status.numPods}</TableCell>
            <TableCell>{item.status.updateTime}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
