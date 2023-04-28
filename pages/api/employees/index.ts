import type { NextApiRequest, NextApiResponse } from 'next';

import { Employees } from '@shared/types';

import employees from './employees.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Employees>
) {
  res.status(200).json(employees as Employees);
}
