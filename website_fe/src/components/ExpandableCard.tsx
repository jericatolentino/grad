
import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'

const MotionDivNormal = styled(motion.div)`
    width: 200px;
    height:200px;
    display: grid;
    place-items: end center;
    margin: 10px;
`;

const MotionH1Normal = styled(motion.h1)`
    font-size: 18px;
    color:var(--fg);
    padding: 5px;
    text-align: center;
`

const MotionDivExpanded = styled(motion.div)`
    position: absolute;
    top:0px;
    left:0px;
    width: 100vw;
    height:100vh;
    z-index: 1;
    display: grid;
    place-items: center;
`;

const MotionH1Expanded = styled(motion.h1)`
    font-size: 27px;
    color:var(--fg);
    width: 300px;
    padding: 5px;
    place-self: end center;
`

interface CardProps {
    value: string
}

const Card = ({ value }: CardProps) => {
    const [open, setOpen] = useState(false)

    const NormalCard =
        (<MotionDivNormal
            as={motion.div}
            onClick={() => setOpen(true)}
            layoutId='expandable-card'
        >
            <MotionH1Normal
                as={motion.h1}
                layoutId='expandable-card-title'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {value}
            </MotionH1Normal>
        </MotionDivNormal>)

    const ExpandedCard =
        (<MotionDivExpanded
            as={motion.div}
            onClick={() => setOpen(false)}
            layoutId='expandable-card'
        >
            <MotionH1Expanded
                as={motion.h1}
                layoutId='expandable-card-title'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate aliquam molestiae ratione sint magnam sequi fugiat u
                    llam earum distinctio fuga iure, ad odit repudiandae modi est alias ipsum aperiam.
                    Culpa?</p>
            </MotionH1Expanded>
        </MotionDivExpanded>)

    return (
        <AnimateSharedLayout>
            {open ? ExpandedCard : NormalCard}
        </AnimateSharedLayout>
    )
}

export default Card
