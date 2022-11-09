import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../Config/api";
import "./content.scss";

const Content = ({ category, setCategory, setSearchVal, setLayerActive, setActiveImg }) => {
    const [amount, setAmount] = useState(15);
    const [images, setImages] = useState([]);

    useEffect(() => {

        const fetchImg = async () => {
            try {
                const res = await axios.get(url(category, amount));
                setImages(res?.data.hits);
            } catch (e) {
                window.alert("Something Went Wrong");
            }
        }
        fetchImg();
    }, [category, amount]);

    return (
        <div className="content">
            <div className="categories">
                <form action="">
                    <input checked={(category === "all") && true} type="radio" name="category" value="all" id="all" onChange={(e) => {
                        setCategory(e.target.value)
                        setAmount(15);
                        setSearchVal("");
                    }} />
                    <label htmlFor="all">All</label>

                    <div className="dot"></div>
                    <input checked={(category === "nature") && true} type="radio" name="category" value="nature" id="nature" onChange={(e) => {
                        setCategory(e.target.value)
                        setAmount(15);
                        setSearchVal("");
                    }} />
                    <label htmlFor="nature">Nature</label>

                    <div className="dot"></div>
                    <input checked={(category === "fashion") && true} type="radio" name="category" value="fashion" id="fashion" onChange={(e) => {
                        setCategory(e.target.value)
                        setAmount(15);
                        setSearchVal("");
                    }} />
                    <label htmlFor="fashion">Fashion</label>

                    <div className="dot"></div>
                    <input checked={(category === "animal") && true} type="radio" name="category" value="animal" id="animal" onChange={(e) => {
                        setCategory(e.target.value)
                        setAmount(15);
                        setSearchVal("");
                    }} />
                    <label htmlFor="animal">Animal</label>

                    <div className="dot"></div>
                    <input checked={(category === "bird") && true} type="radio" name="category" value="bird" id="bird" onChange={(e) => {
                        setCategory(e.target.value)
                        setAmount(15);
                        setSearchVal("");
                    }} />
                    <label htmlFor="bird">Bird</label>
                </form>
            </div>

            <div className="images">
                {
                    images.map((image, index) => (
                        <div key={index} className="imgContainer" onClick={() => { setActiveImg(image); setLayerActive(true); }}>
                            <img src={image.largeImageURL} alt="" />
                        </div>
                    ))
                }
            </div>
            <button onClick={() => setAmount(amount + 15)}>
                Load More
            </button>

        </div>
    )
}

export default Content