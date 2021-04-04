export default class Engine {
    constructor() {
        loading:false
    }

    submitData = async (method, headers, body) => {
        const res = await fetch();
        if (!res.ok) throw new error("Cant fetch data try again later")
        return res.json()
    }
}

