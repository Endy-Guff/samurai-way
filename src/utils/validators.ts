export const required = (value: string) =>{
    if (value) return undefined

    return 'Field is required'
}

const maxLengthCreator = (length: number)=>{
    return (value: string) =>{
        if(value&&value.length<length) return undefined

        return `Field should be max ${length} symbols`
    }
}

export const maxLength30 = maxLengthCreator(30)
export const maxLength50 = maxLengthCreator(50)

