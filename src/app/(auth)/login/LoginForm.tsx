'use client';

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Input from "~/components/Input";
import Button from "~/components/Button";
import AuthService from "~/services/auth.service";
import React from "react";


type FormValues = {
  username: string
  password: string
}

export default function LoginForm() {
  const router = useRouter()
  const [submitError, setSubmitError] = React.useState(false)

  const { handleSubmit, register, formState: { isSubmitting
  } } = useForm<FormValues>()

  const onSubmit = async ({ username, password }: FormValues) => {
    setSubmitError(false)
    console.log({ username, password })
    const result = await AuthService.login({
      username, password
    })
    if (result?.ok && !result.error) {
      router.replace('/')
      return
    }
    setSubmitError(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="username" className="text-gray-700 mb-1">Username</label>
        <Input id="username" type="text" {...register('username', { required: 'This field is required' })} />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="password" className="text-gray-700 mb-1">Password</label>
        <Input id="password" type="password" {...register('password', { required: 'This field is required' })} />
      </div>
      {
        submitError && (
          <div className="mt-4">
            <p className="m-0 text-red-400 text-sm">Invalid username or password.</p>
          </div>
        )
      }
      <Button disabled={isSubmitting} type="submit" variant="primary" className="mt-4 w-full">
        {isSubmitting ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  )
}
