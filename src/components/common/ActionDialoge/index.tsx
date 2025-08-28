import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog.tsx'

type Props = {
  description: string
  onYes: () => void
  onClose: () => void
  isOpen: boolean
  variant: 'default' | 'destructive'
}
const Index = ({ description, variant, isOpen, onClose, onYes }: Props) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="sm:max-w-md p-0 gap-0">
        <div className=" p-4 flex  flex-col items-center gap-3">
          <Trash
            size={32}
            className={
              variant === 'destructive' ? 'text-destructive' : 'text-primary'
            }
          />
          <p>{description}</p>
        </div>
        <AlertDialogFooter className="p-4 sm:justify-center">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" className="flex-1" onClick={onYes}>
            Proceed
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Index
