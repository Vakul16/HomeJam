import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./Reviews.css";
import ReviewImg1 from "../assets/images/reviewsImgs/ReviewImg1.png";
import ReviewImg2 from "../assets/images/reviewsImgs/ReviewImg2.png";
import ReviewImg3 from "../assets/images/reviewsImgs/ReviewImg3.png";
import { ReactComponent as UsIcon } from "../assets/images/reviewsImgs/Us.svg";
import { ReactComponent as ItalyIcon } from "../assets/images/reviewsImgs/Italy.svg";
export default function Reviews() {
  const arrayImage = [
    {
      id: 1,
      src: ReviewImg1,
      tag: <UsIcon />,
      title: "Hellen Jummy",
    },
    {
      id: 2,
      src: ReviewImg2,
      tag: <ItalyIcon />,
      title: "Isaac Oluwatemilorun",
    },
    {
      id: 3,
      src: ReviewImg3,
      tag: <UsIcon />,
      title: "Hellen Jummy",
    },
  ];
  return (
    <div className="reviews">
      <div className="reviews-text">
        <p>Reviews</p>
        <p>1/12</p>
      </div>
      <div className="review-cards">
        {arrayImage.map(({ id, src, tag, title }) => (
          <div className="review-main-card">
            <MDBCard
              className="card-row"
              key={id}
              style={{ maxWidth: "540px" }}
            >
              <MDBRow>
                <MDBCol md="4">
                  <MDBCardImage
                    src={src}
                    alt="..."
                    fluid
                    width="48"
                    height="48"
                  />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="review-card-body">
                    <MDBCardTitle className="review-text-title">
                      {title}
                    </MDBCardTitle>
                    <MDBCardText className="review-text-tag">
                      {tag} Palo Alto, CA
                    </MDBCardText>
                    <MDBCardText className="review-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae in donec in nisi vitae. Vestibulum pellentesque eget
                      laoreet adipiscing.
                    </MDBCardText>
                    {/* <MDBCardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </MDBCardText> */}
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>
        ))}
      </div>
    </div>
  );
}
