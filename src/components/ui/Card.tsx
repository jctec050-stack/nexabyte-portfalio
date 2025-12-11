import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

const Card = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, ...props }, ref) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 212, 255, 0.2)" }}
      transition={{ duration: 0.3 }}
      ref={ref}
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl transition-all duration-300",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }