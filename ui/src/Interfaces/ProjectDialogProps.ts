import ProjectProps from "./ProjectProps"

interface ProjectDialogProps {
    project: ProjectProps,
    open: boolean,
    onClose: () => void
}

export default ProjectDialogProps
