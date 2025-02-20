const Header = ({ title }) => {
    return (
        <header className="bg-white shadow">
            <div className="mb-16">
                <h2 className="block text-2xl font-semibold sm:text-3xl lg:text-4xl ">
                    {title}
                </h2>
            </div>
        </header>
    )
}

export default Header