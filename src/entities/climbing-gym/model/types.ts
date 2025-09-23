export interface ClimbingGymDTO {
    id: number;
    name: string;
    searchAddress: string;
    roadAddress: string;
    regionAddress: string;
    detailAddress: string;
    x: string;
    y: string;
    description: string;
    phone: string;
    websiteUrl: string | null;
}

export interface ClimbingGymsDTO {
    content: ClimbingGymDTO[];
    pageable: {
        pageNumber: number;
        pageSize: number;
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted: boolean;
        };
        offset: number;
        paged: boolean;
        unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}