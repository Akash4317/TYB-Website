"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Plus, Minus } from "lucide-react"
import { Input } from "@/components/ui/input"
import Subheading from "../ui/Subheading"
import { faqs } from "@/constants/constant"

const FaqSection = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <div className="min-h-screen bg-[#FDF3F0] p-8">
            <div className="max-w-4xl mx-auto">
                <Subheading text="TRADER FAQ" className="text-[#B02430] text-center py-8" />
                <div className="relative mb-12">
                    <Input
                        type="text"
                        placeholder="Search FAQs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-[#B02430] bg-white text-[#B02430] placeholder-[#B02430] placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#B02430] focus:ring-opacity-50 search-input"
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B02430]" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {filteredFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white shadow-lg rounded-lg overflow-hidden faq-card"
                        >
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#B02430] focus:ring-opacity-50"
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-semibold text-[#B02430] faq-question">{faq.question}</h2>
                                    {expandedIndex === index ? <Minus className="text-[#B02430]" /> : <Plus className="text-[#B02430]" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <p className="px-6 pb-6 text-[#323433] font-poppins text-md faq-answer">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaqSection
