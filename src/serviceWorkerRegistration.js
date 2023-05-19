export function register() {
    if ('serviceWorker' in navigator) {
        // let swUrl = `${process.env.PUBLIC_URL}/swDev.js`;
        // console.log('EEE', process.env.PUBLIC_URL, swUrl)
        navigator.serviceWorker.register("./sw.ts").then((reg) => {
            //console.log("serviceWorker registered successfully",reg)
        })
            .catch((err) => {
                //console.log("serviceWorker failed to register",err)
            })
    }
}
