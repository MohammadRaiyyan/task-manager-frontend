import { Link, createFileRoute } from '@tanstack/react-router'
import { Filter, Search } from 'lucide-react'
import Combobox from '@/components/common/Select/Select'
import SortBy from '@/components/common/SortBy/SortBy'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.tsx'
import TaskDetails from '@/components/common/TaskDetails.tsx'

export const Route = createFileRoute('/tasks/')({
  component: App,
})

const tasks = [
  {
    id: 1,
    title: 'Fix login bug',
    priority: 'High',
    status: 'In Progress',
    assignee: 'John Doe',
    tags: ['bug', 'frontend', 'urgent'],
  },
  {
    id: 2,
    title: 'Design landing page',
    priority: 'Medium',
    status: 'To Do',
    assignee: 'Jane Smith',
    tags: ['design', 'UI/UX'],
  },
  {
    id: 3,
    title: 'Set up database backup',
    priority: 'Low',
    status: 'Completed',
    assignee: 'Alex Brown',
    tags: ['backend', 'database', 'maintenance'],
  },
  {
    id: 4,
    title: 'Prepare sprint report',
    priority: 'High',
    status: 'In Review',
    assignee: 'Maria Wilson',
    tags: ['reporting', 'documentation'],
  },
  {
    id: 5,
    title: 'Prepare sprint report',
    priority: 'High',
    status: 'In Review',
    assignee: 'Maria Wilson',
    tags: ['reporting', 'documentation'],
  },
  {
    id: 6,
    title: 'Prepare sprint report',
    priority: 'High',
    status: 'In Review',
    assignee: 'Maria Wilson',
    tags: ['reporting', 'documentation'],
  },
  {
    id: 7,
    title: 'Prepare sprint report',
    priority: 'High',
    status: 'In Review',
    assignee: 'Maria Wilson',
    tags: ['reporting', 'documentation'],
  },
]

