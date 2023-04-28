import type { NextApiRequest, NextApiResponse } from 'next';

import { Shops } from '@shared/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Shops>
) {
  res
    .status(200)
    .json(['Los Angeles', 'Valencia', 'Alisa Viejo', 'Santa Cruz']);
}
