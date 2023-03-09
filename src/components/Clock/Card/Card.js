import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({
  name,
  surname,
  cardNumber,
  cvc,
  children,
  isErste = false,
}) => {
  return (
    <div className={`Card ${isErste ? "Card_erste" : ""}`}>
      <p className="Card-Holder">
        {name} {surname}
      </p>
      <p className="Card-Number">{cardNumber}</p>
      <p className="Card-Cvc">CVC: {cvc}</p>
      {isErste ? "ERSTE" : "ZABA"}

      {children}
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  cardNumber: PropTypes.number,
  cvc: PropTypes.number,
  children: PropTypes.node,
  isErste: PropTypes.bool,
};

export default Card;
