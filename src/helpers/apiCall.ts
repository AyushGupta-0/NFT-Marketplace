export const makeApiCall = async (
  endpoint: string,
  method?: string,
  body?: any
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVERURL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
      method: method || "GET",
    }
  );
  return response.json();
};
