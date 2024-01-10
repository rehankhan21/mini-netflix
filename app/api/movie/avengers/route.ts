import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=avengers&apikey=${process.env.MOVIE_API_KEY}`);
        const data = await response.json();
        
        return NextResponse.json(data)

    } catch (error) {
        console.log("[CODE_ERROR]", error);
        return new NextResponse("Interal error", { status: 500 })
    }
}
