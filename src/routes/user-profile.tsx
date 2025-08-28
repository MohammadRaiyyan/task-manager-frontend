import { createFileRoute } from '@tanstack/react-router'
import { TabsContent } from '@radix-ui/react-tabs'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Card, CardContent } from '@/components/ui/card.tsx'

export const Route = createFileRoute('/user-profile')({
  component: UserProfile,
})

function UserProfile() {
  return (
    <div className="max-w-4xl mx-auto">
      <Tabs value="Profile" orientation="vertical">
        <TabsList>
          <TabsTrigger value="Profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="Profile">
          <Card>
            <CardContent>
              <form className="form-horizontal">
                <div className="form-group">
                  <Label htmlFor="fname">First Name</Label>
                  <Input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="lname">Last Name</Label>
                  <Input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="o-password">Old Password</Label>
                  <Input
                    type="password"
                    id="o-password"
                    name="o-password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="n-paasword">New Password</Label>
                  <Input
                    type="password"
                    id="n-paasword"
                    name="n-paasword"
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
