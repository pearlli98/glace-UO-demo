export const sendGET = async (route, params, n = 10) => {
  const backendURL =
    "https://4hvwxgtxqkcttlctqoondfdykm0cvnhq.lambda-url.us-east-1.on.aws/?";
  try {
    console.log("got here!");
    console.log("what!!");
    const response = await fetch(
      backendURL + route + new URLSearchParams(params),
      {
        method: "GET",
      }
    );
    console.log("response");
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
