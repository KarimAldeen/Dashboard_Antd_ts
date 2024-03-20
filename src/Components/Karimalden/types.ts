
// export interface KarimFieldProps {
//     name: string;
//     type?: "text" | "Select" | "DataRange" | "Date" | "Time" | "File" | "number" | "Checkbox" | "password";
//     placeholder?: string;
//     label?: string;
//     className?: string;
//     option?: any[];
//     isMulti?: boolean;
//     isDisabled?: boolean;
//     picker?: "data" | "week" | "month" | "quarter" | "year";
//     Format?: "YYYY/MM/DD" | "MM/DD" | "YYYY/MM";
//     onChange?: (value: any) => void;
//     Group?: boolean
//     dir?:'ltr' | "rtl"
//   }

  export interface KarimFieldPropsText {
    name: string;
    type: "text";
    placeholder?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"
  }
  
  export interface KarimFieldPropsSelect {
    name: string;
    type: "Select";
    placeholder?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl";
    option: any[];
    isMulti?: boolean;
    
  }
  export interface KarimFieldPropsDataRange {
    name: string;
    type: "DataRange";
    placeholder?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"
    Format?: "YYYY/MM/DD" | "MM/DD" | "YYYY/MM";
  }
  export interface KarimFieldPropsDate {
    name: string;
    type: "Date";
    placeholder?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"
    picker?: "data" | "week" | "month" | "quarter" | "year";

  }
  
  export interface KarimFieldPropsTime {
    name: string;
    type: "Time";
    label?: string;
    placeholder?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"

  }
  
  export interface KarimFieldPropsFile {
    name: string;
    type: "File";
    placeholder?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"

  }
  export interface KarimFieldPropsCheckbox {
    name: string;
    type: "Checkbox";
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"
    Group?: boolean

  }
  export interface KarimFieldPropstext {
    name: string;
    type?: "text" | "number" | "password";
    label?: string;
    className?: string;
    placeholder?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"
    Group?: boolean

  }


  export type KarimFieldProps = KarimFieldPropsText| KarimFieldPropsSelect| KarimFieldPropsDataRange| KarimFieldPropsDate| KarimFieldPropsTime| KarimFieldPropsFile| KarimFieldPropsCheckbox| KarimFieldPropstext;
