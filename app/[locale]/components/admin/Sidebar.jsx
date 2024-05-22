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

import { FaTasks, FaFileAlt } from "react-icons/fa";
import { GrPieChart, GrTable } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineCalendarMonth, MdOutlineWeb } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

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

    let storedSidebarExpanded = "true";

    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
    );

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div class="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
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

                        <ul class="mb-6 flex flex-col gap-1.5">
                            <li>
                                <a class="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4" href="#">
                                    <RxDashboard /> Dashboard
                                </a>

                                <div class="translate transform overflow-hidden false">
                                    <ul class="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/">eCommerce</a></li>
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/dashboard/analytics">Analytics</a></li>
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white text-white" href="/dashboard/marketing">Marketing</a></li>
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/dashboard/crm">CRM<span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/dashboard/stocks">Stocks<span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <a class="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="/calendar">
                                    <MdOutlineCalendarMonth /> Calendar
                                </a>
                            </li>
                            <li>
                                <a class="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="/profile">
                                    <LuUser2 />Profile
                                </a>
                            </li>
                            <li>
                                <a class="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="#">
                                    <FaTasks />Task
                                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 fill-current false" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z" fill=""></path>
                                    </svg>
                                </a>
                                <div class="translate transform overflow-hidden hidden">
                                    <ul class="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/tasks/task-list">List<span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/tasks/task-kanban">Kanban<span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a class="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="#">
                                    <FaFileAlt /> Forms
                                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 fill-current false" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z" fill=""></path>
                                    </svg>
                                </a>
                                <div class="translate transform overflow-hidden hidden">
                                    <ul class="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/forms/form-elements">Form Elements</a></li>
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/forms/pro-form-elements">Pro Form Elements<span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/forms/form-layout">Form Layout</a></li>
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/forms/pro-form-layout">Pro Form Layout<span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a class="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="#">
                                    <GrTable />Tables
                                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 fill-current false" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z" fill=""></path>
                                    </svg>
                                </a>
                                <div class="translate transform overflow-hidden hidden">
                                    <ul class="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/tables">Tables</a></li>
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/tables/pro-tables">Pro Tables<span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a class="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="#">
                                    <MdOutlineWeb />Pages

                                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 fill-current false" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z" fill=""></path>
                                    </svg>
                                </a>

                                <div class="translate transform overflow-hidden hidden">
                                    <ul class="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li>
                                            <a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/settings">
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/file-manager">
                                                File Manager
                                            </a>
                                        </li>
                                        <li>
                                            <a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/data-tables">
                                                Data Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/pages/pricing-tables">
                                                Pricing Tables
                                                <span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/error-page">
                                                Error Page
                                                <span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/faq">
                                                Faq's
                                                <span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/team">Teams<span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span></a>
                                        </li>
                                        <li>
                                            <a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/pages/terms-conditions">Terms &amp; Conditions
                                                <span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false " href="/pages/mail-success">
                                                Mail Success
                                                <span class="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">Pro</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Others Group --> */}
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                            OTHERS
                        </h3>

                        <ul class="mb-6 flex flex-col gap-1.5">
                            <li>
                                <a class="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="/chart">
                                    <GrPieChart /> Chart
                                </a>
                            </li>
                            <li>
                                <a class="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="#">
                                    <svg class="fill-current" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_130_9807)">

                                            <path d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V7.53335C0.506348 8.4896 1.29385 9.2771 2.2501 9.2771H15.7501C16.7063 9.2771 17.4938 8.4896 17.4938 7.53335V2.3021C17.4938 1.34585 16.7063 0.55835 15.7501 0.55835ZM16.2563 7.53335C16.2563 7.8146 16.0313 8.0396 15.7501 8.0396H2.2501C1.96885 8.0396 1.74385 7.8146 1.74385 7.53335V2.3021C1.74385 2.02085 1.96885 1.79585 2.2501 1.79585H15.7501C16.0313 1.79585 16.2563 2.02085 16.2563 2.3021V7.53335Z" fill=""></path>
                                            <path d="M6.13135 10.9646H2.2501C1.29385 10.9646 0.506348 11.7521 0.506348 12.7083V15.8021C0.506348 16.7583 1.29385 17.5458 2.2501 17.5458H6.13135C7.0876 17.5458 7.8751 16.7583 7.8751 15.8021V12.7083C7.90322 11.7521 7.11572 10.9646 6.13135 10.9646ZM6.6376 15.8021C6.6376 16.0833 6.4126 16.3083 6.13135 16.3083H2.2501C1.96885 16.3083 1.74385 16.0833 1.74385 15.8021V12.7083C1.74385 12.4271 1.96885 12.2021 2.2501 12.2021H6.13135C6.4126 12.2021 6.6376 12.4271 6.6376 12.7083V15.8021Z" fill=""></path>
                                            <path d="M15.75 10.9646H11.8688C10.9125 10.9646 10.125 11.7521 10.125 12.7083V15.8021C10.125 16.7583 10.9125 17.5458 11.8688 17.5458H15.75C16.7063 17.5458 17.4938 16.7583 17.4938 15.8021V12.7083C17.4938 11.7521 16.7063 10.9646 15.75 10.9646ZM16.2562 15.8021C16.2562 16.0833 16.0312 16.3083 15.75 16.3083H11.8688C11.5875 16.3083 11.3625 16.0833 11.3625 15.8021V12.7083C11.3625 12.4271 11.5875 12.2021 11.8688 12.2021H15.75C16.0312 12.2021 16.2562 12.4271 16.2562 12.7083V15.8021Z" fill=""></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_130_9807">
                                                <rect width="18" height="18" fill="white" transform="translate(0 0.052124)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>UI Elements

                                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 fill-current rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z" fill=""></path>
                                    </svg>
                                </a>
                                <div class="translate transform overflow-hidden false">
                                    <ul class="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/ui/alerts">Alerts</a></li>
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/ui/buttons">Buttons</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a class="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 false" href="#">
                                    <svg class="fill-current" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_130_9814)">
                                            <path d="M12.7127 0.55835H9.53457C8.80332 0.55835 8.18457 1.1771 8.18457 1.90835V3.84897C8.18457 4.18647 8.46582 4.46772 8.80332 4.46772C9.14082 4.46772 9.45019 4.18647 9.45019 3.84897V1.88022C9.45019 1.82397 9.47832 1.79585 9.53457 1.79585H12.7127C13.3877 1.79585 13.9221 2.33022 13.9221 3.00522V15.0709C13.9221 15.7459 13.3877 16.2802 12.7127 16.2802H9.53457C9.47832 16.2802 9.45019 16.2521 9.45019 16.1959V14.2552C9.45019 13.9177 9.16894 13.6365 8.80332 13.6365C8.43769 13.6365 8.18457 13.9177 8.18457 14.2552V16.1959C8.18457 16.9271 8.80332 17.5459 9.53457 17.5459H12.7127C14.0908 17.5459 15.1877 16.4209 15.1877 15.0709V3.03335C15.1877 1.65522 14.0627 0.55835 12.7127 0.55835Z" fill=""></path>
                                            <path d="M10.4346 8.60205L7.62207 5.7333C7.36895 5.48018 6.97519 5.48018 6.72207 5.7333C6.46895 5.98643 6.46895 6.38018 6.72207 6.6333L8.46582 8.40518H3.45957C3.12207 8.40518 2.84082 8.68643 2.84082 9.02393C2.84082 9.36143 3.12207 9.64268 3.45957 9.64268H8.49395L6.72207 11.4427C6.46895 11.6958 6.46895 12.0896 6.72207 12.3427C6.83457 12.4552 7.00332 12.5114 7.17207 12.5114C7.34082 12.5114 7.50957 12.4552 7.62207 12.3145L10.4346 9.4458C10.6877 9.24893 10.6877 8.85518 10.4346 8.60205Z" fill=""></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_130_9814">
                                                <rect width="18" height="18" fill="white" transform="translate(0 0.052124)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>Authentication

                                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 fill-current false" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z" fill=""></path>
                                    </svg>
                                </a>
                                <div class="translate transform overflow-hidden hidden">
                                    <ul class="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/auth/signin">Sign In</a></li>
                                        <li><a class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white false" href="/auth/signup">Sign Up</a></li>
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