function App() {
  return (
    <section className="h-full w-full overflow-x-hidden">
      <div className="py-2 px-1 pb-6 flex items-start gap-2 justify-between">
        <div>
          <h3 className="font-semibold text-2xl">Frontend</h3>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <div className="relative">
                  <Badge
                    variant={'default'}
                    className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute -top-2 -right-2"
                  >
                    4
                  </Badge>
                  <Button
                    size={'icon'}
                    variant={'outline'}
                    title="filter task"
                    aria-label="filter task in frontend"
                  >
                    <Filter />
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent
                className="min-w-96 max-w-xl w-full"
                align="center"
              >
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="leading-none font-semibold">Filter</h4>
                    <p className="text-muted-foreground text-sm">
                      Set the filter to get the specific tasks
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="grid items-center gap-1">
                        <Label htmlFor="width">Priority</Label>

                        <Combobox />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="grid items-center gap-1">
                        <Label htmlFor="maxWidth">Due On</Label>

                        <Combobox />
                      </div>
                      <div className="grid  items-center gap-1">
                        <Label htmlFor="maxWidth">Created At</Label>

                        <Combobox />
                      </div>
                    </div>

                    <div className="grid  items-center gap-1">
                      <Label htmlFor="width" className="col-span-1 self-start">
                        Sort By
                      </Label>

                      <div className="col-span-3">
                        <SortBy />
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="relative w-80">
            <Search className="absolute left-2 top-2.5 size-4" />
            <Input
              className="pl-8 w-full"
              placeholder="Search in frontend..."
            />
          </div>
        </div>
      </div>
      <div className="flex h-[calc(100%-128px)]  overflow-x-auto gap-4">
        <div className="border  p-2 pt-0 rounded-xl">
          <div className="p-2 flex gap-3 items-center justify-between">
            <h3 className="font-semibold">To Do</h3>
          </div>
          <div className="flex flex-col gap-3  h-[calc(100%-44px)] w-max  overflow-y-auto">
            {tasks.map((task) => (
              <Card key={task.id} className="p-4  min-w-sm h-max">
                <CardContent className="p-0 grid gap-3">
                  <div>
                    <Link to="/tasks/detail/$taskId" params={{ taskId: '123' }}>
                      <h3 className="font-semibold text-lg">{task.title}</h3>
                    </Link>
                  </div>

                  <div className="flex gap-1 flex-wrap">
                    {task.tags.map((tag) => (
                      <Badge variant="secondary" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <CardFooter className="border-t p-0 [.border-t]:pt-2">
                    <div className="flex gap-3 items-center justify-between w-full">
                      <div className="leading-none tracking-tight text-sm">
                        <span className="text-card-foreground/50 ">
                          Priority:
                        </span>{' '}
                        {task.priority}
                      </div>
                      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/leerob.png"
                            alt="@leerob"
                          />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/evilrabbit.png"
                            alt="@evilrabbit"
                          />
                          <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="border  p-2 pt-0 rounded-xl">
          <div className="p-2 flex gap-3 items-center justify-between">
            <h3 className="font-semibold">To Do</h3>
          </div>
          <div className="flex flex-col gap-3  h-[calc(100%-44px)] w-max  overflow-y-auto">
            {tasks.map((task) => (
              <Card key={task.id} className="p-4  min-w-sm h-max">
                <CardContent className="p-0 grid gap-3">
                  <div>
                    <h3 className="font-semibold text-lg">{task.title}</h3>
                  </div>

                  <div className="flex gap-1 flex-wrap">
                    {task.tags.map((tag) => (
                      <Badge variant="secondary" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <CardFooter className="border-t p-0 [.border-t]:pt-2">
                    <div className="flex gap-3 items-center justify-between w-full">
                      <div className="leading-none tracking-tight text-sm">
                        <span className="text-card-foreground/50 ">
                          Priority:
                        </span>{' '}
                        {task.priority}
                      </div>
                      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/leerob.png"
                            alt="@leerob"
                          />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/evilrabbit.png"
                            alt="@evilrabbit"
                          />
                          <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="border  p-2 pt-0 rounded-xl">
          <div className="p-2 flex gap-3 items-center justify-between">
            <h3 className="font-semibold">To Do</h3>
          </div>
          <div className="flex flex-col gap-3  h-[calc(100%-44px)] w-max  overflow-y-auto">
            {tasks.map((task) => (
              <Card key={task.id} className="p-4  min-w-sm h-max">
                <CardContent className="p-0 grid gap-3">
                  <div>
                    <h3 className="font-semibold text-lg">{task.title}</h3>
                  </div>

                  <div className="flex gap-1 flex-wrap">
                    {task.tags.map((tag) => (
                      <Badge variant="secondary" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <CardFooter className="border-t p-0 [.border-t]:pt-2">
                    <div className="flex gap-3 items-center justify-between w-full">
                      <div className="leading-none tracking-tight text-sm">
                        <span className="text-card-foreground/50 ">
                          Priority:
                        </span>{' '}
                        {task.priority}
                      </div>
                      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/leerob.png"
                            alt="@leerob"
                          />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/evilrabbit.png"
                            alt="@evilrabbit"
                          />
                          <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="border  p-2 pt-0 rounded-xl">
          <div className="p-2 flex gap-3 items-center justify-between">
            <h3 className="font-semibold">To Do</h3>
          </div>
          <div className="flex flex-col gap-3  h-[calc(100%-44px)] w-max  overflow-y-auto">
            {tasks.map((task) => (
              <Card key={task.id} className="p-4  min-w-sm h-max">
                <CardContent className="p-0 grid gap-3">
                  <div>
                    <h3 className="font-semibold text-lg">{task.title}</h3>
                  </div>

                  <div className="flex gap-1 flex-wrap">
                    {task.tags.map((tag) => (
                      <Badge variant="secondary" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <CardFooter className="border-t p-0 [.border-t]:pt-2">
                    <div className="flex gap-3 items-center justify-between w-full">
                      <div className="leading-none tracking-tight text-sm">
                        <span className="text-card-foreground/50 ">
                          Priority:
                        </span>{' '}
                        {task.priority}
                      </div>
                      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/leerob.png"
                            alt="@leerob"
                          />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://github.com/evilrabbit.png"
                            alt="@evilrabbit"
                          />
                          <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="right" className="sm:max-w-[800px]">
          <TaskDetails />
        </SheetContent>
      </Sheet>
    </section>
  )
}
