import { useState, useRef, type WheelEvent } from "react";

export const ScrollableLayout = ({ children, head }: { children: React.ReactNode, head: React.ReactNode }) => {
    const [currentScroll, setCurrentScroll] = useState(0);
    const viewRef = useRef<HTMLDivElement>(null);

    const onScroll = (event: WheelEvent<HTMLDivElement>) => {
        const viewportHeight = window.innerHeight;
        if (!viewRef.current) return;
        if (event.deltaY < 0 && currentScroll > 0) {
            viewRef.current.style.transform = `translateY(${viewportHeight - currentScroll}px)`;
            return setCurrentScroll(prevValue => prevValue - viewportHeight);
        };
        if (event.deltaY > 0 && currentScroll < 1200) {
            viewRef.current.style.transform = `translateY(-${viewportHeight + currentScroll}px)`;
            setCurrentScroll(prevValue => prevValue + viewportHeight);
        }
    }

    return (
        <div onWheel={onScroll} className="overflow-hidden max-h-[100dvh]">
            {head && head}
            <div ref={viewRef} className="container-mask">
                {
                    children
                }
            </div>
        </div>
    )
}