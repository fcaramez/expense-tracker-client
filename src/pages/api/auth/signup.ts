import { type NextApiRequest, type NextApiResponse } from 'next';
import { prisma } from '~/server/db';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { type ApiResponse } from '~/utils';

interface RequestBody extends NextApiRequest {
  body: {
    email: string;
    password: string;
    username: string;
  };
}

const SECRET = process.env.TOKEN_SECRET as string;

export async function index(
  req: RequestBody,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== 'POST') {
    return res.status(400).json({
      success: false,
      message: 'This route does not exist',
    });
  }

  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Fields are mandatory',
      });
    }

    const userToFind = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userToFind) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        username: username,
      },
      select: {
        userId: true,
        username: true,
        email: true,
      },
    });

    const payload = {
      email: createdUser.email,
      username: createdUser.username,
      userId: createdUser.userId,
    };

    const token = jwt.sign(payload, SECRET);

    res.status(200).json({
      success: true,
      message: `Welcome aboard ${createdUser.username}`,
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
