import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, lable, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-2 my-4 ">
      <label className="text-sm font-bold uppercase text-stone-500">
        {lable}
      </label>
      {textarea ? (
        <textarea {...props} ref={ref} className={classes} />
      ) : (
        <input {...props} ref={ref} className={classes} />
      )}
    </p>
  );
});

export default Input;
