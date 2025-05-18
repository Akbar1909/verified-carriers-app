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
import { UseFormTrigger } from "react-hook-form";
import Show from "../Show";

interface RichTextProps {
  contentProps?: Partial<EditorContentProps>;
  name:string;
  setValue:(name:string, value:string)=>void;
  trigger:UseFormTrigger<any>;
  hasError?:boolean;
  helperText?:any;
}

const RichText = ({ contentProps, name,setValue, trigger, hasError, helperText }: RichTextProps) => {
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
    onUpdate:({editor})=>{
      console.log(editor.getJSON())

      setValue(name, editor.getHTML());
      trigger(name)
    }
  });

  return (
    <>
      <div
        className={twMerge(
          // TIPTAP DOCUMENT styles
          "w-full [&_.tiptap]:min-h-[314px]",
          "[&_.tiptap]:bg-white [&_.tiptap]:border [&_.tiptap]:border-gray-300 [&_.tiptap]:py-[10px] [&_.tiptap]:px-3.5 [&_.tiptap]:rounded-lg [&_.tiptap]:focus:outline-none [&_.tiptap]:focus:border-orange-300 [&_.tiptap]:focus:shadow-input-focus",
          "[&_.tiptap:first-child]:mt-0",
          hasError && '[&_.tiptap]:outline-none [&_.tiptap]:border-error-300 [&_.tiptap]:shadow-input-destructive-focus'
        )}
      >
        <EditorContent placeholder="Enter about your company" editor={editor}   />

       <Show when={helperText}>
             <p className={twMerge("mt-1.5 text-sm text-gray-500", hasError && 'text-error-500')}>
            {
              helperText
            }
        </p>
       </Show>

        <div role="group" className="flex items-center mt-3">
          <button
            onClick={() => {
              editor?.chain().focus().toggleBold().run();
            }}
            type="button"
            className={twMerge(
              "w-8 h-8 flex items-center justify-center rounded-lg",
              editor?.isActive("bold") && "bg-primary-200"
            )}
          >
            <EditorBoldIcon />
          </button>

          <button
            type='button'
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
            type='button'
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
            type='button'
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
