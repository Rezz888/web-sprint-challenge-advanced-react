// write your custom hook here to control your checkout form

import React, { useState } from "react";

const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue);

        

    return [values];
}

export default useForm;