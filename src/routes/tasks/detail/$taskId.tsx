import { createFileRoute } from '@tanstack/react-router'
import TaskDetails from '@/components/common/TaskDetails.tsx'

export const Route = createFileRoute('/tasks/detail/$taskId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TaskDetails />
}
