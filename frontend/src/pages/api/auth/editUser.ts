import { prisma } from '@/server/db';
import { type ApiResponse } from '@/utils';
import { type NextApiRequest, type NextApiResponse } from 'next';

interface EditRequest extends NextApiRequest {
  body: {
    username: string;
    income: number;
    email: string;
    phoneNumber: string;
    userId: string;
  };
}

export default async function index(
  req: EditRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== 'PUT') {
    return res.status(400).json({
      message: 'This route does not exist',
      success: false,
    });
  }

  try {
    const { username, income, email, phoneNumber, userId } = req.body;

    if (!username || !income || !email || !phoneNumber || !userId) {
      return res.status(400).json({
        message: 'Fields are mandatory',
        success: false,
      });
    }

    const userToUpdate = await prisma.user.update({
      where: {
        userId,
      },
      data: {
        username,
        income,
        email,
        phoneNumber,
      },
      select: {
        username: true,
        income: true,
        email: true,
        phoneNumber: true,
      },
    });

    return res.status(200).json({
      message: 'Account fully updated',
      data: {
        ...userToUpdate,
      },
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Internal Server Error',
      success: false,
    });
  }
}
