import {} from 'next';
import { NextResponse } from 'next/server';
import { Fetch } from '~/_util/fetch';
import { parseStringPromise } from 'xml2js';
import keys from '~/keys';
import { CustomsResponseData } from '~/_components/customs/types';
import { KST } from '~/_util/timezone';

export const POST = async (req: Request) => {
  const { billNo } = (await req.json()) as { billNo?: string };
  if (!billNo) return NextResponse.json({});

  const YYYY = KST.getFullYear();

  try {
    const url = new URL(
      `https://unipass.customs.go.kr:38010/ext/rest/cargCsclPrgsInfoQry/retrieveCargCsclPrgsInfo?crkyCn=${keys.UNIPASS}&hblNo=${billNo}&blYy=${YYYY}`
    );
    const xml = await Fetch<undefined, string>(url, 'GET', 'text');
    const result = (await parseStringPromise(xml, { explicitArray: false })) as CustomsResponseData;
    return NextResponse.json(result);
  } catch (e) {
    console.warn(e);
    return NextResponse.json({});
  }
};
