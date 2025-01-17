import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Home, User, Book, Trophy, Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-game-blue" />
            <span className="text-2xl font-bold bg-gradient-to-r from-game-blue to-game-purple bg-clip-text text-transparent">
              CodeKids
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="flex items-center gap-3">
                        <Book className="h-5 w-5 text-game-blue" />
                        <div>
                          <h4 className="text-sm font-semibold">Beginner Courses</h4>
                          <p className="text-sm text-gray-500">Start your coding journey here!</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Trophy className="h-5 w-5 text-game-yellow" />
                        <div>
                          <h4 className="text-sm font-semibold">Challenges</h4>
                          <p className="text-sm text-gray-500">Test your skills with fun puzzles</p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="ghost">Parents</Button>
            <Button variant="ghost">Teachers</Button>
            <Button className="bg-game-blue hover:bg-primary-hover text-white">
              Join for Free
            </Button>
            <Button variant="ghost">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Button variant="ghost" className="w-full text-left">Learn</Button>
              <Button variant="ghost" className="w-full text-left">Parents</Button>
              <Button variant="ghost" className="w-full text-left">Teachers</Button>
              <Button className="w-full bg-game-blue hover:bg-primary-hover text-white">
                Join for Free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}