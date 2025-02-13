import { NextResponse } from "next/server";

export async function POST(req: Request) {
    if(req.method !== 'POST') {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }
    try {
        const response = await fetch('https://udti2bmsl7.execute-api.ap-south-1.amazonaws.com/staging/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req.body),
        })
        if(response.ok) {
            return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
        }
    }
    catch (error) {
        console.error('Error sending message:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}