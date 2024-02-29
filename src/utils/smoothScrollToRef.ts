import { RefObject } from "react";

export const smoothScrollToRef = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', });
    }
}