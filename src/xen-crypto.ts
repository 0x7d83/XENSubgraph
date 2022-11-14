import { log } from "@graphprotocol/graph-ts"
import {
  XENCrypto,
  // Approval,
  // MintClaimed,
  RankClaimed,
  // Staked,
  // Transfer,
  // Withdrawn
} from "../generated/XENCrypto/XENCrypto"
import { RankClaimedEntity } from "../generated/schema"

export function handleRankClaimed(event: RankClaimed): void {
  let id = event.transaction.hash.toHex()
  let entity = RankClaimedEntity.load(id)

  if (!entity) {
    entity = new RankClaimedEntity(id)
    // entity.logIndex = event.logIndex
    // entity.transactionLogIndex = event.transactionLogIndex
    entity.blockNumber = event.block.number
    entity.transactionHash = event.transaction.hash
    // entity.transaction_fee = 

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

  // log.info("event address", [event.address.toHex()])
  // log.warning("test log", ["feawfwafwafe"])

  // let contract = XENCrypto.bind(event.address)
  // let mintinfo = contract.userMints(event.params.user)
  // log.info("mint info ", [mintinfo.value0.toHex(), mintinfo.value1.toHex()])
  // if(mintinfo) {
  //   entity.isClaimed = true
  // } else {
  //   entity.isClaimed = false
  // }

  // let receipt = event.receipt as ethereum.TransactionReceipt
  // log.info("info logo receipt: ", [receipt.gasUsed.toString()])
  entity.save()
}

// export function handleApproval(event: Approval): void { }

// export function handleMintClaimed(event: MintClaimed): void { }

// export function handleStaked(event: Staked): void { }

// export function handleTransfer(event: Transfer): void { }

// export function handleWithdrawn(event: Withdrawn): void { }
