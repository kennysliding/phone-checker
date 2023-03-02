import invariant from "tiny-invariant";

invariant(
  import.meta.env.VITE_TWILLIO_ACCOUNT_SID,
  "VITE_TWILLIO_ACCOUNT_SID is required"
);
invariant(
  import.meta.env.VITE_TWILLIO_AUTH_TOKEN,
  "VITE_TWILLIO_AUTH_TOKEN is required"
);

const env = {
  twillioAccountSid: import.meta.env.VITE_TWILLIO_ACCOUNT_SID,
  twillioAuthToken: import.meta.env.VITE_TWILLIO_AUTH_TOKEN,
};

export default env;
