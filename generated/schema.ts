// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ReceiptEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ReceiptEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ReceiptEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ReceiptEntity", id.toString(), this);
    }
  }

  static load(id: string): ReceiptEntity | null {
    return changetype<ReceiptEntity | null>(store.get("ReceiptEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockHash(): Bytes | null {
    let value = this.get("blockHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set blockHash(value: Bytes | null) {
    if (!value) {
      this.unset("blockHash");
    } else {
      this.set("blockHash", Value.fromBytes(<Bytes>value));
    }
  }

  get blockNumber(): BigInt | null {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt | null) {
    if (!value) {
      this.unset("blockNumber");
    } else {
      this.set("blockNumber", Value.fromBigInt(<BigInt>value));
    }
  }

  get contractAddress(): Bytes | null {
    let value = this.get("contractAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set contractAddress(value: Bytes | null) {
    if (!value) {
      this.unset("contractAddress");
    } else {
      this.set("contractAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get cumulativeGasUsed(): BigInt | null {
    let value = this.get("cumulativeGasUsed");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set cumulativeGasUsed(value: BigInt | null) {
    if (!value) {
      this.unset("cumulativeGasUsed");
    } else {
      this.set("cumulativeGasUsed", Value.fromBigInt(<BigInt>value));
    }
  }

  get gasUsed(): BigInt | null {
    let value = this.get("gasUsed");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set gasUsed(value: BigInt | null) {
    if (!value) {
      this.unset("gasUsed");
    } else {
      this.set("gasUsed", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class RankClaimedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RankClaimedEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RankClaimedEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RankClaimedEntity", id.toString(), this);
    }
  }

  static load(id: string): RankClaimedEntity | null {
    return changetype<RankClaimedEntity | null>(
      store.get("RankClaimedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transactionHash(): Bytes | null {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes | null) {
    if (!value) {
      this.unset("transactionHash");
    } else {
      this.set("transactionHash", Value.fromBytes(<Bytes>value));
    }
  }

  get transactionFee(): BigInt | null {
    let value = this.get("transactionFee");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set transactionFee(value: BigInt | null) {
    if (!value) {
      this.unset("transactionFee");
    } else {
      this.set("transactionFee", Value.fromBigInt(<BigInt>value));
    }
  }

  get userAddress(): Bytes | null {
    let value = this.get("userAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set userAddress(value: Bytes | null) {
    if (!value) {
      this.unset("userAddress");
    } else {
      this.set("userAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get platformAddress(): Bytes | null {
    let value = this.get("platformAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set platformAddress(value: Bytes | null) {
    if (!value) {
      this.unset("platformAddress");
    } else {
      this.set("platformAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get mintAddress(): Array<string> {
    let value = this.get("mintAddress");
    return value!.toStringArray();
  }

  set mintAddress(value: Array<string>) {
    this.set("mintAddress", Value.fromStringArray(value));
  }

  get mintTerm(): BigInt | null {
    let value = this.get("mintTerm");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mintTerm(value: BigInt | null) {
    if (!value) {
      this.unset("mintTerm");
    } else {
      this.set("mintTerm", Value.fromBigInt(<BigInt>value));
    }
  }

  get mintStartRank(): BigInt | null {
    let value = this.get("mintStartRank");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mintStartRank(value: BigInt | null) {
    if (!value) {
      this.unset("mintStartRank");
    } else {
      this.set("mintStartRank", Value.fromBigInt(<BigInt>value));
    }
  }
}
