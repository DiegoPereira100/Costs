import './NewProject.css'
import ProjectForm from '../project/ProjectForm'

export default function NewProject() {
    return (
        <div className="newProject_container">
            <h1>Create Project</h1>
            <p>Create your project to later add the services</p>
            <ProjectForm />
        </div>
    )
}