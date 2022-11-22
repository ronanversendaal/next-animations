import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = [
    {
        route: '/',
        variant: {
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
            },
        },
        config : {
            animate: 'in',
            initial: 'out',
            exit: 'out'
        }
    },
    {
        route: '/slide-transition',
        variant: {
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
        variant: {
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
    console.log(asPath)

    var transition = variants.filter(obj => {
        return obj.route === asPath
    }).shift()

    return (
        <div className={'page-transition '}>
            <div className={'slide-animate'}>
            <AnimatePresence
                initial={false}
                exitBeforeEnter
            >
                <motion.div
                key={asPath}
                variants={transition?.variant}
                animate={transition?.config.animate}
                initial={transition?.config.initial}
                exit={transition?.config.exit}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
            </div>
        </div>
    )
}

export default Transition