import ethers from "ethers";
import * as PushAPI from "@pushprotocol/restapi";
const PK = process.env.PRIVATE_KEY;

const Pkey = `0x${PK}`;
export const optIn = async (userAddress: string) => {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const _signer = provider.getSigner();

    const subscribe = await PushAPI.channels.subscribe({
        // @ts-ignore
        signer: _signer,
        channelAddress: 'eip155:80001:0x5e97BBfb258fBb110231c4f01C693ef6BA9553a6',
        userAddress: `eip155:80001:${userAddress}`,
        onSuccess: () => {
            console.log('opt-in success')
        },
        onError: () => {
            console.log('opt-in error')
        },
        env: 'staging'
    })

};