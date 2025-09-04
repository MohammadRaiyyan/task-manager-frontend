import CreateTaskModal from '../CreateTaskModal'
import { SearchMenu } from '@/components/common/SearchMenu'
import AuthModal from '@/components/auth/AuthModal.tsx'
import { SidebarTrigger } from '@/components/ui/sidebar.tsx'
import UserDropdownMenu from '@/components/common/Header/UserDropdown.tsx'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb.tsx'

function Header() {
  return (
    <header className="border-b px-4  h-[54px] flex items-center w-full">
      <nav className="flex items-center justify-between w-full">
        <div className="w-max">
          <SidebarTrigger />
        </div>
        <div className="flex-1  mx-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <a
                    href="/docs/components"
                    className="text-accent-foreground/50"
                  >
                    Workspace
                  </a>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Frontend</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex-1 relative">
          <SearchMenu />
        </div>
        <div className="flex-1 flex items-center justify-end gap-3">
          <CreateTaskModal />

          <AuthModal />
          <UserDropdownMenu />
          {/* <ThemeToggle />*/}
        </div>
      </nav>
    </header>
  )
}

export default Header
