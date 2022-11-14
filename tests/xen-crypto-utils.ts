import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  MintClaimed,
  RankClaimed,
  Staked,
  Transfer,
  Withdrawn
} from "../generated/XENCrypto/XENCrypto"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createMintClaimedEvent(
  user: Address,
  rewardAmount: BigInt
): MintClaimed {
  let mintClaimedEvent = changetype<MintClaimed>(newMockEvent())

  mintClaimedEvent.parameters = new Array()

  mintClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  mintClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardAmount",
      ethereum.Value.fromUnsignedBigInt(rewardAmount)
    )
  )

  return mintClaimedEvent
}

export function createRankClaimedEvent(
  user: Address,
  term: BigInt,
  rank: BigInt
): RankClaimed {
  let rankClaimedEvent = changetype<RankClaimed>(newMockEvent())

  rankClaimedEvent.parameters = new Array()

  rankClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rankClaimedEvent.parameters.push(
    new ethereum.EventParam("term", ethereum.Value.fromUnsignedBigInt(term))
  )
  rankClaimedEvent.parameters.push(
    new ethereum.EventParam("rank", ethereum.Value.fromUnsignedBigInt(rank))
  )

  return rankClaimedEvent
}

export function createStakedEvent(
  user: Address,
  amount: BigInt,
  term: BigInt
): Staked {
  let stakedEvent = changetype<Staked>(newMockEvent())

  stakedEvent.parameters = new Array()

  stakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("term", ethereum.Value.fromUnsignedBigInt(term))
  )

  return stakedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createWithdrawnEvent(
  user: Address,
  amount: BigInt,
  reward: BigInt
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return withdrawnEvent
}
