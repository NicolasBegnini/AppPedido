export const NumberServices = {

    currency(value){

        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        return formatter.format(value)        
    }

}