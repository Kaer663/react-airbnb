import baseRequest from "../"

export const getHomeGoodPriceData = () => baseRequest.get({ url: "/home/goodprice" });

export const getHomeDiscountData = () => baseRequest.get({ url: "/home/discount" });

export const getHomeHotRecommendData = () => baseRequest.get({ url: "/home/hotrecommenddest" });