import { Link } from "react-router-dom"

function Navigationbar() {
    return (
        <nav>
            <ul className="max-w-screen-xl flex flex-wrap mx-auto items-center p-4
            font-bold">
                <Link to= "/PersonalHome" className="mx-8">
                    <button>
                        Home
                    </button>
                    </Link>
                <Link to= "/Chat">
                    <button>
                        Chat
                    </button>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigationbar