import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/workspace/$workspaceId/$groupId')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Workspace group details. basically we will show here task list</div>
  )
}
