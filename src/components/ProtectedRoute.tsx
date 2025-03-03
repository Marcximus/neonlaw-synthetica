
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    // Return a loading state while we check if the user is authenticated
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-black">
        <div className="animate-pulse flex space-x-2">
          <div className="h-3 w-3 bg-cyberpunk-blue rounded-full"></div>
          <div className="h-3 w-3 bg-cyberpunk-purple rounded-full"></div>
          <div className="h-3 w-3 bg-cyberpunk-pink rounded-full"></div>
        </div>
      </div>
    );
  }

  // If the user is not authenticated, redirect to the login page
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // If the user is authenticated, render the children
  return <>{children}</>;
};
