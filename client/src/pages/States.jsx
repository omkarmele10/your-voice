const States = () => {
    return (
        <div className="mx-4 sm:mx-[10%]  md:py-15">
            <h2 className="text-4xl px-8 py-3">Our Stats</h2>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-50 flex items-center justify-between flex-col gap-16 lg:flex-row">

                    <div className="w-full lg:w-60">
                        {/* <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                            Our Stats
                        </h2> */}
                        <p className="text-sm text-gray-500 leading-6 text-center lg:text-left">
                            We help you to unleash the power within your business
                        </p>
                    </div>

                    <div className="w-full lg:w-4/5">
                        <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">

                            <div className="block text-center">
                                <i className="fa-solid fa-file text-primary  text-2xl md:text-3xl mb-3"></i>
                                <div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                                    5678+
                                </div>
                                <span className="text-gray-900 text-center block lg:text-left">
                                    SOLVED CASES
                                </span>
                            </div>

                            <div className="block text-center">
                                <i className="fa-solid fa-building-columns text-primary  text-2xl md:text-3xl mb-3"></i>
                                <div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                                    25+
                                </div>
                                <span className="text-gray-900 text-center block lg:text-left">
                                    PARTNERS
                                </span>
                            </div>

                            <div className="block text-center">
                                <i className="fa-solid fa-scale-balanced text-primary  text-2xl md:text-3xl mb-3"></i>
                                <div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                                    20+
                                </div>
                                <span className="text-gray-900 text-center block lg:text-left">
                                    STAFF MEMBERS
                                </span>
                            </div>

                            <div className="block text-center">
                                <i className="fa-solid fa-gavel text-primary text-2xl md:text-3xl mb-3"></i>
                                <div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                                    50+
                                </div>
                                <span className="text-gray-900 text-center block lg:text-left">
                                    TOP 50 LAW
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default States;
