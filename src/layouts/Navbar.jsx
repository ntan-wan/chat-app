import { Link } from "@/components/ui/Link"

export function Navbar() {
    return (<nav className="p-3 ">
        <h1 className="flex items-center justify-between ">Chat
        <Link className="text-base ">Add New Profile</Link>
        </h1>
    </nav>)
}