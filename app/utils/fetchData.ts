export const fetchData = async (targetUrl: string) => {
    const res = await fetch(targetUrl, {
      next: { revalidate: 3600},
    });
  
    return res.json();
  };