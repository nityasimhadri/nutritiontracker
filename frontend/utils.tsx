export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8358bc6afcmshadefcae87bc73dap1134cdjsn44f6765b128f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData =async (url : string, options : undefined) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}   