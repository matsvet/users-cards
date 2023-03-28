import React, { useEffect, useState } from "react";
import "../assets/styles/Footer.scss";
import { Button, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const page: string = searchParams.get("page") || "1";

  const [valueInputPage, setValueInputPage] = useState<string>(page);

  useEffect(() => {
    setValueInputPage(page);
  }, [location.search]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInputPage(event.target.value);
  };

  const handleSave = () => {
    if (Number(valueInputPage) <= 500 && Number(valueInputPage) >= 1) {
      searchParams.set("page", valueInputPage);
      navigate({ search: `?${searchParams.toString()}` });
    } else {
      alert("Некорректное значение номера страницы");
    }
  };

  const handleNextPage = () => {
    const nextPage: number = parseInt(page) + 1;
    setValueInputPage(nextPage.toString());
    searchParams.set("page", nextPage.toString());
    navigate({ search: `?${searchParams.toString()}` });
  };
  const handlePrevPage = () => {
    const prevPage: number = parseInt(page) - 1;
    setValueInputPage(prevPage.toString());
    searchParams.set("page", prevPage.toString());
    navigate({ search: `?${searchParams.toString()}` });
  };
  const handleFirstPage = () => {
    setValueInputPage("1");
    searchParams.set("page", "1");
    navigate({ search: `?${searchParams.toString()}` });
  };
  const handleLastPage = () => {
    setValueInputPage("500");
    searchParams.set("page", "500");
    navigate({ search: `?${searchParams.toString()}` });
  };

  const pageAmount: number = 10000 / 20;

  return (
    <footer className="footer">
      <div className="leftBlock">
        <div className="numberOfPages">
          {Number(page) * 20 - 19} - {Number(page) * 20} из 10000
        </div>
      </div>
      <div className="rightBlock">
        <div className="pageDisplayBlock">
          <Input
            className="inputPage"
            value={valueInputPage}
            onChange={handleChange}
            onPressEnter={handleSave}
          />
          из {pageAmount} страниц
        </div>
        <div className="prevNextPageBlock">
          <Button
            className={"pageButton"}
            disabled={page === "1"}
            onClick={handleFirstPage}
          >
            {"<<"}
          </Button>
          <Button
            className="pageButton"
            disabled={page === "1"}
            onClick={handlePrevPage}
          >
            {"<"}
          </Button>
          <Button
            className="pageButton"
            disabled={page === "500"}
            onClick={handleNextPage}
          >
            {">"}
          </Button>
          <Button
            className="pageButton"
            disabled={page === "500"}
            onClick={handleLastPage}
          >
            {">>"}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
