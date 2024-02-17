/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { WorkGrid } from "@/components/WorkGrid";
import { useState } from "react";
import { WorkModal } from "@/components/WorkModal";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "75%",
    left: "50%",
    right: "0",
    bottom: "0",
    width: "90%",
    height: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#f3f3e9",
    borderRadius: "50px 50px 0 0",
    padding: 30,
    border: "none",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Work() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <h2>
        We design, build and ship world-class digital products for
        forward-thinking brands.
      </h2>
      <WorkGrid setIsModalOpen={setIsOpen} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between gap-2">
          <div className="w-full">
            <h2>Sussex Taps</h2>
            <button className="bg-[#0f1d07] text-[#fff] rounded-full p-1 px-2 hover:bg-[#90f188] hover:text-[#0f1d07]">
              Visit Website
            </button>
            <h3 className="mt-2">
              Sussex Taps is a manufacturer of premium tapware with a deep
              heritage in Australian manufacturing.
            </h3>
            <p className="mt-2">
              Following a brand repositioning, Sussex Taps engaged Humaan to
              design an immersive digital experience that communicated the
              brand`s core proposition of quality, heritage and craftsmanship.
              The product suite played an iconic role in the overall website
              experience. The visual content played a hero role within the
              website, which was augmented by bleeding-edge interactivity and
              animation treatments to give the audiences a tangible and tactile
              digital showroom experience.
            </p>
          </div>
          <div className="w-full">
            <img
              src={"/assets/images/spring-1377434.jpg"}
              alt=""
              width="100%"
              style={{ borderRadius: "40px" }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
