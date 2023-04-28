import type { NextApiRequest, NextApiResponse } from 'next';

import { Employee } from '@shared/types';

import employees from './employees.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Employee>
) {
  res
    .status(200)
    .json(
      (employees.find((employee) => employee.id === req.query.id) ??
        {}) as Employee
    );
}
