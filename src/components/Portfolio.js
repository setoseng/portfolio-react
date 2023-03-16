import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  return (
    <Fragment>
      <PortfolioModal open={modal} close={() => setModal(false)} />
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="edrea_tm_portfolio swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Portfolio <span className="coloring">Projects</span>
              </h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/donut-world-site-next.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Donut World</h3>
                        <span>Main Site</span>
                      </div>
                      <a
                        className="edrea_tm_full_link portfolio_popup"
                        href="https://donutworld.net/"
                        target="_/blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/rk-site.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>RiverKids Pediatrics</h3>
                        <span>Main Site</span>
                      </div>
                      <a
                        className="edrea_tm_full_link portfolio_popup"
                        href="https://riverkidstexas.com/"
                        target="_/blank"
                      />
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/coming-soon.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Currency Converter App</h3>
                        <span>Mobile App</span>
                      </div>
                      <a
                        className="edrea_tm_full_link portfolio_popup"
                        href="/#portfolio"
                      />
                    </div>
                  </SwiperSlide> */}
                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/3.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Mockup Cream</h3>
                        <span>Soundcloud</span>
                      </div>
                      <a
                        className="edrea_tm_full_link soundcloude_link mfp-iframe audio"
                        href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      />
                    </div>
                  </SwiperSlide> */}
                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/5.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Blue Lemon</h3>
                        <span>Image</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="img/portfolio/5.jpg"
                      />
                    </div>
                  </SwiperSlide> */}
                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/6.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Sweet Cheery</h3>
                        <span>Image</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="img/portfolio/6.jpg"
                      />
                    </div>
                  </SwiperSlide> */}
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/converter-1.jpeg"
                        />
                      </div>
                      <div className="details">
                        <h3>Currency Converter</h3>
                        <span>Mobile App</span>
                      </div>
                      <a
                        className="edrea_tm_full_link portfolio_popup"
                        href="#"
                        onClick={() => setModal(true)}
                      />
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/5.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Blue Lemon</h3>
                        <span>Image</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="img/portfolio/5.jpg"
                      />
                    </div>
                  </SwiperSlide> */}
                  {/* <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/6.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>Sweet Cheery</h3>
                        <span>Image</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="img/portfolio/6.jpg"
                      />
                    </div>
                  </SwiperSlide> */}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
