import { Typography } from "@material-tailwind/react";

export default function EmailConfirm() {
  return (
    <main className="p-4 w-full h-screen bg-primary flex items-center justify-center">
      <div className="text-center">
        <Typography variant="h1" className="text-gray-800">
          Verify Your Email
        </Typography>
        <Typography>
          Please check your email to verify your account. You may close this
          window.
        </Typography>
      </div>
    </main>
  );
}
