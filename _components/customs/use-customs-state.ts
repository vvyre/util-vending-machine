import { useEffect, useState } from 'react';
import { Fetch } from '~/_util/fetch';
import { CustomsData, CustomsResponseData } from './types';
import { useBooleanState } from '@frfla/react-hooks';

export const useCustoms = (billNo: string): [CustomsData | null, () => void, boolean] => {
  const [state, setState] = useState<CustomsData | null>(null);
  const [isLoading, setTrue, setFalse] = useBooleanState();
  const url = '/api/customs';

  useEffect(() => {
    if (!isLoading) return;
    try {
      (async function () {
        const res = await Fetch<{ billNo: string }, CustomsResponseData>(url, 'POST', 'json', {
          billNo,
        });
        setState(res?.cargCsclPrgsInfoQryRtnVo ?? null);
        setFalse();
      })();
    } catch (E) {
      setFalse();
    }
  }, [billNo, isLoading]);

  const submit = setTrue;

  return [state, submit, isLoading];
};
