'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import markimage from '@/images/mark.png'
import mailIcon from "@/images/emailIcon.svg"
import phoneIcon from "@/images/phoneIcon.png"
import MapPin from "@/images/mapPins.svg"
import { Toast } from '@radix-ui/react-toast'
import { toast } from '@/hooks/use-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    company_type: '',
    email: '',
    interested_in: '',
    location: '',
    phone: '',
    Designation: '',
    remarks: '',
    terms: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/contact-us/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
       alert('Form submitted successfully')
        setFormData({
          firstName: '',
          companyName: '',
          company_type: '',
          email: '',
          interested_in: '',
          location: '',
          phone: '',
          Designation: '',
          remarks: '',
          terms: false,
        })
      } else {
       alert('Form submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
      
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData(prev => ({
      ...prev,
      [name]: val
    }))
  }

  return (
    <div className='flex flex-col items-center mt-4 gap-4 md:p-0 p-4'>
      <div className="absolute top-15 left-0 hidden md:block">
        <Image src={markimage} alt="markedImage" width={0} height={0} />
      </div>

      <div className="flex justify-center items-center w-full max-w-[1024px] md:mt-[120px] mt-0 bg-[#F8D53C] p-4 space-x-4 rounded-lg">
        <div className="flex flex-col md:flex-row rounded-xl w-full">
          <div className="bg-[#fff2ea] p-8 py-10 w-full md:w-1/3 rounded-xl">
            <h2 className="text-2xl text-center font-semibold text-[#A33B35] mb-8">Contact Us</h2>
            <div className="space-y-6 text-[#6a1b0d]">
              <div className="flex items-center gap-3">
                <Image src={phoneIcon} alt="phoneIcon" width={24} height={24} loading='lazy' />
                <span>+91 888 49 45 644</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src={mailIcon} alt="mailIcon" width={24} height={24} loading='lazy' />
                <span>enquiry@theyarnbazaar.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Image src={MapPin} alt="mapPin" width={24} height={24} />
                <span>
                  2nd Floor, 457, H1702 Hustle Hub,<br />
                  17th Cross RD, HSR Layout,<br />
                  Bengaluru, Bengaluru Urban,<br />
                  Karnataka 560102
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="peer w-full border-0 border-b-2 border-[#A33B35] bg-transparent text-[#A33B35] placeholder-transparent pt-6 focus:outline-none focus:ring-0"
                    placeholder="Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <label htmlFor="firstName" className="absolute left-0 text-[#A33B35] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="peer w-full border-0 border-b-2 border-[#A33B35] bg-transparent text-[#A33B35] placeholder-transparent pt-6 focus:outline-none focus:ring-0"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  <label htmlFor="companyName" className="absolute left-0 text-[#A33B35] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                    Company Name
                  </label>
                </div>
              </div>

              <div className="relative">
                <select
                  id="company_type"
                  name="company_type"
                  className="w-full border-0 border-b-2 border-[#A33B35] bg-transparent text-[#A33B35] pt-6 focus:outline-none focus:ring-0"
                  value={formData.company_type}
                  onChange={handleChange}
                >
                  <option value="" disabled className="text-gray-400">Company Type</option>
                  <option value="Yarn Manufacturer">Yarn Manufacturers</option>
                  <option value="Fabric Manufacturers">Fabric Manufacturers</option>
                  <option value="Yarn Trader">Yarn Trader</option>
                  <option value="Yarn Broker">Yarn Broker</option>
                </select>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="peer w-full border-0 border-b-2 border-[#A33B35] bg-transparent text-[#A33B35] placeholder-transparent pt-6 focus:outline-none focus:ring-0"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="absolute left-0 text-[#A33B35] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                  Email
                </label>
              </div>

              <div className="relative">
                <select
                  id="interested_in"
                  name="interested_in"
                  className="w-full border-0 border-b-2 border-[#A33B35] bg-transparent text-[#A33B35] pt-6 focus:outline-none focus:ring-0"
                  value={formData.interested_in}
                  onChange={handleChange}
                >
                  <option value="" disabled className="text-gray-400">Interested In</option>
                  <option value="Yarn Buying">Yarn Buying</option>
                  <option value="Yarn Selling">Yarn Selling</option>
                  <option value="Yarn Buying & Selling">Yarn Buying & Selling</option>
                  <option value="Media Partnership">Media Partnership</option>
                  <option value="Investor Relations">Investor Relations</option>
                  <option value="Careers">Careers</option>
                  <option value="VAS">VAS</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="peer w-full border-0 border-b-2 border-[#A33B35] bg-transparent text-[#A33B35] placeholder-transparent pt-6 focus:outline-none focus:ring-0"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  <label htmlFor="location" className="absolute left-0 text-[#A33B35] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                    Location
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="peer w-full border-0 border-b-2 border-[#A33B35] bg-transparent text-[#A33B35] placeholder-transparent pt-6 focus:outline-none focus:ring-0"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label htmlFor="phone" className="absolute left-0 text-[#A33B35] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="Designation"
                  name="Designation"
                  className="peer w-full border-0 border-b-2 border-[#A33B35] bg-transparent text-[#A33B35] placeholder-transparent pt-6 focus:outline-none focus:ring-0"
                  placeholder="Designation"
                  value={formData.Designation}
                  onChange={handleChange}
                />
                <label htmlFor="Designation" className="absolute left-0 text-[#A33B35] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                  Designation
                </label>
              </div>


              <div className="relative">
                <textarea
                  id="remarks"
                  name="remarks"
                  className="peer w-full border-0 border-b-2 border-[#A33B35] bg-transparent text-[#A33B35] placeholder-transparent pt-6 focus:outline-none focus:ring-0 h-24"
                  placeholder="Remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                />
                <label htmlFor="remarks" className="absolute left-0 text-[#A33B35] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm">
                  Remarks
                </label>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className='flex items-center'>
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    checked={formData.terms}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#A33B35] border-[#A33B35] rounded focus:ring-[#A33B35]"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-[#6a1b0d]">
                    I agree to the terms and conditions
                  </label>
                </div>
                <div className=''>
                  <button
                    type="submit"
                    className="mt-4 bg-[#ff9800] text-white hover:bg-[#e68900] px-6 py-2 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact