# coding: utf-8
# Fundamentos de Programación de Python
# Proyecto Final

"""te proponemos como proyecto final del curso Fundamentos de Programación Python que desarrolles tu propia billetera digital de tipo Desktop con interfaz de texto, que soporte monedas registradas en coinmarketcap.com, y que permita:
1. Enviar un monto en USD de alguna de las criptomonedas a un destinatario indicado (identificado por un código)
2. Recibir de un enviador (identificado por un código) una cantidad de alguna criptomoneda
3. Consultar el balance de cada una de las criptomonedas en USD
4. Consultar el balance general del usuario en USD usando el precio de la criptomoneda provisto por las APIs de www.binance.com
5. Emitir un histórico de transacciones del usuario indicando fecha, moneda, cantidad y monto en USD para el momento de la transacción
6. Todas las transacciones realizadas por el usuario deben ser almacenadas y mantenidas, así como las cantidades de cada una de las criptomonedas que posea

Colocar un menú de opciones con:

1. Recibir cantidad:
1.1. Solicitar moneda, cantidad a recibir, así como el código.
1.2. Validar moneda, cantidad y código, éste debe ser diferente al propio.
1.3. Sumar cantidad de monedas al saldo.
2. Transferir monto:
2.1. Solicitar moneda, monto y código del destinatario a enviar.
2.2. Validar.
2.3. Restar cantidad de monedas al saldo.
3. Mostrar balance una moneda:
3.1. Solicitar la moneda a mostrar
3.2. Validar existencia de la moneda.
3.3. Mostrar nombre de la moneda, cantidad y monto en USD para ese momento.
4. Mostrar balance general:
4.1. Mostrar nombre de cada moneda, cantidad y monto en USD para ese momento.
4.2. Mostrar monto total en USD de todas las monedas.
5. Mostrar histórico de transacciones:
5.1. Mostrar todas las transacciones indicando fecha, moneda, tipo de operación, código del usuario, cantidad y monto para el momento.
6. Salir del programa
Recuerda hacer las validaciones de las monedas, de los montos, del saldo y de los códigos.
"""
# Funciones

def mostrar_menu_principal() :
    # Imprime el menú principal y solicita que usuario seleccione una opción
    # Revisa que la opción sea válida
    # Ejecuta la función que cumple con lo solicitado
    opcion = 0
    lista = list()
    lista.append("")
    lista.append("Menú Principal")
    lista.append("1. Recibir cantidad")
    lista.append("2. Transferir monto")
    lista.append("3. Mostrar balance (específico)")
    lista.append("4. Mostrar balance general")
    lista.append("5. Mostrar histórico de transacciones")
    lista.append("6. Salir del programa")
    #print(lista)
    while (opcion < 6) :
        #print(lista,opcion,type(opcion)) # pto de control del desarrollador
        for i in lista :
            print(i)
        opcion = int(input("Ingrese una opción (1-6): "))
        #print(opcion,type(opcion)) # Pto de control durante desarrollo
        if (opcion == 1) : 
            print("Opción escogida: Recibir cantidad")
            resultado = recibir_deposito(bitacora)
            #print(type(resultado),resultado) # Pto control durante desarrollo
            if (resultado != 0) :
                bitacora.append(resultado) # Se incorpora el depósito en la bitácora
                print("La transacción se realizó con éxito")
            else :
                print("Error: la transacción no se pudo realizar.") # Hubo un error
            input("Use ENTER para continuar ...")
        elif (opcion == 2) :
            print("Opción escogida: Transferir monto")
            resultado = realizar_transferencia(bitacora)
            #print(type(resultado),resultado)
            if (resultado != 0) :
                bitacora.append(resultado) # Se incorpora el depósito en la bitácora
                print("La transacción se realizó con éxito")
            else :
                print("Error: la transacción no se pudo realizar.") # Hubo un error
            input("Use ENTER para continuar ...")
        elif (opcion == 3) :
            print("Opción escogida: Mostrar balance específico")
            resultado = calcular_balance_especifico(bitacora)
            print(resultado)
            input("Use ENTER para continuar ...")
        elif (opcion == 4) :
            print("Opción escogida: Mostrar balance general")
            balance_general = calcular_balance_general(bitacora)
            mostrar_balance_general(balance_general)
            input("Use ENTER para continuar ...")
        elif (opcion == 5) :
            print("Opción escogida: Mostrar histórico de transacciones")
            mostrar_historico_transacciones(bitacora)
            input("Use ENTER para continuar ...")
        elif (opcion == 6) :
            print("Opción escogida: Salir de la aplicación")
            return(0) # se sale de la función, vuelve al programa principal
    else : # si se escoge una opción no válida, se genera este mensaje de error y se solicita ingresar una nueva opción
        print("ERROR")
        print("Opción escogida no es válida")
        mostrar_menu_principal()

