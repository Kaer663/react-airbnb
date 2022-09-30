let BASE_URL = "";
let BASE_NAME = "";
const BASE_TIME = 10000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api";
  BASE_NAME = "config_dev";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://10.4.8.68:20000";
  BASE_NAME = "config_prod";
} else {
  BASE_URL = "http://config.org/test";
  BASE_NAME = "config_test";
}

export { BASE_URL, BASE_NAME, BASE_TIME };
