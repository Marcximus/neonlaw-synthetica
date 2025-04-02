
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export const UserMenu = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="flex items-center gap-4">
      {user && (
        <>
          <span className="text-sm text-white/70 hidden sm:inline">
            {user.email}
          </span>
          <Button
            onClick={signOut}
            variant="outline"
            className="text-sm border-white/20 hover:bg-white/10"
          >
            Sign Out
          </Button>
        </>
      )}
    </div>
  );
};
