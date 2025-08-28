"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SortBy() {
  return (
    <div className="flex  gap-3 flex-wrap">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" defaultChecked/>
        <Label htmlFor="terms">Task Title</Label>
      </div>
       <div className="flex items-start gap-3">
        <Checkbox id="toggle"  />
        <Label htmlFor="toggle">Priority</Label>
      </div>
      
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2"  />
       <Label htmlFor="terms">Creation</Label>
      </div>
    </div>
  )
}
