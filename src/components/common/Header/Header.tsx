import CreateTaskModal from '../CreateTaskModal'
import { SearchMenu } from '@/components/common/SearchMenu'
import AuthModal from '@/components/auth/AuthModal.tsx'
import ThemeToggle from '@/components/common/ThemeToggle.tsx'
import { SidebarTrigger } from '@/components/ui/sidebar.tsx'
import UserDropdownMenu from '@/components/common/Header/UserDropdown.tsx'

function Header() {
  return (
    <header className="border-b px-4 h-[48px] flex items-center w-full">
      <nav className="flex items-center justify-between w-full">
        <div className="flex-1">
          <SidebarTrigger />
        </div>
        <div className="flex-1 relative">
          <SearchMenu />
        </div>
        <div className="flex-1 flex items-center justify-end gap-3">
          <CreateTaskModal />

          <AuthModal />
          <UserDropdownMenu />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
