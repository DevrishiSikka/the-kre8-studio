import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={inputId} className="text-xs font-bold uppercase tracking-wide text-white/70">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "border-2 border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-orange focus:outline-none",
          className,
        )}
        {...props}
      />
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className, id, ...props }: TextareaProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={inputId} className="text-xs font-bold uppercase tracking-wide text-white/70">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={cn(
          "min-h-[120px] resize-y border-2 border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-orange focus:outline-none",
          className,
        )}
        {...props}
      />
    </div>
  );
}
