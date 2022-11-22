import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useRouter } from 'next/router';


type Transition = {
    route: string,
    variants: Variants,
    config: {
        animate?: string | Array<string>,
        initial?: string | Array<string>,
        exit?: string | Array<string>,
        className?: string
    }
}

const transitions: Transition[] = [
    {
        route: '/',
        variants: {
            out: {
                opacity: 0,
                y: 40,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut'
                }
            },
            in: {
                opacity: 100,
                y: 0,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut'
                }
            }
        },
        config : {
            animate: 'in',
            initial: 'out',
            exit: 'out',
            className: ''
        }
    },
    {
        route: '/slide-transition',
        variants: {
            inactive: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut'
                },
            },
            out: {
                opacity: 0,
                y: -100,
                transition: {
                    duration: 0.5,
                    ease: 'easeInOut'
                }
            },
            in: {
                y: 100,
                opacity: 0,
                transition: {
                    duration: 0.5,
                    ease: 'easeInOut'
                }
            },
        },
        config : {
            animate: 'inactive',
            initial: 'out',
            exit: 'out',
            className: "slide-animate"
        }
    },
    {
        route: '/scale-transition',
        variants: {
            scaleDown: {
                scale: 0.8,
                y: 100,
                transition: {
                    duration: 0.4
                }
            },
            out: {
                x: "-100%",
                transition: {
                    duration: 0.4,
                    delay: 0.5
                }
            },
            in: {
                scale: 0.8,
                y: 100,
                x: "100%",
                transition: {
                    duration: 0.4
                }
            },
            center: {
                x: 0,
                scale: 0.8,
                transformOrigin: 'top',
                transition: {
                    duration: 0.4
                }
            },
            scaleUp: {
                scale: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                    delay: 0.5
                }
            },
        },
        config : {
            animate: ['center', 'scaleUp'],
            initial: 'in',
            exit: ['scaleDown', 'out'],
            className: "scale-animate"
        }
    }
]


const Transition = ({children}: any) => {
	const { asPath } = useRouter();

    let transition = transitions.filter(obj => {
        return obj.route === asPath
    }).shift() || transitions[0]

    if(!transition) {
        transition = transitions[0]
    }


    return (
        <div className={'page-transition '}>
            <div className={'slide-animate'}>
            <AnimatePresence
                initial={false}
                exitBeforeEnter
            >
                <motion.div
                key={asPath}
                variants={transition.variants}
                animate={transition.config.animate}
                initial={transition.config.initial}
                exit={transition.config.exit}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
            </div>
        </div>
    )
}

export default Transition