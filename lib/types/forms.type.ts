export interface AdditionalFee {
    id: string; // Add an id field
    title: string;
    fees: string;
}


export interface FormValues {
    description: string;
    estimatedPrice: string;
    additionalInfo: string;
    media: string;
    additionalFees: AdditionalFee[];
}

export type Service = {
    id: string;
    providerId: string;
    service: {
        title: string;
    };
    isComplete: boolean;
};