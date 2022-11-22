import type {BigNumber} from 'ethers'

export const SECONDS_PER_DAY = 60 * 60 * 24
export const DAYS_PER_YEAR = 365

export function isPaymentLate(timestemp: BigNumber, nextDueTime: BigNumber, balance: BigNumber) {
    return balance.gt(0) && timestemp.gt(nextDueTime)

}

export function isPaymentLateForGracePeriod(timestemp: BigNumber, nextDueTime: BigNumber, gracePeriodLateness: BigNumber, balance: BigNumber) {
    return balance.gt(0) && timestemp.gt(nextDueTime.add(gracePeriodLateness.mul(SECONDS_PER_DAY)))
}