import { useIsomorphicLayoutEffect } from '@frfla/react-hooks';
import { useEffect, useState } from 'react';

/**
 * @abstract 내부적으로 `Map`을 사용합니다. 삽입 순서가 보장됩니다.
 * @param action
 * 기본값은 `create`입니다. `clear`할 경우 스토어를 삭제합니다.
 * @param key
 * `key`를 통해 로컬 스토리지의 `key`를 지정할 수 있습니다.
 * @caution
 * `key` 없이 스토어를 중복생성할 경우 정상적인 동작을 보장하지 않습니다. 객체 안에 직렬화할 수 없는 자료구조(`Map`, `Set` 등)가 들어가있는 경우 원래 자료구조로 복원되지 않습니다
 *  */
export const useLocalStorage = <T extends object>(key?: string, action: 'create' | 'clear' = 'create') => {
  type OBJECT_TO_MAP = Map<keyof T, T[keyof T]>;

  const KEY = key || '$USE_BROWSER_STORE';
  const [data, setData] = useState<OBJECT_TO_MAP>(new Map());

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    if (action === 'clear') {
      localStorage.removeItem(KEY);
      setData(new Map());
      return;
    }

    const stored = localStorage.getItem(KEY);
    if (!stored) {
      localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(data.entries())));
      return;
    }
    const parsedObject = new Map(Object.entries(JSON.parse(stored)));
    setData(parsedObject as OBJECT_TO_MAP);
  }, [KEY, action]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(data.entries())));
  }, [data]);

  /**
   * @example controller('set', k, v)
   * @example controller('size')
   * @example controller('has', k)
   */
  const controller = <K extends keyof T>(method: 'size' | 'set' | 'has' | 'delete', k?: keyof T, v?: T[K]) => {
    switch (method) {
      case 'set': {
        if (!k) throw new Error('set: key가 반드시 필요합니다');
        if (!v) throw new Error('set: value를 지정해 주세요');

        const newMap = new Map(data);
        newMap.set(k, v as T[keyof T]);
        setData(newMap);
      }
      case 'has':
        if (!k) throw new Error('has: key가 반드시 필요합니다');
        return data.has(k);
      case 'size':
        return data.size;
      case 'delete':
        if (!k) throw new Error('delete: key가 반드시 필요합니다');
        return data.delete(k);
    }
  };

  const obj = Object.fromEntries(data) as T;
  return [obj, controller] as const;
};
