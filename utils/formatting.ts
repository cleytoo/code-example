import { toPattern } from "vanilla-masker";

type Patterns = "phone" | "cep" | "document" | "cnae";

type PatternProps = {
  value: string;
  pattern: Patterns;
};

const patterns = {
  phone: ["(99) 9999-9999", "(99) 9 9999-9999"],
  document: ["999.999.999-99", "99.999.999/9999-99"],
  cnae: ["99.99-9-99"],
  cep: ["99999-999"],
};

export const formatting = ({ value, pattern }: PatternProps) => {
  let formattingValue = "";

  switch (pattern) {
    case "phone":
      const phoneZise = value.replace(/\D/g, "").length > 10 ? 1 : 0;
      formattingValue = toPattern(value, patterns[pattern][phoneZise]);
      break;
    case "document":
      const documentZise = value.replace(/\D/g, "").length > 11 ? 1 : 0;
      formattingValue = toPattern(value, patterns[pattern][documentZise]);
      break;
    case "cnae":
      formattingValue = toPattern(value, patterns[pattern][0]);
      break;
    case "cep":
      formattingValue = toPattern(value, patterns[pattern][0]);
      break;
    default:
      break;
  }

  return formattingValue;
};
