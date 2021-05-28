const esItaliano = (apellido) => apellido.endsWith("i");
const esItalianoPorDobleLetra = (apellido) => apellido.includes("nn");

const imprimeEsItaliano = (apellido, funcionQueSeaQueMeDigaSiEsItaliano) =>
  console.log(
    funcionQueSeaQueMeDigaSiEsItaliano(apellido)
      ? `${apellido}: Este apellido tiene muchas probabilidades de ser italiano`
      : `${apellido}: Este apellido podría ser de cualquier país`
  );

const apellido1 = "Martínez";
const apellido2 = "Vannino";

imprimeEsItaliano(apellido1, esItaliano);
imprimeEsItaliano(apellido2, esItalianoPorDobleLetra);