def iniciar_cuentas() :
    # Se realizan transacciones válidas para genear saldos en algunas cuentas.
    # Permite revisar los saldos aunque el usuario no haya ingresado transacciones.
    resultado = list()
    resultado.append([datetime.now(),'USER1','BTC','Rx',10.0])
    resultado.append([datetime.now(),'USER2','ETH','Rx',20.0])
    resultado.append([datetime.now(),'USER3','LTC','Rx',15.0])
    resultado.append([datetime.now(),'USER2','BTC','Tx',1.0])
    resultado.append([datetime.now(),'USER3','ETH','Tx',2.0])
    resultado.append([datetime.now(),'USER1','LTC','Tx',1.5])
    #print(resultado) # pto de control del desarrollador
    return(resultado)


def recibir_deposito(bitacora) :
    # Se solicita la información sobre la criptomoneda, su cantidad y el usuario que la envía
    # Si se cumplen las verificaciones para cada una, se devuelve el valor que debe ser registrado en la bitácora
    # Si alguna condición no se cumple, se devuelve el valor 0, que indica que hubo un error
    #print("Función: Recibir transferencia")
    moneda = input("Ingrese criptomoneda: ")
    cantidad = float(input("Ingrese la cantidad de criptomonedas transferida: "))
    usuario = input("Ingrese el código del usuario que hace la transferencia: ")
    if (validar_moneda(moneda) and validar_cantidad(cantidad) and validar_usuario(usuario)) :
        resultado = (datetime.now(), usuario, moneda, 'Rx', cantidad)
    else : 
        resultado = 0 #Transaccion no se pudo realizar.
    return(resultado)

def realizar_transferencia(bitacora) :
    # Se solicita la información sobre la criptomoneda, su cantidad y el usuario al que se le envía
    # Si se cumplen las verificaciones para cada una, se devuelve el valor que debe ser registrado en la bitácora
    # Si alguna condición no se cumple, se devuelve el valor 0, que indica que hubo un error
    moneda = input("Ingrese criptomoneda: ")
    cantidad = float(input("Ingrese la cantidad de criptomonedas transferida: "))
    usuario = input("Ingrese el código del usuario que hace la transferencia: ")
    if (validar_moneda(moneda) and validar_cantidad(cantidad) and validar_disponibilidad(moneda,cantidad,bitacora)) :
        resultado = (datetime.now(), usuario, moneda, 'Tx', cantidad)
        #print("Realizar transferencia",type(resultado),resultado) # Pto. control durante desarrollo
    else : 
        resultado = 0 #Transaccion no se pudo realizar.
    return(resultado)

def validar_moneda(moneda) :
    # se comprueba que la criptomoneda exista mediante la API
    # Se llama a la función genérica que realiza la consulta a la API de CoinMarketCap
    # La respuesta de la función genérica se compone del símbolo de la criptomoneda, su nombre y su valor (si existe) y sino del símbolo de la criptomoneda, el texto 'indefinido' y el valor '-1'.
    # Si la criptomoneda existe, entonces se retorna un True y la transacción se registra en la bitácora.
    # Si la criptomoneda no existe en el listado se retorna un False y la transacción NO se realiza.
    # Esta función asegura que en la bitácora sólo se registran transacciones con criptomonedas válidas
    respuesta = consulta_API(moneda)
    # print(respuesta)
    if (respuesta[2] < 0) :
        return(False)
    else :
        return(True)

