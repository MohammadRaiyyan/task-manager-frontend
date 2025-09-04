import { Copy, MoreHorizontal, Paperclip, Send, Share2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Combobox from '@/components/common/Select/Select.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Badge } from '@/components/ui/badge.tsx'
import { Card, CardContent } from '@/components/ui/card.tsx'
import { Tooltip, TooltipContent, TooltipTrigger, } from '@/components/ui/tooltip.tsx'

export default function TaskDetails() {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      {/* Header */}
      <div className=" w-full  space-y-6">
        <div className="flex items-start justify-between gap-4">
          {/* Title */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">
              Schedule me an appointment with my endocrinologist
            </h2>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <Share2 className="h-4 w-4 cursor-pointer" />
            <Paperclip className="h-4 w-4 cursor-pointer" />
            <Tooltip>
              <TooltipTrigger>
                <Copy className="h-4 w-4 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>Copy task id</TooltipContent>
            </Tooltip>
            <MoreHorizontal className="h-4 w-4 cursor-pointer" />
          </div>
        </div>

        {/* Assignee + Due Date + Project */}
        <div className="grid gap-4 pl-1">
          {/* Assignee */}
          <div className="flex items-center gap-2">
            <div className="w-2/8">
              <Label>Assignee</Label>
            </div>

            <div className=" flex items-center gap-2 ">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <p className="font-medium">Jenifer Anniston</p>
            </div>
          </div>

          {/* Due Date */}
          <div className=" flex items-center gap-2 ">
            <div className="w-2/8">
              <Label>Due Date</Label>
            </div>
            <p className="font-medium">Jul 14 - 24</p>
          </div>

          {/* Project */}
          <div className=" flex items-center gap-2 ">
            <div className="w-2/8">
              <Label>Project</Label>
            </div>
            <div>
              {' '}
              <Combobox />
            </div>
          </div>
          {/* Status */}
          <div className=" flex items-center gap-2 ">
            <div className="w-2/8">
              <Label>Status</Label>
            </div>
            <div>
              {' '}
              <Combobox />
            </div>
          </div>
          {/* Priority */}
          <div className=" flex items-center gap-2 ">
            <div className="w-2/8">
              <Label>Priority</Label>
            </div>
            <div>
              {' '}
              <Combobox />
            </div>
          </div>
          {/* Labels */}
          <div className=" flex items-center gap-2 ">
            <div className="w-2/8">
              <Label>Labels</Label>
            </div>
            <div className="flex items-center gap-2 ">
              <Badge>Design</Badge>
              <Badge>UI/UX</Badge>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <Card>
        <CardContent>
          <Tabs defaultValue="descriptions" className="w-full  ">
            <TabsList>
              <TabsTrigger value="descriptions">Description</TabsTrigger>
              <TabsTrigger value="comments">
                Comments <Badge>2</Badge>
              </TabsTrigger>
              <TabsTrigger value="attachments">
                Attachments <Badge>2</Badge>
              </TabsTrigger>
              <TabsTrigger value="updates" className="flex items-center gap-2">
                Activities
                <Badge className="w-2 h-2 p-0 m-0 "></Badge>
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="attachments"
              className="bg-sidebar p-4 rounded-sm max-h-72 h-full overflow-auto"
            >
              <div className="text-sm text-muted-foreground mt-4 flex items-center justify-center">
                No activities available yet.
              </div>
            </TabsContent>
            <TabsContent value="descriptions">
              <Textarea
                className="max-h-72 h-full text-xl"
                defaultValue="Schedule and attend an appointment with an endocrinologist to evaluate and address any issues related to hormonal imbalances or endocrine disorders."
              />
            </TabsContent>

            {/* Comments Tab */}
            <TabsContent
              value="comments"
              className="flex flex-col bg-sidebar p-4 rounded-sm"
            >
              <div className="space-y-4 mt-4 flex-1 ">
                {/* Comment 1 */}
                <div className="flex gap-3 flex-1">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Smith</p>
                    <p className="text-xs text-muted-foreground mb-1">
                      17th Feb 2024
                    </p>
                    <p className="text-sm">
                      Hi 👋 I’ll do that task now, you can start working on
                      another task!
                    </p>
                  </div>
                </div>

                {/* Comment 2 */}
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Smith</p>
                    <p className="text-xs text-muted-foreground mb-1">
                      Just Now
                    </p>
                    <p className="text-sm">Hello!</p>
                  </div>
                </div>
              </div>

              {/* Add Comment */}
              <div className="flex items-center gap-2 mt-4">
                <Input placeholder="Add a comment..." />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            {/* Updates Tab */}
            <TabsContent
              value="updates"
              className="bg-sidebar p-4 rounded-sm max-h-72 h-full overflow-auto"
            >
              <div className="text-sm text-muted-foreground mt-4 flex items-center justify-center">
                No activities available yet.
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>{' '}
    </div>
  )
}
