'use client';

import clsx from "clsx";
import Link from "next/link";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"
import { useUIStore } from "@/store";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export const Sidebar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeSideMenu = useUIStore(state => state.closeSideMenu);

    const { data: session } = useSession();
    const isAuthenticated = !!session?.user;
    const isAdmin = (session?.user.role === 'admin');


    return (
        <div>

            {
                isSideMenuOpen && (
                    // Background black
                    < div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
                )
            }
            {
                isSideMenuOpen && (
                    // Blur
                    <div
                        onClick={closeSideMenu}
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-xs" />
                )
            }


            <nav className={
                clsx(
                    "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                    {
                        "translate-x-full": !isSideMenuOpen
                    }
                )
            }
            >
                <IoCloseOutline
                    size={35}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={closeSideMenu}
                />

                <div className="relative mt-14">
                    <IoSearchOutline
                        size={20}
                        className="absolute top-2 left-2"
                    />
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                    />
                </div>

                {
                    isAuthenticated && (
                        <>
                            <Link
                                href="/profile"
                                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                                onClick={() => closeSideMenu()}
                            >
                                <IoPersonOutline size={20} />
                                <span className="ml-3 text-lg">Perfil</span>
                            </Link>
                            <Link
                                href="/orders"
                                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                                onClick={() => closeSideMenu()}
                            >
                                <IoTicketOutline size={20} />
                                <span className="ml-3 text-lg">Ordenes</span>
                            </Link>
                        </>
                    )
                }

                {
                    isAuthenticated
                        ? (
                            <button
                                className="flex w-full items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                                onClick={() => {
                                    signOut();
                                    closeSideMenu();
                                }}
                            >
                                <IoLogOutOutline size={20} />
                                <span className="ml-3 text-lg">Salir</span>
                            </button>
                        )
                        : (
                            <Link
                                href="/auth/login"
                                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                                onClick={() => closeSideMenu()}
                            >
                                <IoLogInOutline size={20} />
                                <span className="ml-3 text-lg">Ingresar</span>
                            </Link>
                        )
                }

                {
                    isAdmin && (
                        <>
                            <div className="w-full h-px bg-gray-200 my-10" />

                            <Link
                                href="/admin/products"
                                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                                onClick={() => closeSideMenu()}
                            >
                                <IoShirtOutline size={20} />
                                <span className="ml-3 text-lg">Productos</span>
                            </Link>
                            <Link
                                href="/admin/orders"
                                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                                onClick={() => closeSideMenu()}
                            >
                                <IoTicketOutline size={20} />
                                <span className="ml-3 text-lg">Ordenes</span>
                            </Link>
                            <Link
                                href="/admin/users"
                                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                                onClick={() => closeSideMenu()}
                            >
                                <IoPeopleOutline size={20} />
                                <span className="ml-3 text-lg">Usuarios</span>
                            </Link>
                        </>
                    )
                }

            </nav>
        </div>
    )
}
