export declare const constants: {
    NULL_ADDRESS: string;
    INVALID_JUMP_PATTERN: string;
    OUT_OF_GAS_PATTERN: string;
    INVALID_TAKER_FORMAT: string;
    MAX_DIGITS_IN_UNSIGNED_256_INT: number;
    DEFAULT_BLOCK_POLLING_INTERVAL: number;
    DEPLOYED: {
        rinkeby: {
            TestToken: string;
            TestDAO: string;
            Migrations: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            WyvernRegistry: string;
            SaleKindInterface: string;
            WyvernExchange: string;
            DirectEscrowProvider: string;
            WyvernProxyRegistry: string;
            TestStatic: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernTokenTransferProxy: string;
        };
        development: {
            Migrations: string;
            TestToken: string;
            TestDAO: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            WyvernRegistry: string;
            SaleKindInterface: string;
            WyvernExchange: string;
            DirectEscrowProvider: string;
            WyvernProxyRegistry: string;
            TestStatic: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernTokenTransferProxy: string;
        };
        main: {
            Migrations: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            TestToken: string;
            TestDAO: string;
            TestStatic: string;
            WyvernProxyRegistry: string;
            SaleKindInterface: string;
            WyvernExchange: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernTokenTransferProxy: string;
        };
        testnet: {
            Migrations: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            TestToken: string;
            TestDAO: string;
            TestStatic: string;
            WyvernProxyRegistry: string;
            SaleKindInterface: string;
            WyvernExchange: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernTokenTransferProxy: string;
        };
        ropsten: {
            Migrations: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            TestToken: string;
            TestDAO: string;
            TestStatic: string;
            WyvernProxyRegistry: string;
            SaleKindInterface: string;
            WyvernExchange: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernTokenTransferProxy: string;
        };
        ethereum: {
            Migrations: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            TestToken: string;
            TestDAO: string;
            TestStatic: string;
            WyvernProxyRegistry: string;
            SaleKindInterface: string;
            WyvernExchange: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernTokenTransferProxy: string;
        };
    };
    ATOMICIZER_ABI: {
        'constant': boolean;
        'inputs': {
            'name': string;
            'type': string;
        }[];
        'name': string;
        'outputs': never[];
        'payable': boolean;
        'stateMutability': string;
        'type': string;
    }[];
    EXCHANGE_ABI: ({
        'constant': boolean;
        'inputs': {
            'name': string;
            'type': string;
        }[];
        'name': string;
        'outputs': {
            'name': string;
            'type': string;
        }[];
        'payable': boolean;
        'stateMutability': string;
        'type': string;
    } | {
        'inputs': {
            'name': string;
            'type': string;
        }[];
        'payable': boolean;
        'stateMutability': string;
        'type': string;
    } | {
        'anonymous': boolean;
        'inputs': {
            'indexed': boolean;
            'name': string;
            'type': string;
        }[];
        'name': string;
        'type': string;
    })[];
    PROXY_REGISTRY_ABI: ({
        'constant': boolean;
        'inputs': {
            'name': string;
            'type': string;
        }[];
        'name': string;
        'outputs': {
            'name': string;
            'type': string;
        }[];
        'payable': boolean;
        'stateMutability': string;
        'type': string;
    } | {
        'inputs': never[];
        'payable': boolean;
        'stateMutability': string;
        'type': string;
    } | {
        'anonymous': boolean;
        'inputs': {
            'indexed': boolean;
            'name': string;
            'type': string;
        }[];
        'name': string;
        'type': string;
    })[];
    DAO_ABI: ({
        'constant': boolean;
        'inputs': {
            'name': string;
            'type': string;
        }[];
        'name': string;
        'outputs': {
            'name': string;
            'type': string;
        }[];
        'payable': boolean;
        'stateMutability': string;
        'type': string;
    } | {
        'inputs': {
            'name': string;
            'type': string;
        }[];
        'payable': boolean;
        'stateMutability': string;
        'type': string;
    } | {
        'payable': boolean;
        'stateMutability': string;
        'type': string;
    } | {
        'anonymous': boolean;
        'inputs': {
            'indexed': boolean;
            'name': string;
            'type': string;
        }[];
        'name': string;
        'type': string;
    })[];
    TOKEN_ABI: ({
        'constant': boolean;
        'inputs': {
            'name': string;
            'type': string;
        }[];
        'name': string;
        'outputs': {
            'name': string;
            'type': string;
        }[];
        'payable': boolean;
        'stateMutability': string;
        'type': string;
    } | {
        'inputs': {
            'name': string;
            'type': string;
        }[];
        'payable': boolean;
        'stateMutability': string;
        'type': string;
    } | {
        'anonymous': boolean;
        'inputs': {
            'indexed': boolean;
            'name': string;
            'type': string;
        }[];
        'name': string;
        'type': string;
    })[];
};
