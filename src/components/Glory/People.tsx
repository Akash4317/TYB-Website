import { PeopleTestimonials } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'

const People = () => {
    return (
        <div
            className="h-full w-full mb-[200px] bg-white bg-[linear-gradient(to_right,_#8080800a_1px,transparent_1px),_linear-gradient(to_bottom,_#8080800a_1px,transparent_1px)] bg-[length:14px_24px]"
        >
            <section
                className="p-10 mt-4 mx-auto "
                style={{ backgroundColor: 'var(--primary-background-color)' }}
            >
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-5xl font-semibold leading-tight">
                        Hear from our happy yarn community.
                    </p>
                    <p className="max-w-2xl mb-10 mx-auto">
                        Yarn Broker is trusted by yarn enthusiasts and professionals around the world.
                        Whether you're buying premium yarns or selling your own unique collections,
                        our platform connects you with a vibrant community. <b>See what they have to say:</b>
                    </p>
                </div>

                <div className="flex flex-wrap justify-center p-5 gap-5">
                    {PeopleTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-lg shadow-md p-5 max-w-[350px] w-full sm:w-1/2 lg:w-1/3 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg"
                        >
                            <span className="absolute top-2 right-2 cursor-pointer">
                                <Image
                                    src="https://ik.imagekit.io/lnu6zvhsq/assets/twitter_X.png?updatedAt=1719642478052"
                                    alt="close icon"
                                    className='w-8 h-8'
                                    width={0}
                                    height={0}
                                />
                            </span>
                            <Image
                                className="rounded-full w-10 h-10 float-left mr-2.5"
                                src={item.image}
                                alt={item.name}
                                width={0}
                                height={0}
                            />
                            <h3 className="text-lg m-0">{item.name}</h3>
                            <span className="text-gray-500 text-xs">{item.username}</span>
                            <p className="text-sm font-normal text-gray-900 mt-3">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default People
