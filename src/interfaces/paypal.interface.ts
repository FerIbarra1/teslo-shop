export interface PayPalOrderStatusResponse {
    id: string;
    intent: string;
    status: string;
    purchase_units: PurchaseUnit[];
    create_time: Date;
    links: Link[];
}

export interface Link {
    href: string;
    rel: string;
    method: string;
}

export interface PurchaseUnit {
    reference_id: string;
    amount: Amount;
    payee: Payee;
    invoice_id: string;
}

export interface Amount {
    currency_code: string;
    value: string;
}

export interface Payee {
    email_address: string;
    merchant_id: string;
}
