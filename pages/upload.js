import { useState } from "react";

export default function UploadPage() {
  const [firstImage, setFirstImage] = useState("");

  const handleChange = (e) => {
    setFirstImage(e.targe.files[0]);
  };

  console.log(firstImage);

  return (
    <div className="bg-gray-50 min-w-screen min-h-screen">
      <div className="container mx-auto min-h-screen">
        <div className="align-middle">
          <form className="flex flex-col gap-4 max-w-xs mx-auto pt-4 my-auto">
            <label className=" flex flex-row items-center">
              <input
                type="file"
                className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-50 file:text-blue-700
      hover:file:bg-blue-100"
              />
            </label>
            <button className="p-4 bg-blue-600 w-full text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
