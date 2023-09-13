import React, { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_TEST_DATA, GET_FILTERED_DATA } from "../GraphQL/Queries";
import "../Components/style.css";
import ItemBox from "../Components/ItemBox";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(9);
  const handleItemClick = (i) => {
    setSelectedItem(i);
  };
  const [filterKeyword, setFilter] = useState("");
  const [dataOne, setDataOne] = useState(null);
  const [dataTwo, setDataTwo] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const { data: queryDataOne } = useQuery(GET_TEST_DATA);
  const { data: queryDataTwo } = useQuery(GET_FILTERED_DATA, {
    variables: { code: filterKeyword.toUpperCase() },
  });

  useEffect(() => {
    if (!buttonClicked && queryDataOne) {
      setDataOne(queryDataOne);
    }
  }, [queryDataOne, buttonClicked]);

  useEffect(() => {
    if (buttonClicked && queryDataTwo) {
      setDataTwo(queryDataTwo);
    }
  }, [queryDataTwo, buttonClicked]);

  const country = dataOne?.countries;
  const city = dataTwo?.country;
  return (
    <div>
      <div className="filter">
        <h1>DATAGUESS</h1>
        <input
          maxLength={2}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Filter the List"
          value={filterKeyword}
        />
        {buttonClicked === true && (
          <button
            onClick={() => {
              setButtonClicked(!buttonClicked);
              console.log(buttonClicked);
            }}
          >
            Filter
          </button>
        ) ||filterKeyword.length === 2 && (
          <button
            onClick={() => {
              setButtonClicked(!buttonClicked);
              console.log(buttonClicked);
            }}
          >
            Filter
          </button>
        )
         }
      </div>
      <div className="haveDatas">
        <ul>
          {country &&
            !buttonClicked &&
            country?.map((veri, i) => (
              <li
                onClick={() => handleItemClick(i)}
                style={{
                  backgroundColor: selectedItem === i ? "green" : "transparent",
                }}
                key={i}
              >
                {<ItemBox veri={veri} index={i} />}{" "}
              </li>
            ))}
          {dataTwo && buttonClicked && (
            <li
              style={{
                backgroundColor: "green",
              }}
            >
              <ItemBox veri={city} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
