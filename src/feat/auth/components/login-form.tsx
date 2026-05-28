"use client"

import { LoginFormSchema } from "@/feat/auth/auth.schema";
import { Button } from "@/feat/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/feat/shared/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/feat/shared/components/ui/field";
import { Input } from "@/feat/shared/components/ui/input";
import { cn } from "@/feat/shared/lib/utils";
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form"
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    validators: {
      onSubmit: LoginFormSchema
    },
    onSubmit: async ({value}) => {
      console.log(value)
    }
  })

  
const signInWithGoogle = async () => {
    await authClient.signIn.social({
        provider: "google",
        callbackURL: '/'
    })
}

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}>
            <FieldGroup>
              <form.Field 
              name="email"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                return(
                  <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  id={field.name}
                  type={field.name}
                  placeholder="m@example.com"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid= {isInvalid}
                />
                 {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
                )
              }}
              />
              <form.Field 
              name = 'password'
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                return(
                <Field data-invalid={isInvalid}>
                <div className="flex items-center">
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Link
                    href="/"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input 
                id={field.name} 
                type={field.name} 
                value={field.state.value} 
                onBlur={field.handleBlur} 
                onChange={(e) => field.handleChange(e.target.value)}
                aria-invalid={isInvalid}
               />
              </Field>
                )
              }}/>
              <Field>
                <Button type="submit">Login</Button>
                <Button variant="outline" type="button" onClick={signInWithGoogle}>
                  Login with Google
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
