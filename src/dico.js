import { reactive } from "vue";

import { createDico } from "@dico/client";
// Dico data file is created next to your `dico.config.json` file
import data from "../dico.data.json";

export const { $dico, $dicoI18n } = createDico(data);

export const useDico = () => {
    return {
        $dico: $dico,
        $dicoI18n: reactive($dicoI18n)
    };
};
