let compose =(...functions)=>(initialComponent)=>{
    return functions.reduceRight((acumulator,curentFunc)=>{return curentFunc(acumulator)},initialComponent)
}
export default compose;