/* eslint-disable @typescript-eslint/ban-ts-comment */
import {PrismaClient} from '@prisma/client';

declare global {
    let prisma: PrismaClient | undefined;
}
//  @ts-ignore
export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production') {
    //  @ts-ignore
    globalThis.prisma = db;
};