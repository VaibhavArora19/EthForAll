import ethers from "ethers";
import * as PushAPI from "@pushprotocol/restapi";
const PK = process.env.PRIVATE_KEY;

const Pkey = `0x${PK}`;
export const optIn = async (userAddress: string, _signer: any) => {

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

export const sendNotification = async (isLive: boolean, address: string, payloadTitle: string, payloadBody: string, subscribers: string[], _signer: any) => {

        let title;
        if(isLive) {
            title = `${address} is Live now.`
        }else {
            title = `${address} posted a new video`
        }

        let totalSubscribers = subscribers.map((subscriber) => {
            return `eip155:80001:${subscriber}`
        })
         
        try {
        const apiResponse = await PushAPI.payloads.sendNotification({
            signer: _signer,
            type: 3,
            identityType: 2,
            notification:{
                title,
                body: 'Watch now',
            },
            payload: {
                title: payloadTitle,
                body: payloadBody,
                cta: '',
                img: ''
            },
            recipients: totalSubscribers,
            channel : 'eip155:80001:0x5e97BBfb258fBb110231c4f01C693ef6BA9553a6',
            env: 'staging'
        }) 

        console.log('API Response', apiResponse);
    }catch(err) {
        console.error('Error ',err);
    }
};

export const getNotifications = async (address: string) => {

    const notifications = await PushAPI.user.getFeeds({
        user: `eip155:80001:${address}`,
        env: 'staging'
    }) 

    return notifications;
}


export const getSubscriptions = async (address: string) => {
    const subcriptions = await PushAPI.user.getSubscriptions({
        user: `eip155:80001:${address}`,
        env: 'staging'
    });
}