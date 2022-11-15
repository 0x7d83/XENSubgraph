import { MintClaimed, RankClaimed } from "../generated/XENCrypto/XENCrypto"
import { RankClaimedEntity, MintClaimedEntity } from "../generated/schema"
import { ethereum } from "@graphprotocol/graph-ts"

export function handleRankClaimed(event: RankClaimed): void {
  let id = event.transaction.hash.toHex()
  let entity = RankClaimedEntity.load(id)

  if (!entity) {
    entity = new RankClaimedEntity(id)
    entity.blockNumber = event.block.number
    entity.transactionHash = event.transaction.hash

    let receipt = event.params._event.receipt as  ethereum.TransactionReceipt
    entity.transactionFee = receipt.gasUsed

    entity.userAddress = event.transaction.from
    entity.platformAddress = event.transaction.to

    entity.mintAddress = [event.params.user.toHex()]
    entity.mintTerm = event.params.term
    entity.mintStartRank = event.params.rank

  } else {
    let arr = entity.mintAddress
    arr.push(event.params.user.toHex())
    entity.mintAddress = arr
  }
  entity.save()
}

export function handleMintClaimed(event: MintClaimed): void {
  let id = event.transaction.hash.toHex()
  let entity = MintClaimedEntity.load(id)

  if (!entity) {
    entity = new MintClaimedEntity(id)
    entity.blockNumber = event.block.number
    entity.transactionHash = event.transaction.hash

    let receipt = event.params._event.receipt as  ethereum.TransactionReceipt
    entity.transactionFee = receipt.gasUsed

    entity.userAddress = event.transaction.from
    entity.platformAddress = event.transaction.to

    entity.claimedAddress = [event.params.user.toHex()]
    entity.claimedAmount = event.params.rewardAmount
  } else {
    let arr = entity.claimedAddress
    arr.push(event.params.user.toHex())
    entity.claimedAddress = arr
  }

  entity.save()
}

// export function handleApproval(event: Approval): void { }
// export function handleStaked(event: Staked): void { }
// export function handleTransfer(event: Transfer): void { }
// export function handleWithdrawn(event: Withdrawn): void { }
