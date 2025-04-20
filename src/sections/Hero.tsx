'use client'

import designEx1 from '@/assets/images/design-example-1.png';
import designEx2 from '@/assets/images/design-example-2.png';
import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from 'framer-motion';
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import cursorYouImage from '@/assets/images/cursor-you.svg';

// 💡 Type for constraints object
type Constraints = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

export default function Hero() {
  const [leftscope, leftanimate] = useAnimate();
  const [leftPointerscope, leftPointeranimate] = useAnimate();
  const [rightscope, rightanimate] = useAnimate();
  const [rightPointerscope, rightPointeranimate] = useAnimate();

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const [leftConstraints, setLeftConstraints] = useState<Constraints>({
    left: 0, right: 0, top: 0, bottom: 0
  });

  const [rightConstraints, setRightConstraints] = useState<Constraints>({
    left: 0, right: 0, top: 0, bottom: 0
  });

  useEffect(() => {
    leftanimate([
      [leftscope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftscope.current, { y: 0, x: 0 }, { duration: 0.5 }]
    ]);

    leftPointeranimate([
      [leftPointerscope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerscope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [leftPointerscope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: 'easeInOut' }]
    ]);

    rightanimate([
      [rightscope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightscope.current, { y: 0, x: 0 }, { duration: 0.5 }]
    ]);

    rightPointeranimate([
      [rightPointerscope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightPointerscope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [rightPointerscope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5, ease: 'easeInOut' }]
    ]);
  }, [leftanimate, leftPointeranimate, rightanimate, rightPointeranimate, leftscope, leftPointerscope, rightscope, rightPointerscope]);

  useLayoutEffect(() => {
    const setDragLimits = () => {
      if (leftRef.current) {
        const { width, height } = leftRef.current.getBoundingClientRect();
        setLeftConstraints({
          left: -leftRef.current.offsetLeft,
          right: window.innerWidth - leftRef.current.offsetLeft - width,
          top: -leftRef.current.offsetTop,
          bottom: window.innerHeight - leftRef.current.offsetTop - height,
        });
      }
      if (rightRef.current) {
        const { width, height } = rightRef.current.getBoundingClientRect();
        setRightConstraints({
          left: -rightRef.current.offsetLeft,
          right: window.innerWidth - rightRef.current.offsetLeft - width,
          top: -rightRef.current.offsetTop,
          bottom: window.innerHeight - rightRef.current.offsetTop - height,
        });
      }
    };

    setDragLimits();
    window.addEventListener("resize", setDragLimits);
    return () => window.removeEventListener("resize", setDragLimits);
  }, []);

  return (
    <section className="py-24 overflow-x-clip" style={{
      cursor: `url(${cursorYouImage.src}) 10 10, auto`
    }}>
      <div className="container relative">
        {/* Left Image */}
        <motion.div
          ref={leftscope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          dragElastic={0.9}
          dragConstraints={leftConstraints}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 15 }}
          dragMomentum={true}
          className="absolute -left-44 top-16 hidden lg:flex"
        >
          <Image src={designEx1} alt="design1" draggable={false} />
        </motion.div>

        {/* Left Pointer */}
        <motion.div
          ref={leftPointerscope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="karan" />
        </motion.div>

        {/* Right Image */}
        <motion.div
          ref={rightscope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          drag
          dragElastic={0.9}
          dragConstraints={rightConstraints}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 15 }}
          dragMomentum={true}
          className="absolute -right-64 -top-16 hidden lg:flex"
        >
          <Image src={designEx2} alt="design2" draggable={false} />
        </motion.div>

        {/* Right Pointer */}
        <motion.div
          ref={rightPointerscope}
          initial={{ opacity: 0, x: 200, y: 100 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="nihal" color="red" />
        </motion.div>

        {/* Content */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful designs, created effortlessly
        </h1>
        <p className="text-center text-xl max-w-2xl mx-auto text-white/50 mt-8">
          Design tools shouldn&apos;t slow down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow.
        </p>

        <form className="flex flex-col sm:flex-row border border-white/15 rounded-full p-2 mt-8 w-full max-w-[90%] sm:max-w-lg mx-auto overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 py-2 rounded-full flex-1 mb-2 sm:mb-0 sm:mr-2 outline-none w-full"
          />
          <Button
            variant="primary"
            size="sm"
            type="submit"
            className="whitespace-nowrap w-full sm:w-auto"
          >
            Sign up
          </Button>
        </form>
      </div>
    </section>
  );
}
