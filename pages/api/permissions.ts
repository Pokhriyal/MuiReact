import type { NextApiRequest, NextApiResponse } from 'next';

import { PermissionLevels } from '@shared/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PermissionLevels>
) {
  res.status(200).json(['Master Admin', 'Shop Admin', 'Employee']);
}
