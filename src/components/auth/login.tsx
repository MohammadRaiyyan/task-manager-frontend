import { Link } from '@tanstack/react-router'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Button } from '@/components/ui/button.tsx'

type LoginProps = {
  toggleLogin: () => void
}
export default function Login({ toggleLogin }: LoginProps) {
  return (
    <div className="flex flex-col gap-8 ">
      <CardHeader className="text-center">
        <CardTitle title="Login" className="text-3xl">
          Login
        </CardTitle>
        <CardDescription>
          Login to your account to save your tasks on cloud
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <form className="flex flex-col w-full gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex  align-end justify-end">
            <Button asChild variant="link" size="sm" className="h-auto p-0">
              <Link to="/">Forgot Password?</Link>
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <Button type="submit">Login</Button>
          </div>
          <div className="flex  align-center justify-center">
            <span className="text-sm">
              Don't have account?
              <Button
                size="sm"
                variant="link"
                className="h-auto p-0 ml-2"
                onClick={toggleLogin}
              >
                Register
              </Button>
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="h-0.5 bg-accent w-full"></span>
            OR
            <span className="h-0.5 bg-accent w-full"></span>
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="outline">Login with Google</Button>
            <Button variant="outline">Login with GitHub</Button>
          </div>
        </form>
      </CardContent>
    </div>
  )
}
