import React, { useState } from "react";
import "./category.css";
import { Navigate } from "react-router-dom";

const Category = () => {
    const [lesActism, setLesActism] = useState(false);
    const [goToBooks, setGoToBooks] = useState(false);
    const [goToBags, setGoToBags] = useState(false);
    const [goToClothes, setGoToClothes] = useState(false);
    const [goToCards, setGoToCards] = useState(false);
    const [goToMoney, setGoToMoney] = useState(false);
    const [goToDocs, setGoToDocs] = useState(false);
    const [goToElecs, setGoToElecs] = useState(false);
    const [goToGlasses, setGoToGlasses] = useState(false);
    const [goToTools, setGoToTools] = useState(false);
    const [goToJewelry, setGoToJewelry] = useState(false);
    const [goToKeys, setGoToKeys] = useState(false);
    const [goToMusic, setGoToMusic] = useState(false);
    const [goToSports, setGoToSports] = useState(false);
    const [goToToys, setGoToToys] = useState(false);
    const [goToWallets, setGoToWallets] = useState(false);
    const [goToOthers, setGoToOthers] = useState(false);

    if (lesActism) {
        return <Navigate to="/themes/lesActism" />;
    }
    if (goToBooks) {
        return <Navigate to="/categories/books" />;
    }
    if (goToBags) {
        return <Navigate to="/categories/bags" />;
    }
    if (goToClothes) {
        return <Navigate to="/categories/clothes" />;
    }
    if (goToCards) {
        return <Navigate to="/categories/cards" />;
    }
    if (goToMoney) {
        return <Navigate to="/categories/money" />;
    }
    if (goToDocs) {
        return <Navigate to="/categories/docs" />;
    }
    if (goToElecs) {
        return <Navigate to="/categories/elecs" />;
    }
    if (goToGlasses) {
        return <Navigate to="/categories/glasses" />;
    }
    if (goToTools) {
        return <Navigate to="/categories/tools" />;
    }
    if (goToJewelry) {
        return <Navigate to="/categories/jewelry" />;
    }
    if (goToKeys) {
        return <Navigate to="/categories/keys" />;
    }
    if (goToMusic) {
        return <Navigate to="/categories/music" />;
    }
    if (goToSports) {
        return <Navigate to="/categories/sports" />;
    }
    if (goToToys) {
        return <Navigate to="/categories/toys" />;
    }
    if (goToWallets) {
        return <Navigate to="/categories/wallets" />;
    }
    if (goToOthers) {
        return <Navigate to="/categories/others" />;
    }

    return (
        <div>
        <h1 className="category-title">Browse by Category</h1>
        <div className="category-wrap">
            <div className="cate pet" onClick={() => setLesActism(true)}>
            Lesbian Actism
            </div>
            <div className="cate bag" onClick={() => setGoToBags(true)}>
            Bags,Baggage,Luggage
            </div>
            <div className="cate book" onClick={() => setGoToBooks(true)}>
            Books
            </div>
            <div className="cate cloth" onClick={() => setGoToClothes(true)}>
            Clothing
            </div>
            <div className="cate card" onClick={() => setGoToCards(true)}>
            Credit/ATM Card
            </div>
            <div className="cate money" onClick={() => setGoToMoney(true)}>
            Currency/Money
            </div>
            <div className="cate doc" onClick={() => setGoToDocs(true)}>
            Documents
            </div>
            <div className="cate elec" onClick={() => setGoToElecs(true)}>
            Electronics
            </div>
            <div className="cate glass" onClick={() => setGoToGlasses(true)}>
            Glasses
            </div>
            <div className="cate tool" onClick={() => setGoToTools(true)}>
            Household/Tools
            </div>
            <div className="cate jew" onClick={() => setGoToJewelry(true)}>
            Jewelry
            </div>
            <div className="cate key" onClick={() => setGoToKeys(true)}>
            Keys
            </div>
            <div className="cate music" onClick={() => setGoToMusic(true)}>
            Musical Equipment
            </div>
            <div className="cate sport" onClick={() => setGoToSports(true)}>
            Sporting Goods
            </div>
            <div className="cate toy" onClick={() => setGoToToys(true)}>
            Toys
            </div>
            <div className="cate wallet" onClick={() => setGoToWallets(true)}>
            Wallets
            </div>
            <div className="cate other" onClick={() => setGoToOthers(true)}>
            Others
            </div>
        </div>
        </div>
    );
};

export default Category;