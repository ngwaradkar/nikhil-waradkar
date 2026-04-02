"use client";

import { useEffect, useRef } from "react";
import "./Cursor.css";
import gsap from "gsap";

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let hover = false;
        const cursor = cursorRef.current!;
        const mousePos = { x: 0, y: 0 };
        const cursorPos = { x: 0, y: 0 };
        const onMouseMove = (e: MouseEvent) => {
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
        };
        document.addEventListener("mousemove", onMouseMove);

        let animationFrameId: number;
        const loop = () => {
            if (!hover) {
                const delay = 6;
                cursorPos.x += (mousePos.x - cursorPos.x) / delay;
                cursorPos.y += (mousePos.y - cursorPos.y) / delay;
                gsap.to(cursor, { x: cursorPos.x, y: cursorPos.y, duration: 0.1 });
            }
            animationFrameId = requestAnimationFrame(loop);
        };
        animationFrameId = requestAnimationFrame(loop);

        const applyHoverLogic = () => {
            document.querySelectorAll("button, a, [data-cursor]").forEach((item) => {
                const element = item as HTMLElement;
                // Remove existing to avoid duplicates
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                element.removeEventListener("mouseover", element.onmouseover as any);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                element.removeEventListener("mouseout", element.onmouseout as any);

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                element.addEventListener("mouseover", (e: MouseEvent) => {
                    const target = e.currentTarget as HTMLElement;
                    const rect = target.getBoundingClientRect();

                    if (element.dataset.cursor === "icons") {
                        cursor.classList.add("cursor-icons");
                        gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
                        cursor.style.setProperty("--cursorH", `${rect.height}px`);
                        hover = true;
                    }
                    if (element.dataset.cursor === "disable" || element.tagName === "BUTTON" || element.tagName === "A") {
                        cursor.classList.add("cursor-disable");
                    }
                });
                element.addEventListener("mouseout", () => {
                    cursor.classList.remove("cursor-disable", "cursor-icons");
                    hover = false;
                });
            });
        };

        // MutationObserver to attach events to dynamically added elements
        const observer = new MutationObserver(() => applyHoverLogic());
        observer.observe(document.body, { childList: true, subtree: true });
        applyHoverLogic();

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
