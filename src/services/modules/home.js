import baseRequest from "../"

export const getHomeGoodPriceData = () => baseRequest.get({ url: "/home/goodprice" });