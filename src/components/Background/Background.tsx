import type { ReactNode } from "react"
import { Background_container } from "./styles"

type Props = {
    children: ReactNode
}

const Background = ({ children }: Props) => {
    return (
        <Background_container>
            {children}
        </Background_container>
    )
}

export default Background