import { Home, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-game-blue" />
              <span className="text-2xl font-bold bg-gradient-to-r from-game-blue to-game-purple bg-clip-text text-transparent">
                CodeKids
              </span>
            </Link>
            <p className="text-gray-600">
              Making coding fun and accessible for kids everywhere!
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-game-blue">Courses</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-game-blue">Projects</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-game-blue">Challenges</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-game-blue">For Parents</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-game-blue">For Teachers</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-game-blue">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-game-blue" />
                <span className="text-gray-600">support@codekids.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-game-blue" />
                <span className="text-gray-600">1-800-CODE-KIDS</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} CodeKids. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}