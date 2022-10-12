import baseRequest from "../"

export const getHomeGoodPriceData = () => baseRequest.get({ url: "/home/goodprice" });

export const getHomeDiscountData = () => baseRequest.get({ url: "/home/discount" });

export const getHomeHotRecommendData = () => baseRequest.get({ url: "/home/hotrecommenddest" });

export const getHomeLongForData = () => baseRequest.get({ url: "/home/longfor" });

export const getHomePlus = () => baseRequest.get({ url: "/home/plus" });