def validar_cantidad(cantidad) :
    # Se comprueba que la cantidad recibida tiene que ser positiva
    if (cantidad > 0) :
        resultado = True
    else :
        resultado = False
    #print("Validar cantidad ",type(resultado),resultado) # Pto. de control durante desarrollo
    return(resultado)

def validar_usuario(usuario) :
    # Se verifica que el usuario que remite o recibe la criptomoneda sea distinto al usuario USER0 que es el dueño de la billetera electrónica.
    # Cualquier otro usuario se considera válido.
    if (usuario != "USER0") :
        resultado = True
    else :
        resultado = False
    #print("Validar usuario ",type(resultado),resultado) # Pto. de control del desarrollador
    return(resultado)

def validar_disponibilidad(moneda,cantidad,bitacora) :
    # Se verifica que el usuario cuente con suficientes fondos para realizar la transferencia
    #print("validar disponibilidad ",moneda,cantidad,bitacora) # Pto. de control del desarrollador
    balance = calcular_balance_general(bitacora)
    #print("validar disponibilidad ",type(balance),balance) # Pto. de control del desarrollador
    if(moneda in balance and cantidad < balance[moneda]) :
        resultado = True
    else :
        resultado = False
    #print("validar disponibilidad ",type(resultado),resultado) # Pto. de control del desarrollador
    return(resultado)

def calcular_balance_general(bitacora) :
    # Se obtiene el saldo de todas las monedas usando un diccionario para encontrar las monedas en las transacciones
    # Si la moneda no existe en el diccionario se incorpora el monto recibido (cuando se abrió la cuenta)
    # Si la moneda existe en el diccionario y se está recibiendo un monto (Rx), se suma al monto existente
    # Si la moneda existe en el diccionario y se está enviando un monto (Tx), se le resta al monto existente
    # El diccionario muestra las monedas y los saldos finales de las transacciones realizadas sobre ella.
    
    #print("Calcular Balance General")
    monedas_usadas = dict() # se crea un diccionario para listar monedas utilizadas y su saldo (diccionario no permite llaves repetidas)
    for i in bitacora :
        #print(i[2:5]) # durante el desarrollo, se puede mostrar la moneda, operación y monto de las transacciones registradas en la bitácora
        a = i[4]
        if (i[2] not in monedas_usadas and i[3] == 'Rx') :
            monedas_usadas.update({str(i[2]):a}) # si la moneda no esta en el diccionario, la incorpora con su saldo
        else :  # si la moneda existe en el diccionario actualiza su saldo
            a = monedas_usadas[i[2]] # obtiene el saldo en el diccionario para la moneda
            #print(a)
            if (i[3] == 'Rx') : # si se recibe un monto, se suma el monto al saldo obtenido y se almacena en la variable 'b'
                b = a + i[4]
            else :              # si se transmite un monto, se resta el monto al saldo obtenido y se almacena en la variable 'b'
                b = a - i[4]
            monedas_usadas.update({str(i[2]):b}) # se actualiza el valor del saldo en el diccionario para la moneda (se guarda el valor de la variable 'b')
    #print(monedas_usadas)
    return(monedas_usadas)


def calcular_balance_especifico(bitacora) :
    # Se reutiliza la función que calcula el balance general y que genera como resultado un diccionario con el conjunto de balances del usuario
    # Se solicita al usuario la moneda que desea consultar y se verifica si existe
    # Si existe se consulta por el valor en dólares de la moneda y se construye una respuesta
    # si no existe se hace la indicación.
    balance = calcular_balance_general(bitacora)
    moneda = input("Ingrese criptomoneda: ")
    if(moneda in balance) :
        resultado = "Posee " + str(balance[moneda]) + ' ' + moneda + ' que tienen un valor en USD de: ' + str(balance[moneda]*calcular_valor_USD(moneda))
    else :
        resultado = "Moneda no encontrada" 
    return(resultado)


