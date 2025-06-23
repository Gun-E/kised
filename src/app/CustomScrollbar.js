import React, { useRef, useState, useEffect } from "react";

export default function CustomScrollbar({
                                            width = 6,
                                            thumbColor = "bg-gray-300",
                                            trackColor = "#fafafa",
                                            minThumbHeight = 6,
                                            className = "",
                                            style = {},
                                            children,
                                            header,
                                            headerHeight = 30,
                                            hasFooter = false, // ✅ footer 유무 props
                                        }) {
    const containerRef = useRef(null);
    const [thumbHeight, setThumbHeight] = useState(minThumbHeight);
    const [thumbTop, setThumbTop] = useState(0);
    const dragging = useRef(false);
    const dragStartY = useRef(0);
    const dragStartTop = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        function calcThumbHeight() {
            const visibleRatio = container.clientHeight / container.scrollHeight;
            const newHeight = Math.max(visibleRatio * container.clientHeight, minThumbHeight);
            setThumbHeight(newHeight);
        }

        calcThumbHeight();
        window.addEventListener("resize", calcThumbHeight);
        return () => window.removeEventListener("resize", calcThumbHeight);
    }, [minThumbHeight]);

    const onScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const scrollRatio = container.scrollTop / (container.scrollHeight - container.clientHeight);
        setThumbTop(scrollRatio * (container.clientHeight - thumbHeight));
    };

    const onThumbMouseDown = (e) => {
        dragging.current = true;
        dragStartY.current = e.clientY;
        dragStartTop.current = thumbTop;

        document.addEventListener("mousemove", onThumbMouseMove);
        document.addEventListener("mouseup", onThumbMouseUp);
        e.preventDefault();
    };

    const onThumbMouseMove = (e) => {
        if (!dragging.current) return;

        const deltaY = e.clientY - dragStartY.current;
        const container = containerRef.current;
        if (!container) return;

        let newTop = dragStartTop.current + deltaY;
        newTop = Math.max(0, Math.min(newTop, container.clientHeight - thumbHeight));
        setThumbTop(newTop);

        const scrollRatio = newTop / (container.clientHeight - thumbHeight);
        container.scrollTop = scrollRatio * (container.scrollHeight - container.clientHeight);
    };

    const onThumbMouseUp = () => {
        dragging.current = false;
        document.removeEventListener("mousemove", onThumbMouseMove);
        document.removeEventListener("mouseup", onThumbMouseUp);
    };

    // ✅ 바텀 라운드 및 보더 조건부 적용 클래스
    const borderClass = hasFooter
        ? "border-t border-l border-r rounded-t-sm"
        : "border rounded-sm";

    return (
        <div
            className={`relative flex flex-col overflow-hidden bg-white ${borderClass} ${className} border-[#d3d3d3]`}
            style={style}
        >
            {/* 헤더 영역 */}
            {header && (
                <div
                    className="sticky top-0 z-10 flex-shrink-0 bg-white"
                    style={{ height: headerHeight }}
                >
                    {header}
                </div>
            )}

            {/* 스크롤 영역 */}
            <div
                className="relative flex-1 overflow-y-auto"
                ref={containerRef}
                onScroll={onScroll}
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    top: "-1px",
                }}
            >
                <style>{`
                    .custom-scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                <div className="custom-scrollbar-hide">
                    {children}
                </div>
            </div>

            {/* 커스텀 스크롤바 */}
            <div
                className="absolute right-0 rounded"
                style={{
                    width,
                    backgroundColor: trackColor,
                    top: headerHeight,
                    height: `calc(100% - ${headerHeight}px)`,
                }}
            >
                <div
                    className={`${thumbColor} rounded w-full cursor-pointer select-none`}
                    style={{ height: thumbHeight, transform: `translateY(${thumbTop}px)` }}
                    onMouseDown={onThumbMouseDown}
                    role="scrollbar"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        const container = containerRef.current;
                        if (!container) return;
                        if (e.key === "ArrowDown") {
                            container.scrollBy({ top: 20, behavior: "smooth" });
                        } else if (e.key === "ArrowUp") {
                            container.scrollBy({ top: -20, behavior: "smooth" });
                        }
                    }}
                />
            </div>
        </div>
    );
}
