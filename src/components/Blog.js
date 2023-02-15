import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../sliderProps";
import NewsPopup from "./popup/NewsPopup";

const data = [
  {
    title: "SEO Optimization",
    img: "img/news/seo.jpg",
    tag: "Branding",
    des: [
      "Search engine optimization (SEO) is the process of optimizing your website to rank higher in search engine results pages (SERPs) and get more organic traffic. Here are some steps you can take to improve your website's SEO:",
      "1. Conduct keyword research: Determine the keywords and phrases that your target audience is searching for, and make sure that those keywords appear on your website in key places, such as the page title, header tags, and content.",
      "2. Optimize your website's structure: Make sure that your website has a clear and logical structure, with a hierarchy of headings and a well-organized menu.",
      "3. Create high-quality content: Make sure that the content on your website is original, informative, and useful. Use keyword-rich headings and subheadings, and include images and videos to break up the text and make your content more engaging.",
      "4. Improve website speed: Website speed is an important ranking factor for search engines. Test your website speed and make sure it loads quickly on both desktop and mobile devices.",
      "5. Make your website mobile-friendly: A large percentage of web traffic comes from mobile devices, so it's important to make sure that your website is optimized for mobile devices.",
      "6. Secure your website: Use SSL encryption to secure your website and protect the privacy of your visitors.",
      "7. Build high-quality backlinks: Search engines use backlinks to determine the quality and relevance of your website. Focus on building high-quality, relevant backlinks from reputable websites.",
      "8. Monitor your website's performance: Use Google Search Console and other tools to monitor your website's performance and track your progress.",
      "By following these steps, you can make your website better for SEO and improve its visibility in search engine results pages",
      "",
    ],
  },
  {
    title: "Tips for better design",
    img: "img/news/design.jpg",
    tag: "Design",
    des: [
      "Here are some tips for improving the design of a website:",
      "1. Keep it simple: A cluttered design can be overwhelming and distracting for users. Stick to a clean, simple layout with plenty of white space.",
      "2. Make it responsive: With an increasing number of users accessing websites on mobile devices, it's important to ensure that your website is optimized for different screen sizes.",
      "3. Use color wisely: Colors can have a big impact on the look and feel of your website. Choose a color palette that complements your brand and create visual interest with contrasting colors.",
      "4. Choose appropriate fonts: Fonts can also impact the overall look of your website. Choose a font that is easy to read and fits with the style of your site.",
      "5. Use high-quality images and videos: Visual elements can help break up text-heavy pages and add interest to your site. Make sure to use high-quality images and videos that are relevant to your content.",
      "6. Make navigation easy: Navigation is key to a good user experience. Make sure your navigation menu is intuitive and easy to use.",
      "7. Pay attention to loading time: A slow-loading website can frustrate users and cause them to leave. Optimize images, minimize the use of plugins, and use a fast web hosting service to improve loading times.",
      "8. Consider accessibility: Make sure your website is accessible to users with disabilities. Use proper headings, alt text for images, and clear and concise language to improve accessibility.",
      "By following these tips, you can create a website that is both visually appealing and user-friendly.",
      "",
    ],
  },
  {
    title: "The rise of AI",
    img: "img/news/ai.jpg",
    tag: "Technology",
    des: [
      "Artificial Intelligence, or AI, is a rapidly growing field that has been gaining attention over the past decade. AI is the ability of machines or software to mimic cognitive functions such as learning, problem-solving, and decision-making, which are typically associated with human intelligence. ",
      "The rise of AI has been fueled by advancements in machine learning, natural language processing, and computer vision, among other technologies.",
      "One of the key drivers of the rise of AI has been the explosion of data. With the proliferation of devices that generate data, such as smartphones and IoT sensors, there is now an unprecedented amount of data available for analysis. This data can be used to train machine learning models, allowing them to learn from patterns in the data and make predictions or decisions based on that learning.",
      "Another factor driving the rise of AI is the increase in computing power. The development of powerful graphics processing units (GPUs) and the emergence of cloud computing have made it possible to process massive amounts of data in real-time, enabling AI algorithms to perform complex tasks with incredible speed and accuracy.",
      "AI is also being used to solve a wide range of problems in a variety of industries. For example, in healthcare, AI is being used to help doctors diagnose diseases, predict outcomes, and personalize treatment plans for individual patients. In finance, AI is being used to detect fraud, optimize investment portfolios, and develop predictive models for credit risk analysis. In transportation, AI is being used to optimize routes, predict maintenance needs, and improve safety.",
      "However, the rise of AI has also raised concerns about its impact on the workforce. Some fear that AI could lead to job losses as machines and software replace human workers in a variety of industries. Others worry that the use of AI could lead to ethical issues such as bias or discrimination.",
      "Despite these concerns, the potential benefits of AI are enormous. By enabling machines and software to perform tasks that were previously only possible for humans, AI has the potential to revolutionize the way we live and work. As the field continues to evolve, we can expect to see new and exciting applications of AI that will transform our world in ways we can only imagine.",
      "",
    ],
  },
];

const News = () => {
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <NewsPopup open={modal} close={() => setModal(false)} data={activeData} />
      <div className="edrea_tm_section hidden animated" id="news">
        <div className="section_inner">
          <div className="edrea_tm_news swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Latest <span className="coloring">Blog</span>
              </h3>
            </div>
            <div className="news_list">
              <Swiper {...newsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((news, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/4-3.jpg" alt="" />
                          <div className="main" data-img-url={news.img} />
                          <a
                            className="edrea_tm_full_link news_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details">
                          <h3>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.title}
                            </a>
                          </h3>
                          <span>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentNews" />
                    <span className="pagination_progress">
                      <span className="all allNews">
                        <span />
                      </span>
                    </span>
                    <span className="totalNews" />
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
export default News;
