import React, { useState } from "react";
import { getLocation } from "../";

const Location = () => {
  const [userLocation, setUserLocation] = useState(getLocation());
  const [showModal, setShowModal] = useState(false);
  console.log(userLocation);
  return (
    <div
      className="flex-container column location-container relative"
      onClick={() => setShowModal(!showModal)}
    >
      <LocationModal
        userLocation={userLocation}
        setUserLocation={setUserLocation}
        open={showModal}
        onClose={() => setShowModal(!showModal)}
      />

      <div className="sub-title">Deliver to</div>
      <div className="location-name">{userLocation.District || "Location"}</div>
    </div>
  );
};

export default Location;

const LocationModal = ({
  userLocation,
  setUserLocation,
  open = false,
  onClose,
}) => {
  const [pincode, setPincode] = useState(userLocation.Pincode || "");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    let res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    let addrs = await res.json();
    if (addrs[0].Status === "Success") {
      setUserLocation(addrs[0].PostOffice[0]);
      localStorage.setItem(
        "user-loaction",
        JSON.stringify({ ...addrs[0].PostOffice[0] })
      );
      onClose();
    } else {
      setError(addrs[0].Message);
    }
   
  };
  return open ? (
    <div className="modal-container" onClick={onClose}>
      <div
        className="modalbox column"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex-container">
          <div className="h3">Choose your Location</div>
        </div>
        <div className="flex-container column contentPad">
          <div className="caption">
            Select a delivery location to see product availability and delivery
            options
          </div>
          <div className="flex-container location-form">
            <div className="flex-container column">
              <input
                type="text"
                onChange={(e) =>(e.target.value)}
                value={pincode}
              />
              <div className="error">{error}</div>
            </div>
            <div>
              <button onClick={handleSubmit}> Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