def mostrar_balance_general(balance_general) :
    # se utiliza una función para obtener el valor de la criptomoneda mediante un API
    total = 0.0 # variable local para calcular el total en USD
    #print(balance_general,type(balance_general)) #pto de control
    for (k,v) in balance_general.items() :
        total = total + v*calcular_valor_USD(k)
        #print('K:',k)
        #print('V:',v)
        #print('D:',v*calcular_valor_USD(k))
        print('Posee',v,k,'que tienen un valor de',v*calcular_valor_USD(k))
    print("El valor total en USD es de:",total)

def calcular_valor_USD(moneda) :
    # Se llama a la función genérica que realiza la consulta a la API de CoinMarketCap
    # Se toma sólo el valor en dólares de la criptomoneda
    # No es necesario validar la criptomoneda, porque ese proceso se hace cuando se reciben los depósitos, por lo que en la 'bitacora' sólo pueden haber registros de criptomonedas válidas
    # La respuesta de la función genérica se compone del símbolo de la criptomoneda, su nombre y su valor (si existe) y sino del símbolo de la criptomoneda, el texto 'indefinido' y el valor '-1'.
    respuesta = consulta_API(moneda)
    #print(respuesta)
    return(respuesta[2])

def consulta_API(moneda) :
    # estructura de la consulta genérica que requiere utilizar la API de CoinMarketCap
    # devuelve una respuesta genérica y se selecciona la parte que se ocupa dependiendo del caso (la función que la llama)
    # La respuesta se compone del símbolo de la criptomoneda, su nombre y su valor (si existe) y sino del símbolo de la criptomoneda, el texto 'indefinido' y el valor '-1'.
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
    parameters = {
        'symbol': moneda
    }
    headers = {
      'Accepts': 'application/json',
      'X-CMC_PRO_API_KEY': '5949f7b4-344d-4126-95af-9dab083f5c3f',
    }
    # Se ejecuta la consulta y se procesa la respuesta
    # La respuesta se compone de 2 partes (status y data)
    # Si la criptomoneda existe, el 'código de error' es 0 y se puede obtener la información de la sección de datos
    r = requests.get(url, headers=headers, params=parameters)
    d = json.loads(r.text)
    error_code = d['status']['error_code']
    #print('Error code: ',error_code)
    #print('Status: ',d['status'])
    #print('Datos: ',d['data'],type(d['data']))
    # Se detectó que para la criptomoneda XYZ la sección de datos (data) estaba vacía por lo que se evalúa para que el programa funcionara bien bajo esta condición
    if (error_code == 0 and bool(d['data'])) :
        nombre = d['data'][moneda]['name']
        precio = d['data'][moneda]['quote']['USD']['price']
        resultado = (moneda, nombre, precio)
    else :
        resultado = (moneda,'desconocido','-1')
    return(resultado)


def mostrar_historico_transacciones(bitacora) :
    # a, b, c : son variables para construir el resultado
    # for i in bitacora : print(i) # Pto de control
    for fila in bitacora :
        # print(type(fila),fila) # Pto de control
        a = str(fila[0].strftime("%Y-%m-%d %H:%M:%S Transferencia "))
        b = "hacia " if fila[3] == "Tx" else "desde "
        c = a + b + fila[1] + ' de ' + str(fila[4]) + ' ' +fila[2]
        print(c)

# Programa Principal

from datetime import datetime
import requests
import json

 # se generan registros de transacciones para la cuenta, se almacenan en una lista, crea un histórico válido
bitacora = iniciar_cuentas()
for i in bitacora : print(i)
print("Cuentas iniciadas")

# Se hace presentación del programa
print("\n"*25)
print("Fundamentos de Programación de Python")
print("Proyecto Final")
print("ABC")
print("")
mostrar_menu_principal()

# Fin del programa
print("Adiós\n")
