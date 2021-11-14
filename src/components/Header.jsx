import imageIcon from "../assets/img/image-icon.png";

function Header() {
    return (
        <header className="bg-gray-200 flex justify-between items-center px-5">
            <img src={imageIcon} alt="image icon" className="" />
            <form method="post" className="flex-grow mx-4">
                <input type="text" placeholder="Search in unsplash..." className="w-full outline-none p-2.5" />
            </form>
        </header>
    )
}

export default Header;
