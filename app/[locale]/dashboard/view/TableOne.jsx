import Link from 'next-intl/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getUpperCaseFirstChar, getUpperCase } from '@/app/utility/StringUtil';

import { usePathname } from "next/navigation";

import { FiShoppingCart, FiUsers } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiEyeLight } from "react-icons/pi";

export default function TableOne() {

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Top Channels
            </h4>

            <div className="flex flex-col">
                <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Source
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Visitors
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Revenues
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Sales
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Conversion
                        </h5>
                    </div>
                </div>

                <div className={`grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark`}>
                    <div className="flex items-center gap-3 p-2.5 xl:p-5">
                        <div className="flex-shrink-0">
                            <Image src="/abc.jpg" alt="Brand" width={48} height={48} />
                        </div>
                        <p className="hidden text-black dark:text-white sm:block">
                            Google
                        </p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-black dark:text-white">3.5K</p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-meta-3">$5,768</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="text-black dark:text-white">590</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="text-meta-5">4.8%</p>
                    </div>
                </div>

                <div className={`grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark`}>
                    <div className="flex items-center gap-3 p-2.5 xl:p-5">
                        <div className="flex-shrink-0">
                            <Image src="/abc.jpg" alt="Brand" width={48} height={48} />
                        </div>
                        <p className="hidden text-black dark:text-white sm:block">
                            Twitter
                        </p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-black dark:text-white">2.2K</p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-meta-3">$4,635</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="text-black dark:text-white">467</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="text-meta-5">4.3%</p>
                    </div>
                </div>

                <div className={`grid grid-cols-3 sm:grid-cols-5`}>
                    <div className="flex items-center gap-3 p-2.5 xl:p-5">
                        <div className="flex-shrink-0">
                            <Image src="/abc.jpg" alt="Brand" width={48} height={48} />
                        </div>
                        <p className="hidden text-black dark:text-white sm:block">
                            Facebook
                        </p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-black dark:text-white">3.5K</p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-meta-3">$6,768</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="text-black dark:text-white">390</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="text-meta-5">4.2%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
