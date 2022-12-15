import React from "react";

const CopyRight = () => {
  let date = new Date().getFullYear();
  return (
    <div className="copy">
      All copyrights reserved © {date} AboShehap. Created By
      <a
        href="https://www.facebook.com/profile.php?id=100007172563893"
        target="_blanck"
      >
        {" "}
        Abdallh Sabry
      </a>
    </div>
  );
};

export default CopyRight;
