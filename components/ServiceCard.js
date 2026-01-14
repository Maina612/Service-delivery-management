export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="glass glass-hover rounded-xl p-6 md:p-8 group cursor-pointer">
      <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}

