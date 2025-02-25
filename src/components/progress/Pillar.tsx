import React from 'react'
import supplier from '@/images/supplier.jpg'
import Assurance from '@/images/assurance.jpg'
import Traceability from '@/images/tracebility.jpg'
import Sustainability from '@/images/sustainability.jpg'
import Image from 'next/image'

const Pillar = () => {
  return (
    <div>
          <section className="text-center py-12 max-w-[95%] mx-auto">
              <h2 className="text-5xl font-semibold mb-14">Pillars Of Success</h2>
              <div className="flex flex-wrap justify-center mt-4 gap-10">
                  <div className="max-w-xs text-center">
                      <Image
                          src={supplier}
                          alt="Best Suppliers"
                          className="w-[270px] h-[270px] rounded-full object-cover mx-auto mb-4 border-2 border-gray-300"
                      />
                      <h3 className="text-2xl text-[#CB4B42] font-semibold mb-2">Best Suppliers</h3>
                      <p className="text-[#6F727B]">Lorem Ipsum Dolor Greta</p>
                  </div>

                  <div className="max-w-xs text-center">
                      <Image
                          src={Assurance}
                          alt="Quality Assurance"
                          className="w-[270px] h-[270px] rounded-full object-cover mx-auto mb-4 border-2 border-gray-300"
                      />
                      <h3 className="text-2xl text-[#CB4B42] font-semibold mb-2">Quality Assurance</h3>
                      <p className="text-[#6F727B]">Lorem Ipsum Dolor Greta</p>
                  </div>

                  <div className="max-w-xs text-center">
                      <Image
                          src={Traceability}
                          alt="Traceability"
                          className="w-[270px] h-[270px] rounded-full object-cover mx-auto mb-6 border-2 border-gray-300"
                      />
                      <h3 className="text-2xl text-[#CB4B42] font-semibold mb-2">Traceability</h3>
                      <p className="text-[#6F727B]">Lorem Ipsum Dolor Greta</p>
                  </div>

                  <div className="max-w-xs text-center">
                      <Image
                          src={Sustainability}
                          alt="Sustainability"
                          className="w-[270px] h-[270px] rounded-full object-cover mx-auto mb-4 border-2 border-gray-300"
                      />
                      <h3 className="text-2xl text-[#CB4B42] font-semibold mb-2">Sustainability</h3>
                      <p className="text-[#6F727B]">Lorem Ipsum Dolor Greta</p>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Pillar
