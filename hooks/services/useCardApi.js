import { useState, useEffect } from 'react';
import { postCardQuery } from 'services/cardServices';
import { AWAIT, SUCCESS, FAIL, PENDING } from './CONSTANTS';

export default function useCardApi() {  
  const [ card, setCardData ] = useState({});
  const [ status, setStatus ] = useState(AWAIT);
  const [ cardData, postCardData ] = useState({});

  useEffect(() => {
    if(cardData === {} || status !== PENDING) return;

    postCardQuery(cardData)
      .then((res) => {
        setCardData(res);
        setStatus(SUCCESS);
      }).catch((err) => {
        setStatus(FAIL);
        setCardData(err);
      });
  }, [cardData, status]);

  const postCard = (val) => {
    postCardData(val);
    setStatus(PENDING);
  }

  return { status, card, postCard };
}
