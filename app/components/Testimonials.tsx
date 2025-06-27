"use client";
import { motion } from "framer-motion";

type Testimonial = {
	name: string;
	role: string;
	location: string;
	content: string;
	image: string;
};

const testimonials: Testimonial[] = [
	{
		name: "Sarah Mensah",
		role: "Business Owner",
		location: "Tema",
		content: "Anyawe helped transform our business with a modern, responsive website. His local presence made communication easy, and the results have been outstanding for our Tema-based business.",
		image: "/assets/testimonials/sarah.jpg"
	},
	{
		name: "Kwame Osei",
		role: "Startup Founder",
		location: "Golf City",
		content: "Working with Anyawe was a game-changer for our startup. His expertise in React and Next.js helped us create a scalable platform that perfectly serves our Golf City clientele.",
		image: "/assets/testimonials/kwame.jpg"
	},
	{
		name: "Ama Kufuor",
		role: "Marketing Director",
		location: "Tema",
		content: "The website Anyawe developed for us has significantly improved our online presence in Tema. His understanding of local market needs and technical expertise is impressive.",
		image: "/assets/testimonials/ama.jpg"
	}
];

export default function Testimonials() {
	return (
		<section className="py-16 bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl font-bold text-blue-300 mb-4">
						Testimonials
					</h2>
				</motion.div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial: Testimonial, index: number) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-gray-800/50 rounded-lg p-6"
						>
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-blue-300 font-bold">
									{testimonial.name.charAt(0)}
								</div>
								<div className="ml-4">
									<h3 className="text-lg font-semibold text-white">
										{testimonial.name}
									</h3>
									<p className="text-gray-400 text-sm">
										{testimonial.role} • {testimonial.location}
									</p>
								</div>
							</div>
							<p className="text-gray-300">
								&quot;{testimonial.content}&quot;
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}