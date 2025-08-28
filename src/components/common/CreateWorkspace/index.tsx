import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type Props = {
  title?: string
  action?: 'EDIT' | 'CREATE'
  isOpen: boolean
  onClose: () => void
}
export default function CreateWorkspaceModal({
  action = 'CREATE',
  title = 'Workspace',
  isOpen,
  onClose,
}: Props) {
  const heading = action === 'CREATE' ? `Create ${title}` : `Update ${title}`
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <form>
        <DialogContent className="sm:max-w-md p-0 gap-3">
          <DialogHeader className="border-b p-2 px-4 rounded-t-lg text-accent-foreground">
            <DialogTitle className="text-base">{heading}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-3 p-4">
            <div className="grid gap-3">
              <Input id="name-1" name="name" placeholder={`${title} name`} />
            </div>
            <div className="grid gap-3">
              <Textarea placeholder="Description" />
            </div>
          </div>
          <DialogFooter className="p-4 pt-0">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">
              {action === 'CREATE' ? 'Create' : 'Update'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
