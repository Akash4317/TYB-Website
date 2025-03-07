'use client'
import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send, Building, User, Briefcase, MapPinIcon } from "lucide-react"
import Subheading from '@/components/ui/Subheading'

const Contact = () => {

  const backgroundImageUrl = 'https://tyb-website-next.s3.ap-south-1.amazonaws.com/bg-new.jpg';

  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    company_type: '',
    email: '',
    interested_in: '',
    location: '',
    phone: '',
    remarks: '',
    terms: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData);
    try {
      const response = await fetch('/contact-us/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.LAMBDA_API_KEY || '',
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
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Subheading text ="Get in Touch" position='center' className='mb-6' />
          <p className=" max-w-2xl mx-auto">
            We'd love to hear from you. Please fill out the form below or use our contact information to reach out.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Contact Information */}
            <div className=" p-10 " style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <h2 className="text-2xl text-center font-semibold mb-8">Contact Information</h2>

              <div className="space-y-8 mt-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FD5B2F] p-3 rounded-full">
                    <Phone className="h-5 w-5" stroke='white' />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="text-slate-600">+91 888 49 45 644</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FD5B2F] p-3 rounded-full">
                    <Mail className="h-5 w-5" stroke='white'/>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-slate-600">enquiry@theyarnbazaar.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FD5B2F] p-3 rounded-full">
                    <MapPin className="h-5 w-5"stroke='white' />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Address</p>
                    <p className="text-slate-600">
                      2nd Floor, 457, H1702 Hustle Hub,
                      <br />
                      17th Cross RD, HSR Layout,
                      <br />
                      Bengaluru, Karnataka 560102
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-xl text-center font-medium mb-4">Connect With Us</h3>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="bg-[#FD5B2F] p-3 rounded-full hover:bg-[#d95b38] transition-colors">
                    <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#FD5B2F] p-3 rounded-full hover:bg-[#d95b38] transition-colors">
                    <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#FD5B2F] p-3 rounded-full hover:bg-[#d95b38] transition-colors">
                    <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#FD5B2F] p-3 rounded-full hover:bg-[#d95b38] transition-colors">
                    <svg className="h-5 w-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-span-2 p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                      Name <span className="text-indigo-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full pl-10 py-3 border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-medium text-slate-700">
                      Company Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Building className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className="w-full pl-10 py-3 border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your company"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full pl-10 py-3 border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company_type" className="text-sm font-medium text-slate-700">
                      Company Type
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Briefcase className="h-5 w-5 text-slate-400" />
                      </div>
                      <select
                        id="company_type"
                        name="company_type"
                        className="w-full pl-10 py-3 border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-none"
                        value={formData.company_type}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select company type
                        </option>
                        <option value="Yarn Manufacturer">Yarn Manufacturers</option>
                        <option value="Fabric Manufacturers">Fabric Manufacturers</option>
                        <option value="Yarn Trader">Yarn Trader</option>
                        <option value="Yarn Broker">Yarn Broker</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-slate-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interested_in" className="text-sm font-medium text-slate-700">
                      Interested In
                    </label>
                    <div className="relative">
                      <select
                        id="interested_in"
                        name="interested_in"
                        className="w-full pl-3 py-3 border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
                        value={formData.interested_in}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          What are you interested in?
                        </option>
                        <option value="Yarn Buying">Yarn Buying</option>
                        <option value="Yarn Selling">Yarn Selling</option>
                        <option value="Yarn Buying & Selling">Yarn Buying & Selling</option>
                        <option value="Media Partnership">Media Partnership</option>
                        <option value="Investor Relations">Investor Relations</option>
                        <option value="Careers">Careers</option>
                        <option value="VAS">VAS</option>
                        <option value="Others">Others</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-slate-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
               

                

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium text-slate-700">
                      Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MapPinIcon className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="w-full pl-10 py-3 border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                      Phone Number <span className="text-indigo-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Phone className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        className="w-full pl-10 py-3 border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="remarks" className="text-sm font-medium text-slate-700">
                    Message
                  </label>
                  
                  <textarea
                    id="remarks"
                    name="remarks"
                    rows={4}
                    className="w-full py-3 border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="How can we help you?"
                    value={formData.remarks}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    checked={formData.terms}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#FD5B2F] focus:ring-[#a44328] border-slate-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-slate-600">
                    I agree to the{" "}
                    <a href="#" className="text-[#FD5B2F]">
                      terms and conditions
                    </a>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#FD5B2F] hover:bg-[#ef623b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact