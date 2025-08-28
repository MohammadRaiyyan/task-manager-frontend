import {
  Bell,
  Folder,
  LayoutDashboard,
  MoreHorizontal,
  PencilLine,
  PlusCircle,
  Settings,
  Trash,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import type { LucideProps } from 'lucide-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { LinkProps } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import CreateWorkspaceModal from '@/components/common/CreateWorkspace'
import { Button } from '@/components/ui/button.tsx'
import ActionDialoge from '@/components/common/ActionDialoge'

const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Notifications',
    url: '/notifications',
    icon: Bell,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
] satisfies Array<{
  title: string
  url: LinkProps['to']
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
}>
const workspace = [
  {
    title: 'Frontend',
    url: '#',
    icon: Folder,
  },
  {
    title: 'Backend',
    url: '#',
    icon: Folder,
  },
  {
    title: 'Design',
    url: '#',
    icon: Folder,
  },
  {
    title: 'Planned',
    url: '#',
    icon: Folder,
  },
]

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAskConfirmation, setIsAskConfirmation] = useState(false)
  const [editSpace, setEditSpace] = useState<string>('')
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <SidebarComponent variant="inset">
        <SidebarHeader className="pb-0">
          <h2 className="font-semibold text-lg p-2 pb-0">Tasker</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {workspace.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.title === 'Frontend'}
                    >
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction className="opacity-0 hover:opacity-100 peer-hover/menu-button:opacity-100">
                          <MoreHorizontal />
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem
                          onClick={() => {
                            setIsOpen(true)
                            setEditSpace('123')
                          }}
                        >
                          <PencilLine /> <span>Edit Workspace</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() => setIsAskConfirmation(true)}
                        >
                          <Trash />
                          <span>Delete Workspace</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                ))}

                <SidebarMenuItem className="sticky bottom-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start px-2"
                    onClick={() => setIsOpen(true)}
                  >
                    <PlusCircle />
                    Create Workspace
                  </Button>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </SidebarComponent>
      <CreateWorkspaceModal
        isOpen={isOpen}
        onClose={onClose}
        title="Workspace"
        action={editSpace ? 'EDIT' : 'CREATE'}
      />
      <ActionDialoge
        description="Are you sure you are deleting abcd"
        onYes={() => {}}
        isOpen={isAskConfirmation}
        onClose={() => setIsAskConfirmation(false)}
        variant="destructive"
      />
    </>
  )
}

export default Sidebar
