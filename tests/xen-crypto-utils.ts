import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { RankClaimed } from "../generated/XENCrypto/XENCrypto"

// @TODO:
function changetype<T>(arg0: unknown): any {
  throw new Error("Function not implemented.")
}

export function createRankClaimedEvent(user: Address, term: BigInt, rank: BigInt): RankClaimed {
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

