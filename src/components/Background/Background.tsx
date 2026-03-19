import type { ReactNode } from "react"
import { Container, ScreenBackground } from "./styles"

type Props = {
    children: ReactNode
}

const Background = ({ children }: Props) => {
    return (
        <ScreenBackground>
            <Container>
                {children}
            </Container>
        </ScreenBackground>
    )
}

export default Background