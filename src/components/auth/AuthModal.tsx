import { LogIn } from 'lucide-react'
import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog.tsx'
import { Button } from '@/components/ui/button'
import Login from '@/components/auth/login.tsx'
import Register from '@/components/auth/register.tsx'

export default function AuthModal() {
  const [isLogin, setIsLogin] = React.useState(true)

  const toggleView = () => {
    setIsLogin(!isLogin)
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <LogIn />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent>
        {isLogin ? (
          <Login toggleLogin={toggleView} />
        ) : (
          <Register toggleLogin={toggleView} />
        )}
      </DialogContent>
    </Dialog>
  )
}
