import { ReactNode } from "react";

const Background = ({
  children,
  text,
}: {
  children: ReactNode;
  text?: string;
}) => {
  return (
    <div className="min-h-screen bg-white/60 flex items-center justify-center p-6 rounded-lg">
      <div className="max-w-4xl p-8 rounded-2xl shadow-xl backdrop-blur-lg">
        {text && (
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
            {text}
          </h1>
        )}
        {children}
      </div>
    </div>
  );
};

export default Background;
