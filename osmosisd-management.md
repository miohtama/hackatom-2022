# Running Osmosis node (osmosisd) for JSON-RPC

## Docs

- [Osmosis documentation](https://docs.osmosis.zone/)
- [Use MintScan as explorer](https://www.mintscan.io/osmosis)

## Installation

- Ubuntu Linux 22.04

- [Use interactive installed](https://get.osmosis.zone/).

- Ports are open to public by default
    - RPC 1317
    - gRPC 9090
    - 26657 (?)
    - 26656 (?)

- Installer will drop systemd file at `/lib/systemd/system/osmosisd.service`

## View logs

Tail from journald:

```shell
journalctl -fu osmosisd
```

## Check node status

```shell
osmosisd status 2> >( jq . )
```

Prints like

```json
{
  "NodeInfo": {
    "protocol_version": {
      "p2p": "8",
      "block": "11",
      "app": "9"
    },
    "id": "3da99562b0b413628714f36430a39ba49b059cee",
    "listen_addr": "tcp://0.0.0.0:26656",
    "network": "osmosis-1",
    "version": "0.34.19",
    "channels": "40202122233038606100",
    "moniker": "tradingstrategy",
    "other": {
      "tx_index": "on",
      "rpc_address": "tcp://127.0.0.1:26657"
    }
  },
  "SyncInfo": {
    "latest_block_hash": "9C4A5BC9F7A701CDEFCFE84B4EF6DAFDF133186C7DBC8AC0DB95717D87EB93AE",
    "latest_app_hash": "B833044123385F4B425056D80484AD2D07B0A080621BFDBCFD5074A579DACA9C",
    "latest_block_height": "5262085",
    "latest_block_time": "2022-07-22T09:55:51.274866306Z",
    "earliest_block_hash": "C8DC787FAAE0941EF05C75C3AECCF04B85DFB1D4A8D054A463F323B0D9459719",
    "earliest_app_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
    "earliest_block_height": "1",
    "earliest_block_time": "2021-06-18T17:00:00Z",
    "catching_up": true
  },
  "ValidatorInfo": {
    "Address": "4FA024B9A3D04A88D632CA25490A760CDB76FBFF",
    "PubKey": {
      "type": "tendermint/PubKeyEd25519",
      "value": "ZeOqoezWNsIchNG0gdlDonD2o3K04FiImlXczDEMyf4="
    },
    "VotingPower": "0"
  }
}
```

## Checking the latest block / is node caught up

Are you synced?

Get the latest block

```shell
osmosisd status
```

Check 

- `latest_block_time`
- `latest_block_height`
- `catching_up`

[You can compare the latest block height to MintScan status](https://www.mintscan.io/osmosis).

# Using RPC

## Get a block

You can visit with your browser directly

- http://your-public-ip:1317/cosmos/base/tendermint/v1beta1/blocks/4000000


