// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
    id: number,
    name: string,
    email?: string
}

const account: AccountInfo = {
    id: 123,
    name: "luan",
    email: "ogawa.luan@gmail.com"
}

type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo = {
    nickname: "luanzo",
    level: 100
}

//Intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: "ogawa",
    email: "ogawa.luan@gmail.com",
    nickname: "ogawasan",
    level: 101
}
