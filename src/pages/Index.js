import React, { useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import hero from "../assets/gradia-assets/images/hero/heroo.png";
import girl from "../assets/gradia-assets/images/features/girl.png";
import Footer from "../components/layout/Footer";

const meta = {
  title: "Ifran.kg",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 3)); // Переход к последнему элементу, если текущий первый
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 0)); // Возвращение к первому элементу, если текущий последний
  };

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="background-animate overflow-hidden">
          <section>
            <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
              <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
              <nav className="relative z-10 px-9 py-8 bg-white h-full">
                <div className="flex flex-wrap justify-between h-full">
                  <div className="w-full">
                    <div className="flex items-center justify-between -m-2">
                      <div className="w-auto p-2">
                        <a className="inline-block" href="#">
                          <img
                            src="gradia-assets/logos/gradia-name-black.svg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="w-auto p-2">
                        <a className="navbar-burger" href="#">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6M6 6L18 18"
                              stroke="#111827"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center py-8 w-full">
                    <ul>
                      <li className="mb-12">
                        <a
                          className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Features
                        </a>
                      </li>
                      <li className="mb-12">
                        <a
                          className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Solutions
                        </a>
                      </li>
                      <li className="mb-12">
                        <a
                          className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-end w-full">
                    <div className="flex flex-wrap">
                      <div className="w-full">
                        <button className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                          <div className="py-2 px-5 rounded-10">
                            <p>Login</p>
                          </div>
                        </button>
                      </div>
                      <div className="w-full">
                        <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                          <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500" />
                          <div className="py-2 px-5 bg-white rounded-lg">
                            <p className="relative z-10">Try for free</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </section>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -m-6 pt-32 pb-36">
              <div className="w-full lg:w-1/2 p-6">
                <div className="lg:max-w-xl">
                  <p className="mb-8 font-heading max-w-max px-5 py-2.5 uppercase font-semibold text-xs tracking-wider text-indigo-900 bg-gradient-blue2 rounded-full">
                    Тут какой то текст
                  </p>
                  <h1 className="mb-6 font-heading text-7xl md:text-10xl xl:text-12xl text-gray-900 font-bold">
                    Ирфан - Твой путеводитель в исаламе
                  </h1>
                  <p className="mb-9 text-gray-600 text-lg">
                    это не просто курс, это путь к глубокому пониманию и
                    близости к истине. Давай вместе исследуем древние тексты,
                    открываем тайны и стремимся к близости с Всевышним. Вперед,
                    наш путь начинается здесь.
                  </p>
                  <button className="group relative font-heading px-10 py-5 w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 overflow-hidden rounded-md">
                    <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gray-800" />
                    <p className="relative z-10">ХОЧУ НА КУРС</p>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-6">
                <img className="block mx-auto" src={hero} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-28 pb-32 overflow-hidden">
          <div className="container mx-auto px-4 mb-12">
            <p className="mb-5 font-heading text-xs text-gray-600 font-semibold text-center uppercase tracking-px">
              ТУТ КАКОЙ- ТО ПРИКОЛЬНЫЙ ТЕКСТ
            </p>
            <h2 className="mb-20 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
              О нас
            </h2>
            <div className="flex flex-wrap -m-7">
              <div className="w-full md:w-1/3 p-7">
                <div className="h-full p-0.5 bg-gradient-cyan rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
                  <div className="h-full p-8 bg-white rounded-lg">
                    <img
                      className="relative -left-2 mb-12"
                      src="gradia-assets/images/features/chart.png"
                      alt=""
                    />
                    <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                      Личная методика
                    </h3>
                    <p className="text-gray-600">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-7">
                <div className="h-full p-0.5 bg-gradient-cyan rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
                  <div className="h-full p-8 bg-white rounded-lg">
                    <img
                      className="relative -left-2 mb-12"
                      src="gradia-assets/images/features/messages.png"
                      alt=""
                    />
                    <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                      В онлайн формате более года
                    </h3>
                    <p className="text-gray-600">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-7">
                <div className="h-full p-0.5 bg-gradient-cyan rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
                  <div className="h-full p-8 bg-white rounded-lg">
                    <img
                      className="relative -left-2 mb-12"
                      src="gradia-assets/images/features/warning.png"
                      alt=""
                    />
                    <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                      Более 800+ учеников
                    </h3>
                    <p className="text-gray-600">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-28 pb-32 bg-black overflow-hidden">
          <img
            className="h-full absolute top-0 left-1/2 transform -translate-x-1/2"
            src="gradia-assets/elements/how-it-works/radial.svg"
            alt=""
          />
          <div className="relative z-10 container mx-auto px-4">
            <div className="mb-16 max-w-xl">
              <h2 className="mb-6 font-heading font-semibold text-white text-6xl sm:text-7xl">
                Про курс:
              </h2>
              <p className="text-gray-400 text-lg">
                На данном курсе вы получите обширные знания и навыки, которые
                помогут вам глубже понять Ислам и усовершенствовать свою
                религиозную практику. Курс включает в себя следующие ключевые
                аспекты:
              </p>
            </div>
            <div
              className="flex  flex-nowrap mb-11"
              style={{
                transition: "transform 0.5s ease",
                transform: `translateX(-${activeIndex * 50}%)`,
              }}
            >
              <div className="flex-shrink-0" style={{ minWidth: "33%" }}>
                <div className="max-w-md bg-gray-900 py-11 px-9 rounded-10 md:mb-0 mb-10">
                  <div className="mb-11 flex justify-center items-center font-heading text-xl bg-gradient-green w-12 h-12 text-gray-900 rounded-full">
                    1
                  </div>
                  <p className="text-white text-xl">
                    Вы изучите вероубеждение и получите ответ на вопрос «Кто
                    такой мусульманин?». Этот раздел курса направлен на
                    понимание основных принципов и ценностей Ислама.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0" style={{ minWidth: "33%" }}>
                <div className="max-w-md bg-gray-900 py-11 px-9 rounded-10 md:mb-0 mb-10">
                  <div className="mb-11 flex justify-center items-center font-heading text-xl bg-gradient-green w-12 h-12 text-gray-900 rounded-full">
                    2
                  </div>
                  <p className="text-white text-xl">
                    Курс предлагает подробное обучение чтению Курана в
                    оригинале, начиная с азов. Вы научитесь читать священный
                    текст согласно всем правилам махража (правильное
                    произношение звуков) и таджвида (искусство красивого
                    чтения).
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0" style={{ minWidth: "33%" }}>
                <div className="max-w-md bg-gray-900 py-11 px-9 rounded-10 md:mb-0 mb-10">
                  <div className="mb-11 flex justify-center items-center font-heading text-xl bg-gradient-green w-12 h-12 text-gray-900 rounded-full">
                    3
                  </div>
                  <p className="text-white text-xl">
                    Включены два модуля, посвященные исправлению и улучшению
                    качества ваших пятикратных молитв. Эти модули помогут вам
                    совершенствовать вашу молитвенную практику.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0" style={{ minWidth: "33%" }}>
                <div className="max-w-md bg-gray-900 py-11 px-9 rounded-10 md:mb-0 mb-10">
                  <div className="mb-11 flex justify-center items-center font-heading text-xl bg-gradient-green w-12 h-12 text-gray-900 rounded-full">
                    4
                  </div>
                  <p className="text-white text-xl">
                    На протяжении трех месяцев у вас будет личный куратор,
                    который будет сопровождать вас, отвечать на вопросы и
                    помогать в освоении курса.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0" style={{ minWidth: "33%" }}>
                <div className="max-w-md bg-gray-900 py-11 px-9 rounded-10 md:mb-0 mb-10">
                  <div className="mb-11 flex justify-center items-center font-heading text-xl bg-gradient-green w-12 h-12 text-gray-900 rounded-full">
                    5
                  </div>
                  <p className="text-white text-xl">
                    Каждую неделю проводятся лекции от опытных устазов по
                    хадисам (сказаниям Пророка), фикху (исламскому праву) и
                    акъыде (догматике). Эти занятия расширят ваше понимание
                    духовных и юридических аспектов Ислама.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap wrap justify-center md:justify-end">
              <div className="w-auto" onClick={handlePrevClick}>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 19L3 12M3 12L10 5M3 12L21 12"
                    stroke="#3F3F46"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="w-auto" onClick={handleNextClick}>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 5L21 12M21 12L14 19M21 12L3 12"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <style jsx>{`
            @media (max-width: 768px) {
              .navigation-buttons {
                display: none;
              }
              .flex.flex-nowrap.mb-11 {
                flex-wrap: wrap;
                transform: none !important;
              }
              .flex-shrink-0 {
                min-width: 100% !important;
              }
            }
          `}</style>
        </section>
        <section className="relative py-44 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -m-6">
              <div className="w-full lg:w-1/2 p-6">
                <div className="lg:max-w-lg">
                  <h2 className="mb-6 font-heading font-bold text-7xl text-gray-900">
                    Курсы подойдут для братьев и сестер которые хотят:
                  </h2>
                  <p className="mb-20 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat.
                  </p>
                  <ul>
                    <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                      <img
                        className="mr-2"
                        src="gradia-assets/elements/hero/check.svg"
                        alt=""
                      />
                      <p>
                        Научиться читать Куран, но нет времени посещать оффлайн
                        курсы
                      </p>
                    </li>
                    <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                      <img
                        className="mr-2"
                        src="gradia-assets/elements/hero/check.svg"
                        alt=""
                      />
                      <p>Исправить сови ошибки в произношении сур в намазе</p>
                    </li>
                    <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                      <img
                        className="mr-2"
                        src="gradia-assets/elements/hero/check.svg"
                        alt=""
                      />
                      <p>Свободно читать Куран по правилам таджвида&nbsp;</p>
                    </li>
                    <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                      <img
                        className="mr-2"
                        src="gradia-assets/elements/hero/check.svg"
                        alt=""
                      />
                      <p>Сделать шаг на пути Всевышнего и укрепить свой Иман</p>
                    </li>
                    <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                      <img
                        className="mr-2"
                        src="gradia-assets/elements/hero/check.svg"
                        alt=""
                      />
                      <p>Найти довольство Всевышнего</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-6">
                <div className="bg-gradient-orange mx-auto max-w-lg h-96 rounded-3xl">
                  <img
                    className="relative top-10 mx-auto transform hover:-translate-y-16 transition ease-in-out duration-500"
                    src={girl}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="mb-5 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
              800+ довольных учеников
            </h2>
            <p className="mb-16 text-base max-w-md mx-auto text-center text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="flex flex-wrap -m-5">
              <div className="w-full md:w-1/3 p-5">
                <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
                  <div className="h-full px-7 py-8 bg-white rounded-lg">
                    <img
                      className="mb-8"
                      src="gradia-assets/images/testimonials/avatar.png"
                      alt=""
                    />
                    <p className="mb-8 text-lg text-gray-900">
                      “You made it so simple. My new site is so much faster and
                      easier to work with than my old site. I just choose the
                      page, make the change.”
                    </p>
                    <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                      Darrell Steward
                    </h3>
                    <p className="text-sm text-gray-600">Product Designer</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-5">
                <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
                  <div className="h-full px-7 py-8 bg-white rounded-lg">
                    <img
                      className="mb-8"
                      src="gradia-assets/images/testimonials/avatar2.png"
                      alt=""
                    />
                    <p className="mb-8 text-lg text-gray-900">
                      “Simply the best. Better than all the rest. I’d recommend
                      this product to beginners and advanced users.”
                    </p>
                    <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                      Ronald Richards
                    </h3>
                    <p className="text-sm text-gray-600">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-5">
                <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
                  <div className="h-full px-7 py-8 bg-white rounded-lg">
                    <img
                      className="mb-8"
                      src="gradia-assets/images/testimonials/avatar3.png"
                      alt=""
                    />
                    <p className="mb-8 text-lg text-gray-900">
                      “I cannot believe that I have got a brand new landing page
                      after getting Omega. It was super easy to edit and
                      publish.”
                    </p>
                    <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                      Darrell Steward
                    </h3>
                    <p className="text-sm text-gray-600">Product Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
