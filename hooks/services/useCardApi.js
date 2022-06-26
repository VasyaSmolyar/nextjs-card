import { useState, useEffect } from 'react';
import { postCardQuery } from 'services/cardServices';

export default function useCardApi() {  
  const [ card, setCardData ] = useState({});
  const [ cardData, postCard ] = useState({});

  useEffect(() => {
    if(cardData === {}) return;

    postCardQuery(cardData)
      .then((res) => {
        setCardData(res);
      });
  }, [cardData]);

  return [ card, postCard ];
}
