import config from "config";

// setup
import { headers } from "./setup";

export const get = async (url: string, options = { headers: {} }) => {
  const response = await fetch(`${config.baseUrl}/${url}`, {
    headers: { ...headers, ...options.headers },
  });
  return response.json();
};

export const post = async (
  url: string,
  body = {},
  options = { headers: {} }
) => {
  const response = await fetch(`${config.baseUrl}/${url}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { ...headers, ...options.headers },
  });
  return response.json();
};
