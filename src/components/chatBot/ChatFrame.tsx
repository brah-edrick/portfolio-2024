import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, Dispatch, SetStateAction } from "react";

interface ChatFrameProps {
    isOpen: boolean;
    close: Dispatch<SetStateAction<boolean>>;
    children?: ReactNode;
}

export const ChatFrame: React.FC<ChatFrameProps> = ({ children, isOpen, close }) => {
    return (
        <div className={`transition-all fixed rounded-lg w-3/4 right-5 max-w-96 portrait:h-1/2 md:landscape:h-1/2 landscape:h-2/3 flex flex-col bottom-5 lg:right-20 z-50 shadow-sm ${isOpen ? '' : 'translate-y-[100vh]'}`}>
            <div className="rounded-t-lg text-slate-50  border-b border-yellow-400  py-2 px-4 flex justify-between bg-yellow-100 backdrop-blur-md bg-opacity-15">
                <div className="flex flex-col text-sm">
                    <span className="font-semibold">Brah Bot</span>
                    <span className="font-light">Ask me a question</span>
                </div>
                <button onClick={(e) => close(false)}><FontAwesomeIcon color='white' icon={faClose}></FontAwesomeIcon>
                </button>
            </div>
            <div className="h-100 bg-white rounded-b-lg grow backdrop-blur-md bg-opacity-5 p-2 flex items-start flex-col overflow-y-scroll overflow-x-clip gap-2">
                {children}
            </div>
        </div>
    );
}