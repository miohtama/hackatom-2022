# How to get Beaker up and running on macOS

- [Install Rust using rustup](https://github.com/osmosis-labs/beaker/issues/93)
- Install Docker for Mac
- [Install Osmosis using LocalOsmosis Docker](https://github.com/osmosis-labs/LocalOsmosis)

# Start LocalOsmosis

-Start LocalOsmosis using Docker.

```shell
git clone https://github.com/osmosis-labs/LocalOsmosis.git
cd LocalOsmosis
make start
```

# Counter example

- [Create new project using Beaker template](https://github.com/osmosis-labs/beaker#your-first-cosmwasm-contract-with-beaker)
- Compile:

```shell
cargo install -f beaker
beaker wasm deploy counter --signer-account test1 --no-wasm-opt --raw '{ "count": 0 }' --admin signer
```

# TypeScript console

Should just work:

```shell
beaker console
```

