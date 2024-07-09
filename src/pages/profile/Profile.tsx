import { useSelector } from "react-redux";
import NavBar from "../../components/navbar/NavBar";
import { RootState } from "../../redux/store";
import avatarImage from "../../assets/images/avatar.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/profile.css";
import imageProduct from "../../assets/images/air-force.png";
import ProductItem from "../../components/product/ProductItem";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../../components/footer/Footer";
import breakpoints from "../../utils/breakPointsSwiper";

export default function Profile() {
  const userDetail = useSelector((state: RootState) => state.userDetail);
  const products = [
    {
      id: 1,
      productName: "Another Product",
      description: "Women's shop",
      price: "2,500,000",
      image: imageProduct,
    },
    {
      id: 2,
      productName: "Another Product",
      description: "Women's shop",
      price: "2,500,000",
      image: imageProduct,
    },
    {
      id: 3,
      productName: "Another Product",
      description: "Women's shop",
      price: "2,500,000",
      image: imageProduct,
    },
    {
      id: 4,
      productName: "Another Product",
      description: "Women's shop",
      price: "2,500,000",
      image: imageProduct,
    },
    {
      id: 5,
      productName: "Another Product",
      description: "Women's shop",
      price: "2,500,000",
      image: imageProduct,
    },
  ];

  return (
    <div>
      <NavBar userDetail={userDetail} />

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex align-items-center flex-column flex-md-row">
            <div className="avatar-container mb-3 mb-md-0">
              <img className="image-rounder" src={avatarImage} alt="" />
            </div>
            <div className="ml-3 mx-3 text-center text-md-left">
              <span className="font-weight-bold fs-1 text-heading__responsive">
                 {userDetail.result.name}
              </span>
              <div
                className="text-muted fs-5 text-description__responsive"
                style={{ color: "#707072" }}
              >
                Nike Member Since July 2024
              </div>
            </div>
          </div>

          <div className="col-12 mt-4">
            <h2 className="pt-2 px-3">Favourites</h2>

            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={breakpoints}
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductItem product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
