'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { RegisterOptions, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import Input from '~/components/Input'
import Button from '~/components/Button'
import FieldMessage from '~/components/FieldMessage'
import Message from '~/components/Message'

import PaymentChoice from './PaymentChoice'
import { Order } from '~/types/order.type'

type FormValues = Omit<Order, 'TrackingNumber'>

const requiredText = "This field is required."

export default function NewOrderForm({ createOrderAction }: {
  createOrderAction: (order: FormValues) => Promise<Order[]>
}) {
  const [submitError, setSubmitError] = React.useState(false)
  const router = useRouter()
  const { handleSubmit, register, watch, setValue, formState: { errors, isSubmitting } } = useForm<FormValues>({
    defaultValues: {
      PaymentType: 'prepaid'
    }
  })
  const onSubmit = async (values: FormValues) => {
    console.log({ values })
    setSubmitError(false)
    try {
      const result = await createOrderAction(values)
      console.log(result)
      toast.success("Order successfully created.")
      router.push('/orders')
    } catch (err) {
      console.log(err)
      setSubmitError(true)
    }
  }

  const paymentType = watch('PaymentType')

  const makeField = (fieldName: keyof FormValues, label: string, registerOption?: RegisterOptions<FormValues>) => {
    return (
      <>
        <label htmlFor={fieldName} className='leading-8 text-sm'>{label}</label>
        <Input id={fieldName} {...register(fieldName, { required: requiredText, ...(registerOption || {}) })} hasError={!!errors[fieldName]} />
        <FieldMessage variant='error' message={errors[fieldName]?.message} />
      </>
    )
  }

  const parcelValidationValue = {
    min: {
      value: 0.1,
      message: "At least 0.1"
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-10'>
      <div>
        <h2 className="font-semibold text-xl">Consignee Information</h2>
        <p className="text-sm text-slate-500 leading-6">Enter your consignee of your shipment.</p>

        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            {makeField('ConsigneeName', 'Full Name')}
          </div>
          <div>
            {makeField('ConsigneeNumber', 'Phone Number')}
          </div>
          <div>
            {makeField('ConsigneeCountry', 'Country')}
          </div>
          <div>
            {makeField('ConsigneePostalCode', 'Postal Code')}
          </div>
          <div>
            {makeField('ConsigneeProvince', 'Province')}
          </div>
          <div>
            {makeField('ConsigneeCity', 'City')}
          </div>
          <div className='col-span-2'>
            {makeField('ConsigneeAddress', 'Address',)}
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-xl">Parcel Information</h2>
        <div className='grid grid-cols-4 gap-4 mt-4'>
          <div>
            {makeField('Weight', 'Weight (kg)', parcelValidationValue)}
          </div>
          <div>
            {makeField('Length', 'Length (cm)', parcelValidationValue)}
          </div>
          <div>
            {makeField('Width', 'Width (cm)', parcelValidationValue)}
          </div>
          <div>
            {makeField('Height', 'Height (cm)', parcelValidationValue)}
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-xl">Payment Method</h2>
        <div className='mt-4 space-x-6'>
          <PaymentChoice value='prepaid' isSelected={paymentType === 'prepaid'} onChange={paymentType => setValue('PaymentType', paymentType)} />
          <PaymentChoice value='cod' isSelected={paymentType === 'cod'} onChange={paymentType => setValue('PaymentType', paymentType)} />
        </div>
      </div>

      <Message variant="error" show={submitError} />

      <Button disabled={isSubmitting} type='submit' variant='primary'>
        {isSubmitting ? 'Creating Order...' : 'Create Order'}
      </Button>
    </form>
  )
}

