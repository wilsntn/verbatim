import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function Dropzone() {
  const [file, setFile] = React.useState<File[]>();
  const [textInputEnabled, setTextInputEnabled] = React.useState<boolean>(true);
  const onDrop = useCallback((acceptedFile: any) => {
    setFile(acceptedFile);
    setTextInputEnabled((prev) => !prev);
  }, []);

  console.log(file);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div
      className="border border-dashed cursor-pointer border-gray-500 relative"
      {...getRootProps()}
    >
      <input
        className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
        {...getInputProps()}
      />
      <div className="">
        {textInputEnabled && <p>Drop the files here ...</p>}
        {file && (
          <div className="text-center">
            <p>File: {file[0].name}</p>
            <p>Size: {(file[0].size / 1024 / 1024).toFixed(2)}MB</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropzone;
