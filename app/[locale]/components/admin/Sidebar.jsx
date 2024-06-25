"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
// import SelectTranslation from './SelectTranslation';
import { getUpperCaseFirstChar, getUpperCase } from '@/app/utility/StringUtil';

import { usePathname } from "next/navigation";
// import Link from "next/link";
import SidebarLinkGroup from "./SidebarLinkGroup";

import { AiOutlineProduct } from "react-icons/ai";
import { FaFileAlt, FaAngleRight, FaAngleDown, FaTasks } from "react-icons/fa";
import { GrPieChart, GrTable } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { ImExit } from "react-icons/im";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineCalendarMonth, MdOutlineWeb } from "react-icons/md";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {

    // const tNavbar = useTranslations('navbar'); // en.json -> "navbar"
    // const tCountry = useTranslations('country');
    // const tCommon = useTranslations('common');
    // var strVideo = getUpperCase(tNavbar('video'));
    // var strAbout = getUpperCase(tNavbar('about'));
    // var strContact = getUpperCase(tNavbar('contact'));
    // var strLogin = getUpperCase(tCommon('login'));

    // const transVO = {
    //     "login": tCommon('login'),
    //     "sign_in": tCommon('sign-in'),
    //     "email": tCommon('email'),
    //     "password": tCommon('password'),
    //     "english": tCountry('english'),
    //     "korea": tCountry('korea'),
    //     "japan": tCountry('japan'),
    //     "vietnam": tCountry('vietnam'),
    // }

    const pathname = usePathname();

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const [isActiveSubmenuForm, setIsActiveSubmenuForm] = useState(true);

    let storedSidebarExpanded = "true";

    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
    );

    const clickHiddenSubmenuForm = () => {
        setIsActiveSubmenuForm(!isActiveSubmenuForm);
        console.log(isActiveSubmenuForm)
    };

    return (
        <aside
            ref={sidebar}
            className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full"
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <Link href="/">
                    <Image
                        src="/tailadmin/images/logo/logo.svg"
                        alt="Logo"
                        className="mt-5"
                        width={176}
                        height={32}
                    />
                </Link>
            </div>
            {/* <!-- SIDEBAR HEADER --> */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
                    {/* <!-- Menu Group --> */}
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-white">
                            MENU
                        </h3>

                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li>
                                <a className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4" href="#">
                                    <RxDashboard /> Dashboard
                                </a>

                                <div className="translate transform overflow-hidden false">
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/">eCommerce</a></li>
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/dashboard/analytics">Analytics</a></li>
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white text-white" href="/dashboard/marketing">Marketing</a></li>
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/dashboard/crm">CRM<span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/dashboard/stocks">Stocks<span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <a className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="/calendar">
                                    <MdOutlineCalendarMonth /> Calendar
                                </a>
                            </li>
                            <li>
                                <a className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="/profile">
                                    <LuUser2 />Profile
                                </a>
                            </li>
                            <li>
                                <a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/settings">
                                    Messages
                                    <span class="absolute right-14 top-1/2 -translate-y-1/2 rounded bg-primary px-2.5 py-1 text-xs font-medium text-white">5</span>
                                    <span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span>
                                </a>
                            </li>
                            <li>
                                <a className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="#">
                                    <FaTasks />Task
                                    <FaAngleRight className="absolute right-4 top-1/2 -translate-y-1/2 fill-current false" size={20}/>
                                </a>
                                <div className="translate transform overflow-hidden hidden">
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/tasks/task-list">List<span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/tasks/task-kanban">Kanban<span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false"
                                    href="#"
                                    onClick={clickHiddenSubmenuForm}
                                >
                                    <FaFileAlt /> Forms
                                    {
                                        isActiveSubmenuForm === true ?
                                        <FaAngleDown className="absolute right-4 top-1/2 -translate-y-1/2 fill-current false" size={20}/>
                                        :
                                        <FaAngleRight className="absolute right-4 top-1/2 -translate-y-1/2 fill-current false" size={20}/>
                                    }
                                </a>
                                <div className={`${isActiveSubmenuForm ? 'false' : 'hidden'} translate transform overflow-hidden`}>
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/forms/form-elements">Form Elements</a></li>
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/forms/pro-form-elements">Pro Form Elements<span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/forms/form-layout">Form Layout</a></li>
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/forms/pro-form-layout">Pro Form Layout<span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="#">
                                    <GrTable />Tables
                                    <FaAngleDown className="absolute right-4 top-1/2 -translate-y-1/2 fill-current false" size={20}/>
                                </a>
                                <div className="translate transform overflow-hidden hidden">
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/tables">Tables</a></li>
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/tables/pro-tables">Pro Tables<span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="#">
                                    <MdOutlineWeb />Pages
                                    <FaAngleDown className="absolute right-4 top-1/2 -translate-y-1/2 fill-current false" size={20}/>
                                </a>

                                <div className="translate transform overflow-hidden hidden">
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li>
                                            <a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/settings">
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/file-manager">
                                                File Manager
                                            </a>
                                        </li>
                                        <li>
                                            <a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/data-tables">
                                                Data Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/pages/pricing-tables">
                                                Pricing Tables
                                                <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/error-page">
                                                Error Page
                                                <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/faq">
                                                Faq's
                                                <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/team">Teams<span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a>
                                        </li>
                                        <li>
                                            <a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/terms-conditions">Terms &amp; Conditions
                                                <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/pages/mail-success">
                                                Mail Success
                                                <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Others Group --> */}
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-white">
                            OTHERS
                        </h3>

                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li>
                                <a className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="/chart">
                                    <GrPieChart /> Chart
                                </a>
                            </li>
                            <li>
                                <a className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="#">
                                    <AiOutlineProduct />UI Elements
                                    <FaAngleDown className="absolute right-4 top-1/2 -translate-y-1/2 fill-current false" size={20}/>
                                </a>
                                <div className="translate transform overflow-hidden false">
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/ui/alerts">Alerts</a></li>
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/ui/buttons">Buttons</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="#">
                                    <ImExit />Log out
                                </a>
                                <div className="translate transform overflow-hidden hidden">
                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/auth/signin">Sign In</a></li>
                                        <li><a className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/auth/signup">Sign Up</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <!-- Sidebar Menu --> */}
            </div>
        </aside>
    );
}
