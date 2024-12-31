import prisma from '../common/prisma/init.prisma.js'

const orderService = {
    orderList: async (req) => {
        const order = req
        console.log(req)
        return order
    }
}

export default orderService