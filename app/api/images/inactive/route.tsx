import { ImageResponse } from 'next/og';
import { Card } from '../../../components/Card';
import { CARD_DIMENSIONS } from '../../../config';

export async function GET() {
  return new ImageResponse(
    <Card message="You can mint with Warps below." image={'${NEXT_PUBLIC_URL}/horse.png'}/>,
    CARD_DIMENSIONS,
  );
}
