import React, { Dispatch, SetStateAction, useRef } from "react";
import { Emoji } from "../typography/Emoji";
import { ChatFrame } from "./ChatFrame";
import { BotText } from "./BotText";
import { Prompt } from "./Prompt";
import { UserText } from "./UserText";
import { v4 as uuid } from "uuid"; // Import the 'uuid' package
import { AnimatePresence, motion } from "framer-motion";

type Prompt = {
  label: string;
  botResponse?: {
    botChat: React.ReactNode[];
    prompts?: Prompt[];
  };
  onClick?: () => void;
  href?: string;
};

const FreelancePrompt: Prompt = {
  label: "Do you do freelance work?",
  botResponse: {
    botChat: [
      "Presently, no. But I'm always interested in volunteering my help to projects with a good cause.",
      "Let's connect?",
    ],
    prompts: [
      {
        label: "Email",
        href: "mailto:b62d934d-8eea-4012-8cc4-d61d748b317b@brahedrick.anonaddy.me",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/blhedrick/",
      },
      {
        label: "No, thank you",
      },
    ],
  },
};

const GetInTouchPrompt: Prompt = {
  label: "How can we connect?",
  botResponse: {
    botChat: ["Here's a few ways we can get in touch!"],
    prompts: [
      {
        label: "Email",
        href: "mailto:b62d934d-8eea-4012-8cc4-d61d748b317b@brahedrick.anonaddy.me",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/blhedrick/",
      },
      {
        label: "Nevermind",
      },
    ],
  },
};

const HiringPrompt: Prompt = {
  label: "We want to hire you!",
  botResponse: {
    botChat: [
      <>
        Wow! I’m flattered! <Emoji>❤️</Emoji>
      </>,
      "I'm currently employed but always open to networking!",
      "Let's connect on LinkedIn?",
    ],
    prompts: [
      {
        label: "Ok!",
        href: "https://www.linkedin.com/in/blhedrick/",
      },
      {
        label: "Nevermind",
      },
    ],
  },
};

const CVPrompt: Prompt = {
  label: "Do you have a CV?",
  botResponse: {
    botChat: [
      "I happen to have a copy right here... somewhere",
      "Ahh here it is!",
    ],
    prompts: [
      {
        label: "Take a look",
        href: "/test.pdf",
      },
      {
        label: "Nevermind",
      },
    ],
  },
};

const InitialChat: React.ReactNode[] = [
  <>
    Sup, brah? <Emoji label="howzit">🤙</Emoji>
  </>,
  "What are you interested in learning more about?",
];
const LoopChat: React.ReactNode[] = ["Anything else you'd like to know?"];

const InitialPrompts: Prompt[] = [
  FreelancePrompt,
  HiringPrompt,
  GetInTouchPrompt /** CVPrompt */,
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

interface ChatBotProps {
  isOpen: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

const chatDelay = 1250;

export const ChatBot: React.FC<ChatBotProps> = ({ isOpen, close }) => {
  const [chat, setChat] = React.useState<React.ReactNode[]>([]);
  const [chatContext, setChatContext] = React.useState<
    Prompt["botResponse"] & { uuid: string }
  >({ uuid: uuid(), botChat: InitialChat, prompts: InitialPrompts });
  const [promptContext, setPromptContext] = React.useState<{
    prompts: Prompt[];
    uuid: string;
  }>({ prompts: [], uuid: uuid() });

  React.useEffect(() => {
    // reset everything if chat is closed
    if (!isOpen) {
      setChat([]);
      setChatContext({
        uuid: uuid(),
        botChat: InitialChat,
        prompts: InitialPrompts,
      });
      setPromptContext({ prompts: [], uuid: uuid() });
    }
  }, [isOpen]);

  // create a chat loop
  React.useEffect(() => {
    if (!chatContext || !isOpen) {
      return;
    }
    // chat context is updated by the user selecting a prompt via handleSelectResponse
    chatContext.botChat.forEach((chat, i) => {
      setTimeout(() => {
        setChat((prevChat) => [
          ...prevChat,
          <BotText key={`${chatContext.uuid}-${i}`}>{chat}</BotText>,
        ]);
        // load prompts if they exist
        if (i === chatContext.botChat.length - 1) {
          setTimeout(() => {
            setPromptContext({
              prompts: chatContext.prompts || [],
              uuid: uuid(),
            });
          }, chatDelay);
        }
      }, i * chatDelay);
    });
  }, [chatContext, isOpen]);

  const handleSelectResponse = React.useCallback(
    (
      label: React.ReactNode,
      botResponse: Prompt["botResponse"],
      id: string
    ) => {
      // clear prompts
      setPromptContext({ prompts: [], uuid: uuid() });
      // add user prompt selection as their chat
      setChat((prevChat) => [
        ...prevChat,
        <UserText key={id}>{label}</UserText>,
      ]);
      const newId = uuid();
      if (botResponse) {
        return setTimeout(() => {
          // create new chat context
          setChatContext({ ...botResponse, uuid: newId });
        }, chatDelay);
      }
      // loop to beginning-ish
      setTimeout(() => {
        // create new chat context
        setChatContext({
          botChat: LoopChat,
          uuid: newId,
          prompts: InitialPrompts,
        });
      }, chatDelay);
    },
    []
  );

  const chatFrameBottomRef = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    chatFrameBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, promptContext]);

  return (
    <ChatFrame isOpen={isOpen} close={close}>
      {chat}
      {promptContext.prompts.length ? (
        <AnimatePresence mode="popLayout">
          <motion.ul
            variants={container}
            key={promptContext.uuid}
            initial="hidden"
            animate="show"
          >
            {promptContext.prompts.map((prompt) => (
              <motion.li
                className="inline-block"
                variants={item}
                key={prompt.label}
              >
                {prompt.href ? (
                  <a href={prompt.href} target="_blank">
                    <Prompt>{prompt.label}</Prompt>
                  </a>
                ) : (
                  <Prompt
                    onClick={
                      prompt.onClick
                        ? prompt.onClick
                        : () =>
                            handleSelectResponse(
                              prompt.label,
                              prompt.botResponse!,
                              promptContext.uuid
                            )
                    }
                  >
                    {prompt.label}
                  </Prompt>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      ) : null}
      <div ref={chatFrameBottomRef}></div>
    </ChatFrame>
  );
};
