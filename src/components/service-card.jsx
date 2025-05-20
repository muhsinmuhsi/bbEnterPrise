import { CheckCircle } from "lucide-react"



export default function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-violet-100 hover:-translate-y-1">
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-violet-50 p-3 text-violet-600">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-violet-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}
