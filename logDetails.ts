// Type alias
type Uid = number | string | undefined

function logDetails(uid: Uid, item: String) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: String) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}

type Platform = 'Windows' | 'Linux' | 'MacOs' | 'ios'

function renderPlatform(platform: Platform) {
    return platform
}

renderPlatform("ios")

logDetails(123, "oi");
logDetails("123", "oi");

logInfo(123, "Luan");
logInfo("123", "Luan");