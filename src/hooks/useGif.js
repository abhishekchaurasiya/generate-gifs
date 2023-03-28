// Create own hooks

import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const urls = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [loading, setLoading] = useState(false)
    const [gif, setGif] = useState()

    const fetchData = async (tag) => {
        setLoading(true)
        const { data } = await axios.get(tag ? `${urls}&tag=${tag}` : urls);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource)
        setLoading(false)
    };

    useEffect(() => {
        fetchData()
    }, [])

    return { gif, loading, fetchData }
};

export default useGif;
