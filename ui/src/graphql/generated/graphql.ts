/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
  /** Represents untyped JSON */
  JSON: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  client: Client;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type AccountAttributes = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
};

export type AccountConnection = {
  __typename?: 'AccountConnection';
  nodes?: Maybe<Array<Account>>;
  pagination?: Maybe<Pagination>;
};

export type Attachment = {
  __typename?: 'Attachment';
  attachableId: Scalars['String']['output'];
  attachableType: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  url: Scalars['String']['output'];
};

export type Bank = {
  __typename?: 'Bank';
  accountName: Scalars['String']['output'];
  accountNumber: Scalars['String']['output'];
  activeWalletQueue?: Maybe<WalletQueue>;
  balance: Scalars['Float']['output'];
  bankType: BankType;
  branch: Branch;
  code: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isAllowed: Scalars['Boolean']['output'];
  isExternal: Scalars['Boolean']['output'];
  isProcessor: Scalars['Boolean']['output'];
  merchantName: Scalars['String']['output'];
  options: Array<Option>;
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  purpose: Scalars['String']['output'];
  remainingLimit: Scalars['Float']['output'];
  slot?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  walletLimit: Scalars['Float']['output'];
};

export type BankAttributes = {
  accountName?: InputMaybe<Scalars['String']['input']>;
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  balance?: InputMaybe<Scalars['Float']['input']>;
  bankTypeId?: InputMaybe<Scalars['ID']['input']>;
  branchId?: InputMaybe<Scalars['ID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isProcessor?: InputMaybe<Scalars['Boolean']['input']>;
  merchantName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  remainingLimit?: InputMaybe<Scalars['Float']['input']>;
  slot?: InputMaybe<Scalars['String']['input']>;
  walletLimit?: InputMaybe<Scalars['Float']['input']>;
};

export type BankConnection = {
  __typename?: 'BankConnection';
  nodes?: Maybe<Array<Bank>>;
  pagination?: Maybe<Pagination>;
};

export type BankTransfer = {
  __typename?: 'BankTransfer';
  amount: Scalars['Float']['output'];
  attachments: Array<Attachment>;
  bank: Bank;
  branch: Branch;
  confirmedBy?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  fee: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  inverseTransfer?: Maybe<BankTransfer>;
  isConfirmed: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  recvRef?: Maybe<Scalars['String']['output']>;
  sentRef?: Maybe<Scalars['String']['output']>;
  transactionBank: Bank;
  transactionDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  transactionType: BankTransferTypeEnum;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  walletQueue?: Maybe<WalletQueue>;
};

export type BankTransferAttributes = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  bankId?: InputMaybe<Scalars['ID']['input']>;
  branchId?: InputMaybe<Scalars['ID']['input']>;
  confirmedBy?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  fee?: InputMaybe<Scalars['Float']['input']>;
  inverse?: InputMaybe<Scalars['Boolean']['input']>;
  inverseOfId?: InputMaybe<Scalars['ID']['input']>;
  isConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  recvRef?: InputMaybe<Scalars['String']['input']>;
  sentRef?: InputMaybe<Scalars['String']['input']>;
  transactionBankId?: InputMaybe<Scalars['ID']['input']>;
  transactionDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  transactionType?: InputMaybe<BankTransferTypeEnum>;
  walletQueueId?: InputMaybe<Scalars['ID']['input']>;
};

export type BankTransferConnection = {
  __typename?: 'BankTransferConnection';
  nodes?: Maybe<Array<BankTransfer>>;
  pagination?: Maybe<Pagination>;
};

export enum BankTransferTypeEnum {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING'
}

export type BankType = {
  __typename?: 'BankType';
  code: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type BankTypeAttributes = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BankTypeConnection = {
  __typename?: 'BankTypeConnection';
  nodes?: Maybe<Array<BankType>>;
  pagination?: Maybe<Pagination>;
};

export type Branch = {
  __typename?: 'Branch';
  balance: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  contactPerson?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  depositQueue: Scalars['Int']['output'];
  depositQueueMultiplier: Scalars['Float']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  options: Array<Option>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  withdrawQueue: Scalars['Int']['output'];
  withdrawQueueMultiplier: Scalars['Float']['output'];
};

export type BranchAttributes = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  depositQueue?: InputMaybe<Scalars['Int']['input']>;
  depositQueueMultiplier?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withdrawQueue?: InputMaybe<Scalars['Int']['input']>;
  withdrawQueueMultiplier?: InputMaybe<Scalars['Float']['input']>;
};

export type BranchConnection = {
  __typename?: 'BranchConnection';
  nodes?: Maybe<Array<Branch>>;
  pagination?: Maybe<Pagination>;
};

export type Client = {
  __typename?: 'Client';
  callbackUrl?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency: Scalars['String']['output'];
  depositCommission: Scalars['Float']['output'];
  depositRate: Scalars['Float']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enableDeposit: Scalars['Boolean']['output'];
  enableWithdraw: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isAutoCallback: Scalars['Boolean']['output'];
  isSingleCallback: Scalars['Boolean']['output'];
  maxDeposit: Scalars['Float']['output'];
  maxWithdraw: Scalars['Float']['output'];
  minDeposit: Scalars['Float']['output'];
  minWithdraw: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  redirectUrl?: Maybe<Scalars['String']['output']>;
  totalBalance: Scalars['Float']['output'];
  totalDeposit: Scalars['Float']['output'];
  totalDepositFee: Scalars['Float']['output'];
  totalSettlement: Scalars['Float']['output'];
  totalTopup: Scalars['Float']['output'];
  totalWithdraw: Scalars['Float']['output'];
  totalWithdrawFee: Scalars['Float']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  withdrawCommission: Scalars['Float']['output'];
  withdrawRate: Scalars['Float']['output'];
};

export type ClientAttributes = {
  callbackUrl?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  depositCommission?: InputMaybe<Scalars['Float']['input']>;
  depositRate?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enableDeposit?: InputMaybe<Scalars['Boolean']['input']>;
  enableWithdraw?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isAutoCallback?: InputMaybe<Scalars['Boolean']['input']>;
  isSingleCallback?: InputMaybe<Scalars['Boolean']['input']>;
  maxDeposit?: InputMaybe<Scalars['Float']['input']>;
  maxWithdraw?: InputMaybe<Scalars['Float']['input']>;
  minDeposit?: InputMaybe<Scalars['Float']['input']>;
  minWithdraw?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  totalBalance?: InputMaybe<Scalars['Float']['input']>;
  totalDeposit?: InputMaybe<Scalars['Float']['input']>;
  totalDepositFee?: InputMaybe<Scalars['Float']['input']>;
  totalSettlement?: InputMaybe<Scalars['Float']['input']>;
  totalTopup?: InputMaybe<Scalars['Float']['input']>;
  totalWithdraw?: InputMaybe<Scalars['Float']['input']>;
  totalWithdrawFee?: InputMaybe<Scalars['Float']['input']>;
  withdrawCommission?: InputMaybe<Scalars['Float']['input']>;
  withdrawRate?: InputMaybe<Scalars['Float']['input']>;
};

export type ClientConnection = {
  __typename?: 'ClientConnection';
  nodes?: Maybe<Array<Client>>;
  pagination?: Maybe<Pagination>;
};

