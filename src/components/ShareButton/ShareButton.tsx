import {  useState } from "react";
import {
  TelegramShareButton,
  TelegramIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  InstapaperShareButton,
  InstagramIcon,
} from "next-share";
import Modal from "../Modal";

import Button from "../Button";
import { AiOutlineCopy } from "react-icons/ai";
import copy from "copy-to-clipboard";
import RFloatingPanel from "../FloatingPanel/FloatingPanel";
import { CheckIcon, ShareIcon } from "../SvgIcons";
import TextField from "../TextField";

interface ShareButtonProps {
  title: string;
  children?: any;
  url: string;
}

const ShareButton = ({ children, url, title }: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopiedOpen, setIsCopiedOpen] = useState(false);


  return (
    <>
      {children ? (
        <span
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          
        >
          {children}
        </span>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          iconButton
          color='secondary-gray'
        >
          <ShareIcon className="[&_path]:stroke-content-primary" />
        </Button>
      )}

      <Modal
        size="sm"
        isOpen={isOpen}
        title={"Share"}
        onClose={() => setIsOpen(false)}
      >
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center justify-center gap-2">
            <InstapaperShareButton url={url} title={title}>
              <InstagramIcon size={44} className="rounded-lg" />
            </InstapaperShareButton>
            <TelegramShareButton url={url} title={title}>
              <TelegramIcon size={44} className="rounded-lg" />
            </TelegramShareButton>
            <FacebookShareButton url={url} quote={title} hashtag={"#rizanova"}>
              <FacebookIcon size={44} className="rounded-lg" />
            </FacebookShareButton>
            <TwitterShareButton
              url={url}
              title={title}
              hashtags={["#rizanova"]}
            >
              <TwitterIcon size={44} className="rounded-lg" />
            </TwitterShareButton>
          </div>
          <TextField
            endIcon={
              <RFloatingPanel
                floatingOptions={{
                  open: isCopiedOpen,
                  onOpenChange: setIsCopiedOpen,
                  placement: "top",
                }}
                floatingPanelProps={{
                  className: "border-none",
                }}
                toggler={
                  <Button
                    className="flex h-10 w-10 items-center justify-center p-0"
                    onClick={() => {
                      copy(url);

                      setTimeout(() => {
                        setIsCopiedOpen(true);
                      }, 1500);

                      setTimeout(() => {
                        setIsCopiedOpen(false);
                      }, 3000);
                    }}
                  >
                    {isCopiedOpen ? (
                      <CheckIcon className="[&_path]:stroke-content-primary" />
                    ) : (
                      <AiOutlineCopy />
                    )}
                  </Button>
                }
              >
                <span className="text-content-primary">{"Copied"}</span>
              </RFloatingPanel>
            }
            value={url}
            className="w-full"
            readOnly
          />
        </div>
      </Modal>
    </>
  );
};

export default ShareButton;
