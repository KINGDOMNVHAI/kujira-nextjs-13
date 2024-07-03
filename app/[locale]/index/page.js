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

import SwiperTopCategoryComponent from "./components/SwiperTopCategoryComponent";
import Navbar from '../components/frontend/Navbar';

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { LuPenTool } from "react-icons/lu";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function Index() {

    const tChannel = useTranslations('channel-list');
    const tSearchView = useTranslations('search-view');
    const tCommon = useTranslations('common');

    const transVO = {
        "enter_your_keywords": tSearchView('enter-your-keywords'),
        "subcribe_filter": tSearchView('subcribe-filter'),
        "subcribe": tSearchView('subcribe'),
        "increase": tSearchView('increase'),
        "decrease": tSearchView('decrease'),
        "vtuber": tSearchView('vtuber'),
        "development": tSearchView('development'),
        "cosplay": tSearchView('cosplay'),
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

                <section className="categories-area section-py-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-7">
                                <div className="section__title text-center mb-40">
                                    <span className="sub-title">Trending Categories</span>
                                    <h2 className="title">Top Category We Have</h2>
                                    <p className="desc">when known printer took a galley of type scrambl edmake</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="categories__wrap">
                                    <div className="swiper categories-active">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <LuPenTool />
                                                        </div>
                                                        <span className="name">Graphic Design</span>
                                                        <span className="courses">(22)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <LuPenTool />
                                                        </div>
                                                        <span className="name">Graphic Design</span>
                                                        <span className="courses">(22)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <RiCodeSSlashLine />
                                                        </div>
                                                        <span className="name">Development</span>
                                                        <span className="courses">(29)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <i className="flaticon-email"></i>
                                                        </div>
                                                        <span className="name">Marketing</span>
                                                        <span className="courses">(31)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <i className="flaticon-fashion"></i>
                                                        </div>
                                                        <span className="name">Life Style</span>
                                                        <span className="courses">(23)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <i className="flaticon-interaction"></i>
                                                        </div>
                                                        <span className="name">Management</span>
                                                        <span className="courses">(19)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <i className="flaticon-web-design"></i>
                                                        </div>
                                                        <span className="name">App Design</span>
                                                        <span className="courses">(18)</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="categories__nav">
                                        <button className="categories-button-prev" style={{ padding: '12px' }}>
                                            <GoArrowLeft size={24} />
                                        </button>
                                        <button className="categories-button-next" style={{ padding: '12px' }}>
                                            <GoArrowRight size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" class="feature-area pt-130 pb-130">
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
                        <div class="row g-0">
                            <div class="col-lg-4 col-md-6">
                                <div class="feature-item-three wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
                                    <div class="feature-icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/f1.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="title">Easy to Customize</h4>
                                        <p>Well structured and easy to customize code. Spend less time to customize.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="feature-item-three wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                                    <div class="feature-icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/f2.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="title">Fully Responsive</h4>
                                        <p>This template is fully responsive and easily compilable with all devices</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="feature-item-three wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                                    <div class="feature-icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/f3.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="title">Retina Ready</h4>
                                        <p>Through nuanced stakeholder relations and astute partnership building.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="feature-item-three wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
                                    <div class="feature-icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/f4.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="title">Dedicated Support</h4>
                                        <p>Our support staff is ready to answer all your questions 7 days a week</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="feature-item-three wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                                    <div class="feature-icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/f5.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="title">Cross browser tested</h4>
                                        <p>It works across different browsers as expected and degrades gracefully.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="feature-item-three wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                                    <div class="feature-icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/f6.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="title">Clean And Modern</h4>
                                        <p>Through nuanced stakeholder relations and astute partnership building.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-lg-3 col-md-4 col-6">
                                <div class="features-item-two">
                                    <div class="icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/icon_01.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Bootstrap v5.3.2</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                                <div class="features-item-two">
                                    <div class="icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/icon_02.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Swiper Slider</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                                <div class="features-item-two">
                                    <div class="icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/icon_03.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Flat Icon</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                                <div class="features-item-two">
                                    <div class="icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/icon_04.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="content">
                                        <h6 class="title">FontAwesome Icon</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                                <div class="features-item-two">
                                    <div class="icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/icon_05.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Html5</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                                <div class="features-item-two">
                                    <div class="icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/icon_06.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Saas</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-6">
                                <div class="features-item-two">
                                    <div class="icon">
                                        <Image
                                            src={"/skillgro/assets/img/icon/icon_07.png"}
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Jquery</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}
