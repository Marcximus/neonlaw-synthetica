
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const LogoutButton = () => {
  const { signOut } = useAuth();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={signOut}
      className="fixed top-4 right-4 z-50"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Log out
    </Button>
  );
};
