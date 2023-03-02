import axios from "axios";

import env from "@/constants/env.constant";

const twillioAPI = axios.create({
  baseURL: "https://lookups.twilio.com/v2",
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: env.twillioAccountSid,
    password: env.twillioAuthToken,
  },
});

export { twillioAPI };
