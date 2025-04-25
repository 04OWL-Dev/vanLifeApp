import "./reviews.css";
import reviewsGraph from "../../assets/reviews-graph.png";
import { IoIosStar } from "react-icons/io";
export default function Review() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  return (
    <>
      <main className="reviewsMain">
        <span className="reviewsHeader">
          <h1>Your reviews</h1>
          <p>
            last <span>30 days</span>
          </p>
        </span>
        <section className="reviewsContainer">
          <img src={reviewsGraph} alt="Reviews Graph" className="graph" />
          <h3>Reviews(2)</h3>
          {reviewsData.map((review) => (
            <article key={review.id}>
              {[...Array(review.rating)].map((_, index) => (
                <IoIosStar className="reviewStar" key={index} />
              ))}
              <span className="reviewInfo">
                <h4>{review.name}</h4>
                <p>{review.date}</p>
              </span>
              <p>{review.text}</p>
              <hr className="reviewLine" />
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
