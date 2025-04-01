import { ComponentProps, useRef } from "react";
import FormLabel from "../FormLabel";
import { twMerge } from "tailwind-merge";
import HelperText from "../HelperText";
import { UploadCloudIcon } from "../SvgIcons";

interface FileUploaderProps {
  rootClassName?: string;
  labelProps?: Omit<ComponentProps<typeof FormLabel>, "children">;
  label?: string;
  helperText?: string;
  helperTextProps?: Omit<ComponentProps<typeof HelperText>, "children">;
  hasError?: boolean;
}

const FileUploader = ({
  label,
  labelProps,
  helperText,
  helperTextProps,
  rootClassName,
  hasError,
}: FileUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { className: labelClassName, ...computedLabelProps } = labelProps || {};
  const { className: helperTextClassName, ...computedHelperTextProps } =
    helperTextProps || {};

  const handleChange = (e) => {};

  return (
    <section
      role="region"
      className={twMerge(
        "flex w-full flex-col gap-y-1.5 shadow-xs",
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
            "absolute top-12.5 left-0",
            hasError && "text-error-500",
            helperTextClassName
          )}
          {...computedHelperTextProps}
        >
          {helperText}
        </HelperText>
      )}
    </section>
  );
};

export default FileUploader;
