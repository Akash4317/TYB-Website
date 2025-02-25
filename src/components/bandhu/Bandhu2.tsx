'use client'
import React from 'react'
import Image from 'next/image'
import Phone from '@/images/Phone.svg'
import Bandhu from '@/images/Bandhu.png';
import EmailIcon from '@/icons/email.svg';
import PhoneCallIcon from '@/icons/phone-call.svg';
import WhatsAppIcon from '@/icons/whatsapp.svg';
import TextIcon from '@/icons/text.svg';

const ContactButtons = [
	{ title: 'Phone', image: PhoneCallIcon },
	{ title: 'WhatsApp', image: WhatsAppIcon },
	{ title: 'Chat', image: TextIcon },
	{ title: 'Email', image: EmailIcon },
]

const Bandhu2 = () => {
	const text = 'Brilliant Assistance Network for Direct Help & Understanding,'
	return (
		<div className='w-[90%] mx-auto mt-20'>
			<div className='flex'>
				<div>
					<div className='border-b-8 border-r-8 border-[#FFAB1A] rounded-full h-44 aspect-square bg-white overflow-hidden'>
						<Image src={Bandhu} alt='Bandhu' width={200} height={200} />
					</div>
				</div>
				<div className='flex flex-col gap-4 justify-center p-8 text-left text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-poppins'>
					<h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Get End To End Support From BANDHU:</h1>
					<h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-thin'>The Textile Experts!</h1>
				</div>

			</div>
			<div className='grid md:grid-cols-5'>
				<div className='md:col-span-3 p-4 text-2xl'>
					<div className='flex flex-col justify-between h-full gap-8 px-8 text-[#6E5858]'>
						<div>
							<p>From technical support to advice, our friendly and knowledgeable team of experts are there to assist you.</p>
							<br />
							<p>BANDHU, or the Brilliant Assistance Network for Direct Help & Understanding, is a program by The Yarn Bazaar where our experts help you navigate the platform and are available to assist you.</p>
						</div>
						<div className='flex border min-h-24 rounded-2xl bg-white divide-x border-primary divide-primary'>
							{
								ContactButtons.map((button, index) => (
									<ContactButton key={index} title={button.title} image={button.image} />
								))
							}
						</div>
					</div>

				</div>
				<div className='md:col-span-2 p-4 flex justify-center items-center relative'>
					<Image src={Phone} alt='Phone' width={190} height={300} className='absolute z-10' />
					<Image src={Phone} alt='Phone' width={180} height={300} className='blur-sm' />
					<Image src={Phone} alt='Phone' width={180} height={300} className='blur-sm' />
				</div>
			</div>
			<h2 className='text-center text-3xl py-14'>You can count on Bandhu!</h2>
		</div>
	)
}

export default Bandhu2;

interface ContactButtonProps {
	title: string;
	image: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ title, image }) => {
	return (
		<div className='flex flex-col items-center justify-center gap-4 h-24 w-full text-primary'>
			<Image src={image} alt={title} width={30} height={30} />
			<span className='text-xl'>{title}</span>
		</div>
	);
};
