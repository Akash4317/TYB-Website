"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Plus, Minus } from "lucide-react"
import { Input } from "@/components/ui/input"
import Subheading from "../ui/Subheading"
import { BuyerFAQ, SupplierFAQ } from "@/constants/constant"

const FaqSection = () => {
	const tabs = ["Buyer", "Supplier"]
	const [searchTerm, setSearchTerm] = useState("")
	const [activeTab, setActiveTab] = useState(0);
	const [faqs, setFaqs] = useState(BuyerFAQ);
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

	const handleTabChange = (index: number) => {
		setActiveTab(index);
		setFaqs(index === 0 ? BuyerFAQ : SupplierFAQ);
	}

	const filteredFaqs = faqs.filter(
		(faq) =>
			faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
			faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
	)

	return (
		<div className="min-h-screen bg-[#FDF3F0] p-8">
			<div className="max-w-4xl mx-auto space-y-6 md:space-y-10">
				<Subheading text="Frequently Asked Questions" className="text-center" />
				<div className="h-12 flex gap-4 justify-start text-xl">
					{tabs.map((tab, index) => (
						<div
							key={tab}
							className={`rounded-[24px] w-48 flex justify-center items-center h-full cursor-pointer ${activeTab === index ? 'bg-primary text-background' : 'bg-gray-200 text-gray-400'}`}
							onClick={handleTabChange.bind(null, index)}
						>
							{tab}
						</div>
					))}
				</div>
				<div className="relative">
					<Input
						type="text"
						placeholder="Search FAQs..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full h-16 pl-12 rounded-full border-2 border-primary bg-white text-primary placeholder-primary placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 search-input"
					/>
					<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" />
				</div>
				<div className="space-y-4 md:space-y-8">
					{filteredFaqs.map((faq, index) => (
						<motion.div
							key={index}
							layout
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className="bg-white shadow-md rounded-lg overflow-hidden faq-card"
						>
							<button
								onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
								className="w-full text-left p-6 "
							>
								<div className="flex justify-between items-center">
									<h2 className="text-xl text-primary faq-question">{faq.question}</h2>
									{expandedIndex === index ? <Minus className="text-primary" /> : <Plus className="text-primary" />}
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
