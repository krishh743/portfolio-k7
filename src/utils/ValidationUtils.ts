export const isValidEmailId = (value:any) =>{
return !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  .test(value);
}

export const isValidMobileNumber = (value:any) => {
return !/^\d{10}$/.test(value);
}

export const checkValidEMAILFormat = (value:any) => {
  return value
    ? /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(
        value
      )
    : "";
};

export const onlyNumbersAccept = (value:any) => {
  return value ? value.replace(/\D/g, "") : "";
};


export const phoneNumberFormat = (value:any) => {
  let format = value
    ?.toString()
    ?.match(/.{1,5}/g)
    ?.join(" ");
  return format;
};

export const removeInvaildCharFromAddress = (value:any) => {
  return value ? value.replace(/[^A-Za-z0-9.,_/-\s]/gi, "") : "";
};

export const acceptAlphabetNumber = (value:any) => {
  return value ? value.replace(/[^A-Za-z0-9 ]+/, "") : "";
};

export const capitailizeWord = (str:any) => {
  return str?.length ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};

export const capitaizeSentence = (str:any) => {
  let result = str?.split(" ")?.map((each:any) => capitailizeWord(each));
  return result?.join(" ") || "";
};
