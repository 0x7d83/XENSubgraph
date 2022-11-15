import { RankClaimed } from "../generated/XENCrypto/XENCrypto"
import { RankClaimedEntity } from "../generated/schema"

export function handleRankClaimed(event: RankClaimed): void {
  let id = event.transaction.hash.toHex()
  let entity = RankClaimedEntity.load(id)

  if (!entity) {
    entity = new RankClaimedEntity(id)
    entity.blockNumber = event.block.number
    entity.transactionHash = event.transaction.hash

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
