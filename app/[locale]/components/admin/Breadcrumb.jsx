"use client";

import Link from 'next-intl/link';
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
// import SelectTranslation from './SelectTranslation';
import { getUpperCaseFirstChar, getUpperCase } from '@/app/utility/StringUtil';

import { usePathname } from "next/navigation";
// import Link from "next/link";
import SidebarLinkGroup from "./SidebarLinkGroup";

export default function Breadcrumb({ pageParent, pageName }) {



    return (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                {pageName}
            </h2>

            <nav>
                <ol className="flex items-center gap-2">
                    <li>
                        <Link className="font-medium" href="/">
                            {pageParent} /
                        </Link>
                    </li>
                    <li className="font-medium text-primary">{pageName}</li>
                </ol>
            </nav>
        </div>
    );
}
