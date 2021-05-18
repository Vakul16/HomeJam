import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "./UpcomingShows.css";
// imported images from assets/UpComing images folder
import BennyImg from "../assets/images/upComingImgs/BennyImg.png";
import VijayImg from "../assets/images/upComingImgs/VijayImg.png";
import AndreaImg from "../assets/images/upComingImgs/AndreaImg.png";
import ShilpaImg from "../assets/images/upComingImgs/ShilpaImg.png";
// svg's which imported from assets/images/UpComing images folder
import { ReactComponent as ArrowIcon } from "../assets/images/upComingImgs/Arrow.svg";
import { ReactComponent as Icon1 } from "../assets/images/upComingImgs/TicketIcon.svg";
import { ReactComponent as Icon2 } from "../assets/images/upComingImgs/TicketIcon2.svg";

export default function UpcomingShows() {
  const arrayImage = [
    {
      id: 1,
      src: BennyImg,
      tag: "Folk",
      title: "Benny Dayal",
      description: "More Info",
      icon: <Icon1 />,
    },
    {
      id: 2,
      src: VijayImg,
      tag: "Folk",
      title: "Vijay Yesudas",
      description: "More Info",
      icon: <Icon1 />,
    },
    {
      id: 3,
      src: AndreaImg,
      tag: "Folk",
      title: "Andrea Jeremiah",
      description: "More Info",
      icon: <Icon1 />,
    },
    {
      id: 4,
      src: ShilpaImg,
      tag: "Folk",
      title: "Shilpa Rao",
      description: "More Info",
      icon: <Icon2 />,
    },
  ];
  return (
    <div className="upcoming">
      <div className="upcoming-text">
        <p>Upcoming Shows</p>
        <p>View All</p>
      </div>
      {/* sed MDBootstrap for displaying cards */}
      <div className="upcoming-cards">
        {arrayImage.map(({ id, src, tag, title, description, icon }) => (
          <div className="main-card">
            <MDBCard
              key={id}
              style={{ maxWidth: "22rem" }}
              width="276"
              height="395"
            >
              <MDBCardImage
                src={src}
                position="top"
                alt="..."
                width="268"
                height="230"
              />
              <MDBCardBody className="card-body">
                {/* folk text */}
                <MDBCardText className="text-tag">{tag}</MDBCardText>
                {/* name of the person */}
                <MDBCardTitle className="text-title">{title} </MDBCardTitle>
                <div className="flex-container">
                  <MDBCardText className="btn-moreinfo">
                    {description}
                  </MDBCardText>
                  <MDBCardText className="arrow-logo">
                    <ArrowIcon />
                  </MDBCardText>
                  {/* Vector Icon */}
                  <MDBCardText className="icon-vector">{icon}</MDBCardText>
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
    </div>
  );
}
