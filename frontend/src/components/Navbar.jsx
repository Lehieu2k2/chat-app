import { MessageSquare, Settings, User, LogOut } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
const Navbar = () => {
    const { authUser, logout } = useAuthStore();
    return (
        <header className="bg-base-100 border-b border-base-200 fixed w-full z-50
        backdrop-blur-lg bg-base-100/80">
            <div className="container mx-auto px-4 h-16">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
                            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <MessageSquare className="w-5 h-5 text-primary" />
                            </div>
                            <h1 className="text-xl font-semibold">ChatApp</h1>
                        </Link>                         
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/settings" className="btn btn-sm gap-2 transition-colors">
                            <Settings className="w-4 h-4" />
                            <span className="hidden md:block">Settings</span>
                        </Link>

                        {authUser && (
                            <>
                                <Link to="/profile" className="btn btn-sm gap-2 transition-colors">
                                    <User className="size-4" />
                                    <span className="hidden md:block">Profile</span>
                                </Link>

                                <button className="flex gap-2 items-center hover:opacity-80 transition-all" onClick={logout}>
                                    <LogOut className="size-4" />
                                    <span className="hidden md:block">Logout</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar