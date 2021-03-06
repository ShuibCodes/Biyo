import { useState, useEffect } from "react";

export default () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        document.addEventListener("scroll", handleScroll);

        // clean it all up
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);
    return scrollPosition;
};
