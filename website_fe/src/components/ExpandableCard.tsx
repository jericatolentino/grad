
import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { generateRandomEmoji } from '../utils/other/generateRandomEmoji'


interface CardProps {
    value: string
}

interface MotionCardProps {
    open: boolean
}

const MotionCard = styled(motion.div)<MotionCardProps>`
    background-color: ${props => props.open ? '#a6e2f5' : 'lightblue'};
    padding: 1rem 2rem;
    color: black;
    font-size: 0.5em;
    width: ${props => props.open ? '70%' : 'fit-content'};
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`

const MotionH1Normal = styled(motion.h1)`
    text-align: left;
    color: black;
`

const MotionPExpanded = styled.p`
    line-height: 150%;
`

const Card = ({ value }: CardProps) => {
    const [open, setOpen] = useState(false)

    const Header =
        (<MotionH1Normal
            as={motion.h1}
            layout='position'
        >
            {generateRandomEmoji()} {value}
        </MotionH1Normal>)

    const ExpandedCard =
        (<motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5}}
        >
            <MotionPExpanded>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate aliquam molestiae ratione sint magnam sequi fugiat u
                llam earum distinctio fuga iure, ad odit repudiandae modi est alias ipsum aperiam.
                Culpa?
            </MotionPExpanded>
        </motion.div>)

    return (
        <AnimateSharedLayout>
            <MotionCard
                as={motion.div}
                layout
                onClick={() => setOpen(!open)}
                open={open}
                transition={{ 
                    duration: 0.5, 
                    type: 'spring' 
                }}
            >
                {Header}
                {open && ExpandedCard}
            </MotionCard>
        </AnimateSharedLayout>
    )
}

export default Card
