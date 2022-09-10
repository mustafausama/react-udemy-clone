import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "../../../styles/Course/Content/SeeMore.module.css";

const SeeMore = ({ contentHTML }) => {
  const [expanded, setExpanded] = useState(false);
  const descRef = useRef(null);
  const handleSee = () => {
    if (!expanded) {
      descRef.current.style.height = "auto";
      descRef.current.style.WebkitMaskImage = "none";
      setExpanded(true);
    } else {
      descRef.current.style = null;
      setExpanded(false);
    }
  };

  return (
    <>
      <div
        className={styles.description}
        ref={descRef}
        dangerouslySetInnerHTML={{ __html: contentHTML }}
      ></div>
      <Button
        className={`fw-bold bg-transparent border-0 p-0 ${styles.seeBtn}`}
        onClick={handleSee}
      >
        See {expanded ? "less" : "more"}
        {expanded ? (
          <i className="ms-2 fa-xs fa-solid fa-chevron-up"></i>
        ) : (
          <i className="ms-2 fa-xs fa-solid fa-chevron-down"></i>
        )}
      </Button>
    </>
  );
};

export default SeeMore;
