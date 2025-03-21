"use client";

import {
  useEditor,
  EditorContent,
  EditorContentProps,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  EditorBoldIcon,
  EditorItalicIcon,
  EditorBulletListIcon,
  OrderedListIcon,
} from "../SvgIcons";
import { twMerge } from "tailwind-merge";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import OrderedList from "@tiptap/extension-ordered-list";
import Text from "@tiptap/extension-text";
import Placeholder from "@tiptap/extension-placeholder";
// import BubbleMenu from '@tiptap/extension-bubble-menu'
import "./RichText.styles.css";

interface RichTextProps {
  contentProps?: Partial<EditorContentProps>;
}

const RichText = ({ contentProps }: RichTextProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      BulletList,
      OrderedList,
      ListItem,
      Placeholder.configure({
        placeholder:'Enter placeholder'
      }),
    ],
  });

  return (
    <>
      <div
        className={twMerge(
          // TIPTAP DOCUMENT styles
          "w-full [&_.tiptap]:min-h-[314px]",
          "[&_.tiptap]:bg-white [&_.tiptap]:border [&_.tiptap]:border-gray-300 [&_.tiptap]:py-[10px] [&_.tiptap]:px-3.5 [&_.tiptap]:rounded-lg [&_.tiptap]:focus:outline-none [&_.tiptap]:focus:border-orange-300 [&_.tiptap]:focus:shadow-input-focus",
          "[&_.tiptap:first-child]:mt-0"
        )}
      >
        <EditorContent placeholder="Enter about your company" editor={editor} {...contentProps} />

        <p className="mt-1.5 text-sm text-gray-500">275/5000 characters left</p>

        <div role="group" className="flex items-center mt-3">
          <button
            onClick={() => {
              editor?.chain().focus().toggleBold().run();
            }}
            className={twMerge(
              "w-8 h-8 flex items-center justify-center rounded-lg",
              editor?.isActive("bold") && "bg-primary-200"
            )}
          >
            <EditorBoldIcon />
          </button>

          <button
            onClick={() => {
              editor?.chain().focus().toggleItalic().run();
            }}
            className={twMerge(
              "w-8 h-8 flex items-center justify-center rounded-lg",
              editor?.isActive("italic") && "bg-primary-200"
            )}
          >
            <EditorItalicIcon />
          </button>

          <button
            onClick={() => {
              editor?.chain().focus().toggleBulletList().run();
            }}
            className={twMerge(
              "w-8 h-8 flex items-center justify-center rounded-lg",
              editor?.isActive("bulletList") && "bg-primary-200"
            )}
          >
            <EditorBulletListIcon />
          </button>

          <button
            onClick={() => {
              editor?.chain().focus().toggleOrderedList().run();
            }}
            className={twMerge(
              "w-8 h-8 flex items-center justify-center rounded-lg",
              editor?.isActive("orderedList") && "bg-primary-200"
            )}
          >
            <OrderedListIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default RichText;
