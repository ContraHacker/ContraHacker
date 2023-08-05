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

    const url = new URL(`${ code }.NSE`, 'https://eodhistoricaldata.com/api/eod/');

    if (!API_KEY || typeof API_KEY === 'undefined') {
        throw new Error('EODHD_API_KEY is not defined');
    }

    const params = new URLSearchParams();
    params.append('api_token', API_KEY);
    params.append('fmt', 'json');
    params.append('period', 'd');
    params.append('order', 'd');
    params.append('from', new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10));

    url.search = params.toString();

    return await fetch(url.href)
        .then(res => res.json())
        .then(data => {

            if (!data.length) {
                return NextResponse.json({
                    data: null,
                    error: 'data not found',
                    status: 404
                });
            }

            return NextResponse.json({
                data: data.at(0),
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
