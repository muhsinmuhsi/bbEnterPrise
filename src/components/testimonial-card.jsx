import { Star } from "lucide-react"

export default function TestimonialCard({ quote, name, title, rating, image }) {
  return (
    <div  data-aos="zoom-in-right" className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-violet-100">
      <div className="mb-4 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <blockquote className="mb-6 text-gray-700">"{quote}"</blockquote>
      <div className="flex items-center gap-4">
        <img
          src={image || "https://i.pravatar.cc/150?img=3"} // fallback dummy image
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <div className="font-medium text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{title}</div>
        </div>
      </div>
    </div>
  )
}
