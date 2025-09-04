import { PlusCircle } from 'lucide-react'
import Combobox from '../Select/Select'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function CreateTaskModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>
            <PlusCircle /> Create Task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-3xl p-0">
          <DialogHeader className="border-b p-2 px-4 rounded-t-lg">
            <div className="w-80">
              <Combobox />
            </div>
          </DialogHeader>
          <div className="grid gap-4 p-4">
            <div className="grid gap-3">
              <Input id="name-1" name="name" placeholder="Task Name" />
            </div>
            <div className="grid gap-3">
              <Textarea placeholder="Description" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Combobox />

              <Combobox />

              <Combobox />
            </div>
          </div>
          <DialogFooter className="p-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create Task</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
