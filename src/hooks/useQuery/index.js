import { useSearchParams } from "react-router-dom";

function UseQuery(queryKey = 'redirect') {
  const [searchParams] = useSearchParams();

  return searchParams.get(queryKey)
}

export default UseQuery;
