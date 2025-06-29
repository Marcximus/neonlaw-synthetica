
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { InteractiveBackground } from '@/components/InteractiveBackground';

export const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = isSignUp 
        ? await signUp(email, password)
        : await signIn(email, password);

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else if (isSignUp) {
        toast({
          title: "Check your email",
          description: "We've sent you a confirmation link.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <InteractiveBackground />
      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Standby Message */}
        <Card className="bg-background/90 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl font-bold text-primary">
              STANDBY
            </CardTitle>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Corporate Consulting is committed to delivering the highest level of counsel to our clients. To maintain this standard, we accept only a select number of clients at any given time. Currently, all client slots are filled, and we are not onboarding new clients at this moment. We will reopen our website for new inquiries as soon as availability allows.
              </p>
              <p>
                If you are an existing client, you may access your account by logging in with your email address and the last four digits of your case number.
              </p>
              <p>
                Thank you for your understanding.
              </p>
              <p className="font-medium">
                Best regards,<br />
                Marcus
              </p>
            </div>
          </CardHeader>
        </Card>

        {/* Login Form */}
        <Card className="bg-background/90 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </CardTitle>
            <CardDescription className="text-center">
              {isSignUp 
                ? 'Create an account to access Corporate Consulting'
                : 'Sign in to access Corporate Consulting'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  minLength={6}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Please wait...' : (isSignUp ? 'Create Account' : 'Sign In')}
              </Button>
            </form>
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-muted-foreground hover:text-primary underline"
                disabled={loading}
              >
                {isSignUp 
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Create one"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
