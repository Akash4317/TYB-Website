import { contentTypeEnum } from "@/constants/constant";

export const fetchContent = async (type: contentTypeEnum) => {
  try {
    if (!process.env.LAMBDA_ENDPOINT) {
      throw new Error('LAMBDA_ENDPOINT is not defined');
    }
    const response = await fetch(process.env.LAMBDA_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.LAMBDA_API_KEY || '',
      },
      body: JSON.stringify({
        operation: 'fetchContent',
        type: type,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
export const fetchSingleContent = async (id: string) => {
  try {
    if (!process.env.LAMBDA_ENDPOINT) {
      throw new Error('LAMBDA_ENDPOINT is not defined');
    }
    const response = await fetch(process.env.LAMBDA_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.LAMBDA_API_KEY || '',
      },
      body: JSON.stringify({
        operation: 'fetchSingleContent',
        id: id,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}
