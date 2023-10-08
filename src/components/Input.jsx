/* eslint-disable react/prop-types */

export default function Input({
  type,
  name,
  register,
  placeholder,
  error,
  children,
}) {
  return (
    <div>
      <div className="relative">
        <div className="absolute text-gray-800 inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-xl ">
          {children}
        </div>
        <input
          type={type}
          name={name}
          className="bg-primary border border-gray-600  text-gray-800 text-sm rounded-md block w-full pl-10 p-3"
          placeholder={placeholder}
          {...register}
          required
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 h-5">{error.message}</p>
      )}
    </div>
  );
}
