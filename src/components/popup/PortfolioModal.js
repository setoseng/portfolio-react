import Modal from "./Modal";

const PortfolioModal = ({ close, open }) => {
  return (
    <Modal close={close} open={open}>
      <div className="portfolio_popup_details">
        {/* <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div className="main" data-img-url="img/portfolio/currency-1.jpeg" />
        </div> */}
        <div className="portfolio_main_title">
          <h3>Currency Converter</h3>
          {/* <span>
            <a href="#">Detail</a>
          </span> */}
          <div />
        </div>

        <div className="text">
          <p>
            A currency converter app built using React Native. The app will make an API call to collect live currency
            exchange rate data from API Layer. It will then utilizes Async Storage to store data locally in order to 
            save on API calls. The user can then manually request a new set of data if they want the latest exchange rate.
          </p>
        </div>
        <div className="additional_images">
          <ul className="gallery_zoom">
            <li>
              {/* <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/converter-2.jpeg" />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="img/portfolio/7.jpg"
                  />
                </div>
              </div> */}
            </li>
            <li>
              <div className="">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/converter-1.jpeg" />
                  <a
                    className="edrea_tm_full_link"
                    href="img/portfolio/converter-1.jpeg"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/converter-2.jpeg" />
                  <a
                    className="edrea_tm_full_link"
                    href="img/portfolio/converter-2.jpeg"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
