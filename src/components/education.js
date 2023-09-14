export default function Education() {
    return (
        <div>

            <div
                className="flex flex-col items-center w-full justify-center min-h-screen bg-no-repeat bg-cover bg-center"
                style={{backgroundImage: "url('header.png')"}}>

                <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-12 items-center justify-center w-full max-w-4xl px-12 sm:px-24 lg:px-0 md:px-44">

                    <div
                        className="z-1 flex flex-col flex-grow overflow-hidden transform bg-gray-600/20 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out w-full md:w-1/2 lg:w-1/4">
                        <div className="flex flex-col items-center p-4 md:p-10 bg-gray-400/10">
                            <div className="flex items-center py-2">
                                <img src="https://kosickaakademia.sk/images/logo.png" alt="logo" className="w-28 md:w-56"/>
                            </div>
                        </div>
                        <div className="p-4 md:p-10 flex flex-col items-center justify-center">
                            <p className="font-semibold text-center text-white pb-6">Košická akadémia softvérového vývoja</p>

                            <ul className="text-white">
                                <li className="flex items-center justify-center pb-2">
                                    <p className="italic text-center">2022 - now</p>
                                </li>
                                <li className="flex items-center">
                                    <p>Computer systems</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex px-4 md:px-10 pb-4 md:pb-10 justify-center">
                            <a
                                href="https://kosickaakademia.sk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-white items-center font-bold justify-center w-auto h-8 px-4 text-xs uppercase bg-gray-500/60 hover:bg-gray-400/60 rounded-lg">
                                Read more
                            </a>
                        </div>
                    </div>


                    <div
                        className="z-1 flex flex-col flex-grow overflow-hidden transform bg-gray-600/20 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out w-full md:w-1/2 lg:w-1/4">
                        <div className="flex flex-col items-center p-4 md:p-10 bg-gray-400/10">
                            <div className="flex items-center py-2">
                                <img src="https://www.gta.sk/images/sablona/gta_logo-2.png" alt="logo"
                                     className="w-28 md:w-56"/>
                            </div>
                        </div>
                        <div className="p-4 md:p-10 flex flex-col items-center justify-center">
                            <p className="font-semibold text-center text-white pb-6">Gymnázium sv. Tomáša Akvinského</p>

                            <ul className="text-white">
                                <li className="flex items-center justify-center pb-2">
                                    <p className="italic text-center">2018 - 2022</p>
                                </li>
                                <li className="flex items-center">
                                    <p>Economics, informatics</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex px-4 md:px-10 pb-4 md:pb-10 justify-center">
                            <a
                                href="https://www.gta.sk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-white items-center font-bold justify-center w-auto h-8 px-4 text-xs uppercase bg-gray-500/60 hover:bg-gray-400/60 rounded-lg">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
