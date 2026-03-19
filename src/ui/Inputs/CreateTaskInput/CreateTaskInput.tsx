import { Container, Input_container } from "./styles"

type Props = {}

function CreateTaskInput({ }: Props) {
    return (
        <Container>
            <Input_container
                placeholder="Create a new to do..."
            />
        </Container>
    )
}

export default CreateTaskInput