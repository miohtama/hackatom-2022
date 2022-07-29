You need
    Reserve token (JUNO)
    Base token (on a target pool) (OSMO)
    Pool JUNI/OSMO
On Deposit Msg
    User deposits JUNO
    Add incoming reserve token balance to vault
On Withdraw Msg
    Send all reserved tokens and base tokens to the sender
    User receives JUNO
    User receives JUNO
On Buy Msg
    Get the current vault reserve token balance
    Send MsgSwapExactAmountIn with all available balance
    Swap all JUNO to OSMO
On Sell MSg
    Get the current vault base token balance
    Send MsgSwapExactAmountIn with all available balance
    Swap all OSMO to JUNO

    
https://github.com/osmosis-labs/osmosis/blob/18d70da2a881f3a938975d7cc55a9107edef6212/proto/osmosis/gamm/v1beta1/tx.proto#L68
