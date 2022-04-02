import React, { useState } from "react";
import { SelectList } from "./SelectList";

export const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [subrb, setSubrb] = useState("");
  const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

  return (
    <div>
      <h2>SelectsAnidados</h2>
      <h3>Mexico:</h3>

      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados=?token=${TOKEN}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />

      {state && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}

      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          handleChange={(e) => {
            setSubrb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state} - {town} - {subrb}
        </code>
      </pre>
    </div>
  );
};
