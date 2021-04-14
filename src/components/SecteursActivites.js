import React from "react";
import secteursActivites from "../data/secteursActivites";

const renderSecteursActivites = () => {
  return secteursActivites.map((activite) => {
    return (
      <li>
        <a href={"/"+activite.titre}>{activite.titre}</a>
      </li>
    );
  });
};

function SecteursActivites() {
  return (
    <>
      <ul>{renderSecteursActivites()}</ul>
    </>
  );
}

export default SecteursActivites;
