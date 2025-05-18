import { formatBytes } from "@/utils/common";
import { CheckCircleIcon, CheckIcon, FileUploadDocIcon } from "../SvgIcons";
import ProgressBar from "./ProgressBar";
import { twMerge } from "tailwind-merge";
import Show from "../Show";

interface FileListProps {
  files: File[];
  className?:string;
}

const FileList = ({ files, className }: FileListProps) => {
  return (
    <div className={twMerge("flex flex-col gap-3 ", className)}>
      {files.map((file, i) => (
        <article
          key={i}
          className={
            twMerge(
                "py-4 pr-4 pl-3.5 rounded-lg bg-white border border-gray-200 flex gap-4",
                file.status === 'success' && 'border border-primary-500'
            )
          }
        >
          {
            <>
              <FileUploadDocIcon />
              <div className="flex flex-col flex-[1]">
                <span className="text-sm-medium text-gray-700">{file.name}</span>
                <span className='text-sm text-gray-500'>{formatBytes(file.size)}</span>
                <div className="py-1.5">
                <ProgressBar progress={file?.percent} />
                </div>
              </div>
             <div className="w-5">
             <Show when={file.status === 'success'}>
             <div className="w-4 h-4 flex items-center justify-center bg-primary-600 rounded-full">
                 <CheckIcon className='[&_path]:stroke-white'/>
              </div>
             </Show>
             </div>
            </>
          }
        </article>
      ))}
    </div>
  );
};

export default FileList;
