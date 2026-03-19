import { Container } from "./styles"

import { Moon as MoonIcon } from "lucide-react"

const Header = () => {
    return (
        <Container>
            <h1>TODO</h1>

            <MoonIcon
                size={35}
                color={'var(--white)'}
                strokeWidth={3}
                absoluteStrokeWidth
            />
        </Container>
    )
}

export default Header