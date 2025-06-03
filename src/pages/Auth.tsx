
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Login fejl",
          description: error.message,
          variant: "destructive",
        });
      } else {
        navigate("/");
      }
    } catch (error) {
      toast({
        title: "Uventet fejl",
        description: "Der skete en fejl under login",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="glass p-8 rounded-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">Login</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-[#F97316] hover:bg-[#ea384c]"
            disabled={loading}
          >
            {loading ? "Logger ind..." : "Log ind"}
          </Button>
        </form>
        
        <div className="mt-4 text-center">
          <Button 
            variant="link" 
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white"
          >
            Tilbage til forsiden
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
