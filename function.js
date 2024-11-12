window.function = function(inputString) {
  // Parse the input JSON string
  let inputObject;
  try {
    inputObject = JSON.parse(inputString.value);
  } catch (e) {
    return JSON.stringify({ error: "Invalid JSON input" });
  }

  // Check if the inputObject has the candidates array
  if (!inputObject.candidates || !Array.isArray(inputObject.candidates)) {
    return JSON.stringify({ error: "Invalid format: 'candidates' array is missing" });
  }

  // Initialize output array for processed JSON objects
  let outputArray = inputObject.candidates.map((candidate, index) => {
    if (candidate.name && candidate.formatted_address) {
      // Format each candidate as specified and associate with the current index
      return {
        objectIndex: index,
        candidate: `${candidate.name}, ${candidate.formatted_address}`
      };
    } else {
      return {
        objectIndex: index,
        candidate: "Missing data for this candidate"
      };
    }
  });

  // Convert the output array to a JSON string and return
  return JSON.stringify(outputArray);
};