export type ClientToken = {
  __typename?: 'ClientToken';
  client: Client;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  token: Token;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type ClientTokenConnection = {
  __typename?: 'ClientTokenConnection';
  nodes?: Maybe<Array<ClientToken>>;
  pagination?: Maybe<Pagination>;
};

export type ClientTopup = {
  __typename?: 'ClientTopup';
  amount: Scalars['Float']['output'];
  client: Client;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  transactionDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type ClientTopupConnection = {
  __typename?: 'ClientTopupConnection';
  nodes?: Maybe<Array<ClientTopup>>;
  pagination?: Maybe<Pagination>;
};

export type FilterInput = {
  type: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** creates an account */
  createAccount: Account;
  /** creates a bank  */
  createBank: Bank;
  /** creates a bank transfer */
  createBankTransfer: BankTransfer;
  /** creates a bank type */
  createBankType: BankType;
  /** creates a branch */
  createBranch: Branch;
  /** creates a client */
  createClient: Client;
  /** creates an option */
  createOption: Option;
  /** creates a payment transaction */
  createPaymentTransaction: WebpayToken;
  /** creates a settlement */
  createSettlement: Settlement;
  /** creates a sim card */
  createSimCard: SimCard;
  /** creates a sms message */
  createSmsMessage: SmsMessage;
  /** creates a sms node */
  createSmsNode: SmsNode;
  /** creates a token */
  createToken: Token;
  /** creates a transaction */
  createTransaction: Transaction;
  /** creates a transaction message */
  createTransactionMessage: TransactionMessage;
  /** creates a user */
  createUser: User;
  /** creates a user type */
  createUserType: UserType;
  /** creates a wallet queue */
  createWalletQueue: WalletQueue;
  /** creates a wallet queue item */
  createWalletQueueItem: WalletQueueItem;
  /** creates a whitelisted ip */
  createWhitelistedIp: WhitelistedIp;
  /** fetch attachment ocr */
  fetchAttachmentOcr: Scalars['String']['output'];
  /** authorize a user */
  loginUser: LoginResult;
  /** logout a user */
  logoutUser: Scalars['Boolean']['output'];
  /** recompute all bank  */
  recomputeAllBank: Scalars['Boolean']['output'];
  /** recompute a bank  */
  recomputeBank: Bank;
  /** recompute wallet queue */
  recomputeWalletQueue: WalletQueue;
  /** removes an account */
  removeAccount: Account;
  /** removes an attachment */
  removeAttachment: Attachment;
  /** removes a bank */
  removeBank: Bank;
  /** removes a bank transfer */
  removeBankTransfer: BankTransfer;
  /** removes a bank type */
  removeBankType: BankType;
  /** removes a branch */
  removeBranch: Branch;
  /** removes a client */
  removeClient: Client;
  /** removes a settlement */
  removeSettlement: Settlement;
  /** removes a sim card */
  removeSimCard: SimCard;
  /** removes a sms node */
  removeSmsNode: SmsNode;
  /** removes a token */
  removeToken: Token;
  /** removes a user */
  removeUser: User;
  /** removes a user type */
  removeUserType: UserType;
  /** removes a wallet queue */
  removeWalletQueue: WalletQueue;
  /** removes a wallet queue item */
  removeWalletQueueItem: WalletQueueItem;
  /** removes a whitelisted ip */
  removeWhitelistedIp: WhitelistedIp;
  /** resend transaction callback */
  resendCallback: Scalars['Boolean']['output'];
  /** transfer transactions */
  transferTransactions: Array<Transaction>;
  /** updates an account */
  updateAccount: Account;
  /** updates a bank */
  updateBank: Bank;
  /** updates a bank transfer */
  updateBankTransfer: BankTransfer;
  /** updates a bank type */
  updateBankType: BankType;
  /** updates a branch */
  updateBranch: Branch;
  /** updates a client */
  updateClient: Client;
  /** updates an option */
  updateOption: Option;
  /** update a payment transaction */
  updatePaymentTransaction: WebpayToken;
  /** updates a settlement */
  updateSettlement: Settlement;
  /** updates a sim card */
  updateSimCard: SimCard;
  /** updates a sms node */
  updateSmsNode: SmsNode;
  /** updates a token */
  updateToken: Token;
  /** updates a transaction */
  updateTransaction: Transaction;
  /** updates a user */
  updateUser: User;
  /** updates a user type */
  updateUserType: UserType;
  /** updates a wallet queue */
  updateWalletQueue: WalletQueue;
  /** updates a wallet queue item */
  updateWalletQueueItem: WalletQueueItem;
  /** updates a whitelisted ip */
  updateWhitelistedIp: WhitelistedIp;
};


export type MutationCreateAccountArgs = {
  attributes: AccountAttributes;
};


export type MutationCreateBankArgs = {
  attributes: BankAttributes;
};


export type MutationCreateBankTransferArgs = {
  attributes: BankTransferAttributes;
};


export type MutationCreateBankTypeArgs = {
  attributes: BankTypeAttributes;
};


export type MutationCreateBranchArgs = {
  attributes: BranchAttributes;
};


export type MutationCreateClientArgs = {
  attributes: ClientAttributes;
};


export type MutationCreateOptionArgs = {
  attributes: OptionAttributes;
};


export type MutationCreatePaymentTransactionArgs = {
  accountName: Scalars['String']['input'];
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationCreateSettlementArgs = {
  attributes: SettlementAttributes;
};


export type MutationCreateSimCardArgs = {
  attributes: SimCardAttributes;
};


export type MutationCreateSmsMessageArgs = {
  attributes: SmsMessageAttributes;
};


export type MutationCreateSmsNodeArgs = {
  attributes: SmsNodeAttributes;
};


export type MutationCreateTokenArgs = {
  attributes: TokenAttributes;
};


export type MutationCreateTransactionArgs = {
  attributes: TransactionAttributes;
};


export type MutationCreateTransactionMessageArgs = {
  attributes: TransactionMessageAttributes;
};


export type MutationCreateUserArgs = {
  attributes: UserAttributes;
};


export type MutationCreateUserTypeArgs = {
  attributes: UserTypeAttributes;
};


export type MutationCreateWalletQueueArgs = {
  attributes: WalletQueueAttributes;
};


export type MutationCreateWalletQueueItemArgs = {
  attributes: WalletQueueItemAttributes;
};


export type MutationCreateWhitelistedIpArgs = {
  attributes: WhitelistedIpAttributes;
};


export type MutationLoginUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRecomputeBankArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRecomputeWalletQueueArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveAccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveAttachmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveBankArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveBankTransferArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveBankTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveBranchArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveClientArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveSettlementArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveSimCardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveSmsNodeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTokenArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveWalletQueueArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveWalletQueueItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveWhitelistedIpArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResendCallbackArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTransferTransactionsArgs = {
  transactionIds: Array<Scalars['ID']['input']>;
  walletQueueId: Scalars['ID']['input'];
};


export type MutationUpdateAccountArgs = {
  attributes: AccountAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBankArgs = {
  attributes: BankAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBankTransferArgs = {
  attributes: BankTransferAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBankTypeArgs = {
  attributes: BankTypeAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBranchArgs = {
  attributes: BranchAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateClientArgs = {
  attributes: ClientAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateOptionArgs = {
  attributes: OptionAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePaymentTransactionArgs = {
  accountName?: InputMaybe<Scalars['String']['input']>;
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationUpdateSettlementArgs = {
  attributes: SettlementAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSimCardArgs = {
  attributes: SimCardAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSmsNodeArgs = {
  attributes: SmsNodeAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTokenArgs = {
  attributes: TokenAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTransactionArgs = {
  attributes: TransactionAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  attributes: UserAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserTypeArgs = {
  attributes: UserTypeAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWalletQueueArgs = {
  attributes: WalletQueueAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWalletQueueItemArgs = {
  attributes: WalletQueueItemAttributes;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWhitelistedIpArgs = {
  attributes: WhitelistedIpAttributes;
  id: Scalars['ID']['input'];
};

export type Option = {
  __typename?: 'Option';
  createdAt: Scalars['ISO8601DateTime']['output'];
  fieldDescription?: Maybe<Scalars['String']['output']>;
  fieldIndex: Scalars['Int']['output'];
  fieldName: Scalars['String']['output'];
  fieldType: OptionFieldTypeEnum;
  id: Scalars['ID']['output'];
  optionableId?: Maybe<Scalars['ID']['output']>;
  optionableType: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value?: Maybe<Scalars['JSON']['output']>;
};

export type OptionAttributes = {
  fieldDescription?: InputMaybe<Scalars['String']['input']>;
  fieldIndex?: InputMaybe<Scalars['Int']['input']>;
  fieldName?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<Scalars['Int']['input']>;
  optionableId?: InputMaybe<Scalars['ID']['input']>;
  optionableType?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type OptionConnection = {
  __typename?: 'OptionConnection';
  nodes?: Maybe<Array<Option>>;
  pagination?: Maybe<Pagination>;
};

export enum OptionFieldTypeEnum {
  Array = 'ARRAY',
  Boolean = 'BOOLEAN',
  Number = 'NUMBER',
  String = 'STRING'
}

export type OrderInput = {
  direction: SortDirectionEnum;
  field: Scalars['String']['input'];
};

export type Pagination = {
  __typename?: 'Pagination';
  count?: Maybe<Scalars['Int']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  next?: Maybe<Scalars['Boolean']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  prev?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** fetch an account */
  fetchAccount: Account;
  /** fetches all accounts */
  fetchAccounts: AccountConnection;
  /** fetch a bank */
  fetchBank: Bank;
  /** fetch a bank transfer */
  fetchBankTransfer: BankTransfer;
  /** fetches all bank transfers */
  fetchBankTransfers: BankTransferConnection;
  /** fetch a bank type */
  fetchBankType: BankType;
  /** fetches all bank types */
  fetchBankTypes: BankTypeConnection;
  /** fetches all banks */
  fetchBanks: BankConnection;
  /** fetch a branch */
  fetchBranch: Branch;
  /** fetches all branches */
  fetchBranches: BranchConnection;
  /** fetch a client */
  fetchClient: Client;
  /** fetch client dashboard */
  fetchClientDashboard: Scalars['JSON']['output'];
  /** fetch a client token */
  fetchClientToken: ClientToken;
  /** fetches all client tokens */
  fetchClientTokens: ClientTokenConnection;
  /** fetch a client topup */
  fetchClientTopup: ClientTopup;
  /** fetches all client topups */
  fetchClientTopups: ClientTopupConnection;
  /** fetches all clients */
  fetchClients: ClientConnection;
  /** fetches current user */
  fetchCurrentUser?: Maybe<User>;
  /** fetch an option */
  fetchOption: Option;
  /** fetches all options */
  fetchOptions: OptionConnection;
  /** fetch a webpay token payment */
  fetchPayment?: Maybe<WebpayToken>;
  /** fetch a settlement */
  fetchSettlement: Settlement;
  /** fetch all settlements */
  fetchSettlements: SettlementConnection;
  /** fetch a sim card */
  fetchSimCard: SimCard;
  /** fetches all sim cards */
  fetchSimCards: SimCardConnection;
  /** fetch a sms message */
  fetchSmsMessage: SmsMessage;
  /** fetches all sms messages */
  fetchSmsMessages: SmsMessageConnection;
  /** fetch a sms node */
  fetchSmsNode: SmsNode;
  /** fetches all sms nodes */
  fetchSmsNodes: SmsNodeConnection;
  /** fetch a token */
  fetchToken: Token;
  /** fetches all tokens */
  fetchTokens: TokenConnection;
  /** fetch a transaction */
  fetchTransaction: Transaction;
  /** fetch a transaction callback */
  fetchTransactionCallback: TransactionCallback;
  /** fetches all transaction callback */
  fetchTransactionCallbacks: TransactionCallbackConnection;
  /** fetches all transaction message */
  fetchTransactionMessages: TransactionMessageConnection;
  /** fetches all transactions */
  fetchTransactions: TransactionConnection;
  /** fetch a user */
  fetchUser: User;
  /** fetch a user type */
  fetchUserType: UserType;
  /** fetches all user types */
  fetchUserTypes: UserTypeConnection;
  /** fetches all users */
  fetchUsers: UserConnection;
  /** fetch a wallet queue */
  fetchWalletQueue: WalletQueue;
  /** fetch a wallet queue item */
  fetchWalletQueueItem: WalletQueueItem;
  /** fetches all wallet queue items */
  fetchWalletQueueItems: WalletQueueItemConnection;
  /** fetches all wallet queues */
  fetchWalletQueues: WalletQueueConnection;
  /** fetch a webpay token */
  fetchWebpayToken: WebpayToken;
  /** fetches all webpay tokens */
  fetchWebpayTokens: WebpayTokenConnection;
  /** fetch a whitelisted ip */
  fetchWhitelistedIp: WhitelistedIp;
  /** fetches all whitelisted ips */
  fetchWhitelistedIps: WhitelistedIpConnection;
};


export type QueryFetchAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchAccountsArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchBankArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchBankTransferArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchBankTransfersArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchBankTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchBankTypesArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchBanksArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchBranchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchBranchesArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchClientArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchClientTokenArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchClientTokensArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchClientTopupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchClientTopupsArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchClientsArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchOptionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchOptionsArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchPaymentArgs = {
  token: Scalars['String']['input'];
};


export type QueryFetchSettlementArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchSettlementsArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchSimCardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchSimCardsArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchSmsMessageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchSmsMessagesArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchSmsNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchSmsNodesArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchTokenArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchTokensArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchTransactionCallbackArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchTransactionCallbacksArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchTransactionMessagesArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchTransactionsArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchUserTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchUserTypesArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchUsersArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchWalletQueueArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchWalletQueueItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchWalletQueueItemsArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchWalletQueuesArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchWebpayTokenArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchWebpayTokensArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchWhitelistedIpArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchWhitelistedIpsArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Settlement = {
  __typename?: 'Settlement';
  balance: Scalars['Float']['output'];
  client: Client;
  createdAt: Scalars['ISO8601DateTime']['output'];
  depositFee: Scalars['Float']['output'];
  depositRate: Scalars['Float']['output'];
  endsAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  sent: Scalars['Float']['output'];
  startsAt: Scalars['ISO8601DateTime']['output'];
  status: SettlementStatusEnum;
  totalDeposit: Scalars['Float']['output'];
  totalSettlement: Scalars['Float']['output'];
  totalWithdraw: Scalars['Float']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  withdrawFee: Scalars['Float']['output'];
  withdrawRate: Scalars['Float']['output'];
};

export type SettlementAttributes = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  depositFee?: InputMaybe<Scalars['Float']['input']>;
  depositRate?: InputMaybe<Scalars['Float']['input']>;
  endsAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  sent?: InputMaybe<Scalars['Float']['input']>;
  startsAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  status?: InputMaybe<SettlementStatusEnum>;
  totalDeposit?: InputMaybe<Scalars['Float']['input']>;
  totalSettlement?: InputMaybe<Scalars['Float']['input']>;
  totalWithdraw?: InputMaybe<Scalars['Float']['input']>;
  withdrawFee?: InputMaybe<Scalars['Float']['input']>;
  withdrawRate?: InputMaybe<Scalars['Float']['input']>;
};

export type SettlementConnection = {
  __typename?: 'SettlementConnection';
  nodes?: Maybe<Array<Settlement>>;
  pagination?: Maybe<Pagination>;
};

export enum SettlementStatusEnum {
  Active = 'ACTIVE',
  InProgress = 'IN_PROGRESS',
  Sent = 'SENT',
  Settled = 'SETTLED'
}

export type SimCard = {
  __typename?: 'SimCard';
  branch: Branch;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  lastLoadDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  mobileNumber: Scalars['String']['output'];
  name: Scalars['String']['output'];
  network: Scalars['String']['output'];
  slot: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type SimCardAttributes = {
  branchId?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastLoadDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  slot?: InputMaybe<Scalars['String']['input']>;
};

export type SimCardConnection = {
  __typename?: 'SimCardConnection';
  nodes?: Maybe<Array<SimCard>>;
  pagination?: Maybe<Pagination>;
};

export type SmsMessage = {
  __typename?: 'SmsMessage';
  client: Client;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  isInstant: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  mobileNumber: Scalars['String']['output'];
  retries: Scalars['Int']['output'];
  scheduledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  sentAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  smsNode?: Maybe<SmsNode>;
  status: SmsMessageStatusEnum;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type SmsMessageAttributes = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  isInstant?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  sentAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  smsNodeId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<SmsMessageStatusEnum>;
};

export type SmsMessageConnection = {
  __typename?: 'SmsMessageConnection';
  nodes?: Maybe<Array<SmsMessage>>;
  pagination?: Maybe<Pagination>;
};

export enum SmsMessageStatusEnum {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Initial = 'INITIAL',
  InProgress = 'IN_PROGRESS',
  Sent = 'SENT'
}

export type SmsNode = {
  __typename?: 'SmsNode';
  code: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  device: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  queued: Scalars['Int']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type SmsNodeAttributes = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  queued?: InputMaybe<Scalars['Int']['input']>;
};

export type SmsNodeConnection = {
  __typename?: 'SmsNodeConnection';
  nodes?: Maybe<Array<SmsNode>>;
  pagination?: Maybe<Pagination>;
};

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Subscription = {
  __typename?: 'Subscription';
  createTransactionUpdates?: Maybe<Transaction>;
  createWalletQueueItemUpdates?: Maybe<WalletQueueItem>;
  fetchTransactionsUpdates?: Maybe<Transaction>;
  fetchWalletQueueUpdates: WalletQueue;
  fetchWalletQueuesUpdates?: Maybe<WalletQueue>;
};


export type SubscriptionCreateTransactionUpdatesArgs = {
  branchId?: InputMaybe<Scalars['ID']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  walletQueueId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionCreateWalletQueueItemUpdatesArgs = {
  walletQueueId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionFetchTransactionsUpdatesArgs = {
  branchId?: InputMaybe<Scalars['ID']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  walletQueueId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionFetchWalletQueueUpdatesArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionFetchWalletQueuesUpdatesArgs = {
  branchId?: InputMaybe<Scalars['ID']['input']>;
};

export type Token = {
  __typename?: 'Token';
  clientSecret: Scalars['String']['output'];
  clientToken: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  hasExpiration: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type TokenAttributes = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  clientToken?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['String']['input']>;
};

export type TokenConnection = {
  __typename?: 'TokenConnection';
  nodes?: Maybe<Array<Token>>;
  pagination?: Maybe<Pagination>;
};

export type Transaction = {
  __typename?: 'Transaction';
  account: Account;
  accountName?: Maybe<Scalars['String']['output']>;
  accountNumber?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  bank: Bank;
  branch: Branch;
  callbackNotes?: Maybe<Scalars['String']['output']>;
  callbackStatusCode?: Maybe<Scalars['Int']['output']>;
  callbackStatusSent: TransactionCallbackStatusSentEnum;
  callbackUrl?: Maybe<Scalars['String']['output']>;
  claimReferenceNumber?: Maybe<Scalars['String']['output']>;
  client: Client;
  clientNotes?: Maybe<Scalars['String']['output']>;
  clientTransactionId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  fee: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  isCallbackSent: Scalars['Boolean']['output'];
  isWebpay: Scalars['Boolean']['output'];
  paymentQr?: Maybe<Scalars['String']['output']>;
  processedBy?: Maybe<Scalars['ID']['output']>;
  redirectUrl?: Maybe<Scalars['String']['output']>;
  referenceCode?: Maybe<Scalars['String']['output']>;
  referenceNumber?: Maybe<Scalars['String']['output']>;
  status: TransactionStatusEnum;
  statusNotes?: Maybe<Scalars['String']['output']>;
  transactionType: TransactionTypeEnum;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  walletQueue?: Maybe<WalletQueue>;
  webpayToken?: Maybe<WebpayToken>;
};

export type TransactionAttributes = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  accountName?: InputMaybe<Scalars['String']['input']>;
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  bankId?: InputMaybe<Scalars['ID']['input']>;
  branchId?: InputMaybe<Scalars['ID']['input']>;
  callbackNotes?: InputMaybe<Scalars['String']['input']>;
  callbackStatusCode?: InputMaybe<Scalars['Int']['input']>;
  callbackStatusSent?: InputMaybe<TransactionCallbackStatusSentEnum>;
  callbackUrl?: InputMaybe<Scalars['String']['input']>;
  claimReferenceNumber?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  clientNotes?: InputMaybe<Scalars['String']['input']>;
  clientTransactionId?: InputMaybe<Scalars['String']['input']>;
  fee?: InputMaybe<Scalars['Float']['input']>;
  isCallbackSent?: InputMaybe<Scalars['Boolean']['input']>;
  isWebpay?: InputMaybe<Scalars['Boolean']['input']>;
  processedBy?: InputMaybe<Scalars['ID']['input']>;
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  referenceCode?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TransactionStatusEnum>;
  statusNotes?: InputMaybe<Scalars['String']['input']>;
  transactionType?: InputMaybe<TransactionTypeEnum>;
  walletQueueId?: InputMaybe<Scalars['ID']['input']>;
};

export type TransactionCallback = {
  __typename?: 'TransactionCallback';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  requestBody: Scalars['JSON']['output'];
  responseBody?: Maybe<Scalars['JSON']['output']>;
  responseCode: Scalars['String']['output'];
  sender: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TransactionCallbackConnection = {
  __typename?: 'TransactionCallbackConnection';
  nodes?: Maybe<Array<TransactionCallback>>;
  pagination?: Maybe<Pagination>;
};

export enum TransactionCallbackStatusSentEnum {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Initial = 'INITIAL',
  InProgress = 'IN_PROGRESS',
  None = 'NONE',
  Refunded = 'REFUNDED',
  Success = 'SUCCESS'
}

export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  nodes?: Maybe<Array<Transaction>>;
  pagination?: Maybe<Pagination>;
};

export type TransactionMessage = {
  __typename?: 'TransactionMessage';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type TransactionMessageAttributes = {
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  transactionId?: InputMaybe<Scalars['ID']['input']>;
};

export type TransactionMessageConnection = {
  __typename?: 'TransactionMessageConnection';
  nodes?: Maybe<Array<TransactionMessage>>;
  pagination?: Maybe<Pagination>;
};

export enum TransactionStatusEnum {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Initial = 'INITIAL',
  InProgress = 'IN_PROGRESS',
  Refunded = 'REFUNDED',
  Success = 'SUCCESS'
}

export enum TransactionTypeEnum {
  Deposit = 'DEPOSIT',
  Withdraw = 'WITHDRAW'
}

export type User = {
  __typename?: 'User';
  branch?: Maybe<Branch>;
  branchId?: Maybe<Scalars['ID']['output']>;
  clientId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userType: UserType;
  username: Scalars['String']['output'];
};

export type UserAttributes = {
  branchId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userTypeId?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  nodes?: Maybe<Array<User>>;
  pagination?: Maybe<Pagination>;
};

export type UserType = {
  __typename?: 'UserType';
  code: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type UserTypeAttributes = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UserTypeConnection = {
  __typename?: 'UserTypeConnection';
  nodes?: Maybe<Array<UserType>>;
  pagination?: Maybe<Pagination>;
};

export type WalletQueue = {
  __typename?: 'WalletQueue';
  bank: Bank;
  branch: Branch;
  clients: Array<Client>;
  code: Scalars['String']['output'];
  confirmedBy?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  endingBalance: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  interval: Scalars['Int']['output'];
  intervalCountdown: Scalars['Int']['output'];
  intervalCounter: Scalars['Int']['output'];
  intervalCounterLimit: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  isLocked: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  processedBy?: Maybe<Scalars['String']['output']>;
  queue: Scalars['Int']['output'];
  queueType: WalletQueueTypeEnum;
  queuedBy?: Maybe<Scalars['String']['output']>;
  startingBalance: Scalars['Float']['output'];
  status: WalletQueueStatusEnum;
  totalAmount: Scalars['Float']['output'];
  totalQueueAmount: Scalars['Float']['output'];
  totalSuccess: Scalars['Float']['output'];
  totalTransferIn: Scalars['Float']['output'];
  totalTransferOut: Scalars['Float']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type WalletQueueAttributes = {
  bankId?: InputMaybe<Scalars['ID']['input']>;
  branchId?: InputMaybe<Scalars['ID']['input']>;
  clientIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  code?: InputMaybe<Scalars['String']['input']>;
  confirmedBy?: InputMaybe<Scalars['String']['input']>;
  endingBalance?: InputMaybe<Scalars['Float']['input']>;
  interval?: InputMaybe<Scalars['Int']['input']>;
  intervalCounter?: InputMaybe<Scalars['Int']['input']>;
  intervalCounterLimit?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isLocked?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  processedBy?: InputMaybe<Scalars['String']['input']>;
  queueType?: InputMaybe<WalletQueueTypeEnum>;
  queuedBy?: InputMaybe<Scalars['String']['input']>;
  remainingLimit?: InputMaybe<Scalars['Float']['input']>;
  startingBalance?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<WalletQueueStatusEnum>;
  totalAmount?: InputMaybe<Scalars['Float']['input']>;
  totalTransfer?: InputMaybe<Scalars['Float']['input']>;
  walletLimit?: InputMaybe<Scalars['Float']['input']>;
};

export type WalletQueueConnection = {
  __typename?: 'WalletQueueConnection';
  nodes?: Maybe<Array<WalletQueue>>;
  pagination?: Maybe<Pagination>;
};

export type WalletQueueItem = {
  __typename?: 'WalletQueueItem';
  accountName?: Maybe<Scalars['String']['output']>;
  accountNumber: Scalars['String']['output'];
  amount: Scalars['Float']['output'];
  attachment?: Maybe<Attachment>;
  balance?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  linkedWalletQueueItem?: Maybe<WalletQueueItem>;
  matchedTransaction?: Maybe<Transaction>;
  notes?: Maybe<Scalars['String']['output']>;
  processedBy: Scalars['String']['output'];
  rawData: Scalars['JSON']['output'];
  referenceNumber?: Maybe<Scalars['String']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  status: WalletQueueItemStatusEnum;
  transactionDate: Scalars['ISO8601DateTime']['output'];
  transactionType: WalletQueueItemTransactionTypeEnum;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  walletQueue: WalletQueue;
};

export type WalletQueueItemAttributes = {
  accountName?: InputMaybe<Scalars['String']['input']>;
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  attachmentId?: InputMaybe<Scalars['ID']['input']>;
  balance?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  linkedWalletQueueItemId?: InputMaybe<Scalars['ID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  processedBy?: InputMaybe<Scalars['String']['input']>;
  rawDate?: InputMaybe<Scalars['JSON']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<WalletQueueItemStatusEnum>;
  transactionDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  transactionId?: InputMaybe<Scalars['ID']['input']>;
  transactionType?: InputMaybe<WalletQueueItemTransactionTypeEnum>;
  walletQueueId?: InputMaybe<Scalars['ID']['input']>;
};

export type WalletQueueItemConnection = {
  __typename?: 'WalletQueueItemConnection';
  nodes?: Maybe<Array<WalletQueueItem>>;
  pagination?: Maybe<Pagination>;
};

export enum WalletQueueItemStatusEnum {
  Pending = 'PENDING',
  Resolved = 'RESOLVED',
  Success = 'SUCCESS'
}

export enum WalletQueueItemTransactionTypeEnum {
  Receive = 'RECEIVE',
  Sent = 'SENT'
}

export enum WalletQueueStatusEnum {
  Active = 'ACTIVE',
  Confirmation = 'CONFIRMATION',
  Confirmed = 'CONFIRMED',
  Inactive = 'INACTIVE',
  Paused = 'PAUSED',
  Ready = 'READY'
}

export enum WalletQueueTypeEnum {
  Deposit = 'DEPOSIT',
  Withdraw = 'WITHDRAW'
}

export type WebpayToken = {
  __typename?: 'WebpayToken';
  account: Account;
  accountName?: Maybe<Scalars['String']['output']>;
  accountNumber?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  callbackUrl?: Maybe<Scalars['String']['output']>;
  client: Client;
  clientNotes?: Maybe<Scalars['String']['output']>;
  clientTransactionId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  fee: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  merchantName: Scalars['String']['output'];
  redirectUrl?: Maybe<Scalars['String']['output']>;
  transactionRequest?: Maybe<Transaction>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  walletType: Scalars['String']['output'];
};

export type WebpayTokenConnection = {
  __typename?: 'WebpayTokenConnection';
  nodes?: Maybe<Array<WebpayToken>>;
  pagination?: Maybe<Pagination>;
};

export type WhitelistedIp = {
  __typename?: 'WhitelistedIp';
  client?: Maybe<Client>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ipAddress: Scalars['String']['output'];
  isAllowed: Scalars['Boolean']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type WhitelistedIpAttributes = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  isAllowed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WhitelistedIpConnection = {
  __typename?: 'WhitelistedIpConnection';
  nodes?: Maybe<Array<WhitelistedIp>>;
  pagination?: Maybe<Pagination>;
};

export type FetchAttachmentOcrMutationVariables = Exact<{ [key: string]: never; }>;


export type FetchAttachmentOcrMutation = { __typename?: 'Mutation', ocr: string };

export type RemoveAttachmentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveAttachmentMutation = { __typename?: 'Mutation', attachment: { __typename?: 'Attachment', id: string, attachableId: string, attachableType: string, filename: string, url: string, createdAt: any, updatedAt: any } };

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', auth: { __typename?: 'LoginResult', token?: string | null, expiresAt?: any | null, user?: { __typename?: 'User', id: string, username: string, userType: { __typename?: 'UserType', id: string, code: string, name: string } } | null } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', auth: boolean };

export type CreateBankTransferMutationVariables = Exact<{
  attributes: BankTransferAttributes;
}>;


export type CreateBankTransferMutation = { __typename?: 'Mutation', bankTransfer: { __typename?: 'BankTransfer', id: string, confirmedBy?: string | null, isConfirmed: boolean, amount: number, fee: number, transactionDate?: any | null, sentRef?: string | null, recvRef?: string | null, transactionType: BankTransferTypeEnum, purpose?: string | null, notes?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, walletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null, transactionBank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, attachments: Array<{ __typename?: 'Attachment', id: string, attachableType: string, attachableId: string, filename: string, url: string }>, inverseTransfer?: { __typename?: 'BankTransfer', id: string, confirmedBy?: string | null, isConfirmed: boolean, amount: number, fee: number, transactionDate?: any | null, sentRef?: string | null, recvRef?: string | null, transactionType: BankTransferTypeEnum, purpose?: string | null, notes?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, walletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null, transactionBank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, attachments: Array<{ __typename?: 'Attachment', id: string, attachableType: string, attachableId: string, filename: string, url: string }> } | null } };

export type RemoveBankTransferMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveBankTransferMutation = { __typename?: 'Mutation', bankTransfer: { __typename?: 'BankTransfer', id: string } };

export type UpdateBankTransferMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: BankTransferAttributes;
}>;


export type UpdateBankTransferMutation = { __typename?: 'Mutation', bankTransfer: { __typename?: 'BankTransfer', id: string, confirmedBy?: string | null, isConfirmed: boolean, amount: number, fee: number, transactionDate?: any | null, sentRef?: string | null, recvRef?: string | null, transactionType: BankTransferTypeEnum, purpose?: string | null, notes?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, walletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null, transactionBank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, attachments: Array<{ __typename?: 'Attachment', id: string, attachableType: string, attachableId: string, filename: string, url: string }>, inverseTransfer?: { __typename?: 'BankTransfer', id: string, confirmedBy?: string | null, isConfirmed: boolean, amount: number, fee: number, transactionDate?: any | null, sentRef?: string | null, recvRef?: string | null, transactionType: BankTransferTypeEnum, purpose?: string | null, notes?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, walletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null, transactionBank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, attachments: Array<{ __typename?: 'Attachment', id: string, attachableType: string, attachableId: string, filename: string, url: string }> } | null } };

export type CreateBankTypeMutationVariables = Exact<{
  attributes: BankTypeAttributes;
}>;


export type CreateBankTypeMutation = { __typename?: 'Mutation', bankType: { __typename?: 'BankType', id: string, code: string, name: string, description?: string | null, createdAt: any, updatedAt: any } };

export type RemoveBankTypeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveBankTypeMutation = { __typename?: 'Mutation', bankType: { __typename?: 'BankType', id: string, code: string, name: string, description?: string | null, createdAt: any, updatedAt: any } };

export type UpdateBankTypeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: BankTypeAttributes;
}>;


export type UpdateBankTypeMutation = { __typename?: 'Mutation', bankType: { __typename?: 'BankType', id: string, code: string, name: string, description?: string | null, createdAt: any, updatedAt: any } };

export type CreateBankMutationVariables = Exact<{
  attributes: BankAttributes;
}>;


export type CreateBankMutation = { __typename?: 'Mutation', bank: { __typename?: 'Bank', id: string, code: string, phone?: string | null, slot?: string | null, merchantName: string, accountName: string, accountNumber: string, password: string, purpose: string, description?: string | null, walletLimit: number, remainingLimit: number, isProcessor: boolean, isAllowed: boolean, isActive: boolean, isExternal: boolean, balance: number, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bankType: { __typename?: 'BankType', id: string, code: string, name: string }, activeWalletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null } };

export type RecomputeAllBankMutationVariables = Exact<{ [key: string]: never; }>;


export type RecomputeAllBankMutation = { __typename?: 'Mutation', recompute: boolean };

export type RecomputeBankMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RecomputeBankMutation = { __typename?: 'Mutation', bank: { __typename?: 'Bank', id: string, code: string, phone?: string | null, slot?: string | null, merchantName: string, accountName: string, accountNumber: string, password: string, purpose: string, description?: string | null, walletLimit: number, remainingLimit: number, isProcessor: boolean, isActive: boolean, isExternal: boolean, isAllowed: boolean, balance: number, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bankType: { __typename?: 'BankType', id: string, code: string, name: string }, activeWalletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null } };

export type RemoveBankMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveBankMutation = { __typename?: 'Mutation', bank: { __typename?: 'Bank', id: string } };

export type UpdateBankMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: BankAttributes;
}>;


export type UpdateBankMutation = { __typename?: 'Mutation', bank: { __typename?: 'Bank', id: string, code: string, phone?: string | null, slot?: string | null, merchantName: string, accountName: string, accountNumber: string, password: string, purpose: string, description?: string | null, walletLimit: number, remainingLimit: number, isProcessor: boolean, isActive: boolean, isExternal: boolean, isAllowed: boolean, balance: number, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bankType: { __typename?: 'BankType', id: string, code: string, name: string }, activeWalletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null } };

export type CreateBranchMutationVariables = Exact<{
  attributes: BranchAttributes;
}>;


export type CreateBranchMutation = { __typename?: 'Mutation', branch: { __typename?: 'Branch', id: string, name: string, code: string, description?: string | null, contactPerson?: string | null, contactNumber?: string | null, contactEmail?: string | null, depositQueue: number, depositQueueMultiplier: number, withdrawQueue: number, withdrawQueueMultiplier: number } };

export type RemoveBranchMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveBranchMutation = { __typename?: 'Mutation', branch: { __typename?: 'Branch', id: string, name: string, code: string, description?: string | null, contactPerson?: string | null, contactNumber?: string | null, contactEmail?: string | null, depositQueue: number, depositQueueMultiplier: number, withdrawQueue: number, withdrawQueueMultiplier: number, createdAt: any, updatedAt: any } };

export type UpdateBranchMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: BranchAttributes;
}>;


export type UpdateBranchMutation = { __typename?: 'Mutation', branch: { __typename?: 'Branch', id: string, name: string, description?: string | null, contactPerson?: string | null, contactNumber?: string | null, contactEmail?: string | null, depositQueue: number, depositQueueMultiplier: number, withdrawQueue: number, withdrawQueueMultiplier: number, createdAt: any, updatedAt: any } };

export type CreateClientMutationVariables = Exact<{
  attributes: ClientAttributes;
}>;


export type CreateClientMutation = { __typename?: 'Mutation', client: { __typename?: 'Client', id: string, name: string, description?: string | null, minDeposit: number, maxDeposit: number, minWithdraw: number, maxWithdraw: number, currency: string, depositRate: number, withdrawRate: number, depositCommission: number, withdrawCommission: number, isActive: boolean, enableDeposit: boolean, enableWithdraw: boolean, callbackUrl?: string | null, redirectUrl?: string | null, isSingleCallback: boolean, isAutoCallback: boolean, totalDeposit: number, totalWithdraw: number, totalDepositFee: number, totalWithdrawFee: number, totalTopup: number, totalSettlement: number, totalBalance: number, createdAt: any, updatedAt: any } };

export type RemoveClientMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveClientMutation = { __typename?: 'Mutation', client: { __typename?: 'Client', id: string, name: string, description?: string | null, minDeposit: number, maxDeposit: number, minWithdraw: number, maxWithdraw: number, currency: string, depositRate: number, withdrawRate: number, depositCommission: number, withdrawCommission: number, isActive: boolean, enableDeposit: boolean, enableWithdraw: boolean, callbackUrl?: string | null, redirectUrl?: string | null, isSingleCallback: boolean, isAutoCallback: boolean, totalDeposit: number, totalWithdraw: number, totalDepositFee: number, totalWithdrawFee: number, totalTopup: number, totalSettlement: number, totalBalance: number, createdAt: any, updatedAt: any } };

export type UpdateClientMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: ClientAttributes;
}>;


export type UpdateClientMutation = { __typename?: 'Mutation', client: { __typename?: 'Client', id: string, name: string, description?: string | null, minDeposit: number, maxDeposit: number, minWithdraw: number, maxWithdraw: number, currency: string, depositRate: number, withdrawRate: number, depositCommission: number, withdrawCommission: number, isActive: boolean, enableDeposit: boolean, enableWithdraw: boolean, callbackUrl?: string | null, redirectUrl?: string | null, isSingleCallback: boolean, isAutoCallback: boolean, totalDeposit: number, totalWithdraw: number, totalDepositFee: number, totalWithdrawFee: number, totalTopup: number, totalSettlement: number, totalBalance: number, createdAt: any, updatedAt: any } };

export type CreateOptionMutationVariables = Exact<{
  attributes: OptionAttributes;
}>;


export type CreateOptionMutation = { __typename?: 'Mutation', option: { __typename?: 'Option', id: string, optionableId?: string | null, optionableType: string, fieldName: string, value?: any | null, createdAt: any, updatedAt: any } };

export type UpdateOptionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: OptionAttributes;
}>;


export type UpdateOptionMutation = { __typename?: 'Mutation', option: { __typename?: 'Option', id: string, optionableId?: string | null, optionableType: string, fieldName: string, value?: any | null, createdAt: any, updatedAt: any } };

export type CreateSettlementMutationVariables = Exact<{
  attributes: SettlementAttributes;
}>;


export type CreateSettlementMutation = { __typename?: 'Mutation', settlement: { __typename?: 'Settlement', id: string, startsAt: any, endsAt: any, totalDeposit: number, totalWithdraw: number, depositRate: number, withdrawRate: number, depositFee: number, withdrawFee: number, totalSettlement: number, status: SettlementStatusEnum, sent: number, balance: number, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, code: string, name: string } } };

export type RemoveSettlementMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveSettlementMutation = { __typename?: 'Mutation', settlement: { __typename?: 'Settlement', id: string, startsAt: any, endsAt: any, totalDeposit: number, totalWithdraw: number, depositRate: number, withdrawRate: number, depositFee: number, withdrawFee: number, totalSettlement: number, sent: number, balance: number, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, code: string, name: string } } };

export type UpdateSettlementMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: SettlementAttributes;
}>;


export type UpdateSettlementMutation = { __typename?: 'Mutation', settlement: { __typename?: 'Settlement', id: string, startsAt: any, endsAt: any, totalDeposit: number, totalWithdraw: number, depositRate: number, withdrawRate: number, depositFee: number, withdrawFee: number, totalSettlement: number, status: SettlementStatusEnum, sent: number, balance: number, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, code: string, name: string } } };

export type CreateSimCardMutationVariables = Exact<{
  attributes: SimCardAttributes;
}>;


export type CreateSimCardMutation = { __typename?: 'Mutation', simCard: { __typename?: 'SimCard', id: string, name: string, mobileNumber: string, network: string, slot: string, isActive: boolean, lastLoadDate?: any | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, name: string } } };

export type RemoveSimCardMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveSimCardMutation = { __typename?: 'Mutation', simCard: { __typename?: 'SimCard', id: string } };

export type UpdateSimCardMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: SimCardAttributes;
}>;


export type UpdateSimCardMutation = { __typename?: 'Mutation', simCard: { __typename?: 'SimCard', id: string, name: string, mobileNumber: string, network: string, slot: string, isActive: boolean, lastLoadDate?: any | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, name: string } } };

export type CreateSmsMessageMutationVariables = Exact<{
  attributes: SmsMessageAttributes;
}>;


export type CreateSmsMessageMutation = { __typename?: 'Mutation', message: { __typename?: 'SmsMessage', id: string, message: string, mobileNumber: string, sentAt?: any | null, scheduledAt?: any | null, retries: number, status: SmsMessageStatusEnum, smsNode?: { __typename?: 'SmsNode', id: string, code: string } | null, client: { __typename?: 'Client', id: string, code: string } } };

export type CreateSmsNodeMutationVariables = Exact<{
  attributes: SmsNodeAttributes;
}>;


export type CreateSmsNodeMutation = { __typename?: 'Mutation', node: { __typename?: 'SmsNode', id: string, name: string, code: string, device: string, description?: string | null, isActive: boolean, queued: number, updatedAt: any, createdAt: any } };

export type RemoveSmsNodeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveSmsNodeMutation = { __typename?: 'Mutation', node: { __typename?: 'SmsNode', id: string } };

export type UpdateSmsNodeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: SmsNodeAttributes;
}>;


export type UpdateSmsNodeMutation = { __typename?: 'Mutation', node: { __typename?: 'SmsNode', id: string, name: string, code: string, device: string, description?: string | null, isActive: boolean, queued: number, updatedAt: any, createdAt: any } };

export type CreateTokenMutationVariables = Exact<{
  attributes: TokenAttributes;
}>;


export type CreateTokenMutation = { __typename?: 'Mutation', token: { __typename?: 'Token', id: string, clientToken: string, clientSecret: string, expiresAt?: any | null, createdAt: any, updatedAt: any } };

export type RemoveTokenMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveTokenMutation = { __typename?: 'Mutation', token: { __typename?: 'Token', id: string, clientToken: string, clientSecret: string, expiresAt?: any | null, createdAt: any, updatedAt: any } };

export type UpdateTokenMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: TokenAttributes;
}>;


export type UpdateTokenMutation = { __typename?: 'Mutation', token: { __typename?: 'Token', id: string, clientToken: string, clientSecret: string, expiresAt?: any | null, createdAt: any, updatedAt: any } };

export type ResendCallbackMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ResendCallbackMutation = { __typename?: 'Mutation', resendCallback: boolean };

export type CreateTransactionMutationVariables = Exact<{
  attributes: TransactionAttributes;
}>;


export type CreateTransactionMutation = { __typename?: 'Mutation', transaction: { __typename?: 'Transaction', id: string, claimReferenceNumber?: string | null, transactionType: TransactionTypeEnum, amount: number, fee: number, status: TransactionStatusEnum, statusNotes?: string | null, accountName?: string | null, accountNumber?: string | null, referenceCode?: string | null, referenceNumber?: string | null, isCallbackSent: boolean, callbackStatusSent: TransactionCallbackStatusSentEnum, callbackStatusCode?: number | null, callbackNotes?: string | null, clientTransactionId?: string | null, callbackUrl?: string | null, redirectUrl?: string | null, isWebpay: boolean, processedBy?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, client: { __typename?: 'Client', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, accountNumber: string, accountName: string, code: string, bankType: { __typename?: 'BankType', id: string, name: string, code: string } }, account: { __typename?: 'Account', id: string, name: string }, walletQueue?: { __typename?: 'WalletQueue', id: string } | null, webpayToken?: { __typename?: 'WebpayToken', id: string } | null } };

export type TransferTransactionsMutationVariables = Exact<{
  walletQueueId: Scalars['ID']['input'];
  transactionIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type TransferTransactionsMutation = { __typename?: 'Mutation', transactions: Array<{ __typename?: 'Transaction', id: string, claimReferenceNumber?: string | null, transactionType: TransactionTypeEnum, amount: number, fee: number, status: TransactionStatusEnum, statusNotes?: string | null, accountName?: string | null, accountNumber?: string | null, referenceCode?: string | null, referenceNumber?: string | null, isCallbackSent: boolean, callbackStatusSent: TransactionCallbackStatusSentEnum, callbackStatusCode?: number | null, callbackNotes?: string | null, clientTransactionId?: string | null, callbackUrl?: string | null, redirectUrl?: string | null, isWebpay: boolean, processedBy?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, client: { __typename?: 'Client', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, accountNumber: string, accountName: string, code: string, bankType: { __typename?: 'BankType', id: string, name: string, code: string } }, account: { __typename?: 'Account', id: string, name: string }, walletQueue?: { __typename?: 'WalletQueue', id: string } | null, webpayToken?: { __typename?: 'WebpayToken', id: string, clientTransactionId?: string | null, accountName?: string | null, accountNumber?: string | null, amount: number, fee: number, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, name: string }, transactionRequest?: { __typename?: 'Transaction', id: string } | null } | null }> };

export type UpdateTransactionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: TransactionAttributes;
}>;


export type UpdateTransactionMutation = { __typename?: 'Mutation', transaction: { __typename?: 'Transaction', id: string, claimReferenceNumber?: string | null, transactionType: TransactionTypeEnum, amount: number, fee: number, status: TransactionStatusEnum, statusNotes?: string | null, accountName?: string | null, accountNumber?: string | null, referenceCode?: string | null, referenceNumber?: string | null, isCallbackSent: boolean, callbackStatusSent: TransactionCallbackStatusSentEnum, callbackStatusCode?: number | null, callbackNotes?: string | null, clientTransactionId?: string | null, callbackUrl?: string | null, redirectUrl?: string | null, isWebpay: boolean, processedBy?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, client: { __typename?: 'Client', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, accountNumber: string, accountName: string, code: string, bankType: { __typename?: 'BankType', id: string, name: string, code: string } }, account: { __typename?: 'Account', id: string, name: string }, walletQueue?: { __typename?: 'WalletQueue', id: string } | null, webpayToken?: { __typename?: 'WebpayToken', id: string } | null } };

export type CreateUserTypeMutationVariables = Exact<{
  attributes: UserTypeAttributes;
}>;


export type CreateUserTypeMutation = { __typename?: 'Mutation', userType: { __typename?: 'UserType', id: string, code: string, name: string, description?: string | null, createdAt: any, updatedAt: any } };

export type RemoveUserTypeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveUserTypeMutation = { __typename?: 'Mutation', userType: { __typename?: 'UserType', id: string, code: string, name: string, description?: string | null, createdAt: any, updatedAt: any } };

export type UpdateUserTypeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: UserTypeAttributes;
}>;


export type UpdateUserTypeMutation = { __typename?: 'Mutation', userType: { __typename?: 'UserType', id: string, code: string, name: string, description?: string | null, createdAt: any, updatedAt: any } };

export type CreateUserMutationVariables = Exact<{
  attributes: UserAttributes;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', user: { __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null, createdAt: any, updatedAt: any, userType: { __typename?: 'UserType', id: string, code: string, name: string }, branch?: { __typename?: 'Branch', id: string, code: string, name: string } | null } };

export type RemoveUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', user: { __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null, createdAt: any, updatedAt: any, userType: { __typename?: 'UserType', id: string, code: string, name: string }, branch?: { __typename?: 'Branch', id: string, code: string, name: string } | null } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: UserAttributes;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', user: { __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null, createdAt: any, updatedAt: any, userType: { __typename?: 'UserType', id: string, code: string, name: string }, branch?: { __typename?: 'Branch', id: string, code: string, name: string } | null } };

export type CreateWalletQueueItemMutationVariables = Exact<{
  attributes: WalletQueueItemAttributes;
}>;


export type CreateWalletQueueItemMutation = { __typename?: 'Mutation', walletQueueItem: { __typename?: 'WalletQueueItem', id: string, transactionType: WalletQueueItemTransactionTypeEnum, amount: number, accountNumber: string, accountName?: string | null, referenceNumber?: string | null, balance?: number | null, code?: string | null, transactionDate: any, status: WalletQueueItemStatusEnum, notes?: string | null, remarks?: string | null, processedBy: string, createdAt: any, updatedAt: any, walletQueue: { __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, bank: { __typename?: 'Bank', id: string, code: string, bankType: { __typename?: 'BankType', id: string, code: string } } }, matchedTransaction?: { __typename?: 'Transaction', id: string } | null, linkedWalletQueueItem?: { __typename?: 'WalletQueueItem', id: string } | null, attachment?: { __typename?: 'Attachment', id: string, url: string } | null } };

export type RemoveWalletQueueItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveWalletQueueItemMutation = { __typename?: 'Mutation', walletQueueItem: { __typename?: 'WalletQueueItem', id: string } };

export type UpdateWalletQueueItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: WalletQueueItemAttributes;
}>;


export type UpdateWalletQueueItemMutation = { __typename?: 'Mutation', walletQueueItem: { __typename?: 'WalletQueueItem', id: string, transactionType: WalletQueueItemTransactionTypeEnum, amount: number, accountNumber: string, accountName?: string | null, referenceNumber?: string | null, balance?: number | null, code?: string | null, transactionDate: any, status: WalletQueueItemStatusEnum, notes?: string | null, remarks?: string | null, processedBy: string, createdAt: any, updatedAt: any, walletQueue: { __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, bank: { __typename?: 'Bank', id: string, code: string, bankType: { __typename?: 'BankType', id: string, code: string } } }, matchedTransaction?: { __typename?: 'Transaction', id: string } | null, linkedWalletQueueItem?: { __typename?: 'WalletQueueItem', id: string } | null, attachment?: { __typename?: 'Attachment', id: string, url: string } | null } };

export type CreateWalletQueueMutationVariables = Exact<{
  attributes: WalletQueueAttributes;
}>;


export type CreateWalletQueueMutation = { __typename?: 'Mutation', walletQueue: { __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, startingBalance: number, endingBalance: number, totalAmount: number, totalSuccess: number, totalTransferIn: number, totalTransferOut: number, totalQueueAmount: number, queuedBy?: string | null, processedBy?: string | null, confirmedBy?: string | null, notes?: string | null, queue: number, isActive: boolean, interval: number, intervalCounter: number, intervalCounterLimit: number, intervalCountdown: number, status: WalletQueueStatusEnum, isLocked: boolean, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string }, bank: { __typename?: 'Bank', id: string, code: string, phone?: string | null, accountNumber: string, accountName: string, walletLimit: number, remainingLimit: number, purpose: string, bankType: { __typename?: 'BankType', code: string } }, clients: Array<{ __typename?: 'Client', id: string, code: string, name: string }> } };

export type RecomputeWalletQueueMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RecomputeWalletQueueMutation = { __typename?: 'Mutation', walletQueue: { __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, startingBalance: number, endingBalance: number, totalAmount: number, totalSuccess: number, totalTransferIn: number, totalTransferOut: number, totalQueueAmount: number, queuedBy?: string | null, processedBy?: string | null, confirmedBy?: string | null, notes?: string | null, queue: number, isActive: boolean, interval: number, intervalCounter: number, intervalCounterLimit: number, intervalCountdown: number, status: WalletQueueStatusEnum, isLocked: boolean, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string }, bank: { __typename?: 'Bank', id: string, code: string, phone?: string | null, accountNumber: string, accountName: string, walletLimit: number, remainingLimit: number, purpose: string, bankType: { __typename?: 'BankType', code: string } }, clients: Array<{ __typename?: 'Client', id: string, code: string, name: string }> } };

export type RemoveWalletQueueMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveWalletQueueMutation = { __typename?: 'Mutation', walletQueue: { __typename?: 'WalletQueue', id: string } };

export type UpdateWalletQueueMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: WalletQueueAttributes;
}>;


export type UpdateWalletQueueMutation = { __typename?: 'Mutation', walletQueue: { __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, startingBalance: number, endingBalance: number, totalAmount: number, totalSuccess: number, totalTransferIn: number, totalTransferOut: number, totalQueueAmount: number, queuedBy?: string | null, processedBy?: string | null, confirmedBy?: string | null, notes?: string | null, queue: number, isActive: boolean, interval: number, intervalCounter: number, intervalCounterLimit: number, intervalCountdown: number, status: WalletQueueStatusEnum, isLocked: boolean, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string }, bank: { __typename?: 'Bank', id: string, code: string, phone?: string | null, accountNumber: string, accountName: string, walletLimit: number, remainingLimit: number, purpose: string, bankType: { __typename?: 'BankType', code: string } }, clients: Array<{ __typename?: 'Client', id: string, code: string, name: string }> } };

export type CreateWhitelistedIpMutationVariables = Exact<{
  attributes: WhitelistedIpAttributes;
}>;


export type CreateWhitelistedIpMutation = { __typename?: 'Mutation', whitelistedIp: { __typename?: 'WhitelistedIp', id: string, ipAddress: string, isAllowed: boolean, description?: string | null, createdAt: any, updatedAt: any, client?: { __typename?: 'Client', id: string, name: string } | null } };

export type RemoveWhitelistedIpMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveWhitelistedIpMutation = { __typename?: 'Mutation', whitelistedIp: { __typename?: 'WhitelistedIp', id: string, ipAddress: string, isAllowed: boolean, description?: string | null, createdAt: any, updatedAt: any, client?: { __typename?: 'Client', id: string, name: string } | null } };

export type UpdateWhitelistedIpMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: WhitelistedIpAttributes;
}>;


export type UpdateWhitelistedIpMutation = { __typename?: 'Mutation', whitelistedIp: { __typename?: 'WhitelistedIp', id: string, ipAddress: string, isAllowed: boolean, description?: string | null, createdAt: any, updatedAt: any, client?: { __typename?: 'Client', id: string, name: string } | null } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, username: string, email: string, firstName?: string | null, lastName?: string | null, branchId?: string | null, clientId?: string | null, userType: { __typename?: 'UserType', id: string, code: string, name: string } } | null };

export type FetchBankTransferQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchBankTransferQuery = { __typename?: 'Query', bankTransfer: { __typename?: 'BankTransfer', id: string, confirmedBy?: string | null, isConfirmed: boolean, amount: number, fee: number, transactionDate?: any | null, sentRef?: string | null, recvRef?: string | null, transactionType: BankTransferTypeEnum, purpose?: string | null, notes?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, walletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null, transactionBank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, attachments: Array<{ __typename?: 'Attachment', id: string, attachableType: string, attachableId: string, filename: string, url: string }>, inverseTransfer?: { __typename?: 'BankTransfer', id: string, confirmedBy?: string | null, isConfirmed: boolean, amount: number, fee: number, transactionDate?: any | null, sentRef?: string | null, recvRef?: string | null, transactionType: BankTransferTypeEnum, purpose?: string | null, notes?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, walletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null, transactionBank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, attachments: Array<{ __typename?: 'Attachment', id: string, attachableType: string, attachableId: string, filename: string, url: string }> } | null } };

export type FetchBankTransfersQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBankTransfersQuery = { __typename?: 'Query', bankTransfers: { __typename?: 'BankTransferConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'BankTransfer', id: string, confirmedBy?: string | null, isConfirmed: boolean, amount: number, fee: number, transactionDate?: any | null, sentRef?: string | null, recvRef?: string | null, transactionType: BankTransferTypeEnum, purpose?: string | null, notes?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, walletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null, transactionBank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, attachments: Array<{ __typename?: 'Attachment', id: string, attachableType: string, attachableId: string, filename: string, url: string }>, inverseTransfer?: { __typename?: 'BankTransfer', id: string, confirmedBy?: string | null, isConfirmed: boolean, amount: number, fee: number, transactionDate?: any | null, sentRef?: string | null, recvRef?: string | null, transactionType: BankTransferTypeEnum, purpose?: string | null, notes?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, walletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null, transactionBank: { __typename?: 'Bank', id: string, code: string, accountName: string, accountNumber: string, bankType: { __typename?: 'BankType', code: string } }, attachments: Array<{ __typename?: 'Attachment', id: string, attachableType: string, attachableId: string, filename: string, url: string }> } | null }> | null } };

export type FetchBankTypeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchBankTypeQuery = { __typename?: 'Query', bankType: { __typename?: 'BankType', id: string, code: string, name: string, description?: string | null, createdAt: any, updatedAt: any } };

export type FetchBankTypesQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBankTypesQuery = { __typename?: 'Query', bankTypes: { __typename?: 'BankTypeConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'BankType', id: string, code: string, name: string, description?: string | null, createdAt: any, updatedAt: any }> | null } };

export type FetchBankQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchBankQuery = { __typename?: 'Query', bank: { __typename?: 'Bank', id: string, code: string, phone?: string | null, slot?: string | null, merchantName: string, accountName: string, accountNumber: string, password: string, purpose: string, description?: string | null, walletLimit: number, remainingLimit: number, isProcessor: boolean, isActive: boolean, isExternal: boolean, isAllowed: boolean, balance: number, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bankType: { __typename?: 'BankType', id: string, code: string, name: string }, activeWalletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null } };

export type FetchBanksQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBanksQuery = { __typename?: 'Query', banks: { __typename?: 'BankConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'Bank', id: string, code: string, phone?: string | null, slot?: string | null, merchantName: string, accountName: string, accountNumber: string, password: string, purpose: string, description?: string | null, walletLimit: number, remainingLimit: number, isProcessor: boolean, isActive: boolean, isExternal: boolean, isAllowed: boolean, balance: number, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, bankType: { __typename?: 'BankType', id: string, code: string, name: string }, activeWalletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null }> | null } };

export type FetchBranchQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchBranchQuery = { __typename?: 'Query', branch: { __typename?: 'Branch', id: string, code: string, name: string, description?: string | null, contactPerson?: string | null, contactNumber?: string | null, contactEmail?: string | null, depositQueue: number, depositQueueMultiplier: number, withdrawQueue: number, withdrawQueueMultiplier: number, balance: number, createdAt: any, updatedAt: any, options: Array<{ __typename?: 'Option', id: string, fieldName: string, value?: any | null }> } };

export type FetchBranchesQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchBranchesQuery = { __typename?: 'Query', branches: { __typename?: 'BranchConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'Branch', id: string, code: string, name: string, description?: string | null, contactPerson?: string | null, contactNumber?: string | null, contactEmail?: string | null, depositQueue: number, depositQueueMultiplier: number, withdrawQueue: number, withdrawQueueMultiplier: number, balance: number, createdAt: any, updatedAt: any, options: Array<{ __typename?: 'Option', id: string, fieldName: string, value?: any | null }> }> | null } };

export type FetchClientTokenQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchClientTokenQuery = { __typename?: 'Query', clientToken: { __typename?: 'ClientToken', id: string, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, name: string }, token: { __typename?: 'Token', id: string, clientToken: string, clientSecret: string, expiresAt?: any | null } } };

export type FetchClientTokensQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchClientTokensQuery = { __typename?: 'Query', clientTokens: { __typename?: 'ClientTokenConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'ClientToken', id: string, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, name: string }, token: { __typename?: 'Token', id: string, clientToken: string, clientSecret: string, expiresAt?: any | null } }> | null } };

export type FetchClientQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchClientQuery = { __typename?: 'Query', client: { __typename?: 'Client', id: string, code: string, name: string, description?: string | null, minDeposit: number, maxDeposit: number, minWithdraw: number, maxWithdraw: number, currency: string, depositRate: number, withdrawRate: number, depositCommission: number, withdrawCommission: number, isActive: boolean, enableDeposit: boolean, enableWithdraw: boolean, callbackUrl?: string | null, redirectUrl?: string | null, isSingleCallback: boolean, isAutoCallback: boolean, totalDeposit: number, totalWithdraw: number, totalDepositFee: number, totalWithdrawFee: number, totalTopup: number, totalSettlement: number, totalBalance: number, createdAt: any, updatedAt: any } };

export type FetchClientsQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchClientsQuery = { __typename?: 'Query', clients: { __typename?: 'ClientConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'Client', id: string, code: string, name: string, description?: string | null, minDeposit: number, maxDeposit: number, minWithdraw: number, maxWithdraw: number, currency: string, depositRate: number, withdrawRate: number, depositCommission: number, withdrawCommission: number, isActive: boolean, enableDeposit: boolean, enableWithdraw: boolean, callbackUrl?: string | null, redirectUrl?: string | null, isSingleCallback: boolean, isAutoCallback: boolean, totalDeposit: number, totalWithdraw: number, totalDepositFee: number, totalWithdrawFee: number, totalTopup: number, totalSettlement: number, totalBalance: number, createdAt: any, updatedAt: any }> | null } };

export type FetchClientDashboardQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchClientDashboardQuery = { __typename?: 'Query', dashboard: any };

export type FetchOptionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchOptionQuery = { __typename?: 'Query', option: { __typename?: 'Option', id: string, optionableId?: string | null, optionableType: string, fieldName: string, value?: any | null, createdAt: any, updatedAt: any } };

export type FetchOptionsQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchOptionsQuery = { __typename?: 'Query', options: { __typename?: 'OptionConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'Option', id: string, optionableType: string, optionableId?: string | null, fieldName: string, value?: any | null, createdAt: any, updatedAt: any }> | null } };

export type FetchSettlementQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchSettlementQuery = { __typename?: 'Query', settlement: { __typename?: 'Settlement', id: string, startsAt: any, endsAt: any, totalDeposit: number, totalWithdraw: number, depositRate: number, withdrawRate: number, depositFee: number, withdrawFee: number, totalSettlement: number, status: SettlementStatusEnum, sent: number, balance: number, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, code: string, name: string } } };

export type FetchSettlementsQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchSettlementsQuery = { __typename?: 'Query', settlements: { __typename?: 'SettlementConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'Settlement', id: string, startsAt: any, endsAt: any, totalDeposit: number, totalWithdraw: number, depositRate: number, withdrawRate: number, depositFee: number, withdrawFee: number, totalSettlement: number, status: SettlementStatusEnum, sent: number, balance: number, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, code: string, name: string } }> | null } };

export type FetchSimCardQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchSimCardQuery = { __typename?: 'Query', simCard: { __typename?: 'SimCard', id: string, name: string, mobileNumber: string, network: string, slot: string, isActive: boolean, lastLoadDate?: any | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, name: string } } };

export type FetchSimCardsQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchSimCardsQuery = { __typename?: 'Query', simCards: { __typename?: 'SimCardConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'SimCard', id: string, name: string, mobileNumber: string, network: string, slot: string, isActive: boolean, lastLoadDate?: any | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, name: string } }> | null } };

export type FetchSmsMessageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchSmsMessageQuery = { __typename?: 'Query', message: { __typename?: 'SmsMessage', id: string, message: string, mobileNumber: string, sentAt?: any | null, scheduledAt?: any | null, status: SmsMessageStatusEnum, isInstant: boolean, retries: number, createdAt: any, smsNode?: { __typename?: 'SmsNode', id: string, code: string } | null, client: { __typename?: 'Client', id: string, name: string, code: string } } };

export type FetchSmsMessagesQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchSmsMessagesQuery = { __typename?: 'Query', smsMessages: { __typename?: 'SmsMessageConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'SmsMessage', id: string, message: string, mobileNumber: string, sentAt?: any | null, scheduledAt?: any | null, status: SmsMessageStatusEnum, isInstant: boolean, retries: number, createdAt: any, smsNode?: { __typename?: 'SmsNode', id: string, code: string } | null, client: { __typename?: 'Client', id: string, name: string, code: string } }> | null } };

export type FetchSmsNodeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchSmsNodeQuery = { __typename?: 'Query', smsNode: { __typename?: 'SmsNode', id: string, name: string, code: string, device: string, description?: string | null, isActive: boolean, queued: number, updatedAt: any, createdAt: any } };

export type FetchSmsNodesQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchSmsNodesQuery = { __typename?: 'Query', smsNodes: { __typename?: 'SmsNodeConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'SmsNode', id: string, name: string, code: string, device: string, description?: string | null, isActive: boolean, queued: number, updatedAt: any, createdAt: any }> | null } };

export type FetchTokenQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchTokenQuery = { __typename?: 'Query', token: { __typename?: 'Token', id: string, clientToken: string, clientSecret: string, expiresAt?: any | null, createdAt: any, updatedAt: any } };

export type FetchTokensQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchTokensQuery = { __typename?: 'Query', tokens: { __typename?: 'TokenConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'Token', id: string, clientToken: string, clientSecret: string, expiresAt?: any | null, createdAt: any, updatedAt: any }> | null } };

export type FetchTransactionCallbackQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchTransactionCallbackQuery = { __typename?: 'Query', transactionCallback: { __typename?: 'TransactionCallback', id: string, url: string, requestBody: any, responseCode: string, responseBody?: any | null, sender: string, createdAt: any, updatedAt: any } };

export type FetchTransactionCallbacksQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchTransactionCallbacksQuery = { __typename?: 'Query', transactionCallbacks: { __typename?: 'TransactionCallbackConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'TransactionCallback', id: string, url: string, requestBody: any, responseCode: string, responseBody?: any | null, sender: string, createdAt: any, updatedAt: any }> | null } };

export type FetchTransactionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchTransactionQuery = { __typename?: 'Query', transaction: { __typename?: 'Transaction', id: string, claimReferenceNumber?: string | null, transactionType: TransactionTypeEnum, amount: number, fee: number, status: TransactionStatusEnum, statusNotes?: string | null, accountName?: string | null, accountNumber?: string | null, referenceCode?: string | null, referenceNumber?: string | null, isCallbackSent: boolean, callbackStatusSent: TransactionCallbackStatusSentEnum, callbackStatusCode?: number | null, callbackNotes?: string | null, clientTransactionId?: string | null, callbackUrl?: string | null, redirectUrl?: string | null, isWebpay: boolean, processedBy?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, client: { __typename?: 'Client', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, accountNumber: string, accountName: string, code: string, bankType: { __typename?: 'BankType', id: string, name: string, code: string } }, account: { __typename?: 'Account', id: string, name: string }, walletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null, webpayToken?: { __typename?: 'WebpayToken', id: string, clientTransactionId?: string | null, accountName?: string | null, accountNumber?: string | null, amount: number, fee: number, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, name: string }, transactionRequest?: { __typename?: 'Transaction', id: string } | null } | null } };

export type FetchTransactionsQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchTransactionsQuery = { __typename?: 'Query', transactions: { __typename?: 'TransactionConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'Transaction', id: string, claimReferenceNumber?: string | null, transactionType: TransactionTypeEnum, amount: number, fee: number, status: TransactionStatusEnum, statusNotes?: string | null, accountName?: string | null, accountNumber?: string | null, referenceCode?: string | null, referenceNumber?: string | null, isCallbackSent: boolean, callbackStatusSent: TransactionCallbackStatusSentEnum, callbackStatusCode?: number | null, callbackNotes?: string | null, clientTransactionId?: string | null, callbackUrl?: string | null, redirectUrl?: string | null, isWebpay: boolean, processedBy?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, client: { __typename?: 'Client', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, accountNumber: string, accountName: string, code: string, bankType: { __typename?: 'BankType', id: string, name: string, code: string } }, account: { __typename?: 'Account', id: string, name: string }, walletQueue?: { __typename?: 'WalletQueue', id: string, code: string } | null, webpayToken?: { __typename?: 'WebpayToken', id: string, clientTransactionId?: string | null, accountName?: string | null, accountNumber?: string | null, amount: number, fee: number, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, name: string }, transactionRequest?: { __typename?: 'Transaction', id: string } | null } | null }> | null } };

export type FetchUserTypeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchUserTypeQuery = { __typename?: 'Query', userType: { __typename?: 'UserType', id: string, code: string, name: string, description?: string | null, createdAt: any, updatedAt: any } };

export type FetchUserTypesQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchUserTypesQuery = { __typename?: 'Query', userTypes: { __typename?: 'UserTypeConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'UserType', id: string, code: string, name: string, description?: string | null, createdAt: any, updatedAt: any }> | null } };

export type FetchUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null, createdAt: any, updatedAt: any, userType: { __typename?: 'UserType', id: string, code: string, name: string }, branch?: { __typename?: 'Branch', id: string, code: string, name: string } | null } };

export type FetchUsersQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchUsersQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null, createdAt: any, updatedAt: any, userType: { __typename?: 'UserType', id: string, code: string, name: string }, branch?: { __typename?: 'Branch', id: string, code: string, name: string } | null }> | null } };

export type FetchWalletQueueItemQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchWalletQueueItemQuery = { __typename?: 'Query', walletQueueItem: { __typename?: 'WalletQueueItem', id: string, transactionType: WalletQueueItemTransactionTypeEnum, amount: number, accountNumber: string, accountName?: string | null, referenceNumber?: string | null, balance?: number | null, code?: string | null, transactionDate: any, status: WalletQueueItemStatusEnum, notes?: string | null, remarks?: string | null, processedBy: string, createdAt: any, updatedAt: any, walletQueue: { __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, bank: { __typename?: 'Bank', id: string, code: string, bankType: { __typename?: 'BankType', id: string, code: string } } }, matchedTransaction?: { __typename?: 'Transaction', id: string } | null, linkedWalletQueueItem?: { __typename?: 'WalletQueueItem', id: string } | null, attachment?: { __typename?: 'Attachment', id: string, url: string } | null } };

export type FetchWalletQueueItemsQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchWalletQueueItemsQuery = { __typename?: 'Query', walletQueueItems: { __typename?: 'WalletQueueItemConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'WalletQueueItem', id: string, transactionType: WalletQueueItemTransactionTypeEnum, amount: number, accountNumber: string, accountName?: string | null, referenceNumber?: string | null, balance?: number | null, code?: string | null, transactionDate: any, status: WalletQueueItemStatusEnum, notes?: string | null, remarks?: string | null, processedBy: string, createdAt: any, updatedAt: any, walletQueue: { __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, bank: { __typename?: 'Bank', id: string, code: string, bankType: { __typename?: 'BankType', id: string, code: string } } }, matchedTransaction?: { __typename?: 'Transaction', id: string } | null, linkedWalletQueueItem?: { __typename?: 'WalletQueueItem', id: string } | null, attachment?: { __typename?: 'Attachment', id: string, url: string } | null }> | null } };

export type FetchWalletQueueQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchWalletQueueQuery = { __typename?: 'Query', walletQueue: { __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, startingBalance: number, endingBalance: number, totalAmount: number, totalSuccess: number, totalTransferIn: number, totalTransferOut: number, totalQueueAmount: number, queuedBy?: string | null, processedBy?: string | null, confirmedBy?: string | null, notes?: string | null, queue: number, isActive: boolean, interval: number, intervalCounter: number, intervalCounterLimit: number, intervalCountdown: number, status: WalletQueueStatusEnum, isLocked: boolean, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string }, bank: { __typename?: 'Bank', id: string, code: string, phone?: string | null, accountNumber: string, accountName: string, walletLimit: number, remainingLimit: number, purpose: string, bankType: { __typename?: 'BankType', code: string } }, clients: Array<{ __typename?: 'Client', id: string, code: string, name: string }> } };

export type FetchWalletQueuesQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchWalletQueuesQuery = { __typename?: 'Query', walletQueues: { __typename?: 'WalletQueueConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, startingBalance: number, endingBalance: number, totalAmount: number, totalSuccess: number, totalTransferIn: number, totalTransferOut: number, totalQueueAmount: number, queuedBy?: string | null, processedBy?: string | null, confirmedBy?: string | null, notes?: string | null, queue: number, isActive: boolean, interval: number, intervalCounter: number, intervalCounterLimit: number, intervalCountdown: number, status: WalletQueueStatusEnum, isLocked: boolean, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string }, bank: { __typename?: 'Bank', id: string, code: string, phone?: string | null, accountNumber: string, accountName: string, walletLimit: number, remainingLimit: number, purpose: string, bankType: { __typename?: 'BankType', code: string } }, clients: Array<{ __typename?: 'Client', id: string, code: string, name: string }> }> | null } };

export type FetchWebpayTokenQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchWebpayTokenQuery = { __typename?: 'Query', webpayToken: { __typename?: 'WebpayToken', id: string, merchantName: string, accountName?: string | null, accountNumber?: string | null, amount: number, fee: number, clientTransactionId?: string | null, clientNotes?: string | null, callbackUrl?: string | null, redirectUrl?: string | null, expiresAt?: any | null, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, code: string, name: string }, transactionRequest?: { __typename?: 'Transaction', id: string } | null } };

export type FetchWebpayTokensQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchWebpayTokensQuery = { __typename?: 'Query', webpayTokens: { __typename?: 'WebpayTokenConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'WebpayToken', id: string, merchantName: string, accountName?: string | null, accountNumber?: string | null, amount: number, fee: number, clientTransactionId?: string | null, clientNotes?: string | null, callbackUrl?: string | null, redirectUrl?: string | null, expiresAt?: any | null, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: string, code: string, name: string }, transactionRequest?: { __typename?: 'Transaction', id: string } | null }> | null } };

export type FetchWhitelistedIpQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchWhitelistedIpQuery = { __typename?: 'Query', whitelistedIp: { __typename?: 'WhitelistedIp', id: string, ipAddress: string, isAllowed: boolean, description?: string | null, createdAt: any, updatedAt: any, client?: { __typename?: 'Client', id: string, name: string } | null } };

export type FetchWhitelistedIpsQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchWhitelistedIpsQuery = { __typename?: 'Query', whitelistedIps: { __typename?: 'WhitelistedIpConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'WhitelistedIp', id: string, ipAddress: string, isAllowed: boolean, description?: string | null, createdAt: any, updatedAt: any, client?: { __typename?: 'Client', id: string, name: string } | null }> | null } };

export type CreateTransactionUpdatesSubscriptionVariables = Exact<{
  branchId?: InputMaybe<Scalars['ID']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  walletQueueId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateTransactionUpdatesSubscription = { __typename?: 'Subscription', transaction?: { __typename?: 'Transaction', id: string, claimReferenceNumber?: string | null, transactionType: TransactionTypeEnum, amount: number, fee: number, status: TransactionStatusEnum, statusNotes?: string | null, accountName?: string | null, accountNumber?: string | null, referenceCode?: string | null, referenceNumber?: string | null, isCallbackSent: boolean, callbackStatusSent: TransactionCallbackStatusSentEnum, callbackStatusCode?: number | null, callbackNotes?: string | null, clientTransactionId?: string | null, callbackUrl?: string | null, redirectUrl?: string | null, isWebpay: boolean, processedBy?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, client: { __typename?: 'Client', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, accountNumber: string, accountName: string, code: string, bankType: { __typename?: 'BankType', id: string, name: string, code: string } }, account: { __typename?: 'Account', id: string, name: string }, walletQueue?: { __typename?: 'WalletQueue', id: string } | null } | null };

export type FetchTransactionsUpdatesSubscriptionVariables = Exact<{
  branchId?: InputMaybe<Scalars['ID']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  walletQueueId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type FetchTransactionsUpdatesSubscription = { __typename?: 'Subscription', transaction?: { __typename?: 'Transaction', id: string, claimReferenceNumber?: string | null, transactionType: TransactionTypeEnum, amount: number, fee: number, status: TransactionStatusEnum, statusNotes?: string | null, accountName?: string | null, accountNumber?: string | null, referenceCode?: string | null, referenceNumber?: string | null, isCallbackSent: boolean, callbackStatusSent: TransactionCallbackStatusSentEnum, callbackStatusCode?: number | null, callbackNotes?: string | null, clientTransactionId?: string | null, callbackUrl?: string | null, redirectUrl?: string | null, isWebpay: boolean, processedBy?: string | null, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string, name: string }, client: { __typename?: 'Client', id: string, code: string, name: string }, bank: { __typename?: 'Bank', id: string, accountNumber: string, accountName: string, code: string, bankType: { __typename?: 'BankType', id: string, name: string, code: string } }, account: { __typename?: 'Account', id: string, name: string }, walletQueue?: { __typename?: 'WalletQueue', id: string } | null } | null };

export type CreateWalletQueueItemUpdatesSubscriptionVariables = Exact<{
  walletQueueId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateWalletQueueItemUpdatesSubscription = { __typename?: 'Subscription', walletQueueItem?: { __typename?: 'WalletQueueItem', id: string, transactionType: WalletQueueItemTransactionTypeEnum, amount: number, accountNumber: string, accountName?: string | null, referenceNumber?: string | null, balance?: number | null, code?: string | null, transactionDate: any, status: WalletQueueItemStatusEnum, notes?: string | null, remarks?: string | null, processedBy: string, createdAt: any, updatedAt: any, walletQueue: { __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, bank: { __typename?: 'Bank', id: string, code: string, bankType: { __typename?: 'BankType', id: string, code: string } } }, matchedTransaction?: { __typename?: 'Transaction', id: string } | null, attachment?: { __typename?: 'Attachment', id: string, url: string } | null } | null };

export type FetchWalletQueueUpdatesSubscriptionVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchWalletQueueUpdatesSubscription = { __typename?: 'Subscription', walletQueue: { __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, startingBalance: number, endingBalance: number, totalAmount: number, totalSuccess: number, totalTransferIn: number, totalTransferOut: number, totalQueueAmount: number, queuedBy?: string | null, processedBy?: string | null, confirmedBy?: string | null, notes?: string | null, queue: number, isActive: boolean, interval: number, intervalCounter: number, intervalCounterLimit: number, intervalCountdown: number, status: WalletQueueStatusEnum, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string }, bank: { __typename?: 'Bank', id: string, code: string, phone?: string | null, accountNumber: string, accountName: string, walletLimit: number, remainingLimit: number, purpose: string, bankType: { __typename?: 'BankType', code: string } }, clients: Array<{ __typename?: 'Client', id: string, code: string, name: string }> } };

export type FetchWalletQueuesUpdatesSubscriptionVariables = Exact<{
  branchId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type FetchWalletQueuesUpdatesSubscription = { __typename?: 'Subscription', walletQueue?: { __typename?: 'WalletQueue', id: string, code: string, queueType: WalletQueueTypeEnum, startingBalance: number, endingBalance: number, totalAmount: number, totalSuccess: number, totalTransferIn: number, totalTransferOut: number, totalQueueAmount: number, queuedBy?: string | null, processedBy?: string | null, confirmedBy?: string | null, notes?: string | null, queue: number, isActive: boolean, interval: number, intervalCounter: number, intervalCounterLimit: number, intervalCountdown: number, status: WalletQueueStatusEnum, createdAt: any, updatedAt: any, branch: { __typename?: 'Branch', id: string, code: string }, bank: { __typename?: 'Bank', id: string, code: string, phone?: string | null, accountNumber: string, accountName: string, walletLimit: number, remainingLimit: number, purpose: string, bankType: { __typename?: 'BankType', code: string } }, clients: Array<{ __typename?: 'Client', id: string, code: string, name: string }> } | null };


export const FetchAttachmentOcrDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FetchAttachmentOcr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"ocr"},"name":{"kind":"Name","value":"fetchAttachmentOcr"}}]}}]} as unknown as DocumentNode<FetchAttachmentOcrMutation, FetchAttachmentOcrMutationVariables>;
export const RemoveAttachmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveAttachment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"attachment"},"name":{"kind":"Name","value":"removeAttachment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attachableId"}},{"kind":"Field","name":{"kind":"Name","value":"attachableType"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveAttachmentMutation, RemoveAttachmentMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"auth"},"name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"userType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"auth"},"name":{"kind":"Name","value":"logoutUser"}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const CreateBankTransferDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBankTransfer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BankTransferAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bankTransfer"},"name":{"kind":"Name","value":"createBankTransfer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"isConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionBank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"sentRef"}},{"kind":"Field","name":{"kind":"Name","value":"recvRef"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attachableType"}},{"kind":"Field","name":{"kind":"Name","value":"attachableId"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"inverseTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"isConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionBank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"sentRef"}},{"kind":"Field","name":{"kind":"Name","value":"recvRef"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attachableType"}},{"kind":"Field","name":{"kind":"Name","value":"attachableId"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<CreateBankTransferMutation, CreateBankTransferMutationVariables>;
export const RemoveBankTransferDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveBankTransfer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bankTransfer"},"name":{"kind":"Name","value":"removeBankTransfer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveBankTransferMutation, RemoveBankTransferMutationVariables>;
export const UpdateBankTransferDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBankTransfer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BankTransferAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bankTransfer"},"name":{"kind":"Name","value":"updateBankTransfer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"isConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionBank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"sentRef"}},{"kind":"Field","name":{"kind":"Name","value":"recvRef"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attachableType"}},{"kind":"Field","name":{"kind":"Name","value":"attachableId"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"inverseTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"isConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionBank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"sentRef"}},{"kind":"Field","name":{"kind":"Name","value":"recvRef"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attachableType"}},{"kind":"Field","name":{"kind":"Name","value":"attachableId"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateBankTransferMutation, UpdateBankTransferMutationVariables>;
export const CreateBankTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBankType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BankTypeAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bankType"},"name":{"kind":"Name","value":"createBankType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateBankTypeMutation, CreateBankTypeMutationVariables>;
export const RemoveBankTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveBankType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bankType"},"name":{"kind":"Name","value":"removeBankType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveBankTypeMutation, RemoveBankTypeMutationVariables>;
export const UpdateBankTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBankType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BankTypeAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bankType"},"name":{"kind":"Name","value":"updateBankType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateBankTypeMutation, UpdateBankTypeMutationVariables>;
export const CreateBankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BankAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bank"},"name":{"kind":"Name","value":"createBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activeWalletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}},{"kind":"Field","name":{"kind":"Name","value":"merchantName"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"isProcessor"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateBankMutation, CreateBankMutationVariables>;
export const RecomputeAllBankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RecomputeAllBank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"recompute"},"name":{"kind":"Name","value":"recomputeAllBank"}}]}}]} as unknown as DocumentNode<RecomputeAllBankMutation, RecomputeAllBankMutationVariables>;
export const RecomputeBankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RecomputeBank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bank"},"name":{"kind":"Name","value":"recomputeBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activeWalletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}},{"kind":"Field","name":{"kind":"Name","value":"merchantName"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"isProcessor"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RecomputeBankMutation, RecomputeBankMutationVariables>;
export const RemoveBankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveBank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bank"},"name":{"kind":"Name","value":"removeBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveBankMutation, RemoveBankMutationVariables>;
export const UpdateBankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BankAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bank"},"name":{"kind":"Name","value":"updateBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activeWalletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}},{"kind":"Field","name":{"kind":"Name","value":"merchantName"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"isProcessor"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateBankMutation, UpdateBankMutationVariables>;
export const CreateBranchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBranch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BranchAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"branch"},"name":{"kind":"Name","value":"createBranch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contactPerson"}},{"kind":"Field","name":{"kind":"Name","value":"contactNumber"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"depositQueue"}},{"kind":"Field","name":{"kind":"Name","value":"depositQueueMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawQueue"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawQueueMultiplier"}}]}}]}}]} as unknown as DocumentNode<CreateBranchMutation, CreateBranchMutationVariables>;
export const RemoveBranchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveBranch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"branch"},"name":{"kind":"Name","value":"removeBranch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contactPerson"}},{"kind":"Field","name":{"kind":"Name","value":"contactNumber"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"depositQueue"}},{"kind":"Field","name":{"kind":"Name","value":"depositQueueMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawQueue"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawQueueMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveBranchMutation, RemoveBranchMutationVariables>;
export const UpdateBranchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBranch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BranchAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"branch"},"name":{"kind":"Name","value":"updateBranch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contactPerson"}},{"kind":"Field","name":{"kind":"Name","value":"contactNumber"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"depositQueue"}},{"kind":"Field","name":{"kind":"Name","value":"depositQueueMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawQueue"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawQueueMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateBranchMutation, UpdateBranchMutationVariables>;
export const CreateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClientAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"client"},"name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"minDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"maxDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"minWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"maxWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"depositRate"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawRate"}},{"kind":"Field","name":{"kind":"Name","value":"depositCommission"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawCommission"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"enableDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"enableWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isSingleCallback"}},{"kind":"Field","name":{"kind":"Name","value":"isAutoCallback"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"totalDepositFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdrawFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalTopup"}},{"kind":"Field","name":{"kind":"Name","value":"totalSettlement"}},{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateClientMutation, CreateClientMutationVariables>;
export const RemoveClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"client"},"name":{"kind":"Name","value":"removeClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"minDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"maxDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"minWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"maxWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"depositRate"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawRate"}},{"kind":"Field","name":{"kind":"Name","value":"depositCommission"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawCommission"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"enableDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"enableWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isSingleCallback"}},{"kind":"Field","name":{"kind":"Name","value":"isAutoCallback"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"totalDepositFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdrawFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalTopup"}},{"kind":"Field","name":{"kind":"Name","value":"totalSettlement"}},{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveClientMutation, RemoveClientMutationVariables>;
export const UpdateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClientAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"client"},"name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"minDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"maxDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"minWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"maxWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"depositRate"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawRate"}},{"kind":"Field","name":{"kind":"Name","value":"depositCommission"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawCommission"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"enableDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"enableWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isSingleCallback"}},{"kind":"Field","name":{"kind":"Name","value":"isAutoCallback"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"totalDepositFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdrawFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalTopup"}},{"kind":"Field","name":{"kind":"Name","value":"totalSettlement"}},{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateClientMutation, UpdateClientMutationVariables>;
export const CreateOptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOption"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OptionAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"option"},"name":{"kind":"Name","value":"createOption"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"optionableId"}},{"kind":"Field","name":{"kind":"Name","value":"optionableType"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateOptionMutation, CreateOptionMutationVariables>;
export const UpdateOptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOption"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OptionAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"option"},"name":{"kind":"Name","value":"updateOption"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"optionableId"}},{"kind":"Field","name":{"kind":"Name","value":"optionableType"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateOptionMutation, UpdateOptionMutationVariables>;
export const CreateSettlementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSettlement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettlementAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"settlement"},"name":{"kind":"Name","value":"createSettlement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"depositRate"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawRate"}},{"kind":"Field","name":{"kind":"Name","value":"depositFee"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalSettlement"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sent"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateSettlementMutation, CreateSettlementMutationVariables>;
export const RemoveSettlementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSettlement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"settlement"},"name":{"kind":"Name","value":"removeSettlement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"depositRate"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawRate"}},{"kind":"Field","name":{"kind":"Name","value":"depositFee"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalSettlement"}},{"kind":"Field","name":{"kind":"Name","value":"sent"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveSettlementMutation, RemoveSettlementMutationVariables>;
export const UpdateSettlementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSettlement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettlementAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"settlement"},"name":{"kind":"Name","value":"updateSettlement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"depositRate"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawRate"}},{"kind":"Field","name":{"kind":"Name","value":"depositFee"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalSettlement"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sent"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateSettlementMutation, UpdateSettlementMutationVariables>;
export const CreateSimCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSimCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SimCardAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"simCard"},"name":{"kind":"Name","value":"createSimCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastLoadDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateSimCardMutation, CreateSimCardMutationVariables>;
export const RemoveSimCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSimCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"simCard"},"name":{"kind":"Name","value":"removeSimCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveSimCardMutation, RemoveSimCardMutationVariables>;
export const UpdateSimCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSimCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SimCardAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"simCard"},"name":{"kind":"Name","value":"updateSimCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastLoadDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateSimCardMutation, UpdateSimCardMutationVariables>;
export const CreateSmsMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSmsMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SmsMessageAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"message"},"name":{"kind":"Name","value":"createSmsMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"smsNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}},{"kind":"Field","name":{"kind":"Name","value":"scheduledAt"}},{"kind":"Field","name":{"kind":"Name","value":"retries"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CreateSmsMessageMutation, CreateSmsMessageMutationVariables>;
export const CreateSmsNodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSmsNode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SmsNodeAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"node"},"name":{"kind":"Name","value":"createSmsNode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"device"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"queued"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateSmsNodeMutation, CreateSmsNodeMutationVariables>;
export const RemoveSmsNodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSmsNode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"node"},"name":{"kind":"Name","value":"removeSmsNode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveSmsNodeMutation, RemoveSmsNodeMutationVariables>;
export const UpdateSmsNodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSmsNode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SmsNodeAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"node"},"name":{"kind":"Name","value":"updateSmsNode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"device"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"queued"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<UpdateSmsNodeMutation, UpdateSmsNodeMutationVariables>;
export const CreateTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"token"},"name":{"kind":"Name","value":"createToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientToken"}},{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateTokenMutation, CreateTokenMutationVariables>;
export const RemoveTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"token"},"name":{"kind":"Name","value":"removeToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientToken"}},{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveTokenMutation, RemoveTokenMutationVariables>;
export const UpdateTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"token"},"name":{"kind":"Name","value":"updateToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientToken"}},{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateTokenMutation, UpdateTokenMutationVariables>;
export const ResendCallbackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResendCallback"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendCallback"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<ResendCallbackMutation, ResendCallbackMutationVariables>;
export const CreateTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"transaction"},"name":{"kind":"Name","value":"createTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"webpayToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claimReferenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusNotes"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"referenceCode"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isCallbackSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusCode"}},{"kind":"Field","name":{"kind":"Name","value":"callbackNotes"}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isWebpay"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const TransferTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TransferTransactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"walletQueueId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"transactions"},"name":{"kind":"Name","value":"transferTransactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"walletQueueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"walletQueueId"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"webpayToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claimReferenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusNotes"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"referenceCode"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isCallbackSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusCode"}},{"kind":"Field","name":{"kind":"Name","value":"callbackNotes"}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isWebpay"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<TransferTransactionsMutation, TransferTransactionsMutationVariables>;
export const UpdateTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"transaction"},"name":{"kind":"Name","value":"updateTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"webpayToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claimReferenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusNotes"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"referenceCode"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isCallbackSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusCode"}},{"kind":"Field","name":{"kind":"Name","value":"callbackNotes"}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isWebpay"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateTransactionMutation, UpdateTransactionMutationVariables>;
export const CreateUserTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserTypeAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"userType"},"name":{"kind":"Name","value":"createUserType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateUserTypeMutation, CreateUserTypeMutationVariables>;
export const RemoveUserTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveUserType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"userType"},"name":{"kind":"Name","value":"removeUserType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveUserTypeMutation, RemoveUserTypeMutationVariables>;
export const UpdateUserTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserTypeAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"userType"},"name":{"kind":"Name","value":"updateUserType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateUserTypeMutation, UpdateUserTypeMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const RemoveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"removeUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveUserMutation, RemoveUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const CreateWalletQueueItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWalletQueueItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WalletQueueItemAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueueItem"},"name":{"kind":"Name","value":"createWalletQueueItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"matchedTransaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkedWalletQueueItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<CreateWalletQueueItemMutation, CreateWalletQueueItemMutationVariables>;
export const RemoveWalletQueueItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveWalletQueueItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueueItem"},"name":{"kind":"Name","value":"removeWalletQueueItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveWalletQueueItemMutation, RemoveWalletQueueItemMutationVariables>;
export const UpdateWalletQueueItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateWalletQueueItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WalletQueueItemAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueueItem"},"name":{"kind":"Name","value":"updateWalletQueueItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"matchedTransaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkedWalletQueueItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateWalletQueueItemMutation, UpdateWalletQueueItemMutationVariables>;
export const CreateWalletQueueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWalletQueue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WalletQueueAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueue"},"name":{"kind":"Name","value":"createWalletQueue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"startingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"endingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"totalSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferIn"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferOut"}},{"kind":"Field","name":{"kind":"Name","value":"totalQueueAmount"}},{"kind":"Field","name":{"kind":"Name","value":"queuedBy"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"queue"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounter"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounterLimit"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCountdown"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateWalletQueueMutation, CreateWalletQueueMutationVariables>;
export const RecomputeWalletQueueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RecomputeWalletQueue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueue"},"name":{"kind":"Name","value":"recomputeWalletQueue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"startingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"endingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"totalSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferIn"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferOut"}},{"kind":"Field","name":{"kind":"Name","value":"totalQueueAmount"}},{"kind":"Field","name":{"kind":"Name","value":"queuedBy"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"queue"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounter"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounterLimit"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCountdown"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RecomputeWalletQueueMutation, RecomputeWalletQueueMutationVariables>;
export const RemoveWalletQueueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeWalletQueue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueue"},"name":{"kind":"Name","value":"removeWalletQueue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveWalletQueueMutation, RemoveWalletQueueMutationVariables>;
export const UpdateWalletQueueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateWalletQueue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WalletQueueAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueue"},"name":{"kind":"Name","value":"updateWalletQueue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"startingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"endingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"totalSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferIn"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferOut"}},{"kind":"Field","name":{"kind":"Name","value":"totalQueueAmount"}},{"kind":"Field","name":{"kind":"Name","value":"queuedBy"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"queue"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounter"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounterLimit"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCountdown"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateWalletQueueMutation, UpdateWalletQueueMutationVariables>;
export const CreateWhitelistedIpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWhitelistedIp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WhitelistedIpAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"whitelistedIp"},"name":{"kind":"Name","value":"createWhitelistedIp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ipAddress"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateWhitelistedIpMutation, CreateWhitelistedIpMutationVariables>;
export const RemoveWhitelistedIpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveWhitelistedIp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"whitelistedIp"},"name":{"kind":"Name","value":"removeWhitelistedIp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ipAddress"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveWhitelistedIpMutation, RemoveWhitelistedIpMutationVariables>;
export const UpdateWhitelistedIpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateWhitelistedIp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WhitelistedIpAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"whitelistedIp"},"name":{"kind":"Name","value":"updateWhitelistedIp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ipAddress"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateWhitelistedIpMutation, UpdateWhitelistedIpMutationVariables>;
export const CurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"fetchCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"userType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"branchId"}},{"kind":"Field","name":{"kind":"Name","value":"clientId"}}]}}]}}]} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const FetchBankTransferDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchBankTransfer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bankTransfer"},"name":{"kind":"Name","value":"fetchBankTransfer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"isConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionBank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"sentRef"}},{"kind":"Field","name":{"kind":"Name","value":"recvRef"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attachableType"}},{"kind":"Field","name":{"kind":"Name","value":"attachableId"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"inverseTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"isConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionBank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"sentRef"}},{"kind":"Field","name":{"kind":"Name","value":"recvRef"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attachableType"}},{"kind":"Field","name":{"kind":"Name","value":"attachableId"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchBankTransferQuery, FetchBankTransferQueryVariables>;
export const FetchBankTransfersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchBankTransfers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bankTransfers"},"name":{"kind":"Name","value":"fetchBankTransfers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"isConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionBank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"sentRef"}},{"kind":"Field","name":{"kind":"Name","value":"recvRef"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attachableType"}},{"kind":"Field","name":{"kind":"Name","value":"attachableId"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"inverseTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"isConfirmed"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionBank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"sentRef"}},{"kind":"Field","name":{"kind":"Name","value":"recvRef"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attachableType"}},{"kind":"Field","name":{"kind":"Name","value":"attachableId"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchBankTransfersQuery, FetchBankTransfersQueryVariables>;
export const FetchBankTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchBankType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bankType"},"name":{"kind":"Name","value":"fetchBankType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchBankTypeQuery, FetchBankTypeQueryVariables>;
export const FetchBankTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchBankTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bankTypes"},"name":{"kind":"Name","value":"fetchBankTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchBankTypesQuery, FetchBankTypesQueryVariables>;
export const FetchBankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchBank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"bank"},"name":{"kind":"Name","value":"fetchBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activeWalletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}},{"kind":"Field","name":{"kind":"Name","value":"merchantName"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"isProcessor"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchBankQuery, FetchBankQueryVariables>;
export const FetchBanksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchBanks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"banks"},"name":{"kind":"Name","value":"fetchBanks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activeWalletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}},{"kind":"Field","name":{"kind":"Name","value":"merchantName"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"isProcessor"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isExternal"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchBanksQuery, FetchBanksQueryVariables>;
export const FetchBranchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchBranch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"branch"},"name":{"kind":"Name","value":"fetchBranch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contactPerson"}},{"kind":"Field","name":{"kind":"Name","value":"contactNumber"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"depositQueue"}},{"kind":"Field","name":{"kind":"Name","value":"depositQueueMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawQueue"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawQueueMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<FetchBranchQuery, FetchBranchQueryVariables>;
export const FetchBranchesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchBranches"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"branches"},"name":{"kind":"Name","value":"fetchBranches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contactPerson"}},{"kind":"Field","name":{"kind":"Name","value":"contactNumber"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"depositQueue"}},{"kind":"Field","name":{"kind":"Name","value":"depositQueueMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawQueue"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawQueueMultiplier"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchBranchesQuery, FetchBranchesQueryVariables>;
export const FetchClientTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchClientToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"clientToken"},"name":{"kind":"Name","value":"fetchClientToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientToken"}},{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchClientTokenQuery, FetchClientTokenQueryVariables>;
export const FetchClientTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchClientTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"clientTokens"},"name":{"kind":"Name","value":"fetchClientTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientToken"}},{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchClientTokensQuery, FetchClientTokensQueryVariables>;
export const FetchClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"client"},"name":{"kind":"Name","value":"fetchClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"minDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"maxDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"minWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"maxWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"depositRate"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawRate"}},{"kind":"Field","name":{"kind":"Name","value":"depositCommission"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawCommission"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"enableDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"enableWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isSingleCallback"}},{"kind":"Field","name":{"kind":"Name","value":"isAutoCallback"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"totalDepositFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdrawFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalTopup"}},{"kind":"Field","name":{"kind":"Name","value":"totalSettlement"}},{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchClientQuery, FetchClientQueryVariables>;
export const FetchClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchClients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"clients"},"name":{"kind":"Name","value":"fetchClients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"minDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"maxDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"minWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"maxWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"depositRate"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawRate"}},{"kind":"Field","name":{"kind":"Name","value":"depositCommission"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawCommission"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"enableDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"enableWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isSingleCallback"}},{"kind":"Field","name":{"kind":"Name","value":"isAutoCallback"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"totalDepositFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdrawFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalTopup"}},{"kind":"Field","name":{"kind":"Name","value":"totalSettlement"}},{"kind":"Field","name":{"kind":"Name","value":"totalBalance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchClientsQuery, FetchClientsQueryVariables>;
export const FetchClientDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchClientDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"dashboard"},"name":{"kind":"Name","value":"fetchClientDashboard"}}]}}]} as unknown as DocumentNode<FetchClientDashboardQuery, FetchClientDashboardQueryVariables>;
export const FetchOptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchOption"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"option"},"name":{"kind":"Name","value":"fetchOption"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"optionableId"}},{"kind":"Field","name":{"kind":"Name","value":"optionableType"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchOptionQuery, FetchOptionQueryVariables>;
export const FetchOptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchOptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"options"},"name":{"kind":"Name","value":"fetchOptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"optionableType"}},{"kind":"Field","name":{"kind":"Name","value":"optionableId"}},{"kind":"Field","name":{"kind":"Name","value":"fieldName"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchOptionsQuery, FetchOptionsQueryVariables>;
export const FetchSettlementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSettlement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"settlement"},"name":{"kind":"Name","value":"fetchSettlement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"depositRate"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawRate"}},{"kind":"Field","name":{"kind":"Name","value":"depositFee"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalSettlement"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sent"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchSettlementQuery, FetchSettlementQueryVariables>;
export const FetchSettlementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSettlements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"settlements"},"name":{"kind":"Name","value":"fetchSettlements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"totalDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"depositRate"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawRate"}},{"kind":"Field","name":{"kind":"Name","value":"depositFee"}},{"kind":"Field","name":{"kind":"Name","value":"withdrawFee"}},{"kind":"Field","name":{"kind":"Name","value":"totalSettlement"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sent"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchSettlementsQuery, FetchSettlementsQueryVariables>;
export const FetchSimCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSimCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"simCard"},"name":{"kind":"Name","value":"fetchSimCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastLoadDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchSimCardQuery, FetchSimCardQueryVariables>;
export const FetchSimCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSimCards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"simCards"},"name":{"kind":"Name","value":"fetchSimCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastLoadDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchSimCardsQuery, FetchSimCardsQueryVariables>;
export const FetchSmsMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSmsMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"message"},"name":{"kind":"Name","value":"fetchSmsMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"smsNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}},{"kind":"Field","name":{"kind":"Name","value":"scheduledAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isInstant"}},{"kind":"Field","name":{"kind":"Name","value":"retries"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<FetchSmsMessageQuery, FetchSmsMessageQueryVariables>;
export const FetchSmsMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSmsMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"smsMessages"},"name":{"kind":"Name","value":"fetchSmsMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"smsNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}},{"kind":"Field","name":{"kind":"Name","value":"scheduledAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isInstant"}},{"kind":"Field","name":{"kind":"Name","value":"retries"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchSmsMessagesQuery, FetchSmsMessagesQueryVariables>;
export const FetchSmsNodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSmsNode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"smsNode"},"name":{"kind":"Name","value":"fetchSmsNode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"device"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"queued"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<FetchSmsNodeQuery, FetchSmsNodeQueryVariables>;
export const FetchSmsNodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSmsNodes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"smsNodes"},"name":{"kind":"Name","value":"fetchSmsNodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"device"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"queued"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchSmsNodesQuery, FetchSmsNodesQueryVariables>;
export const FetchTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"token"},"name":{"kind":"Name","value":"fetchToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientToken"}},{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchTokenQuery, FetchTokenQueryVariables>;
export const FetchTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"tokens"},"name":{"kind":"Name","value":"fetchTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientToken"}},{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchTokensQuery, FetchTokensQueryVariables>;
export const FetchTransactionCallbackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTransactionCallback"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"transactionCallback"},"name":{"kind":"Name","value":"fetchTransactionCallback"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"requestBody"}},{"kind":"Field","name":{"kind":"Name","value":"responseCode"}},{"kind":"Field","name":{"kind":"Name","value":"responseBody"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchTransactionCallbackQuery, FetchTransactionCallbackQueryVariables>;
export const FetchTransactionCallbacksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTransactionCallbacks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"transactionCallbacks"},"name":{"kind":"Name","value":"fetchTransactionCallbacks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"requestBody"}},{"kind":"Field","name":{"kind":"Name","value":"responseCode"}},{"kind":"Field","name":{"kind":"Name","value":"responseBody"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchTransactionCallbacksQuery, FetchTransactionCallbacksQueryVariables>;
export const FetchTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"transaction"},"name":{"kind":"Name","value":"fetchTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"webpayToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claimReferenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusNotes"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"referenceCode"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isCallbackSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusCode"}},{"kind":"Field","name":{"kind":"Name","value":"callbackNotes"}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isWebpay"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchTransactionQuery, FetchTransactionQueryVariables>;
export const FetchTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTransactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"transactions"},"name":{"kind":"Name","value":"fetchTransactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"webpayToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claimReferenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusNotes"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"referenceCode"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isCallbackSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusCode"}},{"kind":"Field","name":{"kind":"Name","value":"callbackNotes"}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isWebpay"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchTransactionsQuery, FetchTransactionsQueryVariables>;
export const FetchUserTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"userType"},"name":{"kind":"Name","value":"fetchUserType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchUserTypeQuery, FetchUserTypeQueryVariables>;
export const FetchUserTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"userTypes"},"name":{"kind":"Name","value":"fetchUserTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchUserTypesQuery, FetchUserTypesQueryVariables>;
export const FetchUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"fetchUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchUserQuery, FetchUserQueryVariables>;
export const FetchUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"users"},"name":{"kind":"Name","value":"fetchUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchUsersQuery, FetchUsersQueryVariables>;
export const FetchWalletQueueItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchWalletQueueItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueueItem"},"name":{"kind":"Name","value":"fetchWalletQueueItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"matchedTransaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkedWalletQueueItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<FetchWalletQueueItemQuery, FetchWalletQueueItemQueryVariables>;
export const FetchWalletQueueItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchWalletQueueItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueueItems"},"name":{"kind":"Name","value":"fetchWalletQueueItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"matchedTransaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkedWalletQueueItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchWalletQueueItemsQuery, FetchWalletQueueItemsQueryVariables>;
export const FetchWalletQueueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchWalletQueue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueue"},"name":{"kind":"Name","value":"fetchWalletQueue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"startingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"endingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"totalSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferIn"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferOut"}},{"kind":"Field","name":{"kind":"Name","value":"totalQueueAmount"}},{"kind":"Field","name":{"kind":"Name","value":"queuedBy"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"queue"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounter"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounterLimit"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCountdown"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchWalletQueueQuery, FetchWalletQueueQueryVariables>;
export const FetchWalletQueuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchWalletQueues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueues"},"name":{"kind":"Name","value":"fetchWalletQueues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"startingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"endingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"totalSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferIn"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferOut"}},{"kind":"Field","name":{"kind":"Name","value":"totalQueueAmount"}},{"kind":"Field","name":{"kind":"Name","value":"queuedBy"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"queue"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounter"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounterLimit"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCountdown"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchWalletQueuesQuery, FetchWalletQueuesQueryVariables>;
export const FetchWebpayTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchWebpayToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"webpayToken"},"name":{"kind":"Name","value":"fetchWebpayToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"merchantName"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"clientNotes"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchWebpayTokenQuery, FetchWebpayTokenQueryVariables>;
export const FetchWebpayTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchWebpayTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"webpayTokens"},"name":{"kind":"Name","value":"fetchWebpayTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"merchantName"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"clientNotes"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchWebpayTokensQuery, FetchWebpayTokensQueryVariables>;
export const FetchWhitelistedIpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchWhitelistedIp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"whitelistedIp"},"name":{"kind":"Name","value":"fetchWhitelistedIp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ipAddress"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchWhitelistedIpQuery, FetchWhitelistedIpQueryVariables>;
export const FetchWhitelistedIpsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchWhitelistedIps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"whitelistedIps"},"name":{"kind":"Name","value":"fetchWhitelistedIps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ipAddress"}},{"kind":"Field","name":{"kind":"Name","value":"isAllowed"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchWhitelistedIpsQuery, FetchWhitelistedIpsQueryVariables>;
export const CreateTransactionUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"CreateTransactionUpdates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"walletQueueId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"transaction"},"name":{"kind":"Name","value":"createTransactionUpdates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"branchId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}}},{"kind":"Argument","name":{"kind":"Name","value":"clientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}},{"kind":"Argument","name":{"kind":"Name","value":"walletQueueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"walletQueueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claimReferenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusNotes"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"referenceCode"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isCallbackSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusCode"}},{"kind":"Field","name":{"kind":"Name","value":"callbackNotes"}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isWebpay"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateTransactionUpdatesSubscription, CreateTransactionUpdatesSubscriptionVariables>;
export const FetchTransactionsUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"FetchTransactionsUpdates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"walletQueueId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"transaction"},"name":{"kind":"Name","value":"fetchTransactionsUpdates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"branchId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}}},{"kind":"Argument","name":{"kind":"Name","value":"clientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}},{"kind":"Argument","name":{"kind":"Name","value":"walletQueueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"walletQueueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claimReferenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusNotes"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"referenceCode"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isCallbackSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusSent"}},{"kind":"Field","name":{"kind":"Name","value":"callbackStatusCode"}},{"kind":"Field","name":{"kind":"Name","value":"callbackNotes"}},{"kind":"Field","name":{"kind":"Name","value":"clientTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"callbackUrl"}},{"kind":"Field","name":{"kind":"Name","value":"redirectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isWebpay"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchTransactionsUpdatesSubscription, FetchTransactionsUpdatesSubscriptionVariables>;
export const CreateWalletQueueItemUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"CreateWalletQueueItemUpdates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"walletQueueId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueueItem"},"name":{"kind":"Name","value":"createWalletQueueItemUpdates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"walletQueueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"walletQueueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"walletQueue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"matchedTransaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"referenceNumber"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<CreateWalletQueueItemUpdatesSubscription, CreateWalletQueueItemUpdatesSubscriptionVariables>;
export const FetchWalletQueueUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"FetchWalletQueueUpdates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueue"},"name":{"kind":"Name","value":"fetchWalletQueueUpdates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"startingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"endingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"totalSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferIn"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferOut"}},{"kind":"Field","name":{"kind":"Name","value":"totalQueueAmount"}},{"kind":"Field","name":{"kind":"Name","value":"queuedBy"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"queue"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounter"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounterLimit"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCountdown"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchWalletQueueUpdatesSubscription, FetchWalletQueueUpdatesSubscriptionVariables>;
export const FetchWalletQueuesUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"FetchWalletQueuesUpdates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"walletQueue"},"name":{"kind":"Name","value":"fetchWalletQueuesUpdates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"branchId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"accountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"walletLimit"}},{"kind":"Field","name":{"kind":"Name","value":"remainingLimit"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}},{"kind":"Field","name":{"kind":"Name","value":"bankType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"queueType"}},{"kind":"Field","name":{"kind":"Name","value":"startingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"endingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"totalSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferIn"}},{"kind":"Field","name":{"kind":"Name","value":"totalTransferOut"}},{"kind":"Field","name":{"kind":"Name","value":"totalQueueAmount"}},{"kind":"Field","name":{"kind":"Name","value":"queuedBy"}},{"kind":"Field","name":{"kind":"Name","value":"processedBy"}},{"kind":"Field","name":{"kind":"Name","value":"confirmedBy"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"queue"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounter"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCounterLimit"}},{"kind":"Field","name":{"kind":"Name","value":"intervalCountdown"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchWalletQueuesUpdatesSubscription, FetchWalletQueuesUpdatesSubscriptionVariables>;