import { ReactNode } from "react";

const Background = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  return (
    <div className="min-h-screen bg-white/60 dark:bg-black/50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8 rounded-lg">
      <div className="w-full max-w-4xl bg-white/65 dark:bg-black/55 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-lg">
        {text && (
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
            {text}
          </h1>
        )}
        <div className="prose dark:prose-invert max-w-none">{children}</div>
      </div>
    </div>
  );
};

export default Background;
