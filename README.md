# Characters list of Star Wars

El ejercicio consiste en desarrollar una página web responsive con un listado de personajes de Star Wars que puede ordenarse por orden alfabético o por altura a partir de dos botones. Además, al hacer click sobre cada nombre, muestra algunos detalles más del personaje. He utilizado React para realizarlo. Estas son las distintas partes del ejercicio:

PRIMERA PARTE: Al cargar la página se muestra el listado de personajes. Desde el componente App.js se realiza la llamada a la API, contenida en otro componente Api.js (carpeta services), y se guardan los datos en el estado. El componente CharacterList contiene el html de ese listado y a su vez el componente CharacterPackage, que contiene la información gruesa de cada personaje. Soy consciente de que la API está paginada y sólo se están mostrando los 10 primeros personajes como un todo. Como la API solo da la opción de mostrar los personajes de 10 en 10, crearía un botón para ver los siguientes 10 y en cada click habría que hacer una llamada a la API a la url de los siguientes 10. Actualmente estoy trabajando en ello.

SEGUNDA PARTE: Al pinchar en cada nombre de la lista, se muestran algunos detalles seleccionados del personaje en una tarjeta. Para ello, he creado otro componente, CharacterDetails.js y he utilizado las rutas de React Router.

TERCERA PARTE: La lista se ordena por orden alfabético de los nombres y por altura, para lo que hay dos botones respectivamente. Para ello, he creado el componente
OrderingButton.js que ejecuta la función handleClick declarada en App.js. Ésta actualiza el estado y a su vez re-renderiza la lista que contiene el componente CharacterList.

