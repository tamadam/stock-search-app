import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { stocksSchema } from "@/app/validationSchemas";
import authOptions from "@/app/utils/authOptions";

export async function POST(request: NextRequest) {
    try {
        // check user
        const session = await getServerSession(authOptions);
        const userId = session?.user.id;

        if (!userId) {
            return NextResponse.json({}, { status: 401 });
        }

        // validate request
        const body = await request.json();
        const validation = stocksSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(validation.error.format(), { status: 400 });
        }

        // create new stock
        const newStock = await prisma.stock.create({
            data: {
                name: body.name,
                symbol: body.symbol,
                userId
            },
        });

        return NextResponse.json(newStock, { status: 201 });
    } catch (error) {
        console.log("STOCKS_POST: ", error);
        return NextResponse.json("Internal server error", { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        // check user
        const session = await getServerSession(authOptions);
        const userId = session?.user.id;

        if (!userId) {
            return NextResponse.json({}, { status: 401 });
        }

        const stocks = await prisma.stock.findMany({
            where: {
                userId
            },
        });

        return NextResponse.json(stocks, { status: 200 });
    } catch (error) {
        console.log("STOCKS_GET: ", error);
        return NextResponse.json("Internal server error", { status: 500 });
    }

}