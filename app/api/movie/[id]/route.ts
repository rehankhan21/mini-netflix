import { NextResponse } from 'next/server';

export async function GET(request: Request, context: any) {
    const { params } = context;

    try {
        const response = await fetch(`http://www.omdbapi.com/?i=${params.id.toString()}&apikey=${process.env.OMDb_API_KEY}`);
        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        console.log('[CODE_ERROR]', error);
        return new NextResponse('Interal error', { status: 500 })
    }
}