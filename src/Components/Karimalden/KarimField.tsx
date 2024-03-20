import React from "react";
import "./KarimField.scss";
import { Date, Time, File, DataRange, SelectField, Default, CheckboxField } from './View';
import { KarimFieldProps } from "./types";

const KarimField: React.FC<KarimFieldProps> = ({type = "text", ...otherProps}) => {
  switch (type) {
    case 'Select':
      return <SelectField {...otherProps} />;
    case "DataRange":
      return <DataRange {...otherProps} />;
    case "Date":
      return <Date {...otherProps} />;
    case "Time":
      return <Time {...otherProps} />;
    case "File":
      return <File {...otherProps} />;
    case "Checkbox":
      return <CheckboxField {...otherProps} />;
    default:
      return <Default {...otherProps} />;
  }
};

export default React.memo(KarimField);
