
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let result;
      
      if (isLogin) {
        // Login flow
        result = await supabase.auth.signInWithPassword({
          email,
          password,
        });
      } else {
        // Signup flow
        result = await supabase.auth.signUp({
          email,
          password,
          options: {
            // Don't require email verification for now (during development)
            emailRedirectTo: window.location.origin,
          }
        });
      }

      console.log("Auth result:", result);

      if (result.error) {
        throw result.error;
      }

      if (result.data.user) {
        toast({
          title: isLogin ? "Successfully logged in" : "Account created",
          description: isLogin ? "Welcome back!" : "You are now signed up and logged in!",
          variant: "default",
        });
        
        // For sign up, we can automatically log the user in
        if (!isLogin) {
          toast({
            title: "Account created and logged in",
            description: "Welcome to the platform!",
          });
        }
        
        navigate("/");
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      toast({
        title: "Authentication Error",
        description: error.message || "An error occurred during authentication",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/rocket.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md z-20"
      >
        <div className="glass p-8 rounded-2xl backdrop-blur-lg border border-white/10 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-black via-yellow-500/10 to-black"
            style={{
              backgroundSize: '200% 100%',
              animation: 'slide 4s linear infinite',
              willChange: 'transform'
            }}
          />
          
          <h2 className="text-3xl font-bold text-center mb-6 relative">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          
          <form onSubmit={handleAuth} className="space-y-4 relative">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="bg-black/40 border-white/10"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="bg-black/40 border-white/10"
                minLength={6}
              />
              {!isLogin && (
                <p className="text-xs text-gray-400 mt-1">
                  Password must be at least 6 characters
                </p>
              )}
            </div>
            
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-cyberpunk-blue hover:bg-cyberpunk-purple transition-colors"
            >
              {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
            </Button>
          </form>
          
          <div className="mt-4 text-center relative">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Log in"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
