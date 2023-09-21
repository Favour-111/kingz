import React from "react";
import { Link } from "react-router-dom";
import image from "../webimages/tinted.jpg";
import image2 from "../webimages/pexels-photo-7577062.jpeg";
import image3 from "../webimages/detox.jpeg";
import image4 from "../webimages/hot-oil.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
const Home = () => {
  const hairs = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/black-woman-touches-her-curly-hair_633478-2354.jpg?size=626&ext=jpg&ga=GA1.2.1613663388.1695240112&semt=ais",
      title: "Haircut",
      description: "curly hair for women",
      price: 20000,
    },
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/front-view-beautiful-woman-posing_52683-98035.jpg?w=360&t=st=1695328652~exp=1695329252~hmac=089c71e745fb9b45f8cd5fe996dbabf226d74df4af9e9493655d73690648a478",
      title: "Haircut",
      description: "curly hair for women",
      price: 20000,
    },
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/black-white-minimal-portrait_23-2149152644.jpg?size=626&ext=jpg&ga=GA1.2.1613663388.1695240112&semt=ais",
      title: "Haircut",
      description: "curly hair for women",
      price: 20000,
    },
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-photo/black-white-portrait-smiling-woman_759095-30231.jpg?size=626&ext=jpg&ga=GA1.2.1613663388.1695240112&semt=ais",
      title: "Haircut",
      description: "curly hair for women",
      price: 20000,
    },
  ];
  const comments = [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      postId: 1,
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
  ];
  return (
    <div>
      <div className="landingPage">
        <div className="texts">dreadlock & weave spa</div>
        <div className="info">
          for better and reliable product shop with us at kingzstore we provide
          the best service to our customers
        </div>
        <div className="Landingbuttons">
          <Link className="btnOne me-3">service</Link>
          <Link className="btnTwo">Book now</Link>
        </div>
      </div>
      <div className="landingRow pt-4">
        <div className="items">
          <div className="imageCont">
            <img
              src={image}
              alt=""
              width="200px"
              height="200px"
              className="image"
            />
          </div>
          <div>
            <p className="text-light text-uppercase fw-bold fs-6 text-center">
              permanent <br />
              color
            </p>
            <p>$225 & up</p>
          </div>
        </div>
        <div className="items">
          <div className="imageCont">
            <img
              src={image2}
              alt=""
              width="200px"
              height="200px"
              className="image "
            />
          </div>
          <div>
            <p className="text-light text-uppercase fw-bold fs-6">
              wash , twisted & <br />
              styled
            </p>
            <p>$125 & up</p>
          </div>
        </div>
        <div className="items">
          <div className="imageCont">
            <img
              src={image3}
              alt=""
              width="200px"
              height="200px"
              className="image "
            />
          </div>
          <div>
            <p className="text-light text-uppercase fw-bold fs-6">
              detox treatment
            </p>
            <p>$85 & up</p>
          </div>
        </div>
        <div className="items">
          <div className="imageCont">
            <img
              src={image4}
              alt=""
              width="200px"
              height="200px"
              className="image "
            />
          </div>
          <div>
            <p className="text-light text-uppercase fw-bold fs-6">
              hot oil <br />
              treatment
            </p>
            <p>$155 & up</p>
          </div>
        </div>
      </div>
      <div className="aboutSalon pt-5 bg-dark p-3">
        <p className="text-light fs-2 text-uppercase fw-bold text-center">
          about us
        </p>
        <div className="flexBox">
          <div className="text-light fw-bold text-uppercase textWidth">
            <p className="fs-5">
              To provide a safe and enjoyable environment for all of our clients
              and work with our clients to achieve the results to services they
              request, while focusing their hair, nail, and skin health.
            </p>
            <p>
              Welcome to Kingz, a top-rated salon in Nigeria ! We offer a wide
              range of services, including hair styling, coloring, makeup, and
              more. Our team of highly skilled stylists are passionate about
              helping you look and feel your best. We use only the highest
              quality products, and we're always up to date on the latest
              trends. Whether you're looking for a complete makeover or a simple
              touch-up, we're here to help.
            </p>
          </div>
          <div className=" content">
            <p className="text-center fw-bold fs-4 text-light text-uppercase">
              clients comments
            </p>
            {comments.map((commt) => {
              return (
                <div className="text-light bg-danger rounded p-3 my-2 ">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="text-light text-start fs-1"
                  />
                  <p>{commt.name}</p>
                  <p>{commt.email}</p>
                  <p>{commt.body}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center fw-bold fs-3 text-danger text-uppercase">
          ​To book and for exact pricing please call us <br />
          at 08023911608
        </div>
      </div>
      <div className="orders text-light">
        {hairs.map((hair, index) => {
          return (
            <div className="order text-center" key={hair.id}>
              <div className="imageCont2 my-3 ">
                <img
                  src={hair.image}
                  alt=""
                  width="250px"
                  height="300px"
                  className="image2 "
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="section3 bg-dark p-3">
        <div className="text-light section3Text">
          <p className="fw-bold text-uppercase fs-2">why us?</p>
          <p className="fw-bold fs-6 text-capitalize">
            We specialize in locking all
            <br />
            textures of hair from straight to curly
            <br />
            to wavy to kinky. We also lock relaxed hair.
            <br />
          </p>
          <p className>
            At our salon, we take immense pride in being your premier
            destination for all your beauty and grooming needs. What sets us
            apart is our unwavering commitment to excellence in every aspect of
            our services. Our team of highly skilled and experienced
            professionals is dedicated to delivering top-notch results, whether
            it's a haircut, a rejuvenating facial, a relaxing massage, or a
          </p>
        </div>
        <div className="text-light">
          <img
            src="https://img.freepik.com/free-photo/beautiful-caucasian-girl-gray-background_114579-9292.jpg?w=360&t=st=1695329290~exp=1695329890~hmac=8b8d8bfb275914411bfdf4dc4ca557beada9ea5e07d09faa5f5ba424cd040507"
            alt=""
            width="350px"
            height="500px"
            className="section3Img"
          />
        </div>
      </div>
      <div className="Info">
        <div>
          <img
            src="https://img.freepik.com/free-photo/african-american-woman-smiling-portrait_1303-12373.jpg?w=360&t=st=1695332730~exp=1695333330~hmac=1138ce4ffdebbc2488ede325c11f4eb687069e722280e1419bb9e9e86ce8f54e"
            alt=""
            width="300px"
            height="400px"
          />
        </div>
        <div className="text-light fw-bold text-capitalize">
          <p className="text-uppercase fs-2">visit us at</p>
          <p>
            Sango ota ogun state <br /> okitikan road
          </p>
          <p>hours</p>
          <p>
            monday - saturday
            <br /> 9am - 7pm{" "}
          </p>
          <p>
            sunday
            <br />
            10am-6pm
          </p>
          <p>email:omojolaobaloluwa@gmail.com</p>
        </div>
      </div>
      <div className="contactUs">
        <div className="contactCont">
          <p className="fs-2 text-uppercase">contact us</p>
          <h5 className="my-4">
            <FontAwesomeIcon icon={faPhone} className="mx-2" />
            call us
            <h6 className="my-2">08069989705</h6>
          </h5>
          <h5 className="my-4">
            <FontAwesomeIcon icon={faLocationPin} className="mx-2" />
            location
            <h6 className="my-2">
              {" "}
              Sango ota ogun state <br /> okitikan road
            </h6>
          </h5>
          <h5 className="my-4">
            <FontAwesomeIcon icon={faClock} className="mx-2" />
            time
            <h6 className="my-2">
              monday - saturday 9am - 7pm sunday 10am-6pm
            </h6>
          </h5>
        </div>
        <div className="forms">
          <form>
            <div className="d-flex my-3">
              <input
                type="text"
                className="form-control mx-1"
                placeholder="Name"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Surname"
              />
            </div>
            <br />
            <div className="my-4">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="my-3">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className="btn btn-danger text-light w-100 register">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
