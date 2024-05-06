import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import authOptions from "@/app/utils/authOptions";

export async function DELETE(
    request: NextRequest,
    { params }: { params: { stockId: string }}
) {
    try {
        // check user
        const session = await getServerSession(authOptions);
        const userId = session?.user.id;

        if (!userId) {
            return NextResponse.json({}, { status: 401 });
        }

        // find stock
        const stock = await prisma.stock.findUnique({
            where: {
                id: params.stockId,
            },
        });

        if (!stock) {
            return NextResponse.json("Stock does not exist", { status: 404 });
        }

        // delete stock
        await prisma.stock.delete({
            where: {
                id: stock.id,
            },
        });

        return NextResponse.json({}, { status: 200 });
    } catch (error) {
        console.log("STOCK_DELETE: ", error);
        return NextResponse.json("Internal server error", { status: 500 });
    }
}