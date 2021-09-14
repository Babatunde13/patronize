export interface ResponseFormat<T> {
    status: string,
    data: T,
    message: string,
    errors: string | null
}

export interface UserInterface {
    email: string,
    birthday?: string,
    firstName?: string,
    lastName?: string,
    gender?: string,
    password: string
}


export const PaystackWebhookEvents = {
    charge: {
        dispute: {
            create: 'charge.dispute.create',
            remind: 'charge.dispute.remind',
            resolve: 'charge.dispute.resolve'
        },
        success: 'charge.success',
    },
    customeridentification: {
        failed: 'customeridentification.failed',
        success: 'customeridentification.success'
    },
    invoice: {
        create: 'invoice.create',
        payment_failed: 'invoice.payment_failed',
        update: 'invoice.update'
    },
    paymentrequest: {
        pending: 'paymentrequest.pending',
        success: 'paymentrequest.success'
    },
    subscription: {
        create: 'subscription.create',
        disable: 'subscription.disable',
        enable: 'subscription.enable'
    },
    transfer: {
        failed: 'transfer.failed',
        success: 'transfer.success',
        reversed: 'transfer.reversed',
    }
}
