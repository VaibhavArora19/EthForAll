import { Framework } from "@superfluid-finance/sdk-core";
import {ethers} from "ethers";

export async function createFlow(sender: string, receipient: string, flowRate: string) {

    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    
    const sf = await Framework.create({
        chainId: 80001,
        provider: provider
    })

    const daix = await sf.loadSuperToken("fDAIx");

    try {
        const createFlowOperation = daix.createFlow({
            sender,
            receiver: receipient,
            flowRate
        })

        console.log(createFlowOperation);
        console.log("Creating your stream...");

        await createFlowOperation.exec(signer);
    }
    catch(err) {
        console.log(  "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!")
    }

}


export const deleteFlow = async (sender: string, receiver: string) => {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sf = await Framework.create({
        chainId: 80001,
        provider: provider
    });
    
    const daix = await sf.loadSuperToken("fDAIx");

    const flowOp = daix.deleteFlow({
        sender,
        receiver,
    });

    await flowOp.exec(signer);
};

export const updateFlow = async (sender: string, receiver: string, flowRate: string) => {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sf = await Framework.create({
        chainId: 80001,
        provider: provider
    });
    
    const daix = await sf.loadSuperToken("fDAIx");

    const flowOp = daix.updateFlow({
        sender,
        receiver,
        flowRate,
    });

    await flowOp.exec(signer);
}

export const getFlowInfo = async (sender: string, receiver: string) => {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sf = await Framework.create({
        chainId: 80001,
        provider: provider
    });

    const daix = await sf.loadSuperToken('fDAIx');

    const flowInfo = await daix.getFlow({
        sender,
        receiver,
        providerOrSigner: signer
    });

    return flowInfo;
};