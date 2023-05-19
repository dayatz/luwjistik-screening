import Image from 'next/image'

export default function() {
  return (
    <div className="flex flex-col items-center p-10 gap-4">
      <Image src={'/empty_data_icon.svg'} width={215} height={60} alt="empty data" />
      <h2 className='text-xl text-gray-700'>No data, refresh the page later.</h2>
    </div>
  )
}
