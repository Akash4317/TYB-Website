import { NextResponse } from "next/server";

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }
    try {
        const leadUrl = process.env.LEAD_URL;
        if (!leadUrl) {
            throw new Error('LEAD_URL environment variable is not defined');
        }
        const data = await req.json();
        const response = await fetch(leadUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'bkVcVHsJF36YEQs2o7xOf5Xi4LOY6HX3Axphmrvj'
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
        }
    }
    catch (error) {
        console.error('Error sending message:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}