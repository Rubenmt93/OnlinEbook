import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'stripeError'
})
export class StripeErrorPipe implements PipeTransform{

    transform( error:string):string {
       switch(error){
        case "authentication_required":
            return "La tarjeta se rechazó porque la transacción requiere autenticación"
        case "approve_with_id":
            return "No se puede autorizar el pago."
     
        case "card_not_supported":
            return "La tarjeta no acepta este tipo de compras."
            
        case "card_velocity_exceeded":
            return "El cliente ha excedido el límite del saldo o del crédito disponible en su tarjeta."

        case "currency_not_supported":
            return "La tarjeta no acepta la divisa especificada."

        case "card_not_supported":
            return "La tarjeta no acepta este tipo de compras."
            
        case "card_velocity_exceeded":
            return "El cliente ha excedido el límite del saldo o del crédito disponible en su tarjeta."
    
        case "currency_not_supported":
            return "La tarjeta no acepta la divisa especificada."
            
        case "duplicate_transaction":
            return "Hace muy poco se realizó otra transacción por el mismo importe con una tarjeta de crédito con los mismos datos."

        case "expired_card	":
            return "La tarjeta ha caducado."
            
        case "fraudulent":
            return "El pago se ha rechazado porque Stripe sospecha que es fraudulento."
    
        case "incorrect_number	":
            return "El número de tarjeta no es correcto."

        case "incorrect_cvc":
            return "El número de CVC no es correcto."   

        case "invalid_account":
            return "La tarjeta o la cuenta a la que está conectada la tarjeta no es válida."

        case "invalid_amount":
            return "El importe del pago no es válido o excede el importe permitido.	"

        case "insufficient_funds":
            return "La tarjeta no tiene fondos suficientes para hacer la compra."

        case "duplicate_transaction":
            return "Hace muy poco se realizó otra transacción por el mismo importe con una tarjeta de crédito con los mismos datos."

        default:
            return "La tarjeta se ha rechazado por un motivo desconocido."  
       }
       
    }

}