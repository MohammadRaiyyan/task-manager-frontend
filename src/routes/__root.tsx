import { TanstackDevtools } from '@tanstack/react-devtools'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import type { QueryClient } from '@tanstack/react-query'
import Header from '@/components/common/Header/Header'
import Sidebar from '@/components/common/Sidebar/Sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { ThemeProvider } from '@/context/ThemeContext/ThemeContextProvider.tsx'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          <Sidebar />
          {/* <div className="relative ml-[sidebar]">*/}

          <main className=" w-full h-[calc(100svh-24px)] shadow overflow-hidden bg-background  rounded-lg m-2">
            <Header />{' '}
            <div className="px-6 py-4 h-full w-full">
              <Outlet />
            </div>
          </main>
          {/* </div>*/}
        </SidebarProvider>
        <TanstackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
      </ThemeProvider>
    )
  },
})
