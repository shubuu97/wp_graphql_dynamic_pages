const fetchData = (route) => {
  let url = "";
  switch (route) {
    case "about":
      url = "https://jsonplaceholder.typicode.com/posts";
      break;
    case "contact-us":
      url = "https://jsonplaceholder.typicode.com/comments";
      break;
    case "treding":
      url = "https://jsonplaceholder.typicode.com/albums";
      break;
    default:
      break;
  }
  let data = {}
  if (url) {
    const response = await fetch(url);
    data = await response.json();
  }
  return data;
};

export default fetchData;
