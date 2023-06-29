export const sendGET = async (route, params, n = 10) => {
  const backendURL = "http://127.0.0.1:5000";
  try {
    const response = await fetch(
      backendURL + route + new URLSearchParams(params),
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      return response.json().then(async (error) => {
        console.log("what is my error here", error);
        throw new Error(error.error);
      });
    }
    if (response.status === 500) {
      console.log("500 error");
      return await sendGET(route, params, n - 1);
    }
    return response.json();
  } catch (error) {
    console.log("error", error);
    throw new Error(error);
  }
};
