import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <nav className={cn(
      "fixed bottom-0 left-0 right-0 z-50",
      "h-16 mb-4 mx-4",
      "flex items-center justify-center",
      "backdrop-blur-lg bg-white/5 border border-white/10",
      "rounded-t-3xl shadow-lg",
      "transition-all duration-300 hover:bg-white/10"
    )}>
      <span className="text-white font-bold tracking-wider hover:text-cyberpunk-blue transition-colors">
        LAUNCH
      </span>
    </nav>
  );
};