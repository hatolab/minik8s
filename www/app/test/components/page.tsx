import { CircularPercentage } from '@/components/common/circular-percentage'
import { Separator } from '@/components/ui/separator'

export default function Page() {
  return (
    <>
      <div className="h-48 bg-gray-100 flex items-center justify-center gap-8 p-4 flex-wrap">
        <CircularPercentage percentage={25} />
        <CircularPercentage percentage={50} />
        <CircularPercentage percentage={75} />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </>
  )
}
