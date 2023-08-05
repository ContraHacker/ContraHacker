import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.EODHD_API_KEY;

export async function GET(request: NextRequest) {

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
                    industry: data.General.Industry
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
