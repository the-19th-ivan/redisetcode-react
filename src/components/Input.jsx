/* eslint-disable react/prop-types */

import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function Input({
  type,
  name,
  register,
  placeholder,
  error,
  children,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="relative">
        <div className="absolute text-gray-800 inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-xl">
          {children}
        </div>
        <input
          type={showPassword ? 'text' : type} // Toggle input type between 'text' and original type
          name={name}
          className="bg-primary border border-gray-600 text-gray-800 text-sm rounded-md block w-full pl-10 p-3"
          placeholder={placeholder}
          {...register}
          required
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5">
          {type === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-gray-800 cursor-pointer"
            >
              {showPassword ? <HiOutlineEyeOff className="text-xl" /> : <HiOutlineEye className="text-xl"/>}
            </button>
          )}
        </div>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 h-5">{error.message}</p>
      )}
    </div>
  );
}
