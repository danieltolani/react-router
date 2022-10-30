import { useEffect, useState, useMemo} from "react";

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });

  const mainData = useMemo(() => ({state, setState}))
  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(x => x.json())
      .then(y => {
          setState({ data: y, loading: false });
      });
  }, [url, setState]);    

  return state;
};

