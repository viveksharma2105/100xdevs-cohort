//Backend in nextjs
import { NextResponse } from "next/server";

export function GET() {
return NextResponse.json({
    name: "John Doe",   
    email: "john.doe@example.com"
});
}


export function POST() {
return NextResponse.json({
    name: "John Doe",   
    email: "john.doe@example.com"
});
}

export function PUT() {
return NextResponse.json({
    name: "John Doe",   
    email: "john.doe@example.com"
});
}