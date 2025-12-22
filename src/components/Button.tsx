type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?:"homepagebtn" |"start" | "stop" | "retry";
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({
  text,
  onClick,
  variant = "start",
  disabled = false,
  loading = false,
}: ButtonProps) => {
  const base =
    "px-3 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all";

  const variants = {
    homepagebtn:"bg-white text-blue-600 rounded-lg font-medium hover:bg-zinc-700 text-xl hover:text-white transition-all button",
    start: "bg-green-500 text-white hover:bg-green-600 button",
    stop: "bg-red-500 text-white hover:bg-red-600 button",
    retry: "bg-yellow-400 text-black hover:bg-yellow-500 button",
  };


  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading && (
    <div className="w-8 h-8 border-4 border-blue-500 border-t-teal-100 rounded-full animate-spin"></div>
      )}
      {text}
    </button>
  );
};

export default Button;
