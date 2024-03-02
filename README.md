
## Ejercicio con TypeScript y React

**Crea una tabla que consume una base de datos de productos https://fakestoreapi.com/products y muestra sus datos.**
**Añade además un modal que te permita ver más datos**

### Tipado de properties entre componentes:

En el componente padre se envia la props con normalidad:
```javascript 
<ButtonMoreDetails description={obj.description} title={obj.title}></ButtonMoreDetails>
```

En el componente hijo se desestructura el objeto:
```javascript 
export const ButtonMoreDetails = ({description}:{description:string}) => { ......}
```

En el componente hijo se desestructura el objeto en caso de tratarse de varias props mejor sacar el tipado fuera, antes de la función exportada:

```javascript 
type ButtonMoreDetailsPropTypes = {
    description:string,
    title:string
}

export const ButtonMoreDetails = ({description,title}:ButtonMoreDetailsPropTypes) => {....}
```