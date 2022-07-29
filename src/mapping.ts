import { BigInt, cosmos } from "@graphprotocol/graph-ts";
import { TokenSwap, Token } from "../generated/schema";

export function handleSwaps(data: cosmos.EventData): void {
  const height = data.block.header.height;
  const sender = data.event.getAttributeValue("sender");
  const poolId = data.event.getAttributeValue("pool_id");

  // TODO: this should be txhas - event id
  let swap = new TokenSwap(`${height}-${sender}`);
  swap.sender = sender;
  swap.poolId = poolId;
  
  swap.blockNumber =  BigInt.fromString(data.block.header.height.toString());
  // https://github.com/graphprotocol/example-subgraphs/blob/2e8dc502ca5a5b801b69b89f8e769e98825452c3/cosmos/block-filtering/src/mapping.ts#L11
  swap.timestamp = BigInt.fromString(data.block.header.time.seconds.toString());
  // Example swap
  // https://www.mintscan.io/osmosis/txs/26D91921AA1E7A0F83A475E8C05CA9EF94932D0889BBE8752C07382C5714C030
  swap.tokenIn = saveToken(`${height}-${sender}-in`, data.event.getAttributeValue("tokens_in"));
  swap.tokenOut = saveToken(`${height}-${sender}-out`, data.event.getAttributeValue("tokens_out"));

  swap.save();
}

function saveToken(id: string, data: string): string {
  const tokenIn = new Token(id);

  // When assets are transferred through IBC, they lose their original denomination (i.e ATOM)
  // and obtain a new IBC denomination (i.e. ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2).
  // Check this page (https://docs.osmosis.zone/developing/assets/asset-info.html) for a full list of IBC denomination
  // Both amount and denomination come together in the message value (i.e. 123456uatom), so we need to separate them.
  let tokenDenomLength = data.includes('ibc') ? 68 : 5 // IBC denomination is 68 characters long, OSMO is 5 characters long.

  tokenIn.denom = data.substring(data.length - tokenDenomLength, data.length);
  tokenIn.amount = data.substring(0, data.length - tokenDenomLength);
  tokenIn.save();

  return id;
}
