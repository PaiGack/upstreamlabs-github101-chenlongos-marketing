import { Link } from 'react-router-dom';

export default function SceneCard({ title, description, imageUrl, link }) {
  return (
    <Link to={link} className="group">
      <div className="relative rounded-xl overflow-hidden shadow-md h-64">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      </div>
    </Link>
  );
}