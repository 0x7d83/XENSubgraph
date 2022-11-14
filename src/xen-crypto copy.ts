import { BigInt } from "@graphprotocol/graph-ts"
import {
  XENCrypto,
  Approval,
  MintClaimed,
  RankClaimed,
  Staked,
  Transfer,
  Withdrawn
} from "../generated/XENCrypto/XENCrypto"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.AUTHORS(...)
  // - contract.DAYS_IN_YEAR(...)
  // - contract.EAA_PM_START(...)
  // - contract.EAA_PM_STEP(...)
  // - contract.EAA_RANK_STEP(...)
  // - contract.GENESIS_RANK(...)
  // - contract.MAX_PENALTY_PCT(...)
  // - contract.MAX_TERM_END(...)
  // - contract.MAX_TERM_START(...)
  // - contract.MIN_TERM(...)
  // - contract.REWARD_AMPLIFIER_END(...)
  // - contract.REWARD_AMPLIFIER_START(...)
  // - contract.SECONDS_IN_DAY(...)
  // - contract.TERM_AMPLIFIER(...)
  // - contract.TERM_AMPLIFIER_THRESHOLD(...)
  // - contract.WITHDRAWAL_WINDOW_DAYS(...)
  // - contract.XEN_APY_DAYS_STEP(...)
  // - contract.XEN_APY_END(...)
  // - contract.XEN_APY_START(...)
  // - contract.XEN_MIN_BURN(...)
  // - contract.XEN_MIN_STAKE(...)
  // - contract.activeMinters(...)
  // - contract.activeStakes(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.balanceOf(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.genesisTs(...)
  // - contract.getCurrentAMP(...)
  // - contract.getCurrentAPY(...)
  // - contract.getCurrentEAAR(...)
  // - contract.getCurrentMaxTerm(...)
  // - contract.getGrossReward(...)
  // - contract.getUserMint(...)
  // - contract.getUserStake(...)
  // - contract.globalRank(...)
  // - contract.increaseAllowance(...)
  // - contract.name(...)
  // - contract.symbol(...)
  // - contract.totalSupply(...)
  // - contract.totalXenStaked(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.userBurns(...)
  // - contract.userMints(...)
  // - contract.userStakes(...)
}

export function handleMintClaimed(event: MintClaimed): void {}

export function handleRankClaimed(event: RankClaimed): void {}

export function handleStaked(event: Staked): void {}

export function handleTransfer(event: Transfer): void {}

export function handleWithdrawn(event: Withdrawn): void {}
