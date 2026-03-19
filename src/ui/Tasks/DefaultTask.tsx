import { Container, Title } from "./styles"

import { X as CrossIcon } from 'lucide-react'

function DefaultTask() {
    return (
        <Container>
            <div>
                <Title>Teste</Title>
            </div>

            <div>
                <CrossIcon
                    size={30}
                    color={'var(--navy850)'}
                    strokeWidth={2}
                    absoluteStrokeWidth
                />
            </div>
        </Container>
    )
}

export default DefaultTask