import Link from 'next-intl/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import "@/public/skillgro/assets/css/bootstrap.min.css";
import "@/public/skillgro/assets/css/animate.min.css";
import "@/public/skillgro/assets/css/magnific-popup.css";
// import "@/public/skillgro/assets/css/fontawesome-all.min.css";
// import "@/public/skillgro/assets/css/flaticon-skillgro.css";
import "@/public/skillgro/assets/css/swiper-bundle.min.css";
// import "@/public/skillgro/assets/css/default-icons.css";
import "@/public/skillgro/assets/css/odometer.css";
import "@/public/skillgro/assets/css/aos.css";
import "@/public/skillgro/assets/css/spacing.css";
import "@/public/skillgro/assets/css/tg-cursor.css";
import "@/public/skillgro/assets/css/main.css";

import Navbar from '../components/frontend/Navbar';
import Footer from '../components/frontend/Footer';

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function Index() {

    const tChannel = useTranslations('channel-list');
    const tCommon = useTranslations('common');
    const tSearchView = useTranslations('search-view');

    const transVO = {
        "course": tSearchView('course'),
        "enter_your_keywords": tSearchView('enter-your-keywords'),
        "subcribe_filter": tSearchView('subcribe-filter'),
        "subcribe": tSearchView('subcribe'),
        "increase": tSearchView('increase'),
        "decrease": tSearchView('decrease'),
        "development": tSearchView('development'),
        "total": tCommon('total'),
    }

    // Gắn giao diện skillgro

    return (
        <div>
            <Navbar />

            <main className="main-area fix">
                <section className="banner-area banner-bg tg-motion-effects" style={{ backgroundImage: `url(/skillgro/assets/img/banner/banner_bg.png)` }}>
                    <div className="container">
                        <div className="row justify-content-between align-items-start">
                            <div className="col-xl-5 col-lg-6">
                                <div className="banner__content">
                                    <h3 className="title tg-svg">
                                        Never Stop
                                        <span className="position-relative">
                                            <span className="svg-icon" id="banner-svg" data-svg-icon="/skillgro/assets/img/objects/title_shape.svg"></span>
                                            <svg x="0px" y="0px" preserveAspectRatio="none" viewBox="0 0 209 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565" fill="currentcolor" />
                                            </svg>
                                            Learning
                                        </span>
                                        <br />Life <b>Never Stop</b> Teaching
                                    </h3>
                                    <p>Every teaching and learning journey is unique Following We'll help guide your way.</p>
                                    <div className="banner__btn-wrap">
                                        <a href="contact.html" className="btn arrow-btn">Start Free Trial
                                            <GoArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner__images">
                                    <Image
                                        src={"/skillgro/assets/img/banner/banner_img.png"}
                                        className="main-img"
                                        width={419}
                                        height={460}
                                        alt="Logo"
                                    />

                                    <div className="shape big-shape">
                                        <Image
                                            src={"/skillgro/assets/img/banner/banner_shape01.png"}
                                            className="tg-motion-effects1"
                                            width={618}
                                            height={432}
                                            alt="shape"
                                        />
                                    </div>
                                    <Image
                                        src={"/skillgro/assets/img/banner/bg_dots.svg"}
                                        className="shape bg-dots rotateme"
                                        width={494}
                                        height={494}
                                        alt="shape"
                                    />
                                    <Image
                                        src={"/skillgro/assets/img/banner/banner_shape02.png"}
                                        className="shape small-shape tg-motion-effects3"
                                        width={136}
                                        height={139}
                                        alt="shape"
                                    />
                                    <div className="banner__author">
                                        <div className="banner__author-item">
                                            <div className="image">
                                                <Image
                                                    src={"/skillgro/assets/img/banner/banner_author01.png"}
                                                    width={30}
                                                    height={30}
                                                    alt="img"
                                                />
                                            </div>
                                            <h6 className="name">Robert Fox</h6>
                                        </div>
                                        <div className="banner__author-item">
                                            <div className="image">
                                                <Image
                                                    src={"/skillgro/assets/img/banner/banner_author02.png"}
                                                    width={30}
                                                    height={30}
                                                    alt="img"
                                                />
                                            </div>
                                            <h6 className="name">Michel Jones</h6>
                                        </div>
                                        <Image
                                            src={"/skillgro/assets/img/banner/banner_shape02.svg"}
                                            className="arrow-shape tg-motion-effects3"
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={"/skillgro/assets/img/banner/banner_shape01.svg"}
                        className="line-shape"
                        width={200}
                        height={432}
                        alt="shape"
                    />
                </section>

                <section class="event__area section-pt-120 section-pb-90">
                    <div class="container">
                        <div class="section__title-wrap">
                            <div class="row justify-content-center">
                                <div class="col-lg-6">
                                    <div class="section__title text-center mb-40">
                                        <span class="sub-title">Top Class Courses</span>
                                        <h2 class="title">Explore Our World's Best Courses</h2>
                                        <p class="desc">When known printer took a galley of type scrambl edmake</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="event__inner-wrap">
                            <div class="row">
                                <div class="col-30">
                                    <div class="event__content">
                                        <div class="section__title mb-20">
                                            <span class="sub-title">{tCommon('course')}</span>
                                            <h2 class="title">Join Our Community And Make it Bigger</h2>
                                        </div>
                                        <p>Edhen an unknown printer took a galley acrambled make a type specimen bookas centuries.Edhen anderely unknown printer took a galley.</p>
                                        <div className="tg-button-wrap">
                                            <Link
                                                className="btn arrow-btn"
                                                href="/course"
                                            >
                                                See All Courses
                                                <Image
                                                    src={"/skillgro/assets/img/icons/right_arrow.svg"}
                                                    className="injectable"
                                                    width={30}
                                                    height={30}
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-70">
                                    <div class="event__item-wrap">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-4 col-md-6">
                                                <div class="event__item shine__animate-item">
                                                    <div class="event__item-thumb">
                                                        <Link
                                                            className="shine__animate-link"
                                                            href="/messages"
                                                        >
                                                            See All Events
                                                            <Image
                                                                src={"/skillgro/assets/img/events/event_thumb01.jpg"}
                                                                className="injectable"
                                                                width={30}
                                                                height={30}
                                                                alt="img"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div class="event__item-content">
                                                        <span class="date">25 June, 2024</span>
                                                        <h2 class="title"><a href="events-details.html">The Accessible Target Sizes Cheatsheet</a></h2>
                                                        <Link
                                                            className="location"
                                                            href="https://maps.google.com/maps"
                                                        >
                                                            United Kingdom
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="event__item shine__animate-item">
                                                    <div class="event__item-thumb">
                                                        <Link
                                                            className="shine__animate-link"
                                                            href="/"
                                                        >
                                                        <Image
                                                            src={"/skillgro/assets/img/events/event_thumb02.jpg"}
                                                            width={30}
                                                            height={30}
                                                            alt="img"
                                                        />
                                                        </Link>
                                                    </div>
                                                    <div class="event__item-content">
                                                        <span class="date">25 June, 2024</span>
                                                        <h2 class="title"><a href="events-details.html">Exactly How Technology Can Make Reading</a></h2>
                                                        <a href="https://maps.google.com/maps" class="location" target="_blank"><i class="flaticon-map"></i>Tokyo Japan</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="event__item shine__animate-item">
                                                    <div class="event__item-thumb">
                                                        <Link
                                                            className="shine__animate-link"
                                                            href="/"
                                                        >
                                                        <Image
                                                            src={"/skillgro/assets/img/events/event_thumb03.jpg"}
                                                            width={30}
                                                            height={30}
                                                            alt="img"
                                                        />
                                                        </Link>
                                                    </div>
                                                    <div class="event__item-content">
                                                        <span class="date">25 June, 2024</span>
                                                        <h2 class="title"><a href="events-details.html">Aewe Creating Futures Through Technology</a></h2>
                                                        <a href="https://maps.google.com/maps" class="location" target="_blank"><i class="flaticon-map"></i>New Work</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="event__shape">
                        <Image
                            src={"/skillgro/assets/img/events/event_shape.png"}
                            class="alltuchtopdown"
                            width={30}
                            height={30}
                            alt="img"
                        />
                    </div>
                </section>

                <section className="features__area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="section__title white-title text-center mb-50">
                                    <span className="sub-title">How We Start Journey</span>
                                    <h2 className="title">Start your Learning Journey Today!</h2>
                                    <p>Groove’s intuitive shared inbox makesteam members together <br/> organize, prioritize and.In this episode.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                        <Image
                                            src={"/skillgro/assets/img/icons/features_icon01.svg"}
                                            className="injectable mg-auto"
                                            width={94}
                                            height={94}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">Learn with Experts</h4>
                                        <p>Curate anding area share Pluralsight content to reach your</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                        <Image
                                            src={"/skillgro/assets/img/icons/features_icon02.svg"}
                                            className="injectable mg-auto"
                                            width={94}
                                            height={94}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">Learn Anything</h4>
                                        <p>Curate anding area share Pluralsight content to reach your</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                        <Image
                                            src={"/skillgro/assets/img/icons/features_icon03.svg"}
                                            className="injectable mg-auto"
                                            width={94}
                                            height={94}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">Get Online Certificate</h4>
                                        <p>Curate anding area share Pluralsight content to reach your</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="features__item">
                                    <div className="features__icon">
                                        <Image
                                            src={"/skillgro/assets/img/icons/features_icon04.svg"}
                                            className="injectable mg-auto"
                                            width={94}
                                            height={94}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">E-mail Marketing</h4>
                                        <p>Curate anding area share Pluralsight content to reach your</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="instructor__area-two">
                    <div class="container">
                        <div class="instructor__item-wrap-two">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="instructor__item-two tg-svg">
                                        <div class="instructor__thumb-two">
                                                <Image
                                                    src={"/skillgro/assets/img/instructor/instructor_two01.png"}
                                                    width={150}
                                                    height={150}
                                                    alt="img"
                                                />
                                            <div class="shape-one">
                                                <Image
                                                    src={"/skillgro/assets/img/instructor/instructor_shape01.svg"}
                                                    className="injectable"
                                                    width={150}
                                                    height={150}
                                                    alt="img"
                                                />
                                            </div>
                                            <div class="shape-two">
                                                <span class="svg-icon" id="instructor-svg" data-svg-icon="assets/img/instructor/instructor_shape02.svg"></span>
                                            </div>
                                        </div>
                                        <div class="instructor__content-two">
                                            <h3 class="title">Trở thành thành viên</h3>
                                            <p>Đăng ký tài khoản và nhận ngay những ưu đãi hấp dẫn</p>
                                            <div class="tg-button-wrap">
                                                <Link
                                                    className="btn arrow-btn"
                                                    href="/messages"
                                                >
                                                    Đăng ký ngay!
                                                    <Image
                                                        src={"/skillgro/assets/img/icons/right_arrow.svg"}
                                                        className="injectable"
                                                        width={30}
                                                        height={30}
                                                        alt="img"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="instructor__item-two tg-svg">
                                        <div class="instructor__thumb-two">
                                                <Image
                                                    src={"/skillgro/assets/img/instructor/instructor_two02.png"}
                                                    width={180}
                                                    height={180}
                                                    alt="img"
                                                />
                                            <div class="shape-one">
                                                <Image
                                                    src={"/skillgro/assets/img/instructor/instructor_shape01.svg"}
                                                    className="injectable"
                                                    width={150}
                                                    height={150}
                                                    alt="img"
                                                />
                                            </div>
                                            <div class="shape-two">
                                                <span class="svg-icon" id="instructor-svg" data-svg-icon="assets/img/instructor/instructor_shape02.svg"></span>
                                            </div>
                                        </div>
                                        <div class="instructor__content-two">
                                            <h3 class="title">Tài liệu miễn phí</h3>
                                            <p>Các video, tài liệu học tập miễn phí có thể download.</p>
                                            <div class="tg-button-wrap">
                                                <Link
                                                    className="btn arrow-btn"
                                                    href="/messages"
                                                >
                                                    Theo dõi ngay!
                                                    <Image
                                                        src={"/skillgro/assets/img/icons/right_arrow.svg"}
                                                        className="injectable"
                                                        width={30}
                                                        height={30}
                                                        alt="img"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="blog__post-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section__title text-center mb-40">
                                    <span className="sub-title">News & Blogs</span>
                                    <h2 className="title">Our Latest News Feed</h2>
                                    <p>when known printer took a galley of type scrambl edmake</p>
                                </div>
                            </div>
                        </div>
                        <div className="row gutter-20">
                            <div className="col-xl-3 col-md-6">
                                <div className="blog__post-item shine__animate-item">
                                    <div className="blog__post-thumb">
                                        <a href="blog-details.html" className="shine__animate-link">
                                            <Image
                                                src={"/skillgro/assets/img/blog/blog_post01.jpg"}
                                                className="line-shape"
                                                width={698}
                                                height={544}
                                                alt="img"
                                            />
                                        </a>
                                        <a href="blog.html" className="post-tag">Marketing</a>
                                    </div>
                                    <div className="blog__post-content">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-calendar"></i>20 July, 2024</li>
                                                <li><i className="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                            </ul>
                                        </div>
                                        <h4 className="title"><a href="blog-details.html">How To Become idiculously Self-Aware In 20 Minutes</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="blog__post-item shine__animate-item">
                                    <div className="blog__post-thumb">
                                        <a href="blog-details.html" className="shine__animate-link">
                                            <Image
                                                src={"/skillgro/assets/img/blog/blog_post02.jpg"}
                                                className="line-shape"
                                                width={698}
                                                height={544}
                                                alt="img"
                                            />
                                        </a>
                                        <a href="blog.html" className="post-tag">Marketing</a>
                                    </div>
                                    <div className="blog__post-content">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-calendar"></i>20 July, 2024</li>
                                                <li><i className="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                            </ul>
                                        </div>
                                        <h4 className="title"><a href="blog-details.html">Get Started With UI Design With Tips To Speed</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="blog__post-item shine__animate-item">
                                    <div className="blog__post-thumb">
                                        <a href="blog-details.html" className="shine__animate-link">
                                            <Image
                                                src={"/skillgro/assets/img/blog/blog_post03.jpg"}
                                                className="line-shape"
                                                width={698}
                                                height={544}
                                                alt="img"
                                            />
                                        </a>
                                        <a href="blog.html" className="post-tag">Marketing</a>
                                    </div>
                                    <div className="blog__post-content">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-calendar"></i>20 July, 2024</li>
                                                <li><i className="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                            </ul>
                                        </div>
                                        <h4 className="title"><a href="blog-details.html">Make Your Own Expanding Contracting Content</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="blog__post-item shine__animate-item">
                                    <div className="blog__post-thumb">
                                        <a href="blog-details.html" className="shine__animate-link">
                                            <Image
                                                src={"/skillgro/assets/img/blog/blog_post04.jpg"}
                                                className="line-shape"
                                                width={698}
                                                height={544}
                                                alt="img"
                                            />
                                        </a>
                                        <a href="blog.html" className="post-tag">Marketing</a>
                                    </div>
                                    <div className="blog__post-content">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-calendar"></i>20 July, 2024</li>
                                                <li><i className="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                            </ul>
                                        </div>
                                        <h4 className="title"><a href="blog-details.html">What we are capable to usually discovered</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="blog__post-item shine__animate-item">
                                    <div className="blog__post-thumb">
                                        <a href="blog-details.html" className="shine__animate-link">
                                            <Image
                                                src={"/skillgro/assets/img/blog/blog_post04.jpg"}
                                                className="line-shape"
                                                width={698}
                                                height={544}
                                                alt="img"
                                            />
                                        </a>
                                        <a href="blog.html" className="post-tag">Marketing</a>
                                    </div>
                                    <div className="blog__post-content">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-calendar"></i>20 July, 2024</li>
                                                <li><i className="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                            </ul>
                                        </div>
                                        <h4 className="title"><a href="blog-details.html">What we are capable to usually discovered</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="blog__post-item shine__animate-item">
                                    <div className="blog__post-thumb">
                                        <a href="blog-details.html" className="shine__animate-link">
                                            <Image
                                                src={"/skillgro/assets/img/blog/blog_post04.jpg"}
                                                className="line-shape"
                                                width={698}
                                                height={544}
                                                alt="img"
                                            />
                                        </a>
                                        <a href="blog.html" className="post-tag">Marketing</a>
                                    </div>
                                    <div className="blog__post-content">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-calendar"></i>20 July, 2024</li>
                                                <li><i className="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                            </ul>
                                        </div>
                                        <h4 className="title"><a href="blog-details.html">What we are capable to usually discovered</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="blog__post-item shine__animate-item">
                                    <div className="blog__post-thumb">
                                        <a href="blog-details.html" className="shine__animate-link">
                                            <Image
                                                src={"/skillgro/assets/img/blog/blog_post04.jpg"}
                                                className="line-shape"
                                                width={698}
                                                height={544}
                                                alt="img"
                                            />
                                        </a>
                                        <a href="blog.html" className="post-tag">Marketing</a>
                                    </div>
                                    <div className="blog__post-content">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-calendar"></i>20 July, 2024</li>
                                                <li><i className="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                            </ul>
                                        </div>
                                        <h4 className="title"><a href="blog-details.html">What we are capable to usually discovered</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="blog__post-item shine__animate-item">
                                    <div className="blog__post-thumb">
                                        <a href="blog-details.html" className="shine__animate-link">
                                            <Image
                                                src={"/skillgro/assets/img/blog/blog_post04.jpg"}
                                                className="line-shape"
                                                width={698}
                                                height={544}
                                                alt="img"
                                            />
                                        </a>
                                        <a href="blog.html" className="post-tag">Marketing</a>
                                    </div>
                                    <div className="blog__post-content">
                                        <div className="blog__post-meta">
                                            <ul className="list-wrap">
                                                <li><i className="flaticon-calendar"></i>20 July, 2024</li>
                                                <li><i className="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                            </ul>
                                        </div>
                                        <h4 className="title"><a href="blog-details.html">What we are capable to usually discovered</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer/>
        </div>
    )
}
