import { type ApiResponse } from './types';

export async function fetcher(
  ...args: Parameters<typeof fetch>
): Promise<ApiResponse> {
  const res = await fetch(...args);

  if (!res.ok) {
    return {
      message: `Failed to fetch ${res.status} ${res.statusText}`,
      success: false,
    };
  }

  const response = (await res.json()) as Promise<ApiResponse>;

  return response;
}
