import { Box, CheckBox, Container, IconBox, IconContainer, TaskTitleContainer, Title } from "./styles"

import { useState } from "react"

import { X as CrossIcon } from 'lucide-react'
import { Check as CheckIcon } from 'lucide-react'
import { Pen as EditIcon } from 'lucide-react'
import { ArrowDownFromLine as ArchiveIcon } from 'lucide-react'
import { Save as SaveIcon } from 'lucide-react'
import EditTaskInput from "../../ui/Inputs/EditTaskInput/EditTaskInput"

function DefaultTask() {
    const [checked, setChecked] = useState(false)
    const [details, openDetails] = useState(false)
    const [edit, setEdit] = useState(false)

    return (
        <Container>
            <Box
                onClick={() => openDetails(!details)}
            >
                <TaskTitleContainer>
                    {edit
                        ? <EditTaskInput />
                        : <>
                            <CheckBox
                                onClick={() => setChecked(!checked)}
                                $checked={checked}
                            >
                                {checked
                                    ? <CheckIcon
                                        size={15}
                                        color={'var(--gray50)'}
                                        strokeWidth={2}
                                        absoluteStrokeWidth
                                    />
                                    : <CheckIcon
                                        size={15}
                                        color={'transparent'}
                                        strokeWidth={2}
                                        absoluteStrokeWidth
                                    />}
                            </CheckBox>

                            <Title
                                $checked={checked}
                            >
                                Teste
                            </Title>
                        </>
                    }
                </TaskTitleContainer>

                {edit
                    ? <IconContainer>
                        <IconBox
                            onClick={() => setEdit(false)}
                        >
                            <SaveIcon
                                size={30}
                                color={'var(--navy850)'}
                                strokeWidth={2}
                                absoluteStrokeWidth
                            />
                        </IconBox>
                    </IconContainer>
                    : <IconContainer>
                        <IconBox
                            onClick={() => setEdit(true)}
                        >
                            <EditIcon
                                size={20}
                                color={'var(--navy850)'}
                                strokeWidth={2}
                                absoluteStrokeWidth
                            />
                        </IconBox>

                        <IconBox>
                            <ArchiveIcon
                                size={25}
                                color={'var(--navy850)'}
                                strokeWidth={2}
                                absoluteStrokeWidth
                            />
                        </IconBox>

                        <IconBox>
                            <CrossIcon
                                size={30}
                                color={'var(--navy850)'}
                                strokeWidth={2}
                                absoluteStrokeWidth
                            />
                        </IconBox>
                    </IconContainer>
                }
            </Box>

            {/* {details &&
                <Box>
                
                </Box>
            } */}
        </Container>
    )
}

export default DefaultTask