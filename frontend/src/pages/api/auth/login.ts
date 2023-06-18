import { type NextApiRequest, type NextApiResponse } from 'next';
import { prisma } from '@/server/db';
import { type ApiResponse } from '@/utils';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

interface RequestBody extends NextApiRequest {
  body: {
    email: string;
    password: string;
  };
}

const SECRET = process.env.TOKEN_SECRET as string;

export default async function index(
  req: RequestBody,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== 'POST') {
    return res.status(400).json({
      message: 'This route does not exist',
      success: false,
    });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Fields are mandatory',
        success: false,
      });
    }

    const userToFind = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!userToFind) {
      return res.status(400).json({
        message: 'User does not exist, please register your account',
        success: false,
      });
    }

    const comparePassword = await bcrypt.compare(password, userToFind.password);

    if (!comparePassword) {
      return res.status(400).json({
        message: 'Wrong credentials',
        success: false,
      });
    }

    const payload = {
      email: userToFind.email,
      username: userToFind.username,
      userId: userToFind.userId,
    };

    const token = jwt.sign(payload, SECRET);

    res.status(200).json({
      success: true,
      message: `Welcome back ${userToFind.username}!`,
      data: {
        token,
        ...payload,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
}
