export   const ExpandedRow = ({ record } :any) => {
    return (
      <>
        <p> <strong>name :</strong>   {record.name}</p>
        <p> <strong>description :</strong>  {record.description}</p>
      </>
    );
  };