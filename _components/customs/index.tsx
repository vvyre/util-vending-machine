'use client';
import { Button } from '~/_components/_common/button';
import { GridForm } from '~/_components/_common/form';
import { MonoSpaceInput } from '~/_components/_common/input';
import { Spacing } from '~/_components/_common/spacing';
import { CustomsHeader } from './header';
import { useCustoms } from './use-customs-state';
import { useForm } from '@frfla/react-hooks';
import { Ref, useEffect, useState } from 'react';
import { parseCustomsDate } from '~/_util/parse-customs-date';
import { BillNo, Label, Status, CargoTitle, Track, ViewedBillNo } from './components';
import { COLORS } from '../_common/_colors.css';
import { ParseCustomsUi } from './parse-customs-ui';
import { useLocalStorage } from '~/_util/hooks/use-browser-store';
import { isError } from './util';

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
    <GridForm
      onSubmit={e => {
        e.preventDefault();
        SUBMIT(values.billNo);
      }}>
      <CustomsHeader />
      <Spacing size="2rem" />
      <MonoSpaceInput
        ref={refs?.billNo as Ref<HTMLInputElement>}
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

      <Label>최근 조회</Label>
      <BillNo>
        {viewedBillNoList.map(n => (
          <ViewedBillNo
            key={n}
            type="button"
            onClick={() => {
              setValues({ billNo: n });
              SUBMIT(n);
            }}>
            {n}
          </ViewedBillNo>
        ))}
      </BillNo>

      <Spacing size="3rem" />
      <CargoTitle>{!isError(data?.tCnt) ? cargoStatus?.prnm : '조회 결과가 없어요'}</CargoTitle>

      {!isError(data?.tCnt) && (
        <>
          <Spacing size="1rem" />
          <Label>송장번호</Label>
          <BillNo>{!isError(data?.tCnt) ? viewedBillNo : ''}</BillNo>
          {cargoStatus?.prgsStts === '반출완료' && (
            <Track
              href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${viewedBillNo}`}
              target="_blank"
              rel="noopener noreferrer">
              국내배송조회
            </Track>
          )}

          <Spacing size="1rem" />
          <Label>통관상태</Label>
          <Status
            css={{
              color: cargoStatus?.csclPrgsStts === '수입신고수리' ? COLORS.CAUTION : 'inherit',
            }}>
            {ParseCustomsUi(cargoStatus?.csclPrgsStts)}
          </Status>

          <Spacing size="1rem" />
          <Label>화물상태</Label>
          <Status
            css={{
              color: cargoStatus?.prgsStts === '반출완료' ? COLORS.OK : 'inherit',
            }}>
            {ParseCustomsUi(cargoStatus?.prgsStts)}
          </Status>

          <Spacing size="1rem" />
          <Label>처리시간</Label>
          <Status>{parseCustomsDate(cargoStatus?.prcsDttm || '')}</Status>
        </>
      )}
    </GridForm>
  );
}
