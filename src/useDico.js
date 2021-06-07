import { reactive } from "vue";

import { createDico } from "@dico/client";
import data from "../dico.data.json";

export const useDico = () => {
  let { $dico, $dicoI18n } = createDico(data);
  return {
    $dico: $dico,
    $dicoI18n: reactive($dicoI18n)
  };
}
