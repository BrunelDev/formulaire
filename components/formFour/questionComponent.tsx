/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSummarySate } from "@/context/useSummary";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

export function Question({
  question,
  description,
  handleChange,
  value,
  required = false,
  error,
}: {
  question: string;
  description?: string;
  handleChange: (value: boolean) => void;
  value?: string;
  required?: boolean;
  error?: string;
}) {
  const { setSummary, summary } = useSummarySate();
  const [selectedValue, setSelectedValue] = useState<string | null>(value!);
  return (
    <Card className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <CardContent className="flex flex-col items-start gap-3 p-4 sm:p-5">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-picto-color text-sm sm:text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] [font-style:var(--text-bold-medium-font-style)] flex items-center">
            {question} {required && <span className="text-red-500 ml-1">*</span>}
          </div>

          <div className="relative self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
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
          className="inline-flex items-center gap-6 sm:gap-8 relative flex-[0_0_auto]"
        >
          <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
            <RadioGroupItem
              value="oui"
              id="oui"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <Label
              htmlFor="oui"
              className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#021327] text-sm sm:text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)] cursor-pointer"
            >
              Oui
            </Label>
          </div>

          <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
            <RadioGroupItem
              value="non"
              id="non"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <Label
              htmlFor="non"
              className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#021327] text-sm sm:text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)] cursor-pointer"
            >
              Non
            </Label>
          </div>
        </RadioGroup>
        
        {error && (
          <div className="text-red-500 text-sm mt-1">{error}</div>
        )}
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
  type,
  options,
  required = false,
  inputRequired = false,
  error,
  inputError,
  index,
  updateFormData,
  formData
}: {
  question: string;
  description?: string;
  handleChange: (value: boolean) => void;
  value?: boolean;
  placeholder?: string;
  price?: string;
  type?: string;
  options?: string[];
  required?: boolean;
  inputRequired?: boolean;
  error?: string;
  inputError?: string;
  index?: number;
  updateFormData?: (data: any) => void;
  formData?: any;
}) {
  const [checked, setChecked] = useState(value || false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    formData && index !== undefined ? formData[`question_${index}_select`] : undefined
  );
  const { setSummary, summary } = useSummarySate();
  console.log(inputRequired)
  return (
    <Card className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full">
      <CardContent className="flex flex-col items-start gap-3 p-4 sm:p-5">
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
              className={`w-5 h-5 sm:w-6 sm:h-6 mt-0.5 ${
                checked ? "bg-syracuse_red_orange" : ""
              }`}
            />

            <div className="flex items-center gap-[4px_8px] ">
              <Label
                htmlFor="express-delivery"
                className="relative self-stretch w-fit mt-[-1.00px] font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-picto-color text-sm sm:text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] [font-style:var(--text-bold-medium-font-style)] cursor-pointer text-wrap flex items-center"
              >
                <h6 className="">
                  <span>{question}</span>
                 
                  {price && (
                    <span className="w-fit font-text-small font-[number:var(--text-small-font-weight)] text-[#db4200] text-xs sm:text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] whitespace-nowrap [font-style:var(--text-small-font-style)] ml-1">
                      {price}
                    </span>
                  )}
                </h6>
              </Label>
            </div>
          </div>

          <div className="relative self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
            <h6 className="text-wrap">{description}</h6>
          </div>
        </div>
        
        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}
        
        {placeholder && checked && (
          <div className="w-full">
            <Input
              placeholder={placeholder}
              className={`w-full border ${inputError ? 'border-red-500' : 'border-gray-300'} p-2 rounded-lg`}
              required={inputRequired && checked}
              onChange={(e) => {
                const inputValue = e.target.value;
                
                if (updateFormData && formData && index !== undefined) {
                  updateFormData({
                    ...formData,
                    [`question_${index}_input`]: inputValue
                  });
                }
                
                if (inputValue) {
                  const exists = summary.findIndex(item => item.startsWith(question));
                  if (exists !== -1) {
                    const updatedSummary = [...summary];
                    updatedSummary[exists] = `${question} - ${inputValue}`;
                    setSummary(updatedSummary);
                  } else {
                    setSummary([...summary, `${question} - ${inputValue}`]);
                  }
                }
              }}
            />
            {inputError && (
              <div className="text-red-500 text-sm mt-1">{inputError}</div>
            )}
          </div>
        )}
        
        {type === "option" && checked && (
          <div className="w-full">
            <Select 
              required={inputRequired && checked}
              value={selectedOption}
              onValueChange={(value) => {
                setSelectedOption(value);
                
                if (updateFormData && formData && index !== undefined) {
                  updateFormData({
                    ...formData,
                    [`question_${index}_select`]: value
                  });
                }
                
                if (value) {
                  const exists = summary.findIndex(item => item.startsWith(question));
                  if (exists !== -1) {
                    const updatedSummary = [...summary];
                    updatedSummary[exists] = `${question} - ${value}`;
                    setSummary(updatedSummary);
                  } else {
                    setSummary([...summary, `${question} - ${value}`]);
                  }
                }
              }}
              defaultValue={options && options.length > 0 ? options[0] : undefined}
            >
              <SelectTrigger className={`w-full ${inputError ? 'border-red-500' : ''}`}>
                <SelectValue placeholder="Sélectionnez" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectGroup>
                  {options?.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {inputError && (
              <div className="text-red-500 text-sm mt-1">{inputError}</div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}