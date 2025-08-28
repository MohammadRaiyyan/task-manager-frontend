import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/workspace/$workspaceId')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Work space details We will show direct task here and insight of overall
      workspace groups and tasks
    </div>
  )
}
