import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen">
            <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
                <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
                    <div className="h-auto flex">
                        <Image
                            src="/assets/icons/logo_big.png"
                            alt="logo"
                            width={100}
                            height={50}
                        />
                        <h1 className="font-bold text-5xl text-white mt-8">Nimbus</h1>
                    </div>

                    <div className="space-y-5 text-white">
                        <h1 className="h1">Manage your files the best way</h1>
                        <p className="body-1">
                            This is a place where you can store all your documents.
                        </p>
                    </div>
                    <Image
                        src="/assets/images/files.png"
                        alt="Files"
                        width={342}
                        height={342}
                        className="transition-all hover:rotate-2 hover:scale-105"
                    />
                </div>
            </section>

            <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
                <div className="mb-16 lg:hidden">
                    <div className="flex">
                        <Image
                            src="/assets/icons/logo_big.png"
                            alt="logo"
                            width={100}
                            height={50}
                            className="h-auto"
                        />
                        <h1 className="font-bold text-5xl text-brand mt-8">Nimbus</h1>
                    </div>
                </div>

                {children}
            </section>
        </div>
    );
};

export default Layout;