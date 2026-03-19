import { Container, Logo } from "./styles"

import { Moon as MoonIcon } from "lucide-react"

const Header = () => {
    return (
        <Container>
            <Logo>TODO</Logo>

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