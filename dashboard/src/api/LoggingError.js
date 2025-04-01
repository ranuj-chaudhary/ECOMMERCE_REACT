 /* 
Error type → Network issue, HTTP error, or unexpected issue.

API endpoint → Helps in identifying which request failed.

Response status code (if available) → Useful for debugging HTTP errors.

Request method & payload → Helps reproduce the issue.

User context (if applicable) → E.g., logged-in user ID, if it’s a user-specific issue.

Timestamp → Helps correlate with backend logs. */

//   1)  Improved Error Logging in Frontend

async function fetchUserData() {
    const url = "https://api.example.com/user";
    
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_ACCESS_TOKEN",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("User Data:", data);
      return data;
  
    } catch (error) {
      const errorDetails = {
        message: error.message,
        url,
        method: "GET",
        timestamp: new Date().toISOString(),
        user: "UserID_1234", // Replace with actual user ID if available
      };
  
      console.error("API Request Failed:", errorDetails);
      
      // Optionally, send error details to a logging service
      sendErrorToServer(errorDetails);
    }
  }
  

//   2)  Logging Different Types of Errors

catch (error) {
    if (error.name === "TypeError") {
      console.error("Network error: Could not connect to server", {
        message: error.message,
        url,
        timestamp: new Date().toISOString(),
      });
    }
  }
  
  //   3)   4xx Client Errors (Unauthorized, Not Found)

  if (response.status === 401) {
    console.warn("Unauthorized access. Redirecting to login...");
    window.location.href = "/login"; // Redirect user
  }
  
  if (response.status === 400) {
    console.warn("Unauthorized access. Redirecting to login...");
    window.location.href = "/login"; // Redirect user
  }
     
   //   4)   5xx Server Errors (Backend Issues)

   if (response.status >= 500) {
    console.error("Server error. Please try again later.", {
      status: response.status,
      url,
      timestamp: new Date().toISOString(),
    });
  }
  