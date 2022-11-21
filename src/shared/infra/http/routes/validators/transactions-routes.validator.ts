import { TransactionCodes } from '@modules/transactions/constants/transaction-codes.enum'
import { query } from 'express-validator'
import { defaultCheck } from './default.validator'

export const getTransactionsValidator = [
  query('transaction_code')
    .optional()
    .isIn([TransactionCodes['cash-in'], TransactionCodes['cash-out'], TransactionCodes.transfer])
    .withMessage('transaction_code query must be one of (cash-in, cash-out, transfer)'),
  query('transaction_date')
    .optional()
    .matches(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/)
    .withMessage('transaction_date query date format must be \'dd-mm-yyyy\''),
  defaultCheck
]
