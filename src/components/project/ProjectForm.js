export default function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="type the project name"></input>
            </div>
            <div>
                <input type="number" placeholder="insert the total budget"></input>
            </div>
            <div>
                <select name="category_id">
                    <option disable selected>
                        Select the category
                    </option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create Project"></input>
            </div>
        </form>
    )
}