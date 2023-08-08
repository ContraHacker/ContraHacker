import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.EODHD_API_KEY;
const SECRET_KEY = process.env.STATIC_SECRET_KEY;

const memory = {
  last_timestamp: 0
};

export async function GET(request: NextRequest) {

  const secret_key = request.headers.get('x-secret-key');

  if (!SECRET_KEY || typeof SECRET_KEY === 'undefined') {
    throw new Error('STATIC_SECRET_KEY is not defined');
  }

  if (secret_key !== SECRET_KEY) {

    const identifiable_info = {
      ip: request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip'),
      user_agent: request.headers.get('user-agent'),
      timestamp: Date.now()
    };

    console.warn('unauthorized access attempt');
    console.table(identifiable_info);

    return NextResponse.json({
      data: null,
      error: 'unauthorized',
      status: 401
    });
  }

  const timestamp = Date.now();
	
  if (timestamp - memory.last_timestamp < 5000) {

    console.warn('too many requests');

    return NextResponse.json({
      data: [],
      status: 429,
      error: 'too many requests'
    });
  }
	
  memory.last_timestamp = timestamp;

  const { searchParams } = new URL(request.url);
  let code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({
      data: null,
      error: 'no code provided',
      status: 400
    });
  }

  code = code.trim().toUpperCase();

  const url = new URL(`${ code }.NSE`, 'https://eodhistoricaldata.com/api/fundamentals/');

  if (!API_KEY || typeof API_KEY === 'undefined') {
    throw new Error('EODHD_API_KEY is not defined');
  }

  const params = new URLSearchParams();
  params.append('api_token', API_KEY);

  url.search = params.toString();

  return await fetch(url.href)
    .then(res => res.json())
    .then(data => {
      return NextResponse.json({
        data: {
          name: data.General.Name,
          sector: data.General.Sector,
          industry: data.General.Industry,
          logo: data.General.LogoURL
        },
        status: 200
      });
    })
    .catch(error => {

      console.error(error);

      return NextResponse.json({
        data: null,
        error,
        status: 500
      });
    });
}
