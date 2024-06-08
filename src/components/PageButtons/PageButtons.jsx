import "./pageButtons.css";

const PageButtons = ({ totalPages, currentPage, setCurrentPage }) => {
  const handleButtonClick = (btn = "", type = "") => {
    if (type === "plus")
      setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
    else if (type === "minus")
      setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
    else setCurrentPage(btn);
  };

  const totalPagesArray = [...Array(totalPages)];

  return (
    <div className="buttons__wrapper">
      <i
        onClick={() => handleButtonClick("", "minus")}
        className={`fa-solid fa-angle-left ${currentPage === 1 && "disabled"}`}
      />
      {totalPagesArray.slice(0, 10).map((_, i) => (
        <button
          className={`${currentPage === i + 1 && "current"}`}
          key={i + 1}
          onClick={() => handleButtonClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <i
        onClick={() => handleButtonClick("", "plus")}
        className={`fa-solid fa-angle-right ${
          currentPage === totalPages && "disabled"
        }`}
      />
    </div>
  );
};

export default PageButtons;
