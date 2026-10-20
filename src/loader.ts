const name = "plugin";
export const load = () => import(`./${name}.ts`);
console.log("loader ran");
