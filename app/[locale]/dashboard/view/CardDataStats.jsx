import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import { getUpperCaseFirstChar, getUpperCase } from '@/app/utility/StringUtil';

import { usePathname } from "next/navigation";

import { FiShoppingCart, FiUsers } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiEyeLight } from "react-icons/pi";

export default function CardDataStats() {




    return (
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <div class="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                    <PiEyeLight size={30} color='blue' />
                </div>

                <div class="mt-4 flex items-end justify-between">
                    <div>
                        <h4 class="text-title-md font-bold text-black dark:text-white">
                            $3.456K
                        </h4>
                        <span class="text-sm font-medium">Total views</span>
                    </div>

                    <span class="flex items-center gap-1 text-sm font-medium text-meta-3">
                        0.43%
                        <svg class="fill-meta-3" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z" fill=""></path>
                        </svg>
                    </span>
                </div>
            </div>

            <div class="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                    <FiShoppingCart size={24} color='blue' />
                </div>

                <div class="mt-4 flex items-end justify-between">
                    <div>
                        <h4 class="text-title-md font-bold text-black dark:text-white">
                            $45,2K
                        </h4>
                        <span class="text-sm font-medium">Total Profit</span>
                    </div>

                    <span class="flex items-center gap-1 text-sm font-medium text-meta-3">
                        4.35%
                        <svg class="fill-meta-3" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z" fill=""></path>
                        </svg>
                    </span>
                </div>
            </div>

            <div class="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                    <HiOutlineShoppingBag size={26} color='blue' />
                </div>

                <div class="mt-4 flex items-end justify-between">
                    <div>
                        <h4 class="text-title-md font-bold text-black dark:text-white">
                            2.450
                        </h4>
                        <span class="text-sm font-medium">Total Product</span>
                    </div>

                    <span class="flex items-center gap-1 text-sm font-medium text-meta-3">
                        2.59%
                        <svg class="fill-meta-3" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z" fill=""></path>
                        </svg>
                    </span>
                </div>
            </div>

            <div class="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                    <FiUsers size={26} color='blue' />
                </div>

                <div class="mt-4 flex items-end justify-between">
                    <div>
                        <h4 class="text-title-md font-bold text-black dark:text-white">
                            3.456
                        </h4>
                        <span class="text-sm font-medium">Total Users</span>
                    </div>

                    <span class="flex items-center gap-1 text-sm font-medium text-meta-5">
                        0.95%
                        <svg class="fill-meta-5" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z" fill=""></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
}
