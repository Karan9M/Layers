'use client'
import { AnimationPlaybackControls, motion, useAnimate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';

export default function CallToAction() {
    const [isHovering, setIsHovering] = useState(false);
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();
    useEffect(() => {
        animation.current = animate(scope.current, { x: '-50%' }, { duration: 30, ease: 'linear', repeat: Infinity });

    });

    useEffect(() => {
        if (animation.current) {
            if (isHovering) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovering])

    return <section className="py-24 relative group">
        <div className="overflow-x-clip p-4 flex">
            <motion.div
                ref={scope}
                className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-16">
                        <span className="text-lime-400 text-7xl">&#10038;</span>
                        <span className='group-hover:text-lime-400'>Try it for free</span>
                    </div>
                ))}
            </motion.div>
        </div>
        <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 left-1/2 -translate-x-1/2'>
            <span className='bg-white text-neutral-950 py-1 px-4 rounded-full inline-flex justify-center items-center'>Yes, please 🙌</span>
        </div>
    </section>
}
