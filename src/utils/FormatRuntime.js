export function FormatRuntime(runtime) {
  const horas = Math.floor(runtime / 60);
  const min = runtime % 60;
  const textoHoras = `00${horas}`.slice(-2);
  const textoMinutos = `00${min}`.slice(-2);

  return `${textoHoras}h${textoMinutos}m`;
}
