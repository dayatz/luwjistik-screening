'use client';

import { FiCheckCircle, FiCreditCard, FiTruck } from "react-icons/fi";
import { cn } from "~/lib/utils";

type PaymentType = 'cod' | 'prepaid'

type Props = {
  value: PaymentType 
  isSelected?: boolean
  onChange?: (value: PaymentType) => void
}

const titles = {
  cod: 'COD',
  prepaid: 'Prepaid'
}

const icons = {
  cod: FiTruck,
  prepaid: FiCreditCard
}

export default function PaymentChoice({ value, isSelected, onChange }: Props) {
  const handleClick = () => {
    !!value && onChange?.(value)
  }

  const Icon = icons[value]

  return (
    <label onClick={handleClick} className={cn('inline-flex flex-col gap-2 text-center border-2 border-slate-200 rounded-lg py-4 px-8 text-sm bg-white hover:border-[var(--primary-color)] transition-colors relative hover:cursor-pointer items-center',
      isSelected ? 'border-[var(--primary-color)] text-[var(--primary-color)]':''
    )}>
      {
        isSelected && (
          <div className='absolute -top-2 -right-2 text-[var(--primary-color)] bg-white p-1 rounded-full'>
            <FiCheckCircle size={22} />
          </div>
        )
      }
      <Icon size={42} />
      {titles[value]}
    </label>
  )
}
