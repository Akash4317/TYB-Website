import React from 'react'
import supplier from '@/images/supplier.jpg'
import Assurance from '@/images/assurance.jpg'
import Traceability from '@/images/tracebility.jpg'
import Sustainability from '@/images/sustainability.jpg'
import Image from 'next/image'

const Pillar = () => {
  return (
    <div className='bg-white'>
          <section className="text-center py-12 max-w-[95%] mx-auto">
              <h2 className="text-5xl font-semibold mb-14">Pillars Of Success</h2>
              <div className="flex flex-nowrap justify-center items-center mt-4 gap-8 overflow-x-auto">
                  <div className="flex-1 max-w-[270px] text-center">
                      <Image
                          src={supplier}
                          alt="Best Suppliers"
                          className="w-full aspect-square rounded-full object-cover mx-auto mb-4 border-2 border-gray-300"
                      />
                      <h3 className="text-base sm:text-2xl text-[#CB4B42] font-semibold mb-2">
                          Best Suppliers
                      </h3>
                      <p className="text-xs sm:text-base text-[#6F727B]">
                          Lorem Ipsum Dolor Greta
                      </p>
                  </div>

                  <div className="flex-1 max-w-[270px] text-center">
                      <Image
                          src={Assurance}
                          alt="Quality Assurance"
                          className="w-full aspect-square rounded-full object-cover mx-auto mb-4 border-2 border-gray-300"
                      />
                      <h3 className="text-base sm:text-2xl text-[#CB4B42] font-semibold mb-2">
                          Quality Assurance
                      </h3>
                      <p className="text-xs sm:text-base text-[#6F727B]">
                          Lorem Ipsum Dolor Greta
                      </p>
                  </div>

                  <div className="flex-1 max-w-[270px] text-center">
                      <Image
                          src={Traceability}
                          alt="Traceability"
                          className="w-full aspect-square rounded-full object-cover mx-auto mb-4 border-2 border-gray-300"
                      />
                      <h3 className="text-base sm:text-2xl text-[#CB4B42] font-semibold mb-2">
                          Traceability
                      </h3>
                      <p className="text-xs sm:text-base text-[#6F727B]">
                          Lorem Ipsum Dolor Greta
                      </p>
                  </div>

                  <div className="flex-1 max-w-[270px] text-center">
                      <Image
                          src={Sustainability}
                          alt="Sustainability"
                          className="w-full aspect-square rounded-full object-cover mx-auto mb-4 border-2 border-gray-300"
                      />
                      <h3 className="text-base sm:text-2xl text-[#CB4B42] font-semibold mb-2">
                          Sustainability
                      </h3>
                      <p className="text-xs sm:text-base text-[#6F727B]">
                          Lorem Ipsum Dolor Greta
                      </p>
                  </div>
              </div>

          </section>
    </div>
  )
}

export default Pillar
