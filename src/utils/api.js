const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
    },
  };
  
  function getErrorMessage(status, responseBody) {
    if (responseBody.message || responseBody.error) {
      return responseBody.message || responseBody.error;
    }
  
    switch (status) {
      case 404:
        return "Not Found";
      case 500:
        return "Internal Server Error. Please Try Again Later.";
      default:
        return "An unexpected networ error occured. Please Try Again Later.";
    }
  }
  
  export async function searchSpotify(query) {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=albums&offset=0&limit=10&numberOfTopResults=5`;
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        let responseBody;
        try {
          responseBody = await response.json();
        } catch (parseError) {
          console.error("Error parsing the response:", parseError.message);
        }
        const errorMsg = getErrorMessage(response.status, responseBody || {});
        throw new Error(errorMsg);
      }
  
      return await response.json();
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
      throw error;
    }
  }