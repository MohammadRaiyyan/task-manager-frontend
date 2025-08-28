import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'

type RegisterProps = {
  toggleLogin: () => void
}

export default function Register({ toggleLogin }: RegisterProps) {
  return (
    <div className="flex flex-col gap-8 ">
      <CardHeader className="text-center">
        <CardTitle title="Login" className="text-3xl">
          Register
        </CardTitle>
        <CardDescription>Register to save your tasks on cloud</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <form className="flex flex-col w-full gap-4">
          <div className="flex gap-3 w-full">
            <div className="flex flex-col gap-2 flex-1">
              <Label htmlFor="fname">First Name</Label>
              <Input id="fname" type="text" placeholder="Enter first anme" />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <Label htmlFor="lname">Last Name</Label>
              <Input id="lname" type="text" placeholder="Enter last name" />
            </div>
          </div>
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
          <div className="flex flex-col gap-2">
            <Label htmlFor="cpassword">Confirm Password</Label>
            <Input
              id="cpassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Button type="submit">Register</Button>
          </div>
          <div className="flex  align-center justify-center">
            <span className="text-sm">
              Already have an account?
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 ml-2"
                onClick={toggleLogin}
              >
                Login
              </Button>
            </span>
          </div>
        </form>
      </CardContent>
    </div>
  )
}
