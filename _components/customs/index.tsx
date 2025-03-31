'use client';
import { Button } from '~/_components/_common/button';
import { Form } from '~/_components/_common/form';
import { Input } from '~/_components/_common/input';
import { Spacing } from '~/_components/_common/spacing';
import { CustomsHeader } from './header';
import { useCustoms } from './use-customs-state';
import { useForm } from '@frfla/react-hooks';
import { Ref, useEffect, useState } from 'react';
import { parseCustomsDate } from '~/_util/parse-customs-date';
import { COLORS } from '../_common/_colors';
import { ParseCustomsUi } from './parse-customs-ui';
import { useLocalStorage } from '~/_util/hooks/use-browser-store';
import { isError } from './util';
import {
  CustomsBillno,
  CustomsCargoTitle,
  CustomsLabel,
  CustomsStatus,
  CustomsTrack,
  CustomsViewedBillNoList,
} from './customs-components';

export function Customs() {
  const [store, storeController] = useLocalStorage<{ billNoList: string[] }>('customs');
  const { values, setValues, handleChange, refs } = useForm<{ billNo: string }>({
    initialValues: { billNo: '' },
    onSubmit: () => {},
    refInputNames: ['billNo'],
  });

  const [viewedBillNo, setViewedBillNo] = useState<string>('');
  const [data, submit, isLoading] = useCustoms(values.billNo);
  const cargoStatus = data?.cargCsclPrgsInfoQryVo;
  const viewedBillNoList = [...new Set(store.billNoList)];

  const SUBMIT = (billNo: string) => {
    if (billNo === '') return;
    submit();
    setViewedBillNo(billNo.trim());
    storeController('set', 'billNoList', store.billNoList ? [billNo.trim(), ...store?.billNoList] : [billNo.trim()]);
  };

  useEffect(() => {
    if (storeController('has', 'billNoList') && store.billNoList.length > 5)
      storeController('set', 'billNoList', [...viewedBillNoList.slice(0, 4)]);
  }, [store]);

  useEffect(() => {
    setValues({ billNo: '' });
  }, [data]);

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        SUBMIT(values.billNo);
      }}>
      <CustomsHeader />
      <Spacing size="2rem" />
      <Input
        ref={refs?.billNo as Ref<HTMLInputElement>}
        monospace={true}
        type="text"
        name="billNo"
        placeholder="Tracking No."
        onChange={handleChange}
      />
      <Spacing size="1rem" />
      <Button ui="confirm" color="black" disabled={values.billNo.trim().length === 0 || isLoading}>
        {!isLoading ? '확인' : '💨 🛫'}
      </Button>

      {/** END OF FORM CONTENT */}

      <CustomsLabel>최근 조회</CustomsLabel>
      <CustomsBillno>
        {viewedBillNoList.map(n => (
          <CustomsViewedBillNoList
            key={n}
            type="button"
            onClick={() => {
              setValues({ billNo: n });
              SUBMIT(n);
            }}>
            {n}
          </CustomsViewedBillNoList>
        ))}
      </CustomsBillno>

      <Spacing size="3rem" />
      <CustomsCargoTitle>{!isError(data?.tCnt) ? cargoStatus?.prnm : '조회 결과가 없어요'}</CustomsCargoTitle>

      {!isError(data?.tCnt) && (
        <>
          <Spacing size="1rem" />
          <CustomsLabel>송장번호</CustomsLabel>
          <CustomsBillno>{!isError(data?.tCnt) ? viewedBillNo : ''}</CustomsBillno>
          {cargoStatus?.prgsStts === '반출완료' && (
            <CustomsTrack
              href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${viewedBillNo}`}
              target="_blank"
              rel="noopener noreferrer">
              국내배송조회
            </CustomsTrack>
          )}

          <Spacing size="1rem" />
          <CustomsLabel>통관상태</CustomsLabel>
          <CustomsStatus
            style={{
              color: cargoStatus?.csclPrgsStts === '수입신고수리' ? COLORS.CAUTION : 'inherit',
            }}>
            {ParseCustomsUi(cargoStatus?.csclPrgsStts)}
          </CustomsStatus>

          <Spacing size="1rem" />
          <CustomsLabel>화물상태</CustomsLabel>
          <CustomsStatus
            style={{
              color: cargoStatus?.prgsStts === '반출완료' ? COLORS.OK : 'inherit',
            }}>
            {ParseCustomsUi(cargoStatus?.prgsStts)}
          </CustomsStatus>

          <Spacing size="1rem" />
          <CustomsLabel>처리시간</CustomsLabel>
          <CustomsStatus>{parseCustomsDate(cargoStatus?.prcsDttm || '')}</CustomsStatus>
        </>
      )}
    </Form>
  );
}
