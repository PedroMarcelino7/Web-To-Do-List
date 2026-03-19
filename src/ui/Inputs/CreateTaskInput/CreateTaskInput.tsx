import { Input_container } from "./styles"

type Props = {}

function CreateTaskInput({ }: Props) {
    return (
        <Input_container
            placeholder="Create a new to do..."
        />
    )
}

export default CreateTaskInput