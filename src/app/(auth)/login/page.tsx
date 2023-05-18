import Image from 'next/image'

import Card from "~/components/Card";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="h-full grid place-items-center px-2">
      <div>
        <Image className='mx-auto' src='/luwjistik-logo.webp' alt="luwjistik logo" width={125} height={32} />
        <p className='text-center mt-2 mb-6'>Login with your account!</p>
        <Card className="mt-3 w-96 max-w-xs">
          <LoginForm />
        </Card>
      </div>
    </main>
  )
}
