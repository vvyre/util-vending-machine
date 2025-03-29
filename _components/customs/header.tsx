import { Heading } from '~/_components/_common/heading';
import { Txt } from '~/_components/_common/txt';
import { Spacing } from '../_common/spacing';

export function CustomsHeader() {
  return (
    <>
      <Spacing size="2rem" />
      <Heading>통관 상태 추적</Heading>
      <Txt>송장 번호를 통해 통관 상태를 추적합니다.</Txt>
      <ul>
        <li>
          <Txt>
            관부가세는 ATM, <strong>모바일지로, 토스, 은행 어플리케이션</strong>
            에서 납부할 수 있어요
          </Txt>
        </li>
        <li>
          <Txt
            as="a"
            href="https://www.customs.go.kr/kcs/ad/tax/BuyTaxCalculation.do#:~:text=(목록통관)%20물품가격%20미화,에는%20수입신고%20대상입니다.&text=(수입신고)%20물품가격%20미화,등)에%20대해%20과세합니다."
            target="_blank"
            rel="noopener noreferrer">
            관부가세 납부 대상 확인
          </Txt>
        </li>
      </ul>
      <Spacing size="2rem" />
    </>
  );
}
