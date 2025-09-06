import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSummarySate } from "@/context/useSummary";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

export function Question({
  question,
  description,
  handleChange,
  value,
}: {
  question: string;
  description?: string;
  handleChange: (value: boolean) => void;
  value?: string;
}) {
  const { setSummary, summary } = useSummarySate();
  const [selectedValue, setSelectedValue] = useState<string | null>(value!);
  return (
    <Card className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <CardContent className="flex flex-col items-start gap-3 p-5">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-picto-color text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] [font-style:var(--text-bold-medium-font-style)]">
            {question}
          </div>

          <div className="relative self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
            {description}
          </div>
        </div>

        <RadioGroup
          value={selectedValue}
          onValueChange={(value: string) => {
            setSelectedValue(value);

            handleChange(value === "oui" ? true : false);
            console.log(value);
            if (value === "oui" && !summary.includes(question)) {
              setSummary([...summary, question]);
            } else if (value === "non" && summary.includes(question)) {
              setSummary(summary.filter((item) => item !== question));
            }
          }}
          className="inline-flex items-center gap-8 relative flex-[0_0_auto]"
        >
          <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
            <RadioGroupItem value="oui" id="oui" className="w-6 h-6" />
            <Label
              htmlFor="oui"
              className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#021327] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)] cursor-pointer"
            >
              Oui
            </Label>
          </div>

          <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
            <RadioGroupItem value="non" id="non" className="w-6 h-6" />
            <Label
              htmlFor="non"
              className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#021327] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)] cursor-pointer"
            >
              Non
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}

export function QuestionWithInput({
  question,
  description,
  handleChange,
  value,
  placeholder,
  price,
}: {
  question: string;
  description?: string;
  handleChange: (value: boolean) => void;
  value?: boolean;
  placeholder?: string;
  price?: string;
}) {
  const [checked, setChecked] = useState(value || false);
  const { setSummary, summary } = useSummarySate();
  return (
    <Card className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full">
      <CardContent className="flex flex-col items-start gap-3 p-5">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <Checkbox
              id="express-delivery"
              checked={checked}
              onCheckedChange={() => {
                setChecked(!checked);
                handleChange(!checked);
                if (!checked && !summary.includes(question)) {
                  setSummary([...summary, question]);
                } else if (checked && summary.includes(question)) {
                  setSummary(summary.filter((item) => item !== question));
                }
              }}
              className={`w-6 h-6 mt-0.5 ${
                checked ? "bg-syracuse_red_orange" : ""
              }`}
            />

            <div className="flex items-center gap-[4px_8px] ">
              <Label
                htmlFor="express-delivery"
                className="relative self-stretch  w-fit mt-[-1.00px] font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-picto-color text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] [font-style:var(--text-bold-medium-font-style)] cursor-pointer text-wrap break-words break-all "
              >
                <h6 className="text-wrap">
                  {question}{" "}
                  {price && (
                    <h6 className="w-fit font-text-small font-[number:var(--text-small-font-weight)] text-[#db4200] text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] whitespace-nowrap [font-style:var(--text-small-font-style)]">
                      {price}
                    </h6>
                  )}
                </h6>
              </Label>
            </div>
          </div>

          <div className="relative self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
            <h6 className="text-wrap">{description}</h6>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
