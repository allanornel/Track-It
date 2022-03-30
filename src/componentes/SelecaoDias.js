import { useState } from "react";

export default function SelecaoDias({
  id,
  daysSelecionado,
  setDaysSelecionado,
}) {
  const [selecionado, setSelecionado] = useState(false);

  return <div onClick={clicarDia}></div>;

  function clicarDia() {
    if (selecionado) {
      setSelecionado(true);
    }
  }
}
