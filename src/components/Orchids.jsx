import React from "react";
import { listOfOrchids } from "../data/ListOfOrchids";
import { Card } from "react-bootstrap";
import { Heart, Leaf, MapPin, Star } from "lucide-react";
import "../styles/Card.css";
export default function Orchids() {
  const renderRatingStars = (count) => {
    const stars = [];
    for (var i = 0; i < count; i++) {
      stars.push(
        <span key={i} className={i < count ? "star filled" : "star"}>
          <Star />
        </span>
      );
    }
    return stars;
  };
  return (
    <>
      <div className="orchid-grid">
        {listOfOrchids.map((orchid) => (
          <Card key={orchid.id} className="orchid-card">
            <div className="card-img-wrapper">
              <img src={orchid.image} alt={orchid.name} className="card-img" />
              {orchid.isNatural && (
                <span className="badge-natural">
                  <Leaf color="green" />
                </span>
              )}
            </div>
            <div className="card-content">
              <h3 className="orchid-name">{orchid.name}</h3>
              <div className="card-info">
                <span className="category-tag">{orchid.category}</span>
                <div className="rating">{renderRatingStars(orchid.rating)}</div>
              </div>
              <div className="meta">
                <span className="meta-item">
                  <MapPin size={16} style={{ marginRight: "4px" }} />
                  {orchid.origin}
                </span>
                <span className="likes">
                  <Heart size={16} style={{ marginRight: "4px" }} />
                  {orchid.numberOfLike}
                </span>
                <div className="color">
                  <span
                    className="color-dot"
                    style={{ backgroundColor: orchid.color }}
                  ></span>
                  <span>{orchid.color}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
