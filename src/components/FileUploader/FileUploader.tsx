import { ChangeEvent, ComponentProps, useRef, useState } from "react";
import FormLabel from "../FormLabel";
import { twMerge } from "tailwind-merge";
import HelperText from "../HelperText";
import { UploadCloudIcon } from "../SvgIcons";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import { request } from "@/services/request";
import FileList from "./FileList";
import { FileModel } from "./File.types";
import { AxiosProgressEvent } from "axios";
import {  UseFormTrigger } from "react-hook-form";
import Show from "../Show";

interface FileUploaderProps {
  rootClassName?: string;
  labelProps?: Omit<ComponentProps<typeof FormLabel>, "children">;
  label?: string;
  helperText?: any;
  helperTextProps?: Omit<ComponentProps<typeof HelperText>, "children">;
  hasError?: boolean;
  maxFilesCount?: number;
  setValue: (name: string, ids: string[]) => void;
  name: string;
  trigger?:UseFormTrigger<any>
}

const FileUploader = ({
  label,
  labelProps,
  helperText,
  helperTextProps,
  rootClassName,
  hasError,
  maxFilesCount = Infinity,
  setValue,
  name,
  trigger
}: FileUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { className: labelClassName, ...computedLabelProps } = labelProps || {};
  const { className: helperTextClassName, ...computedHelperTextProps } =
    helperTextProps || {};
  const [files, setFiles] = useState<Record<string, File>>({});

  const { mutate } = useAppMutation({
    mutationFn: (formData: any) =>
      request.post("/files/upload", formData, {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
        onUploadProgress: (event: AxiosProgressEvent) => {
          const percent = Math.round((event.loaded * 100) / event.total);

          const currentIndex = Object.keys(files).length - 1;


          setFiles((prev) => ({
            ...prev,
            [currentIndex]: { ...prev?.[currentIndex], percent },
          }));
        },
      }),

    onSuccess: ({ data }: { data: FileModel }) => {
      const currentIndex = Object.keys(files).length - 1;

      const updatedFiles = {
        ...files,
        [currentIndex]: {
          ...files?.[currentIndex],
          serverFile: data,
          status: "success",
          percent:100
        },
      };

      setValue(
        name,
        Object.values(updatedFiles).map((item) => item?.serverFile)
      );

      if(typeof trigger === 'function'){
        trigger(name)
      }

      setFiles(updatedFiles);
    },
    onError: (e) => {
    },
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const formData = new FormData();

    const nextIndex = Object.keys(files).length;

    setFiles((prev) => ({
      ...prev,
      [nextIndex]: {
        name: file.name,
        size: file.size,
        type: file.type,
        bytes: file.bytes,
        lastModified: file.lastModified,
        percent: 0,
        status: "loading",
      },
    }));

    formData.set("file", file);

    mutate(formData);
  };


  const filesList=Object.values(files);

  return (
    <section
      role="region"
      className={twMerge(
        "flex w-full flex-col gap-y-1.5 shadow-xs relative",
        rootClassName
      )}
      aria-label="File Uploader"
    >
      {label && (
        <FormLabel className={twMerge(labelClassName)} {...computedLabelProps}>
          {label}
        </FormLabel>
      )}
      <div
        onClick={() => inputRef.current?.click()}
        className="w-full cursor-pointer border border-gray-200 bg-white px-6 py-4 rounded-lg h-31.5 flex items-center justify-center flex-col"
      >
        <button
          role="button"
          className="w-10 h-10 rounded-[28px] bg-gray-100 border-[6px] border-gray-50 flex items-center justify-center"
        >
          <UploadCloudIcon />
        </button>
        <div className="mb-1 mt-3 flex items-center gap-x-1">
          <span className="text-sm-medium text-orange-700">
            Click to upload
          </span>
          <span className="text-sm text-gray-500">or drag and drop</span>
        </div>
        <p className="text-sm text-gray-500">PNG, JPG (max. 800x400px)</p>

        <input type="file" ref={inputRef} hidden onChange={handleChange} />
      </div>

      {helperText && (
        <HelperText
          className={twMerge(
            "absolute top-32 left-0",
            hasError && "text-error-500",
            helperTextClassName
          )}
          {...computedHelperTextProps}
        >
          {helperText}
        </HelperText>
      )}

     <Show when={filesList.length > 0}>
     <FileList files={filesList} className="mt-4" />
     </Show>
    </section>
  );
};

export default FileUploader;
