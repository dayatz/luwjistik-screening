'use client';

import { FiLogOut } from "react-icons/fi";
import AuthService from "~/app/(auth)/auth.service";

export default function LogoutButton() {
  return (
    <div onClick={AuthService.logout} title="Logout" className='rounded-full p-2 border border-slate-200 bg-white hover:bg-slate-100 transition-colors hover:cursor-pointer'>
      <FiLogOut size={28} />
    </div>
  )
}
