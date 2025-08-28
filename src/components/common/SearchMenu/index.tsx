'use client'

import * as React from 'react'
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { Button } from '@/components/ui/button.tsx'

export function SearchMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'd' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prevState) => !prevState)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="w-full flex justify-between text-accent-foreground/50"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center gap-2">
          <Search />
          Search tasks..
        </span>
        <span>⌘F</span>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="sm:max-w-3xl max-w-[90%]"
      >
        <CommandInput placeholder="Type to search..." />
        <CommandList className="min-h-[420px]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Tasks">
            <CommandItem>
              <Calendar />
              <span>Clean repository</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Finalize design for onboarding</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Implement API for sub group</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Workspaces">
            <CommandItem>
              <Calendar />
              <span>Frontend</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Backend</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
