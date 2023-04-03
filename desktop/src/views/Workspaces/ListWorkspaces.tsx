import { VStack } from "@chakra-ui/react"
import { useEffect, useMemo } from "react"
import { useWorkspaces } from "../../contexts"
import { exists } from "../../lib"
import { TWorkspace } from "../../types"
import { WorkspaceCard } from "./WorkspaceCard"
import { useNavigate } from "react-router"
import { Routes } from "../../routes"

type TWorkspacesInfo = Readonly<{
  workspaceCards: TWorkspace[]
}>

export function ListWorkspaces() {
  const workspaces = useWorkspaces()
  const navigate = useNavigate()
  const { workspaceCards } = useMemo<TWorkspacesInfo>(() => {
    const empty: TWorkspacesInfo = { workspaceCards: [] }
    if (!exists(workspaces)) {
      return empty
    }

    return workspaces.reduce<TWorkspacesInfo>((acc, workspace) => {
      const { id } = workspace
      if (!exists(id)) {
        return acc
      }

      acc.workspaceCards.push(workspace)

      return acc
    }, empty)
  }, [workspaces])

  useEffect(() => {
    if (workspaces.length === 0) {
      navigate(Routes.WORKSPACE_CREATE)
    }
  }, [workspaces, navigate])

  return (
    <VStack align="start" marginBottom="12">
      {workspaceCards.map((workspace) => (
        <WorkspaceCard key={workspace.id} workspaceID={workspace.id} />
      ))}
    </VStack>
  )
}