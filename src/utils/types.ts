export interface ResponseFormat<T> {
    status: string,
    data: T,
    message: string,
    errors: string | null
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

export enum TransactionType {
    credit = 'credit',
    debit = 'debit'
}

export interface TransactionInterface {
    id: string,
    name: string,
    type: 'credit' | 'debit',
    referenceId: string,
    user: UserInterface
}

export interface BankInterface {
    id: string,
    accountName: string,
    accountNumber: string,
    bankName: string,
    user: UserInterface
}

export interface CardInterface {
    id: string,
    cardNumber: string,
    expiryMonth: string,
    expiryYear: string,
    CVV: string,
    user: UserInterface
}

export interface UserInterface {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    availableBalance?: number,
    ledgerBalance?: number,
    banks?: BankInterface[],
    transactions?: TransactionInterface[],
    cards?: CardInterface[],
}
