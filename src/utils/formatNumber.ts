function formatNumber(a:string):number{
    return Number(a)*2
}

formatNumber("10")

export function formatDate(sana:Date):string{
    return sana.toLocaleString()
}
