import {beforeAll, afterAll, it, describe, expect} from 'vitest'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

describe("Database Connection", ()=>{
    beforeAll(async ()=>{
        await prisma.$connect()
    })
    afterAll(async ()=>{
        await prisma.$disconnect()
    })

    it("Should Connect to the Database", async ()=>{
        const result = await prisma.$queryRaw`SELECT 1`
        expect(result).toBeDefined()
    })
})