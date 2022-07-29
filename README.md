# Modified Osmosis Token Swap Example

[See the TheGraph hosted deployment](https://thegraph.com/hosted-service/subgraph/miohtama/hackatom-2022).

# Redeploy

To deploy on the TheGraph hosted service:

```shell
npm install -g @graphprotocol/graph-cli
graph codegen
graph build
graph deploy --product hosted-service miohtama/hackatom-2022
```

# Further reading

- [Uniswap v3 subgraph](https://github.com/Uniswap/v3-subgraph/blob/main/schema.graphql)

- [Building subgraphs on Cosmos](https://thegraph.com/docs/en/cookbook/cosmos/)

- [Cosmos subgraph examples](https://github.com/graphprotocol/example-subgraphs/tree/main/cosmos)

- [GAMM Swap event source code](https://github.com/osmosis-labs/osmosis/blob/fe98f6e4453cd32035d277c21ef2f3669b677bb2/x/gamm/keeper/swap.go#L171)