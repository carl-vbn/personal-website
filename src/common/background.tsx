import { createElement, useEffect, useRef } from "react";
import styles from "@/styles/background.module.css";

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let previousWidth = width;

        let stars: {
            x: number,
            y: number,
            z: number,
            velX: number,
            velY: number,
            size: number
        }[] = [];

        for (let i = 0; i < 200; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: 1 + Math.random(),
                velX: Math.random() * 0.5 - 0.25,
                velY: Math.random() * 0.5 - 0.25,
                size: Math.random() * 10
            });
        }

        function render() {
            if (!ctx) return;

            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];
                star.x += star.velX;
                star.y += star.velY;
                star.size += 0.01;
                
                if (star.size > 10) {
                    star.size = 0;
                }

                const parallaxedY = (y => y < 0 ? y + height : y)((star.y - window.scrollY / star.z) % height);
                const distanceToEdge = Math.min(parallaxedY, height - parallaxedY);
                const wrappedSize = (star.size < 5 ? star.size : Math.max(0, 10 - star.size)) * Math.pow((2 * distanceToEdge / height), 0.5);

                if (star.x < -5 || star.x > width + 5 || parallaxedY < -5 || parallaxedY > height + 5) {
                    star.size = 0
                    star.x = Math.random() * width;
                    star.y = Math.random() * height;
                }

                ctx.fillStyle = "white";
                ctx.fillRect(star.x, parallaxedY, wrappedSize, wrappedSize);
            }

            requestAnimationFrame(render);
        }

        render();

        function resize() {
            width = canvas!.width = window.innerWidth;
            height = canvas!.height = window.innerHeight;

            // Stretch stars to fill new width
            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];
                star.x = star.x / previousWidth * width;
            }
            
            previousWidth = width;
        }

        window.addEventListener("resize", resize);
        
        return () => {
            ctx = null;
            window.removeEventListener("resize", resize);
        }
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}