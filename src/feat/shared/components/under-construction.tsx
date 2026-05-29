"use client";

import { ArrowRight, CheckCircle, Mail, Wrench } from "lucide-react";
import { useState } from "react";
import { Button } from "@/feat/shared/components/ui/button";
import { Input } from "@/feat/shared/components/ui/input";

export function UnderConstruction() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="size-16 rounded-full bg-accent flex items-center justify-center">
            <Wrench className="size-8" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-tight">
            Something great is on its way
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto text-pretty leading-relaxed">
            We&apos;re crafting something special. Be the first to know when we
            launch.
          </p>
        </div>

        {/* Email Signup */}
        <div className="pt-4">
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-2 text-foreground">
              <CheckCircle className="size-5" />
              <span className="font-medium">
                Thanks! We&apos;ll keep you updated.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-card border-border"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="h-12 px-6">
                Notify Me
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </form>
          )}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
          {[
            { label: "Launch Date", value: "Coming Soon" },
            { label: "Early Access", value: "Sign Up Now" },
            { label: "Stay Updated", value: "Get Notified" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {item.label}
              </p>
              <p className="font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
